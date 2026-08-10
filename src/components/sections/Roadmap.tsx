import { mvpFeatures, roadmapFeatures } from "@/lib/content";

export function Roadmap() {
  return (
    <section id="roadmap" className="section-pad bg-sand/50" aria-labelledby="roadmap-heading">
      <div className="container-site">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Roadmap</p>
          <h2
            id="roadmap-heading"
            className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-navy"
          >
            O que já existe e o que está por vir.
          </h2>
          <p className="mt-4 text-base text-muted">
            Separação explícita entre o MVP comprovado e funcionalidades futuras — sem misturar as duas categorias.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="reveal">
            <h3 className="font-display text-xl font-semibold text-navy">
              Já existe (MVP)
            </h3>
            <ul className="mt-5 space-y-3">
              {mvpFeatures.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted md:text-base">
                  <span className="mt-1.5 text-accent" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal-delay-1">
            <h3 className="font-display text-xl font-semibold text-navy">
              Por vir (roadmap)
            </h3>
            <ul className="mt-5 space-y-3">
              {roadmapFeatures.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted md:text-base">
                  <span className="mt-1.5 text-primary" aria-hidden="true">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
