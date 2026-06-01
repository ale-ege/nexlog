import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { IconCardItem } from "@/components/IconCardItem";
import { SECURITY_CARDS } from "@/data/security";

export function Security() {
  return (
    <section
      id="seguranca"
      aria-labelledby="security-title"
      className="relative nx-section overflow-hidden bg-navy-950 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:48px_48px] opacity-20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl"
        aria-hidden="true"
      />

      <Container size="wide" className="relative">
        <SectionHeader
          titleId="security-title"
          eyebrow="Segurança e previsibilidade"
          title="Segurança e previsibilidade para sua operação."
          subtitle="Cada operação é estruturada com foco em responsabilidade, comunicação clara e acompanhamento da carga. A NEXLOG atua para reduzir improvisos, atrasos e incertezas no transporte regional."
          variant="dark"
        />

        <div className="nx-grid-cards mt-12 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {SECURITY_CARDS.map((item) => (
            <IconCardItem
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              variant="dark"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
