import { NextRequest } from "next/server";
import { emailConfig } from "@/lib/email/config";

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);

function hostFromUrl(value: string | null): string | null {
  if (!value) return null;
  try {
    return new URL(value).host.toLowerCase();
  } catch {
    return null;
  }
}

export function isAllowedOrigin(request: NextRequest): boolean {
  const originHost = hostFromUrl(request.headers.get("origin"));
  const refererHost = hostFromUrl(request.headers.get("referer"));
  const siteHost = hostFromUrl(emailConfig.siteUrl);
  const requestHost = request.headers.get("host")?.toLowerCase() ?? null;

  const candidates = [originHost, refererHost].filter(Boolean) as string[];
  if (candidates.length === 0) {
    // Fetch same-origin sem Origin em alguns clientes — aceitar se Host bater
    if (!requestHost) return false;
    if (LOCAL_HOSTS.has(requestHost.split(":")[0] ?? "")) return true;
    if (siteHost && requestHost === siteHost) return true;
    return false;
  }

  return candidates.every((host) => {
    const bare = host.split(":")[0] ?? host;
    if (LOCAL_HOSTS.has(bare)) return true;
    if (siteHost && (host === siteHost || bare === siteHost.split(":")[0])) return true;
    if (requestHost && host === requestHost) return true;
    if (bare.endsWith(".vercel.app")) return true;
    return false;
  });
}

export function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export function jsonError(message: string, status: number, extra?: Record<string, unknown>) {
  return Response.json({ ok: false, error: message, ...extra }, { status });
}
