import { BrandMark } from "@/components/BrandMark";
import { contact, navItems, siteConfig } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-deep text-white" role="contentinfo">
      <div className="container-site grid gap-10 py-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <BrandMark variant="light" size="sm" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
            {siteConfig.fullName}. {siteConfig.tagline}. {siteConfig.principle}
          </p>
          <p className="mt-4 text-xs text-white/45">
            O SAED não realiza diagnóstico clínico. A IA sugere; o profissional decide.
          </p>
          <div className="mt-5 space-y-1.5 text-sm text-white/70">
            <p>
              <a
                href={`mailto:${contact.email}`}
                className="transition hover:text-white"
              >
                {contact.email}
              </a>
            </p>
            <p>
              <a href={contact.phoneHref} className="transition hover:text-white">
                {contact.phone}
              </a>
            </p>
          </div>
        </div>

        <nav aria-label="Rodapé" className="grid grid-cols-2 gap-3 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/70 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p>{siteConfig.domain.replace("https://", "")}</p>
        </div>
      </div>
    </footer>
  );
}
