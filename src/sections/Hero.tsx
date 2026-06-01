import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/Container";
import { COMPANY } from "@/data/company";

// Arquivo em `public/` — servido como `/hero-rotas-rs.png` sem hash.
const HERO_MAP_IMAGE = "/hero-rotas-rs.png";

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
              Operação logística regional no RS
            </span>

            <h1
              id="hero-title"
              className="mt-6 font-display text-[34px] font-extrabold
                leading-[1.06] tracking-[-0.02em] text-white animate-fade-up
                [animation-delay:80ms]
                sm:text-5xl sm:leading-[1.05] lg:text-6xl lg:tracking-[-0.025em]"
            >
              Rotas logísticas recorrentes no RS com{" "}
              <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-200 bg-clip-text text-transparent">
                custo competitivo, segurança
              </span>{" "}
              e atendimento próximo.
            </h1>

            <p
              className="mt-6 max-w-2xl text-base leading-relaxed text-graphite-200
                animate-fade-up [animation-delay:160ms] sm:text-lg"
            >
              A NEXLOG estrutura operações regionais para empresas que precisam
              de rotas dedicadas, caminhão dedicado e distribuição programada
              no Rio Grande do Sul, com emissão documental, veículos
              rastreados e seguro completo.
            </p>
            <p
              className="mt-4 max-w-2xl text-sm leading-relaxed text-graphite-300
                animate-fade-up [animation-delay:200ms] sm:text-base"
            >
              Uma alternativa profissional para empresas que buscam mais
              previsibilidade logística sem a burocracia e o custo de grandes
              operadores.
            </p>

            <div
              className="mt-9 flex flex-col gap-3 animate-fade-up
                [animation-delay:240ms]
                sm:flex-row sm:items-center"
            >
              <a href="#contato" className="nx-btn-primary">
                Solicitar análise de rota
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
                Falar no WhatsApp
              </a>
            </div>

            <ul
              className="mt-12 grid grid-cols-2 gap-4 animate-fade-up
                [animation-delay:320ms]
                sm:max-w-lg sm:grid-cols-3"
            >
              <Stat label="Atuação" value="Regional RS" />
              <Stat label="Modelo" value="Rotas recorrentes" />
              <Stat label="Operação" value="Formalizada" />
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

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <li
      className="rounded-2xl border border-white/10 bg-white/[0.04]
        px-4 py-3 backdrop-blur-sm"
    >
      <p className="nx-label text-accent-300">{label}</p>
      <p className="mt-1 font-display text-base font-semibold text-white">
        {value}
      </p>
    </li>
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
