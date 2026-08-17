import { NextRequest } from "next/server";
import { clientIp, isAllowedOrigin, jsonError } from "@/lib/api-guards";
import { assertEmailConfigured, emailConfig } from "@/lib/email/config";
import { sendVisitNotification } from "@/lib/email/resend";
import { checkCooldown, checkRateLimit, hashIdentifier } from "@/lib/rate-limit";
import { formatBrazilDateTime, parseVisitBody } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    if (!isAllowedOrigin(request)) {
      return jsonError("Origem não autorizada.", 403);
    }

    const configured = assertEmailConfigured();
    if (!configured.ok) {
      // Silencioso no cliente: visita não deve quebrar UX
      console.warn("[SAED VISIT]", configured.error);
      return Response.json({ ok: true, skipped: true, reason: "email_not_configured" });
    }

    const ip = clientIp(request);
    const ipHash = await hashIdentifier(`visit:${ip}`);

    const globalRate = checkRateLimit(`visit:ip:${ipHash}`, 8, 60 * 60 * 1000);
    if (!globalRate.allowed) {
      return Response.json({ ok: true, skipped: true, reason: "rate_limited" });
    }

    let raw: unknown;
    try {
      raw = await request.json();
    } catch {
      return jsonError("JSON inválido.", 400);
    }

    const parsed = parseVisitBody(raw);
    if (!parsed.ok) {
      return jsonError(parsed.error, 400);
    }

    const sessionKey = await hashIdentifier(`visit:session:${parsed.data.sessionId}`);
    const cooldownMs = emailConfig.visitCooldownMinutes * 60 * 1000;

    const sessionCooldown = checkCooldown(`visit:session:${sessionKey}`, cooldownMs);
    if (!sessionCooldown.allowed) {
      return Response.json({ ok: true, skipped: true, reason: "session_cooldown" });
    }

    const ipCooldown = checkCooldown(`visit:ip-cd:${ipHash}`, cooldownMs);
    if (!ipCooldown.allowed) {
      return Response.json({ ok: true, skipped: true, reason: "ip_cooldown" });
    }

    console.info("[SAED VISIT] New visit registered");

    await sendVisitNotification({
      dataHora: formatBrazilDateTime(),
      pagina: parsed.data.path,
      referrer: parsed.data.referrer,
      dispositivo: `${parsed.data.device} · ${parsed.data.os} · ${parsed.data.viewport}`,
      navegador: parsed.data.browser,
      idioma: parsed.data.language,
      url: parsed.data.url || emailConfig.siteUrl,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("[SAED VISIT] Failed", error instanceof Error ? error.message : "unknown");
    // Não expor falha de visita ao usuário final
    return Response.json({ ok: true, skipped: true, reason: "internal_error" });
  }
}
