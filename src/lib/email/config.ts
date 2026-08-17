/**
 * Configuração server-side de e-mail.
 * Valores administrativos NUNCA vêm do cliente.
 */

function readEnv(name: string, fallback?: string): string {
  const value = process.env[name]?.trim();
  if (value) return value;
  if (fallback !== undefined) return fallback;
  return "";
}

export const emailConfig = {
  get apiKey() {
    return readEnv("RESEND_API_KEY");
  },
  get adminEmail() {
    return readEnv("SAED_ADMIN_EMAIL", "saed.gerenciador@gmail.com");
  },
  get fromEmail() {
    return readEnv("SAED_FROM_EMAIL", "noreply@saed.app.br");
  },
  get contactEmail() {
    return readEnv("SAED_CONTACT_EMAIL", "contato@saed.app.br");
  },
  get siteUrl() {
    return readEnv("SAED_SITE_URL", "https://saed.app.br");
  },
  get visitCooldownMinutes() {
    const raw = Number(readEnv("SAED_VISIT_NOTIFICATION_COOLDOWN_MINUTES", "1440"));
    return Number.isFinite(raw) && raw > 0 ? raw : 1440;
  },
} as const;

export function assertEmailConfigured(): { ok: true } | { ok: false; error: string } {
  if (!emailConfig.apiKey) {
    return {
      ok: false,
      error: "RESEND_API_KEY não configurada no ambiente.",
    };
  }
  return { ok: true };
}
