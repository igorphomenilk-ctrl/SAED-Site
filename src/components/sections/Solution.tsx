import { siteConfig, solutionFlow } from "@/lib/content";

export function Solution() {
  return (
    <section
      id="solucao"
      className="section-pad relative overflow-hidden bg-navy text-white"
      aria-labelledby="solution-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(700px 320px at 15% 20%, rgba(74,144,226,0.28), transparent 60%), radial-gradient(600px 280px at 85% 70%, rgba(80,201,195,0.22), transparent 55%)",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="reveal max-w-3xl">
          <p className="eyebrow !text-spark">A solução</p>
          <h2
            id="solution-heading"
            className="mt-4 font-display text-[clamp(1.85rem,3.8vw,2.9rem)] font-semibold tracking-tight"
          >
            Conheça o SAED.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {siteConfig.valueProposition} Os cinco eixos pedagógicos — atenção,
            autorregulação, comunicação, interação social e processamento —
            refletem áreas frequentemente observadas nesse contexto de
            acompanhamento.
          </p>
        </div>

        <ol className="reveal reveal-delay-1 mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {solutionFlow.map((step, index) => (
            <li
              key={step}
              className="relative flex flex-col items-start gap-3 border-l border-white/15 pl-4 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-4"
            >
              <span className="font-display text-xs font-semibold tracking-[0.14em] text-accent-soft">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-lg font-semibold">{step}</span>
            </li>
          ))}
        </ol>

        <div className="reveal reveal-delay-2 mt-12 flex flex-col gap-3 sm:flex-row">
          <a href="#como-funciona" className="btn-primary">
            Ver como funciona
          </a>
          <a href="#contato" className="btn-secondary">
            Agendar uma demonstração
          </a>
        </div>
      </div>
    </section>
  );
}
