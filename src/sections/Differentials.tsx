import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { IconCardItem } from "@/components/IconCardItem";
import { DIFFERENTIALS } from "@/data/differentials";

/**
 * Seção de diferenciais — argumentos comerciais que respondem
 * objetivamente "por que escolher a NEXLOG?".
 *
 * Fechada com um CTA forte para conversão (avaliar minha operação).
 */
export function Differentials() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="differentials-title"
      className="nx-section bg-graphite-50"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px
          bg-gradient-to-r from-transparent via-navy-200/60 to-transparent"
        aria-hidden="true"
      />

      <Container size="wide">
        <SectionHeader
          titleId="differentials-title"
          eyebrow="Diferenciais"
          title="Por que empresas escolhem a NEXLOG?"
          subtitle="A diferença está na forma como conduzimos cada operação: com atendimento direto, rotas sob medida e foco em construir parceria — não em fechar fretes isolados."
        />

        <div className="nx-grid-cards mt-12 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {DIFFERENTIALS.map((item) => (
            <IconCardItem
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* CTA dedicado — fecha a seção convidando à conversa */}
        <div
          className="mt-12 overflow-hidden rounded-3xl border border-navy-800/40
            bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 px-6 py-10
            shadow-soft sm:mt-14 sm:px-10 sm:py-12 lg:px-14"
        >
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="nx-eyebrow nx-eyebrow--light">Vamos conversar</span>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                Quer entender se a NEXLOG faz sentido para a sua operação?
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-graphite-200 sm:text-base">
                Avaliamos sua rotina logística e propomos um modelo de rota
                dedicada ou operação programada compatível com o seu volume e
                frequência.
              </p>
            </div>
            <a href="#contato" className="nx-btn-primary shrink-0">
              Avaliar minha operação logística
              <ArrowRight
                className="h-4 w-4"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
