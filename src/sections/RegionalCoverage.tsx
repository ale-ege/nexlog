import { MapPinned, PackageCheck, Building2, Repeat } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";

const COVERAGE_HIGHLIGHTS = [
  {
    icon: Repeat,
    title: "Rotas recorrentes no RS",
    description:
      "Operações regulares com frequência definida para empresas com demanda contínua no Rio Grande do Sul.",
  },
  {
    icon: PackageCheck,
    title: "Distribuição programada",
    description:
      "Entregas planejadas para lojas, clientes, unidades e pontos comerciais em diferentes regiões do estado.",
  },
  {
    icon: Building2,
    title: "Abastecimento de lojas e unidades",
    description:
      "Apoio logístico a redes varejistas, distribuidores e marcas que precisam de presença regional ativa.",
  },
];

export function RegionalCoverage() {
  return (
    <section
      id="atuacao"
      aria-labelledby="coverage-title"
      className="relative nx-section bg-white"
    >
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeader
              titleId="coverage-title"
              eyebrow="Atuação no RS"
              title="Parceira logística regional no Rio Grande do Sul."
              subtitle="A NEXLOG é uma parceira logística regional para empresas no Rio Grande do Sul que precisam de rotas dedicadas, caminhão dedicado e transporte programado — com previsibilidade, segurança e atendimento próximo."
            />

            <p className="mt-6 text-base leading-relaxed text-graphite-700 sm:text-lg">
              Atendemos indústrias, distribuidores, redes e e-commerces
              regionais que buscam estruturar entregas frequentes,
              abastecimento de lojas e operações recorrentes no RS, com
              conexões eventuais a outros estados conforme a operação.
            </p>

            <ul className="mt-8 space-y-3">
              {COVERAGE_HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
                <li
                  key={title}
                  className="group flex gap-4 rounded-2xl border border-navy-100/70
                    bg-graphite-50/60 p-4 transition-colors duration-300
                    hover:border-accent-400/40 hover:bg-white sm:p-5"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center
                      rounded-xl bg-navy-50 text-navy-700 ring-1 ring-inset
                      ring-navy-100 transition-colors duration-300
                      group-hover:bg-accent-500/10 group-hover:text-accent-500
                      group-hover:ring-accent-400/30"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold leading-snug text-navy-900">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-graphite-700">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <CoverageCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

function CoverageCard() {
  return (
    <aside
      className="relative h-full overflow-hidden rounded-3xl border
        border-navy-100/70 bg-gradient-to-br from-navy-900 via-navy-950
        to-navy-900 p-7 text-white shadow-soft sm:p-9"
      aria-label="Resumo da atuação regional da NEXLOG"
    >
      <span
        aria-hidden="true"
        className="absolute -top-16 right-0 h-44 w-44 rounded-full
          bg-accent-400/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-faint bg-[size:36px_36px] opacity-25"
      />

      <div className="relative">
        <div className="flex items-center gap-3">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-xl
              bg-accent-400/15 text-accent-300 ring-1 ring-inset
              ring-accent-400/30"
            aria-hidden="true"
          >
            <MapPinned className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <div>
            <p className="nx-label text-accent-300">Cobertura</p>
            <p className="font-display text-base font-semibold text-white">
              Rio Grande do Sul
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-graphite-200">
          Atendimento a empresas no Rio Grande do Sul mediante análise de rota
          e operação.{" "}
          <strong className="font-semibold text-white">
            Consulte nossa disponibilidade para rotas e operações dedicadas na
            sua região.
          </strong>
        </p>

        <dl className="mt-7 grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <dt className="nx-label text-accent-300">Modelo</dt>
            <dd className="mt-1 font-display text-sm font-semibold text-white">
              Regional dedicado
            </dd>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <dt className="nx-label text-accent-300">Tipo</dt>
            <dd className="mt-1 font-display text-sm font-semibold text-white">
              B2B / empresarial
            </dd>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <dt className="nx-label text-accent-300">Documentação</dt>
            <dd className="mt-1 font-display text-sm font-semibold text-white">
              Formalizada
            </dd>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <dt className="nx-label text-accent-300">Cobertura</dt>
            <dd className="mt-1 font-display text-sm font-semibold text-white">
              Sob análise
            </dd>
          </div>
        </dl>
      </div>
    </aside>
  );
}
