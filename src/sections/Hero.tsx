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

/**
 * Hero centralizado, sem ilustração — foco total na mensagem
 * (estilo Stripe/Linear/Vercel). Composição:
 *
 *   - Eyebrow com selo de posicionamento
 *   - H1 forte (até 3 linhas no desktop)
 *   - Subtítulo de apoio
 *   - 2 CTAs (primário + WhatsApp)
 *   - 4 microprovas em chips
 *
 * O background mantém os blur halos e o grid sutil para sustentar
 * profundidade sem competir com a leitura.
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
            Parceiro logístico regional no RS
          </span>

          <h1
            id="hero-title"
            className="mt-6 text-balance font-display text-[36px] font-extrabold
              leading-[1.05] tracking-[-0.02em] text-white animate-fade-up
              [animation-delay:80ms]
              sm:text-5xl sm:leading-[1.04] lg:text-6xl lg:tracking-[-0.025em]
              xl:text-[64px]"
          >
            Transporte dedicado para empresas que precisam de{" "}
            <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-200 bg-clip-text text-transparent">
              previsibilidade
            </span>{" "}
            no RS.
          </h1>

          <p
            className="mt-6 max-w-2xl text-balance text-base leading-relaxed
              text-graphite-200 animate-fade-up [animation-delay:160ms]
              sm:text-lg"
          >
            Criamos rotas programadas, caminhão dedicado e soluções logísticas
            regionais para empresas que buscam segurança, atendimento próximo
            e operação sem improviso.
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
            className="mt-14 grid grid-cols-2 gap-3 animate-fade-up
              [animation-delay:320ms]
              sm:max-w-2xl sm:grid-cols-4 sm:gap-4"
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
      </Container>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px
          bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
    </section>
  );
}

/**
 * Background layered: gradient radial + grid sutil + 2 blur halos
 * (accent quente + navy frio) para sustentar profundidade sem
 * roubar a leitura do título.
 */
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
