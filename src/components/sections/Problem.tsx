import { problemIntro, problems } from "@/lib/content";

export function Problem() {
  return (
    <section id="problema" className="section-pad" aria-labelledby="problem-heading">
      <div className="container-site">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">O problema</p>
          <h2
            id="problem-heading"
            className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-navy"
          >
            A educação inclusiva exige decisões cada vez mais cuidadosas — sobretudo no acompanhamento de alunos neurodivergentes.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            {problemIntro}
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {problems.map((item, index) => (
            <article
              key={item.title}
              className={`reveal reveal-delay-${Math.min(index + 1, 3)} border-t border-line pt-6`}
            >
              <p className="font-display text-sm font-semibold text-primary">0{index + 1}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
