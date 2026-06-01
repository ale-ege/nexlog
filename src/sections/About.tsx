import { MapPin } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { COMPANY } from "@/data/company";

/**
 * Cidades/regiões atendidas — listadas explicitamente para reforçar
 * sinais de SEO local (texto visível + bullets), sem virar lista
 * artificial. Cobre as principais buscas regionais do RS.
 */
const COVERAGE_AREAS: ReadonlyArray<string> = [
  "Porto Alegre",
  "Região Metropolitana",
  "Vale dos Sinos",
  "Novo Hamburgo",
  "São Leopoldo",
  "Canoas",
  "Caxias do Sul",
  "Serra Gaúcha",
];

/**
 * Seção "Sobre" — posicionada logo após o Hero para responder
 * imediatamente "o que é a NEXLOG, para quem e onde atua",
 * com vocabulário denso em palavras-chave que clientes pesquisam:
 * transportadora, transporte de cargas, RS, cidades específicas.
 */
export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="nx-section bg-white"
    >
      <Container size="wide">
        <SectionHeader
          titleId="about-title"
          eyebrow="Quem somos"
          title="Transportadora no Rio Grande do Sul para empresas"
          subtitle="A NEXLOG é uma transportadora no Rio Grande do Sul voltada para empresas que precisam de transporte de cargas com regularidade, previsibilidade e atendimento próximo."
        />

        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="space-y-5 text-base leading-relaxed text-graphite-700 sm:text-lg">
              <p>
                Atendemos operações logísticas regionais com foco em{" "}
                <strong className="font-semibold text-navy-900">
                  caminhão dedicado, frete dedicado, rotas programadas e
                  entregas recorrentes
                </strong>
                . Nosso objetivo é ajudar empresas a reduzir improvisos,
                organizar melhor suas coletas e entregas e contar com uma
                parceira logística próxima da rotina da operação.
              </p>
              <p>
                A NEXLOG atende demandas no Rio Grande do Sul, incluindo{" "}
                <strong className="font-semibold text-navy-900">
                  Porto Alegre, Região Metropolitana, Vale dos Sinos, Novo
                  Hamburgo, São Leopoldo, Canoas, Caxias do Sul, Serra Gaúcha
                </strong>{" "}
                e demais regiões conforme a necessidade da rota.
              </p>
            </div>

            <ul
              className="mt-8 flex flex-wrap gap-2"
              aria-label="Regiões atendidas no Rio Grande do Sul"
            >
              {COVERAGE_AREAS.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full
                    border border-navy-100 bg-graphite-50 px-3 py-1.5
                    text-xs font-semibold text-navy-800 transition-colors
                    hover:border-accent-400/40 hover:bg-white sm:text-sm"
                >
                  <MapPin
                    className="h-3 w-3 text-accent-500"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <AboutCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Card lateral com dados-chave da empresa em formato escaneável —
 * reforça posicionamento e base operacional.
 */
function AboutCard() {
  return (
    <aside
      className="relative h-full overflow-hidden rounded-3xl border
        border-navy-100 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900
        p-7 text-white shadow-soft sm:p-9"
      aria-label="Resumo institucional da NEXLOG"
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
        <span className="nx-eyebrow nx-eyebrow--light">NEXLOG</span>
        <p className="mt-5 font-display text-2xl font-bold leading-tight text-white sm:text-[28px]">
          Transportadora regional voltada para empresas que precisam de
          transporte recorrente e organizado.
        </p>

        <dl className="mt-8 grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <dt className="nx-label text-accent-300">Atuação</dt>
            <dd className="mt-1 font-display text-sm font-semibold text-white">
              Rio Grande do Sul
            </dd>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <dt className="nx-label text-accent-300">Base</dt>
            <dd className="mt-1 font-display text-sm font-semibold text-white">
              {COMPANY.city} · {COMPANY.stateCode}
            </dd>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <dt className="nx-label text-accent-300">Modelo</dt>
            <dd className="mt-1 font-display text-sm font-semibold text-white">
              Caminhão dedicado
            </dd>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <dt className="nx-label text-accent-300">Foco</dt>
            <dd className="mt-1 font-display text-sm font-semibold text-white">
              Empresas B2B
            </dd>
          </div>
        </dl>
      </div>
    </aside>
  );
}
