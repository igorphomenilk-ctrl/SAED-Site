import { NextRequest } from "next/server";
import { clientIp, isAllowedOrigin, jsonError } from "@/lib/api-guards";
import { assertEmailConfigured } from "@/lib/email/config";
import {
  sendDemoAdminNotification,
  sendDemoConfirmation,
} from "@/lib/email/resend";
import { checkRateLimit, hashIdentifier } from "@/lib/rate-limit";
import { formatBrazilDateTime, parseContactBody } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    if (!isAllowedOrigin(request)) {
      return jsonError("Origem não autorizada.", 403);
    }

    const configured = assertEmailConfigured();
    if (!configured.ok) {
      console.error("[SAED EMAIL]", configured.error);
      return jsonError("Serviço de e-mail temporariamente indisponível.", 503);
    }

    const ipHash = await hashIdentifier(`contact:${clientIp(request)}`);
    const rate = checkRateLimit(`contact:ip:${ipHash}`, 5, 60 * 60 * 1000);
    if (!rate.allowed) {
      return jsonError("Muitas solicitações. Tente novamente em alguns minutos.", 429, {
        retryAfterSec: rate.retryAfterSec,
      });
    }

    let raw: unknown;
    try {
      raw = await request.json();
    } catch {
      return jsonError("JSON inválido.", 400);
    }

    const parsed = parseContactBody(raw);
    if (!parsed.ok) {
      return jsonError(parsed.error, 400);
    }

    const emailRate = checkRateLimit(
      `contact:email:${parsed.data.email}`,
      3,
      60 * 60 * 1000,
    );
    if (!emailRate.allowed) {
      return jsonError("Esta solicitação já foi enviada recentemente.", 429);
    }

    console.info("[SAED EMAIL] Demo request received");

    const payload = {
      nome: parsed.data.nome,
      instituicao: parsed.data.instituicao,
      email: parsed.data.email,
      telefone: parsed.data.telefone,
      mensagem: parsed.data.mensagem,
      dataHora: formatBrazilDateTime(),
      url: parsed.data.pageUrl || "https://saed.app.br/#contato",
    };

    await sendDemoAdminNotification(payload);

    try {
      await sendDemoConfirmation(payload.nome, payload.email);
    } catch (confirmError) {
      console.error(
        "[SAED EMAIL] Confirmation failed after admin notification",
        confirmError instanceof Error ? confirmError.message : "unknown",
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("[SAED EMAIL] Demo request failed", error instanceof Error ? error.message : "unknown");
    return jsonError("Não foi possível enviar sua solicitação. Tente novamente em alguns instantes.", 500);
  }
}
