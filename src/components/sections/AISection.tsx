import {
  aiFlow,
  aiLayers,
  mlGuarantees,
  mlSignals,
  mlSuggestions,
} from "@/lib/content";

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
            Três camadas. Uma regra: o profissional decide.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Regras auditáveis escolhem as estratégias. A IA explica em linguagem
            pedagógica. O aprendizado com histórico só sugere prioridade e
            contexto. O SAED identifica necessidades de apoio — nunca diagnostica
            e nunca decide no lugar do professor.
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

        <details className="reveal mt-12 border border-line bg-white p-6 md:p-8">
          <summary className="cursor-pointer font-display text-lg font-semibold text-navy md:text-xl">
            Saiba mais: o que o Machine Learning realmente faz
          </summary>
          <div className="mt-8">
            <p className="max-w-3xl text-base leading-relaxed text-muted">
              Depois que o Motor de Regras escolhe as estratégias, a camada de ML
              olha o histórico daquele aluno e daquela faixa etária para sugerir
              otimizações. Hoje isso já acontece com heurísticas explicáveis; com
              mais resultados documentados, a camada evolui para modelos treinados
              — sempre como sugestão, nunca como decisão.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {mlSuggestions.map((item) => (
                <article key={item.title} className="border-t border-line pt-5">
                  <h4 className="font-display text-lg font-semibold text-navy">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-12 text-sm font-semibold uppercase tracking-[0.12em] text-navy">
              De onde vêm as sugestões
            </p>
            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {mlSignals.map((item) => (
                <article key={item.title} className="bg-sand/60 p-5">
                  <h4 className="font-display text-base font-semibold text-navy">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-12 text-sm font-semibold uppercase tracking-[0.12em] text-navy">
              Fluxo responsável
            </p>
            <ol className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {aiFlow.map((node, index) => (
                <li
                  key={node}
                  className="flex gap-3 border-l-2 border-primary bg-mist px-4 py-4"
                >
                  <span className="font-display text-xs font-semibold tracking-[0.14em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-sm font-medium text-navy md:text-base">
                    {node}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {mlGuarantees.map((item) => (
                <article key={item.title} className="bg-navy p-6 text-white md:p-7">
                  <h4 className="font-display text-lg font-semibold">{item.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
