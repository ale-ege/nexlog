import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { PROBLEM_BENEFITS } from "@/data/problem";

export function Problem() {
  return (
    <section
      id="desafio"
      aria-labelledby="problem-title"
      className="nx-section bg-white"
    >
      <Container size="wide">
        <SectionHeader
          titleId="problem-title"
          eyebrow="O desafio"
          title="Sua empresa depende de fretes avulsos para uma operação que já é recorrente?"
          subtitle="Quando a demanda se repete, o transporte precisa deixar de ser improvisado. A NEXLOG ajuda empresas a transformar entregas recorrentes em rotas organizadas, com custo previsível, segurança operacional e acompanhamento próximo."
        />

        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-graphite-700 sm:text-lg">
              Entre depender de fretes avulsos todos os dias e contratar uma
              grande transportadora nacional, existe uma alternativa mais
              eficiente:{" "}
              <strong className="font-semibold text-navy-900">
                uma operação logística regional, dedicada e formalizada.
              </strong>
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {PROBLEM_BENEFITS.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="group flex items-center gap-3 rounded-2xl
                    border border-navy-100/70 bg-graphite-50/60 px-4 py-3
                    transition-colors duration-300 hover:border-accent-400/40
                    hover:bg-white"
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
          </div>

          <div className="lg:col-span-5">
            <ProblemContrastCard />
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Card de contraste visual: linha "avulso" desbotada vs linha "NEXLOG"
 * em destaque, reforçando a passagem de algo improvisado para organizado.
 */
function ProblemContrastCard() {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-navy-100/70
        bg-gradient-to-br from-white to-graphite-50 p-6 shadow-card sm:p-8"
    >
      <span
        aria-hidden="true"
        className="absolute -top-12 right-0 h-32 w-32 rounded-full
          bg-accent-400/20 blur-3xl"
      />
      <span className="nx-eyebrow">Comparação rápida</span>

      <div className="mt-6 space-y-5">
        <div className="rounded-2xl border border-dashed border-navy-200 bg-white/60 p-4">
          <p className="nx-label text-graphite-500">Hoje</p>
          <p className="mt-1 text-sm font-medium leading-snug text-graphite-600">
            Fretes avulsos diários, sem padronização, sem documentação clara e
            com risco operacional alto.
          </p>
        </div>

        <div
          className="relative rounded-2xl border border-accent-400/40
            bg-gradient-to-br from-navy-900 to-navy-950 p-4 text-white
            shadow-soft"
        >
          <p className="nx-label text-accent-300">Com a NEXLOG</p>
          <p className="mt-1 text-sm font-medium leading-snug text-graphite-100">
            Rotas recorrentes, caminhão dedicado, operação formalizada e
            acompanhamento próximo — com custo previsível.
          </p>
        </div>
      </div>
    </div>
  );
}
