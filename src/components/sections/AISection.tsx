import { aiFlow, aiLayers } from "@/lib/content";

export function AISection() {
  return (
    <section id="ia" className="section-pad" aria-labelledby="ai-heading">
      <div className="container-site">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">IA especializada</p>
          <h2
            id="ai-heading"
            className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-navy"
          >
            IA especializada em apoio pedagógico a alunos neurodivergentes.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Tecnologia voltada ao acompanhamento pedagógico de alunos neurodivergentes,
            com identificação de necessidades pedagógicas — não diagnósticos. A IA apoia
            a decisão do profissional, mas não decide por ele.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {aiLayers.map((layer, index) => (
            <article
              key={layer.title}
              className={`reveal reveal-delay-${Math.min(index + 1, 3)} bg-sand/60 p-6 md:p-7`}
            >
              <p className="font-display text-xs font-semibold tracking-[0.14em] text-primary">
                CAMADA {layer.layer}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-navy">
                {layer.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">{layer.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{layer.description}</p>
            </article>
          ))}
        </div>

        <div className="reveal mt-12">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.12em] text-navy">
            Fluxo responsável
          </p>
          <ol className="flex flex-wrap items-center gap-2 md:gap-3">
            {aiFlow.map((node, index) => (
              <li key={node} className="flex items-center gap-2 md:gap-3">
                <span className="rounded-full bg-navy px-3 py-1.5 text-xs font-medium text-white md:text-sm">
                  {node}
                </span>
                {index < aiFlow.length - 1 ? (
                  <span className="text-primary" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>

        <p className="reveal mt-10 max-w-3xl border-l-4 border-primary pl-5 font-display text-lg font-medium text-navy md:text-xl">
          A IA não decide sozinha. O profissional continua responsável pela decisão pedagógica.
        </p>
      </div>
    </section>
  );
}
