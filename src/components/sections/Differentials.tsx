import { differentials } from "@/lib/content";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="section-pad bg-navy text-white"
      aria-labelledby="diff-heading"
    >
      <div className="container-site">
        <div className="reveal max-w-3xl">
          <p className="eyebrow !text-spark">Diferenciais</p>
          <h2
            id="diff-heading"
            className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight"
          >
            Por que o SAED é diferente no apoio a alunos neurodivergentes.
          </h2>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <article
              key={item.title}
              className={`reveal reveal-delay-${Math.min(index + 1, 3)} border-t border-white/15 pt-5`}
            >
              <h3 className="font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="reveal mt-12">
          <a href="#contato" className="btn-primary">
            Agendar uma demonstração
          </a>
        </div>
      </div>
    </section>
  );
}
