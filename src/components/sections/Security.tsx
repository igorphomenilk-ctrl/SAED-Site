import { securityItems } from "@/lib/content";

export function Security() {
  return (
    <section id="seguranca" className="section-pad" aria-labelledby="security-heading">
      <div className="container-site">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Segurança e ética</p>
          <h2
            id="security-heading"
            className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-navy"
          >
            Tecnologia com responsabilidade.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Dados protegidos, limites do sistema explícitos e a decisão sempre
            humana — com orientação à LGPD, sem prometer garantia jurídica absoluta.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {securityItems.map((item, index) => (
            <article
              key={item.title}
              className={`reveal reveal-delay-${Math.min(index + 1, 3)} border-t border-line pt-5`}
            >
              <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
