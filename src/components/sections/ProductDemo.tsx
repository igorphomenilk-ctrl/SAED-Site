import Image from "next/image";
import { productScreens } from "@/lib/content";

export function ProductDemo() {
  const featured = productScreens[0];
  const rest = productScreens.slice(1);

  return (
    <section id="produto" className="section-pad bg-surface" aria-labelledby="product-heading">
      <div className="container-site">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">O produto</p>
          <h2
            id="product-heading"
            className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-navy"
          >
            Isto é o que a equipe usa no dia a dia.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Telas reais do SAED: dashboard, observação guiada, análise por eixos e
            estratégias sugeridas — com o profissional no controle.
          </p>
        </div>

        <figure className="reveal mt-12 overflow-hidden border border-line bg-white">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={featured.src}
              alt={featured.description}
              fill
              sizes="(max-width: 1120px) 100vw, 1120px"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="border-t border-line px-5 py-4">
            <p className="font-display text-lg font-semibold text-navy">{featured.title}</p>
            <p className="mt-1 text-sm text-muted">{featured.description}</p>
          </figcaption>
        </figure>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {rest.map((screen, index) => (
            <figure
              key={screen.src}
              className={`reveal reveal-delay-${Math.min(index + 1, 3)} overflow-hidden border border-line bg-white`}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={screen.src}
                  alt={screen.description}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="border-t border-line px-4 py-3">
                <p className="font-display text-base font-semibold text-navy">{screen.title}</p>
                <p className="mt-1 text-sm text-muted">{screen.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="reveal mt-10">
          <a href="#contato" className="btn-primary">
            Agendar demonstração para minha escola
          </a>
        </div>
      </div>
    </section>
  );
}
