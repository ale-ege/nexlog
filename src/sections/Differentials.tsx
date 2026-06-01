import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { IconCardItem } from "@/components/IconCardItem";
import { DIFFERENTIALS } from "@/data/differentials";

/**
 * Seção de diferenciais — argumentos comerciais que respondem
 * "por que escolher a NEXLOG como transportadora no RS?".
 * O CTA forte foi movido para a seção CtaFinal (antes do Contact).
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
          title="Por que escolher a NEXLOG como transportadora no RS?"
          subtitle="A diferença está na forma como conduzimos cada operação: foco em empresas, atendimento direto, previsibilidade e flexibilidade regional."
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
      </Container>
    </section>
  );
}
