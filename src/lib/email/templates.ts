import { emailConfig } from "@/lib/email/config";

const brand = {
  navy: "#0b1c2c",
  primary: "#4a90e2",
  accent: "#50c9c3",
  mist: "#f4f7fa",
  muted: "#5b6b7c",
  white: "#ffffff",
  line: "#d8e0e8",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function layout(title: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:${brand.mist};font-family:Arial,Helvetica,sans-serif;color:${brand.navy};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${brand.mist};padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:${brand.white};border:1px solid ${brand.line};border-radius:12px;overflow:hidden;">
          <tr>
            <td style="background:${brand.navy};padding:20px 28px;">
              <p style="margin:0;font-size:20px;font-weight:700;letter-spacing:1px;color:${brand.white};">SAED</p>
              <p style="margin:6px 0 0;font-size:13px;color:#a8c0d8;">Sistema de Apoio Educacional</p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;">
              ${body}
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px 24px;border-top:1px solid ${brand.line};">
              <p style="margin:0;font-size:12px;color:${brand.muted};">
                Este e-mail foi enviado automaticamente pelo site institucional do SAED.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string): string {
  const safe = value.trim() ? escapeHtml(value) : "—";
  return `<tr>
    <td style="padding:8px 0;vertical-align:top;width:140px;font-size:13px;font-weight:700;color:${brand.navy};">${escapeHtml(label)}</td>
    <td style="padding:8px 0;font-size:14px;color:${brand.muted};word-break:break-word;">${safe}</td>
  </tr>`;
}

function ctaButton(label: string, href: string): string {
  return `<a href="${escapeHtml(href)}" style="display:inline-block;margin-top:8px;padding:12px 20px;background:${brand.primary};color:${brand.white};text-decoration:none;border-radius:999px;font-size:14px;font-weight:700;">${escapeHtml(label)}</a>`;
}

export type VisitEmailData = {
  dataHora: string;
  pagina: string;
  referrer: string;
  dispositivo: string;
  navegador: string;
  idioma: string;
  url: string;
};

export function visitNotificationHtml(data: VisitEmailData): string {
  const body = `
    <h1 style="margin:0 0 8px;font-size:22px;color:${brand.navy};">Novo visitante no site SAED</h1>
    <p style="margin:0 0 20px;font-size:15px;line-height:1.5;color:${brand.muted};">
      Um novo visitante acessou o site institucional.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${row("Data/hora", data.dataHora)}
      ${row("Página", data.pagina)}
      ${row("Origem", data.referrer)}
      ${row("Dispositivo", data.dispositivo)}
      ${row("Navegador", data.navegador)}
      ${row("Idioma", data.idioma)}
      ${row("URL", data.url)}
    </table>
    <div style="margin-top:24px;">
      ${ctaButton("Visitar o site SAED", emailConfig.siteUrl)}
    </div>
  `;
  return layout("Novo visitante no site SAED", body);
}

export type DemoEmailData = {
  nome: string;
  instituicao: string;
  email: string;
  telefone: string;
  mensagem: string;
  dataHora: string;
  url: string;
};

function whatsappHref(telefone: string): string | null {
  const digits = telefone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) return null;
  const withCountry = digits.startsWith("55") ? digits : `55${digits}`;
  return `https://wa.me/${withCountry}`;
}

export function demoAdminHtml(data: DemoEmailData): string {
  const wa = data.telefone ? whatsappHref(data.telefone) : null;
  const body = `
    <h1 style="margin:0 0 8px;font-size:22px;color:${brand.navy};">Nova solicitação de demonstração</h1>
    <p style="margin:0 0 20px;font-size:15px;line-height:1.5;color:${brand.muted};">
      Um interessado solicitou demonstração pelo site institucional.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${row("Nome", data.nome)}
      ${row("Instituição", data.instituicao)}
      ${row("E-mail", data.email)}
      ${row("Telefone", data.telefone || "Não informado")}
      ${row("Mensagem", data.mensagem || "—")}
      ${row("Data/hora", data.dataHora)}
      ${row("Origem", data.url)}
    </table>
    <div style="margin-top:24px;padding:16px;background:${brand.mist};border-left:4px solid ${brand.accent};border-radius:8px;">
      <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:${brand.navy};">Próxima ação recomendada</p>
      <p style="margin:0;font-size:14px;color:${brand.muted};">Entrar em contato com o interessado.</p>
      ${
        wa
          ? `<div style="margin-top:12px;">${ctaButton("Contatar via WhatsApp", wa)}</div>`
          : data.email
            ? `<div style="margin-top:12px;">${ctaButton("Responder por e-mail", `mailto:${data.email}`)}</div>`
            : ""
      }
    </div>
  `;
  return layout("Nova solicitação de demonstração — SAED", body);
}

export function demoConfirmationHtml(nome: string): string {
  const body = `
    <h1 style="margin:0 0 12px;font-size:22px;color:${brand.navy};">Recebemos sua solicitação</h1>
    <p style="margin:0 0 14px;font-size:15px;line-height:1.6;color:${brand.muted};">
      Olá, ${escapeHtml(nome)}.
    </p>
    <p style="margin:0 0 14px;font-size:15px;line-height:1.6;color:${brand.muted};">
      Recebemos sua solicitação de demonstração do SAED.
    </p>
    <p style="margin:0 0 14px;font-size:15px;line-height:1.6;color:${brand.muted};">
      Nossa equipe recebeu seus dados e entrará em contato para combinar os próximos passos.
    </p>
    <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:${brand.muted};">
      Atenciosamente,<br />
      <strong style="color:${brand.navy};">Equipe SAED</strong>
    </p>
    <div>${ctaButton("Visitar o site SAED", emailConfig.siteUrl)}</div>
  `;
  return layout("Recebemos sua solicitação de demonstração — SAED", body);
}
