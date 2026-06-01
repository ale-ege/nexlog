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
          title="Transportadora para empresas que precisam de entregas recorrentes"
          subtitle="A NEXLOG é indicada para empresas que precisam transportar cargas com frequência, mas não querem depender de fretes improvisados ou montar uma frota própria."
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

        {/* Mensagem institucional do briefing — encerra a seção com
            o "porquê" da empresa e o tipo de relação que ela busca. */}
        <div
          className="mt-12 overflow-hidden rounded-3xl border border-navy-100
            bg-gradient-to-br from-graphite-50 to-white p-8 shadow-card
            sm:mt-14 sm:p-10 lg:p-12"
          aria-labelledby="audience-mission-title"
        >
          <span className="nx-eyebrow">Sobre a NEXLOG</span>
          <h3
            id="audience-mission-title"
            className="mt-4 font-display text-2xl font-bold leading-tight text-navy-900 sm:text-3xl"
          >
            Uma transportadora regional para empresas do RS
          </h3>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-graphite-700 sm:text-lg">
            <p>
              A NEXLOG nasceu para atender empresas que precisam de transporte
              de cargas com mais{" "}
              <strong className="font-semibold text-navy-900">
                previsibilidade, proximidade e responsabilidade
              </strong>
              .
            </p>
            <p>
              Em vez de atuar apenas com fretes avulsos, buscamos estruturar
              operações mais organizadas para clientes que valorizam segurança,
              comunicação clara e parceria de longo prazo.
            </p>
            <p>
              Nosso foco está em criar soluções práticas de transporte para
              empresas que precisam entregar com regularidade, reduzir
              improvisos e contar com uma transportadora próxima da rotina da
              operação.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
