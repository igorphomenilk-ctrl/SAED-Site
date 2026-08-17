"use client";

import { FormEvent, useState } from "react";
import { contact, siteConfig } from "@/lib/content";

type SubmitState = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || status === "success") return;

    const form = event.currentTarget;
    const data = new FormData(form);

    const nome = String(data.get("nome") ?? "").trim();
    const instituicao = String(data.get("instituicao") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const mensagem = String(data.get("mensagem") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();

    if (nome.length < 2) {
      setStatus("error");
      setFeedback("Informe um nome válido.");
      return;
    }
    if (instituicao.length < 2) {
      setStatus("error");
      setFeedback("Informe a instituição.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(email)) {
      setStatus("error");
      setFeedback("Informe um e-mail válido.");
      return;
    }
    if (mensagem.length > 2000) {
      setStatus("error");
      setFeedback("Mensagem excessivamente longa.");
      return;
    }

    setStatus("sending");
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          instituicao,
          email,
          mensagem,
          website,
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !payload?.ok) {
        setStatus("error");
        setFeedback(
          payload?.error ||
            "Não foi possível enviar sua solicitação. Tente novamente em alguns instantes.",
        );
        return;
      }

      setStatus("success");
      setFeedback("Solicitação enviada com sucesso! Em breve entraremos em contato.");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback(
        "Não foi possível enviar sua solicitação. Tente novamente em alguns instantes.",
      );
    }
  }

  const buttonLabel =
    status === "sending"
      ? "Enviando..."
      : status === "success"
        ? "Solicitação enviada"
        : "Enviar solicitação";

  return (
    <section id="contato" className="section-pad bg-surface" aria-labelledby="contact-heading">
      <div className="container-site grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal">
          <p className="eyebrow">Contato</p>
          <h2
            id="contact-heading"
            className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-navy"
          >
            Agende uma demonstração do SAED.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Sem checkout automático. O produto está em fase de prospecção e validação
            comercial — o próximo passo é uma conversa.
          </p>

          <dl className="mt-8 space-y-5 text-sm md:text-base">
            <div>
              <dt className="font-semibold text-navy">E-mail</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-primary-deep transition hover:text-primary"
                >
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Telefone</dt>
              <dd className="mt-1">
                <a
                  href={contact.phoneHref}
                  className="text-primary-deep transition hover:text-primary"
                >
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Redes sociais</dt>
              <dd className="mt-1 text-muted">
                {/* TODO: aguardando Instagram/LinkedIn institucionais validados */}
                Instagram e LinkedIn institucionais não encontrados na documentação consultada.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Site</dt>
              <dd className="mt-1 text-muted">{siteConfig.domain}</dd>
            </div>
          </dl>
        </div>

        <div className="reveal reveal-delay-1 border border-line bg-mist/80 p-6 md:p-8">
          <h3 className="font-display text-xl font-semibold text-navy">
            Solicitar demonstração
          </h3>
          <p className="mt-2 text-sm text-muted">
            Preencha os dados abaixo. Enviaremos a solicitação para a equipe SAED.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
            {/* Honeypot anti-bot: oculto visualmente, ignorado por leitores de tela */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-10000px",
                top: "auto",
                width: "1px",
                height: "1px",
                overflow: "hidden",
              }}
            >
              <label htmlFor="website">
                Website
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            <label className="block text-sm font-medium text-navy" htmlFor="nome">
              Nome
              <input
                id="nome"
                name="nome"
                type="text"
                required
                autoComplete="name"
                disabled={status === "sending" || status === "success"}
                className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-ink outline-none transition focus:border-primary disabled:opacity-70"
                placeholder="Seu nome"
              />
            </label>
            <label className="block text-sm font-medium text-navy" htmlFor="instituicao">
              Instituição
              <input
                id="instituicao"
                name="instituicao"
                type="text"
                required
                disabled={status === "sending" || status === "success"}
                className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-ink outline-none transition focus:border-primary disabled:opacity-70"
                placeholder="Escola ou organização"
              />
            </label>
            <label className="block text-sm font-medium text-navy" htmlFor="email">
              E-mail
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                disabled={status === "sending" || status === "success"}
                className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-ink outline-none transition focus:border-primary disabled:opacity-70"
                placeholder="voce@escola.com.br"
              />
            </label>
            <label className="block text-sm font-medium text-navy" htmlFor="mensagem">
              Mensagem
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                maxLength={2000}
                disabled={status === "sending" || status === "success"}
                className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-ink outline-none transition focus:border-primary disabled:opacity-70"
                placeholder="Conte brevemente o contexto da demonstração"
              />
            </label>
            <button
              type="submit"
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
              disabled={status === "sending" || status === "success"}
            >
              {buttonLabel}
            </button>
            {feedback ? (
              <p
                className={`text-sm ${status === "success" ? "text-success" : "text-alert"}`}
                role="status"
                aria-live="polite"
              >
                {feedback}
              </p>
            ) : null}
            <p className="text-xs text-muted">
              Ou fale direto:{" "}
              <a href={`mailto:${contact.email}`} className="underline-offset-2 hover:underline">
                {contact.email}
              </a>{" "}
              ·{" "}
              <a href={contact.phoneHref} className="underline-offset-2 hover:underline">
                {contact.phone}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
