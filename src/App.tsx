import { Navbar } from "@/components/Navbar";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Hero } from "@/sections/Hero";
import { Solutions } from "@/sections/Solutions";
import { Audience } from "@/sections/Audience";
import { DedicatedRoutes } from "@/sections/DedicatedRoutes";
import { Process } from "@/sections/Process";
import { Differentials } from "@/sections/Differentials";
import { Security } from "@/sections/Security";
import { RegionalCoverage } from "@/sections/RegionalCoverage";
import { Faq } from "@/sections/Faq";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

/**
 * Ordem narrativa do site, do reconhecimento à conversão:
 *
 *   Hero            → quem somos / proposta
 *   Solutions       → o que entregamos (4 produtos)
 *   Audience        → para quem é (4 públicos)
 *   DedicatedRoutes → aprofunda o produto âncora (rota dedicada)
 *   Process         → como entregamos (4 etapas)
 *   Differentials   → por que nós (4 motivos)
 *   Security        → segurança e previsibilidade
 *   RegionalCoverage→ onde atuamos (SEO local)
 *   Faq             → tira últimas dúvidas
 *   Contact         → fecha conversão
 */
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
        <Solutions />
        <Audience />
        <DedicatedRoutes />
        <Process />
        <Differentials />
        <Security />
        <RegionalCoverage />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
