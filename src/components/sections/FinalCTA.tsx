export function FinalCTA() {
  return (
    <section
      id="cta-final"
      className="section-pad relative overflow-hidden bg-navy text-white"
      aria-labelledby="final-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 280px at 20% 50%, rgba(74,144,226,0.25), transparent 60%), radial-gradient(500px 240px at 90% 30%, rgba(80,201,195,0.2), transparent 55%)",
        }}
        aria-hidden="true"
      />
      <div className="container-site relative text-center">
        <div className="reveal mx-auto max-w-3xl">
          <h2
            id="final-cta-heading"
            className="font-display text-[clamp(1.85rem,4vw,3rem)] font-semibold tracking-tight"
          >
            Vamos transformar a educação inclusiva juntos?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 md:text-lg">
            O SAED está em fase de prospecção e validação comercial. Agende uma demonstração
            e conheça o copiloto pedagógico em ação.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contato" className="btn-primary">
              Agendar uma demonstração
            </a>
            <a href="#contato" className="btn-secondary">
              Falar com o SAED
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
