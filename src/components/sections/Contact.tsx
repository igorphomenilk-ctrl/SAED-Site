"use client";

import { FormEvent } from "react";
import { contact, siteConfig } from "@/lib/content";

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

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
              <dd className="mt-1 text-muted">
                {/* TODO: aguardando e-mail institucional validado */}
                {contact.email ?? "Canal de e-mail ainda não publicado nos documentos oficiais."}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">WhatsApp</dt>
              <dd className="mt-1 text-muted">
                {/* TODO: aguardando WhatsApp comercial validado */}
                {contact.whatsapp ?? "Número comercial ainda não publicado nos documentos oficiais."}
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
              <dt className="font-semibold text-navy">Domínio planejado</dt>
              <dd className="mt-1 text-muted">{siteConfig.domain}</dd>
            </div>
          </dl>
        </div>

        <div className="reveal reveal-delay-1 border border-line bg-mist/80 p-6 md:p-8">
          <h3 className="font-display text-xl font-semibold text-navy">
            Solicitar demonstração
          </h3>
          <p className="mt-2 text-sm text-muted">
            Formulário pronto para integração. Enquanto o canal oficial não estiver
            configurado, o envio permanece desabilitado.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
            {/*
              TODO: conectar a endpoint/serviço de lead quando e-mail/WhatsApp estiverem definidos.
            */}
            <label className="block text-sm font-medium text-navy" htmlFor="nome">
              Nome
              <input
                id="nome"
                name="nome"
                type="text"
                autoComplete="name"
                className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-ink outline-none transition focus:border-primary"
                placeholder="Seu nome"
              />
            </label>
            <label className="block text-sm font-medium text-navy" htmlFor="instituicao">
              Instituição
              <input
                id="instituicao"
                name="instituicao"
                type="text"
                className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-ink outline-none transition focus:border-primary"
                placeholder="Escola ou organização"
              />
            </label>
            <label className="block text-sm font-medium text-navy" htmlFor="email">
              E-mail
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-ink outline-none transition focus:border-primary"
                placeholder="voce@escola.com.br"
              />
            </label>
            <label className="block text-sm font-medium text-navy" htmlFor="mensagem">
              Mensagem
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-2.5 text-ink outline-none transition focus:border-primary"
                placeholder="Conte brevemente o contexto da demonstração"
              />
            </label>
            <button
              type="submit"
              className="btn-primary w-full cursor-not-allowed opacity-70"
              disabled
              title="Aguardando canal oficial de contato"
            >
              Enviar solicitação (em breve)
            </button>
            <p className="text-xs text-muted">
              {/* TODO: aguardando canal de envio validado */}
              O envio permanece desabilitado até a definição do canal oficial de contato.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
