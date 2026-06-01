import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { IconCardItem } from "@/components/IconCardItem";
import { AUDIENCE_CARDS } from "@/data/audience";

/**
 * Seção "Para quem é a NEXLOG?" — define claramente o perfil de
 * empresa que se beneficia do modelo: operação recorrente, sem
 * frota própria e cansada de depender de frete avulso.
 *
 * Inclui a mensagem institucional do briefing como bloco de fechamento,
 * reforçando o posicionamento de parceria de longo prazo.
 */
export function Audience() {
  return (
    <section
      id="para-quem"
      aria-labelledby="audience-title"
      className="nx-section bg-white"
    >
      <Container size="wide">
        <SectionHeader
          titleId="audience-title"
          eyebrow="Para quem é a NEXLOG?"
          title="Para empresas que entregam com regularidade — e querem fazer isso bem."
          subtitle="Para empresas que precisam entregar com regularidade, mas não querem montar frota própria nem depender de fretes improvisados."
        />

        <div className="nx-grid-cards mt-12 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {AUDIENCE_CARDS.map((item) => (
            <IconCardItem
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Mensagem institucional — encerra a seção reforçando o porquê
            da NEXLOG e o tipo de relação que ela busca construir. */}
        <div
          className="mt-12 overflow-hidden rounded-3xl border border-navy-100
            bg-gradient-to-br from-graphite-50 to-white p-8 shadow-card
            sm:mt-14 sm:p-10 lg:p-12"
        >
          <p className="font-display text-lg leading-relaxed text-navy-900 sm:text-xl">
            A NEXLOG nasceu para atender empresas que precisam de transporte
            recorrente com mais{" "}
            <span className="font-semibold text-navy-950">
              previsibilidade, proximidade e responsabilidade
            </span>
            . Em vez de atuar apenas com fretes avulsos, estruturamos rotas
            dedicadas e operações programadas para clientes que valorizam
            segurança, comunicação clara e parceria de longo prazo.
          </p>
        </div>
      </Container>
    </section>
  );
}
