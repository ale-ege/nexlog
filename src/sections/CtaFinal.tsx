import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/Container";
import { COMPANY } from "@/data/company";
import { onTrack, trackEvent } from "@/lib/analytics";

/**
 * CTA Final — última chamada antes do bloco de contato,
 * com fundo navy escuro e tipografia maior. Reforça palavras-chave
 * SEO ("transportadora no RS", "transporte de cargas") e direciona
 * para os dois canais principais (formulário/contato + WhatsApp).
 */
export function CtaFinal() {
  return (
    <section
      id="cta-final"
      aria-labelledby="cta-final-title"
      className="relative isolate overflow-hidden bg-navy-950 py-20 text-white sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-hero-radial opacity-90"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid-faint bg-[size:48px_48px] opacity-30"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 -z-10 h-80 w-80 -translate-x-1/2
          rounded-full bg-accent-500/20 blur-3xl"
      />

      <Container size="wide">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="nx-eyebrow nx-eyebrow--light">Vamos conversar</span>
          <h2
            id="cta-final-title"
            className="mt-5 text-balance font-display text-3xl font-extrabold
              leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl
              lg:text-[44px] lg:leading-[1.05]"
          >
            Precisa de uma transportadora no RS para sua empresa?
          </h2>
          <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-graphite-200 sm:text-lg">
            Fale com a NEXLOG e avalie uma solução de transporte de cargas,
            caminhão dedicado ou rota programada para sua operação no Rio
            Grande do Sul.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <a
              href="#contato"
              className="nx-btn-primary"
              data-event="click_solicitar_avaliacao"
              data-cta="cta-final-primary"
              onClick={(event) => {
                trackEvent("click_cta_final", { location: "cta_final", label: "Solicitar avaliação de transporte" });
                trackEvent("click_avaliar_transporte", { location: "cta_final" });
                onTrack("click_solicitar_avaliacao", { location: "cta_final" })(event);
              }}
            >
              Solicitar avaliação de transporte
              <ArrowRight
                className="h-4 w-4"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </a>
            <a
              href={COMPANY.whatsappCtaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="nx-btn-ghost-light"
              data-event="click_whatsapp"
              data-cta="cta-final-secondary"
              onClick={(event) => {
                trackEvent("click_cta_final", { location: "cta_final", label: "Falar pelo WhatsApp" });
                onTrack("click_whatsapp", { location: "cta_final" })(event);
              }}
            >
              <MessageCircle
                className="h-4 w-4"
                strokeWidth={2.25}
                aria-hidden="true"
              />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
