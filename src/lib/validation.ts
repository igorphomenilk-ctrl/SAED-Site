export type ContactPayload = {
  nome: string;
  instituicao: string;
  email: string;
  telefone: string;
  mensagem: string;
  website: string; // honeypot
  pageUrl: string;
};

export type VisitPayload = {
  sessionId: string;
  path: string;
  url: string;
  referrer: string;
  language: string;
  device: string;
  browser: string;
  os: string;
  viewport: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
const SESSION_ID_RE = /^[a-zA-Z0-9_-]{8,64}$/;

export function sanitizeText(value: unknown, max = 500): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .replace(/<[^>]*>/g, "")
    .trim()
    .slice(0, max);
}

export function parseContactBody(raw: unknown):
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string } {
  if (!raw || typeof raw !== "object") {
    return { ok: false, error: "Payload inválido." };
  }

  const body = raw as Record<string, unknown>;
  const data: ContactPayload = {
    nome: sanitizeText(body.nome, 120),
    instituicao: sanitizeText(body.instituicao, 160),
    email: sanitizeText(body.email, 160).toLowerCase(),
    telefone: sanitizeText(body.telefone, 40),
    mensagem: sanitizeText(body.mensagem, 2000),
    website: sanitizeText(body.website, 120),
    pageUrl: sanitizeText(body.pageUrl, 500),
  };

  if (data.website) {
    return { ok: false, error: "Solicitação rejeitada." };
  }

  if (data.nome.length < 2) {
    return { ok: false, error: "Informe um nome válido." };
  }

  if (data.instituicao.length < 2) {
    return { ok: false, error: "Informe a instituição." };
  }

  if (!EMAIL_RE.test(data.email)) {
    return { ok: false, error: "Informe um e-mail válido." };
  }

  if (data.telefone) {
    const digits = data.telefone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 13) {
      return { ok: false, error: "Informe um telefone válido." };
    }
  }

  if (data.mensagem.length > 2000) {
    return { ok: false, error: "Mensagem excessivamente longa." };
  }

  return { ok: true, data };
}

export function parseVisitBody(raw: unknown):
  | { ok: true; data: VisitPayload }
  | { ok: false; error: string } {
  if (!raw || typeof raw !== "object") {
    return { ok: false, error: "Payload inválido." };
  }

  const body = raw as Record<string, unknown>;
  const data: VisitPayload = {
    sessionId: sanitizeText(body.sessionId, 64),
    path: sanitizeText(body.path, 200) || "/",
    url: sanitizeText(body.url, 500),
    referrer: sanitizeText(body.referrer, 500) || "Direto / não informado",
    language: sanitizeText(body.language, 40) || "não informado",
    device: sanitizeText(body.device, 80) || "não informado",
    browser: sanitizeText(body.browser, 80) || "não informado",
    os: sanitizeText(body.os, 80) || "não informado",
    viewport: sanitizeText(body.viewport, 40) || "não informado",
  };

  if (!SESSION_ID_RE.test(data.sessionId)) {
    return { ok: false, error: "Sessão inválida." };
  }

  return { ok: true, data };
}

export function formatBrazilDateTime(date = new Date()): string {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "medium",
    timeZone: "America/Sao_Paulo",
  }).format(date);
}
