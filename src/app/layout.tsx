import type { Metadata } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import { RevealObserver } from "@/components/RevealObserver";
import { VisitTracker } from "@/components/VisitTracker";
import { company, contact, siteConfig } from "@/lib/content";
import "./globals.css";

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "SAED",
    "Sistema de Apoio Educacional",
    "copiloto pedagógico",
    "educação inclusiva",
    "tecnologia educacional",
    "IA na educação",
    "acompanhamento pedagógico",
    "alunos neurodivergentes",
    "apoio pedagógico neurodivergentes",
    "estratégias pedagógicas",
    "necessidades pedagógicas",
  ],
  authors: [{ name: "SAED" }],
  creator: "SAED",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/logo-mark.png",
        width: 640,
        height: 640,
        alt: "SAED — Copiloto Pedagógico Inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/logo-mark.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  alternateName: siteConfig.fullName,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  url: siteConfig.domain,
  description: siteConfig.description,
  inLanguage: "pt-BR",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    price: "0",
    priceCurrency: "BRL",
    description: "Demonstração e validação comercial — sem checkout automático.",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: contact.email,
    telephone: contact.phoneHref.replace("tel:", ""),
    availableLanguage: ["Portuguese"],
    areaServed: "BR",
  },
  provider: {
    "@type": "Organization",
    name: company.tradeName,
    legalName: company.legalName,
    taxID: company.cnpj,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: company.state,
      addressCountry: "BR",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} h-full`}>
      <body className="site-shell min-h-full font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <RevealObserver />
        <VisitTracker />
        {children}
      </body>
    </html>
  );
}
