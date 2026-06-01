import {
  ArrowRight,
  Sparkles,
  PackageCheck,
  Truck,
  Route,
  CalendarClock,
  Headphones,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/Container";
import { COMPANY } from "@/data/company";
import { onTrack, trackEvent } from "@/lib/analytics";

interface MicroProof {
  icon: LucideIcon;
  label: string;
}

/**
 * 5 microprovas alinhadas ao briefing — cobrem as palavras-chave
 * de maior intenção de busca já no above-the-fold.
 */
const MICRO_PROOFS: MicroProof[] = [
  { icon: PackageCheck, label: "Transporte de cargas no RS" },
  { icon: Truck, label: "Caminhão dedicado" },
  { icon: Route, label: "Frete dedicado" },
  { icon: CalendarClock, label: "Rotas programadas" },
  { icon: Headphones, label: "Atendimento direto" },
];

/**
 * Hero centralizado, sem ilustração — foco total na mensagem
 * (estilo Stripe/Linear/Vercel).
 *
 * H1 com palavras-chave de SEO orgânico no Google: começa por
 * "Transportadora no RS" (alto volume) e qualifica com "transporte
 * de cargas e caminhão dedicado" (intenção comercial).
 */
export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-navy-950
        pt-32 sm:pt-36 lg:pt-44"
    >
      <BackgroundLayers />

      <Container size="wide" className="relative z-10 pb-24 sm:pb-28 lg:pb-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="nx-eyebrow nx-eyebrow--light animate-fade-up">
            <Sparkles
              className="h-3.5 w-3.5"
              strokeWidth={2.25}
              aria-hidden="true"
            />
            Transportadora no Rio Grande do Sul
          </span>

          <h1
            id="hero-title"
            className="mt-6 text-balance font-display text-[34px] font-extrabold
              leading-[1.06] tracking-[-0.02em] text-white animate-fade-up
              [animation-delay:80ms]
              sm:text-5xl sm:leading-[1.04] lg:text-6xl lg:tracking-[-0.025em]
              xl:text-[60px]"
          >
            Transportadora no RS para transporte de cargas e{" "}
            <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-200 bg-clip-text text-transparent">
              caminhão dedicado
            </span>
            .
          </h1>

          <p
            className="mt-6 max-w-2xl text-balance text-base leading-relaxed
              text-graphite-200 animate-fade-up [animation-delay:160ms]
              sm:text-lg"
          >
            A NEXLOG atende empresas no Rio Grande do Sul com transporte de
            cargas, frete dedicado, caminhão dedicado, rotas programadas e
            operações logísticas recorrentes.
          </p>

          <p
            className="mt-4 max-w-xl text-balance text-sm leading-relaxed
              text-graphite-300 animate-fade-up [animation-delay:200ms]
              sm:text-base"
          >
            Ideal para empresas que precisam de entregas recorrentes,
            atendimento próximo e mais previsibilidade na operação logística.
          </p>

          <div
            className="mt-9 flex flex-col gap-3 animate-fade-up
              [animation-delay:240ms]
              sm:flex-row sm:items-center"
          >
            <a
              href="#contato"
              className="nx-btn-primary"
              data-event="click_solicitar_avaliacao"
              data-cta="hero-primary"
              onClick={(event) => {
                trackEvent("click_cta_hero", { location: "hero", label: "Solicitar avaliação de transporte" });
                onTrack("click_solicitar_avaliacao", { location: "hero" })(event);
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
              data-cta="hero-secondary"
              onClick={(event) => {
                trackEvent("click_cta_hero", { location: "hero", label: "Falar pelo WhatsApp" });
                onTrack("click_whatsapp", { location: "hero" })(event);
              }}
            >
              Falar pelo WhatsApp
            </a>
          </div>

          {/* 5 microprovas em flex-wrap centralizado (acomoda número
              ímpar e textos de comprimentos variáveis). */}
          <ul
            className="mt-14 flex flex-wrap justify-center gap-2.5 animate-fade-up
              [animation-delay:320ms] sm:gap-3"
          >
            {MICRO_PROOFS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="group inline-flex items-center gap-2 rounded-full
                  border border-white/10 bg-white/[0.04] px-3.5 py-2
                  backdrop-blur-sm transition-colors duration-300
                  hover:border-accent-400/30 hover:bg-white/[0.06]"
              >
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 shrink-0 items-center justify-center
                    rounded-md bg-accent-400/15 text-accent-300 ring-1
                    ring-inset ring-accent-400/30"
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
                <span className="text-xs font-semibold leading-tight text-white sm:text-[13px]">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px
          bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
    </section>
  );
}

function BackgroundLayers() {
  return (
    <>
      <div className="absolute inset-0 -z-10 bg-hero-radial" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-grid-faint bg-[size:48px_48px] opacity-40 mask-fade-b"
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 -z-10 h-80 w-80 -translate-x-1/2
          rounded-full bg-accent-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-1/2 -z-10 h-96 w-96 -translate-x-1/2
          rounded-full bg-navy-600/40 blur-3xl"
      />
    </>
  );
}
