import { siteConfig } from "@/lib/content";

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
            O SAED transforma observação em evidência pedagógica.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {siteConfig.valueProposition}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            A análise se organiza em cinco eixos — atenção, autorregulação,
            comunicação, interação social e processamento — para identificar
            necessidades de apoio, não diagnósticos.
          </p>
        </div>

        <div className="reveal reveal-delay-2 mt-12 flex flex-col gap-3 sm:flex-row">
          <a href="#produto" className="btn-primary">
            Ver o SAED em ação
          </a>
          <a href="#contato" className="btn-secondary">
            Agendar demonstração para minha escola
          </a>
        </div>
      </div>
    </section>
  );
}
