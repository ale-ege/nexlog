import { ArrowRight, MapPinned } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { DEDICATED_USE_CASES } from "@/data/dedicatedRoutes";

export function DedicatedRoutes() {
  return (
    <section
      id="rotas"
      aria-labelledby="dedicated-title"
      className="nx-section bg-white"
    >
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeader
              titleId="dedicated-title"
              eyebrow="Rotas dedicadas"
              title="Rotas dedicadas e caminhão dedicado para empresas no Rio Grande do Sul."
              subtitle="A NEXLOG estrutura rotas regionais para empresas que possuem demanda recorrente e precisam de uma operação mais estável, organizada e alinhada à sua rotina, com previsibilidade de custo e acompanhamento próximo."
            />

            <p className="mt-6 text-base leading-relaxed text-graphite-700 sm:text-lg">
              Em vez de buscar fretes avulsos diariamente, sua empresa pode
              contar com uma operação planejada, com frequência definida,
              acompanhamento próximo e maior previsibilidade de custo.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {DEDICATED_USE_CASES.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="group flex items-center gap-3 rounded-2xl
                    border border-navy-100/70 bg-white px-4 py-3 shadow-card
                    transition-colors duration-300 hover:border-accent-400/40"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center
                      rounded-lg bg-navy-50 text-navy-700 ring-1 ring-inset
                      ring-navy-100 transition-colors duration-300
                      group-hover:bg-accent-500/10 group-hover:text-accent-500
                      group-hover:ring-accent-400/30"
                    aria-hidden="true"
                  >
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-navy-900">
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a href="#contato" className="nx-btn-primary">
                Quero estruturar uma rota dedicada
                <ArrowRight
                  className="h-4 w-4"
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <DedicatedVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Visual estático sintetizando uma rota dedicada com pontos fixos
 * (origem → paradas → destino) e frequência semanal.
 */
function DedicatedVisual() {
  const stops = [
    { label: "Origem (CD)", time: "Seg · 06h" },
    { label: "Parada 1", time: "Seg · 08h" },
    { label: "Parada 2", time: "Seg · 10h" },
    { label: "Destino final", time: "Seg · 12h" },
  ];

  return (
    <div
      className="relative h-full overflow-hidden rounded-3xl border
        border-navy-100/70 bg-gradient-to-br from-navy-900 via-navy-950
        to-navy-900 p-6 text-white shadow-soft sm:p-8"
    >
      <span
        aria-hidden="true"
        className="absolute -top-16 right-0 h-40 w-40 rounded-full
          bg-accent-400/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-faint bg-[size:36px_36px] opacity-25"
      />

      <div className="relative">
        <div className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl
              bg-accent-400/15 text-accent-300 ring-1 ring-inset
              ring-accent-400/30"
            aria-hidden="true"
          >
            <MapPinned className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <div>
            <p className="nx-label text-accent-300">Rota dedicada</p>
            <p className="font-display text-base font-semibold text-white">
              Frequência semanal · 2ª, 4ª e 6ª
            </p>
          </div>
        </div>

        <ol className="relative mt-7 space-y-5">
          <span
            aria-hidden="true"
            className="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-px
              bg-gradient-to-b from-accent-400/70 via-white/15 to-transparent"
          />
          {stops.map((stop) => (
            <li key={stop.label} className="relative pl-8">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 flex h-[22px] w-[22px]
                  items-center justify-center rounded-full border
                  border-accent-400/40 bg-navy-900"
              >
                <span className="h-2 w-2 rounded-full bg-accent-400" />
              </span>
              <p className="font-display text-sm font-semibold text-white">
                {stop.label}
              </p>
              <p className="mt-0.5 text-xs text-graphite-300">{stop.time}</p>
            </li>
          ))}
        </ol>

        <div className="mt-7 grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="nx-label text-accent-300">Veículo</p>
            <p className="mt-1 font-display text-sm font-semibold text-white">
              Dedicado
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <p className="nx-label text-accent-300">Custo</p>
            <p className="mt-1 font-display text-sm font-semibold text-white">
              Previsível
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
