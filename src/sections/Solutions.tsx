import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { IconCardItem } from "@/components/IconCardItem";
import { SOLUTIONS } from "@/data/solutions";

export function Solutions() {
  return (
    <section
      id="solucoes"
      aria-labelledby="solutions-title"
      className="relative nx-section bg-graphite-50"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-200/60 to-transparent"
        aria-hidden="true"
      />

      <Container size="wide">
        <SectionHeader
          titleId="solutions-title"
          eyebrow="Soluções"
          title="Soluções de transporte dedicado e operação programada no RS."
          subtitle="Quatro modelos para empresas que precisam de uma operação logística regional estruturada — sem depender de fretes avulsos ou soluções genéricas."
        />

        <div className="nx-grid-cards mt-12 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {SOLUTIONS.map((item) => (
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
