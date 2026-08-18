import { journeySteps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="section-pad bg-surface"
      aria-labelledby="how-heading"
    >
      <div className="container-site">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Como funciona</p>
          <h2
            id="how-heading"
            className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-navy"
          >
            Da observação à evolução.
          </h2>
        </div>

        <ol className="mt-14 space-y-0">
          {journeySteps.map((step, index) => (
            <li
              key={step.title}
              className={`reveal grid gap-4 border-b border-line py-8 md:grid-cols-[7rem_1fr] md:gap-10 ${
                index === 0 ? "border-t" : ""
              }`}
            >
              <div className="font-display text-sm font-semibold tracking-[0.16em] text-primary">
                PASSO {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-navy md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
