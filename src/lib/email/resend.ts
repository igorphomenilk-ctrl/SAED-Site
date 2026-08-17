import { Resend } from "resend";
import { assertEmailConfigured, emailConfig } from "@/lib/email/config";
import {
  demoAdminHtml,
  demoConfirmationHtml,
  visitNotificationHtml,
  type DemoEmailData,
  type VisitEmailData,
} from "@/lib/email/templates";

function getClient(): Resend {
  const check = assertEmailConfigured();
  if (!check.ok) {
    throw new Error(check.error);
  }
  return new Resend(emailConfig.apiKey);
}

export async function sendVisitNotification(data: VisitEmailData) {
  const resend = getClient();
  const result = await resend.emails.send({
    from: `SAED <${emailConfig.fromEmail}>`,
    to: [emailConfig.adminEmail],
    subject: "👀 Novo visitante no site SAED",
    html: visitNotificationHtml(data),
  });

  if (result.error) {
    throw new Error(result.error.message || "Falha ao enviar notificação de visita.");
  }

  console.info("[SAED VISIT] Admin notification sent");
  return result.data;
}

export async function sendDemoAdminNotification(data: DemoEmailData) {
  const resend = getClient();
  const result = await resend.emails.send({
    from: `SAED <${emailConfig.fromEmail}>`,
    to: [emailConfig.adminEmail],
    replyTo: data.email,
    subject: `🚀 Nova solicitação de demonstração — SAED | ${data.nome}`,
    html: demoAdminHtml(data),
  });

  if (result.error) {
    throw new Error(result.error.message || "Falha ao enviar notificação ao administrador.");
  }

  console.info("[SAED EMAIL] Admin notification sent");
  return result.data;
}

export async function sendDemoConfirmation(nome: string, toEmail: string) {
  const resend = getClient();
  const result = await resend.emails.send({
    from: `SAED <${emailConfig.contactEmail}>`,
    to: [toEmail],
    replyTo: emailConfig.contactEmail,
    subject: "Recebemos sua solicitação de demonstração — SAED",
    html: demoConfirmationHtml(nome),
  });

  if (result.error) {
    throw new Error(result.error.message || "Falha ao enviar confirmação ao interessado.");
  }

  console.info("[SAED EMAIL] Confirmation sent");
  return result.data;
}
