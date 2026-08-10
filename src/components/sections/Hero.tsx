import Image from "next/image";
import { SparkIcon } from "@/components/BrandMark";
import { hero, siteConfig } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="inicio"
      className="hero-plane relative min-h-[100svh] overflow-hidden text-white"
      aria-labelledby="hero-heading"
    >
      <div className="grid-texture pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative grid min-h-[100svh] items-center gap-10 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-20 lg:pt-32">
        <div className="reveal is-visible max-w-2xl">
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-spark">
            {siteConfig.name}
            <span className="mx-2 text-white/35">·</span>
            {siteConfig.fullName}
          </p>

          <p className="mb-5 max-w-xl text-sm font-medium leading-snug text-accent-soft md:text-base">
            {hero.badge}
          </p>

          <h1
            id="hero-heading"
            className="font-display text-[clamp(2.15rem,5vw,3.65rem)] font-semibold leading-[1.08] tracking-tight text-white"
          >
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/78 md:text-lg">
            {hero.text}
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70">
            {hero.highlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={hero.primaryCta.href} className="btn-primary">
              <SparkIcon className="h-4 w-4" />
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn-secondary">
              {hero.secondaryCta.label}
            </a>
          </div>

          <p className="mt-8 max-w-md text-sm font-medium text-accent-soft">
            {siteConfig.principle}
          </p>
        </div>

        <div className="reveal reveal-delay-2 is-visible relative mx-auto w-full max-w-xl lg:max-w-none">
          <div
            className="pulse-ring absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20"
            aria-hidden="true"
          />
          <figure className="float-soft relative overflow-hidden">
            <div className="photo-frame-hero relative aspect-[4/5] w-full sm:aspect-[5/6]">
              <Image
                src="/photos/hero-background.jpg"
                alt="Educadora e crianças em atividade pedagógica coletiva, em momento de engajamento e aprendizado"
                fill
                sizes="(max-width: 1024px) 90vw, 44vw"
                className="object-cover object-center"
                priority
              />
              <div className="photo-brand-veil" aria-hidden="true" />
            </div>
            <figcaption className="mt-4 text-center text-xs text-white/45 lg:text-left">
              Acolhimento e aprendizagem — a IA apoia; o profissional decide.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
