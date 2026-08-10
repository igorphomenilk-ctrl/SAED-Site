import { ageSensitivity, axes } from "@/lib/content";

export function Axes() {
  return (
    <section id="eixos" className="section-pad" aria-labelledby="axes-heading">
      <div className="container-site">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Os 5 eixos pedagógicos</p>
          <h2
            id="axes-heading"
            className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-navy"
          >
            Análise estruturada por eixos no acompanhamento de alunos neurodivergentes.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            O SAED organiza a observação em cinco eixos pedagógicos para identificar
            necessidades de apoio — não diagnósticos clínicos — com foco no
            acompanhamento pedagógico de alunos neurodivergentes.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {axes.map((axis, index) => (
            <article
              key={axis.letter}
              className={`reveal reveal-delay-${Math.min(index + 1, 3)} border-t-2 border-primary/30 pt-5`}
            >
              <p className="font-display text-sm font-semibold text-accent">
                Eixo {axis.letter}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-navy">
                {axis.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {axis.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <aside className="reveal mt-12 max-w-3xl border-l-4 border-accent bg-sand/70 px-5 py-5 md:px-6">
          <h3 className="font-display text-lg font-semibold text-navy">
            {ageSensitivity.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
            {ageSensitivity.description}
          </p>
        </aside>
      </div>
    </section>
  );
}
