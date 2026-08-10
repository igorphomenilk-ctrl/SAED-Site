import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AISection } from "@/components/sections/AISection";
import { Axes } from "@/components/sections/Axes";
import { Benefits } from "@/components/sections/Benefits";
import { Contact } from "@/components/sections/Contact";
import { Differentials } from "@/components/sections/Differentials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Problem } from "@/components/sections/Problem";
import { Roadmap } from "@/components/sections/Roadmap";
import { Security } from "@/components/sections/Security";
import { Solution } from "@/components/sections/Solution";
import { UseCases } from "@/components/sections/UseCases";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo-principal"
        className="absolute left-4 top-4 z-[60] -translate-y-[200%] rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy shadow focus:translate-y-0"
      >
        Ir para o conteúdo principal
      </a>
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <Problem />
        <Solution />
        <Axes />
        <HowItWorks />
        <AISection />
        <Differentials />
        <Benefits />
        <UseCases />
        <Security />
        <Roadmap />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
