import {
  ArrowRight,
  Sparkles,
  CalendarCheck,
  Headphones,
  MapPin,
  Eye,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/Container";
import { COMPANY } from "@/data/company";

// Arquivo em `public/` — servido como `/hero-rotas-rs.png` sem hash.
const HERO_MAP_IMAGE = "/hero-rotas-rs.png";

interface MicroProof {
  icon: LucideIcon;
  label: string;
}

const MICRO_PROOFS: MicroProof[] = [
  { icon: CalendarCheck, label: "Rotas programadas" },
  { icon: Headphones, label: "Atendimento direto" },
  { icon: MapPin, label: "Operação regional" },
  { icon: Eye, label: "Carga acompanhada" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-navy-950
        pt-28 sm:pt-32 lg:pt-36"
    >
      <BackgroundLayers />

      <Container size="wide" className="relative z-10 pb-24 sm:pb-28 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="nx-eyebrow nx-eyebrow--light animate-fade-up">
              <Sparkles
                className="h-3.5 w-3.5"
                strokeWidth={2.25}
                aria-hidden="true"
              />
              Parceiro logístico regional no RS
            </span>

            <h1
              id="hero-title"
              className="mt-6 font-display text-[34px] font-extrabold
                leading-[1.06] tracking-[-0.02em] text-white animate-fade-up
                [animation-delay:80ms]
                sm:text-5xl sm:leading-[1.05] lg:text-6xl lg:tracking-[-0.025em]"
            >
              Transporte dedicado para empresas que precisam de{" "}
              <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-200 bg-clip-text text-transparent">
                previsibilidade
              </span>{" "}
              no RS.
            </h1>

            <p
              className="mt-6 max-w-2xl text-base leading-relaxed text-graphite-200
                animate-fade-up [animation-delay:160ms] sm:text-lg"
            >
              Criamos rotas programadas, caminhão dedicado e soluções
              logísticas regionais para empresas que buscam segurança,
              atendimento próximo e operação sem improviso.
            </p>

            <div
              className="mt-9 flex flex-col gap-3 animate-fade-up
                [animation-delay:240ms]
                sm:flex-row sm:items-center"
            >
              <a href="#contato" className="nx-btn-primary">
                Solicitar avaliação de rota
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
              >
                Falar pelo WhatsApp
              </a>
            </div>

            {/* Microprovas — 4 chips com ícone + texto, alinhados ao briefing */}
            <ul
              className="mt-12 grid grid-cols-2 gap-3 animate-fade-up
                [animation-delay:320ms]
                sm:max-w-xl sm:grid-cols-4 sm:gap-4"
            >
              {MICRO_PROOFS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="group flex items-center gap-2.5 rounded-2xl
                    border border-white/10 bg-white/[0.04] px-3.5 py-2.5
                    backdrop-blur-sm transition-colors duration-300
                    hover:border-accent-400/30 hover:bg-white/[0.06]"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center
                      rounded-lg bg-accent-400/15 text-accent-300 ring-1
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

          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
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
        className="absolute -top-24 right-1/3 -z-10 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 left-1/4 -z-10 h-80 w-80 rounded-full bg-navy-600/40 blur-3xl"
        aria-hidden="true"
      />
    </>
  );
}

/**
 * Visual do Hero: ilustração do Rio Grande do Sul com hub logístico
 * central irradiando rotas dedicadas para o interior do estado e
 * conexão regional integrada com São Paulo.
 *
 * A imagem é PNG com fundo transparente — flutua diretamente sobre o
 * hero (sem moldura/card), apenas com glows accent abaixo para dar
 * profundidade e reforçar o ponto central.
 *
 * Arquivo: `public/hero-rotas-rs.png` (~84 KB). LCP da página:
 * preload no <head>, fetchpriority="high", loading="eager".
 */
function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-md animate-fade-up
        [animation-delay:200ms] sm:max-w-lg lg:max-w-none"
    >
      {/* Halo accent central — reforça o hub do mapa */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-56 w-56 -translate-x-1/2
          -translate-y-1/2 rounded-full bg-accent-500/20 blur-3xl
          sm:h-72 sm:w-72"
      />

      {/* Halo navy lateral — profundidade fria */}
      <div
        aria-hidden="true"
        className="absolute -left-10 top-1/3 -z-10 h-40 w-40 rounded-full
          bg-navy-500/30 blur-3xl"
      />

      <img
        src={HERO_MAP_IMAGE}
        alt="Mapa do Rio Grande do Sul com hub logístico central irradiando rotas dedicadas para o interior do estado e conexão regional integrada com São Paulo"
        width={1024}
        height={576}
        loading="eager"
        // @ts-expect-error — fetchPriority é prop padrão HTML, mas o
        // React 19 ainda tipa em camelCase apenas em alguns hosts; em
        // runtime emite o atributo correto.
        fetchpriority="high"
        decoding="async"
        draggable={false}
        className="relative z-10 mx-auto block h-auto w-full select-none
          [filter:drop-shadow(0_24px_40px_rgba(34,121,255,0.25))_drop-shadow(0_8px_16px_rgba(0,0,0,0.45))]"
      />

      {/* Reflexo / glow accent inferior (efeito flutuante premium) */}
      <div
        aria-hidden="true"
        className="absolute -bottom-6 left-1/4 right-1/4 -z-10 h-16
          rounded-full bg-accent-400/25 blur-3xl"
      />
    </div>
  );
}
