import { Navbar } from "@/components/Navbar";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Hero } from "@/sections/Hero";
import { Problem } from "@/sections/Problem";
import { Solutions } from "@/sections/Solutions";
import { DedicatedRoutes } from "@/sections/DedicatedRoutes";
import { Comparison } from "@/sections/Comparison";
import { Security } from "@/sections/Security";
import { Process } from "@/sections/Process";
import { RegionalCoverage } from "@/sections/RegionalCoverage";
import { Faq } from "@/sections/Faq";
import { Partnerships } from "@/sections/Partnerships";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a
        href="#conteudo"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white shadow-soft transition-transform focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2"
      >
        Pular para o conteúdo
      </a>

      <Navbar />

      <main id="conteudo" className="flex-1">
        <Hero />
        <Problem />
        <Solutions />
        <DedicatedRoutes />
        <Comparison />
        <Security />
        <Process />
        <RegionalCoverage />
        <Partnerships />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
