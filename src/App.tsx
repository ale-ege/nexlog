import { Navbar } from "@/components/Navbar";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Solutions } from "@/sections/Solutions";
import { Audience } from "@/sections/Audience";
import { DedicatedRoutes } from "@/sections/DedicatedRoutes";
import { Process } from "@/sections/Process";
import { Differentials } from "@/sections/Differentials";
import { Security } from "@/sections/Security";
import { RegionalCoverage } from "@/sections/RegionalCoverage";
import { Faq } from "@/sections/Faq";
import { CtaFinal } from "@/sections/CtaFinal";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

/**
 * Ordem narrativa otimizada para SEO + conversão:
 *
 *   Hero            → H1 e proposta com palavras-chave principais
 *   About           → SEO local (cidades, vocabulário denso)
 *   Solutions       → 6 produtos (transporte de cargas, caminhão
 *                     dedicado, frete dedicado, rotas prog/ded,
 *                     logística regional)
 *   Audience        → 4 públicos + bloco institucional "Sobre a NEXLOG"
 *   DedicatedRoutes → aprofunda rota dedicada (timeline visual)
 *   Process         → 4 etapas consultivas
 *   Differentials   → 4 motivos
 *   Security        → 6 pontos de previsibilidade
 *   RegionalCoverage→ destaque de atuação regional (SEO local)
 *   Faq            → 7 perguntas
 *   CtaFinal        → última chamada
 *   Contact         → meios de contato (WhatsApp, e-mail, localização)
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
        <About />
        <Solutions />
        <Audience />
        <DedicatedRoutes />
        <Process />
        <Differentials />
        <Security />
        <RegionalCoverage />
        <Faq />
        <CtaFinal />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
