import { faqItems } from "@/lib/content";

export function FAQ() {
  return (
    <section id="faq" className="section-pad bg-surface" aria-labelledby="faq-heading">
      <div className="container-site">
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2
            id="faq-heading"
            className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-navy"
          >
            Respostas diretas antes da demonstração.
          </h2>
        </div>

        <div className="mt-12 max-w-3xl space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="reveal border border-line bg-white px-5 py-4"
            >
              <summary className="cursor-pointer font-display text-base font-semibold text-navy md:text-lg">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
