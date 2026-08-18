"use client";

import { useEffect, useId, useState } from "react";
import { BrandMark, SparkIcon } from "@/components/BrandMark";
import { navItems, siteConfig } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-navy-deep/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <a href="#inicio" className="relative z-10 shrink-0" aria-label={`${siteConfig.name} — início`}>
          <BrandMark variant="light" size="sm" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-2.5 py-2 text-[0.8125rem] font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contato" className="btn-primary !min-h-10 !px-4 !text-sm">
            <SparkIcon className="h-4 w-4" />
            Agendar demonstração
          </a>
        </div>

        <button
          type="button"
          className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
            <span className={`h-0.5 w-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div
        id={menuId}
        className={`border-t border-white/10 bg-navy-deep lg:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="btn-primary mt-3"
            onClick={() => setOpen(false)}
          >
            Agendar demonstração
          </a>
        </nav>
      </div>
    </header>
  );
}
