import Image from "next/image";
import { benefitProfiles } from "@/lib/content";

export function Benefits() {
  return (
    <section id="beneficios" className="section-pad" aria-labelledby="benefits-heading">
      <div className="container-site">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Benefícios por perfil</p>
          <h2
            id="benefits-heading"
            className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-navy"
          >
            Apoio concreto para quem decide na escola.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {benefitProfiles.map((profile, index) => (
            <article
              key={profile.id}
              id={profile.id === "instituicoes" ? "instituicoes" : undefined}
              className={`reveal reveal-delay-${Math.min(index + 1, 3)}`}
            >
              <div className="photo-frame-benefit relative mb-5 aspect-[16/10] overflow-hidden">
                <Image
                  src={profile.image.src}
                  alt={profile.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="photo-brand-veil-soft" aria-hidden="true" />
                <span className="photo-brand-accent" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-navy">
                {profile.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {profile.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted md:text-base">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
