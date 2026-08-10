import Image from "next/image";
import { useCases } from "@/lib/content";

export function UseCases() {
  return (
    <section id="casos-de-uso" className="section-pad bg-surface" aria-labelledby="usecases-heading">
      <div className="container-site">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Casos de uso do produto</p>
          <h2
            id="usecases-heading"
            className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-navy"
          >
            Situações reais do cotidiano escolar.
          </h2>
          <p className="mt-3 text-sm text-muted md:text-base">
            Exemplos ilustrativos de uso do SAED — não são depoimentos de clientes.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {useCases.map((item, index) => (
            <article
              key={item.title}
              className={`reveal reveal-delay-${Math.min(index + 1, 3)} border-t border-line pt-6`}
            >
              <div className="photo-frame-usecase relative mb-5 aspect-[21/9] overflow-hidden">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover opacity-80"
                />
                <div className="photo-brand-veil-soft" aria-hidden="true" />
              </div>
              <p className="inline-flex text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-primary">
                Caso de uso
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                <span className="font-semibold text-navy">Situação: </span>
                {item.situation}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                <span className="font-semibold text-navy">Com SAED: </span>
                {item.withSaed}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
