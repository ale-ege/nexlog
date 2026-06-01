import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { IconCardItem } from "@/components/IconCardItem";
import { PARTNERSHIPS } from "@/data/partnerships";

export function Partnerships() {
  return (
    <section
      id="parcerias"
      aria-labelledby="partnerships-title"
      className="nx-section bg-graphite-50"
    >
      <Container size="wide">
        <SectionHeader
          titleId="partnerships-title"
          eyebrow="Parcerias"
          title="Parceiro logístico regional para empresas no Rio Grande do Sul."
          subtitle="A NEXLOG busca parcerias com empresas, marcas, distribuidores e redes que precisam estruturar ou melhorar sua operação logística no RS — com rotas recorrentes, caminhão dedicado e distribuição programada."
        />

        <div className="nx-grid-cards mt-12 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {PARTNERSHIPS.map((item) => (
            <IconCardItem
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-navy-800/40 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 px-6 py-10 shadow-soft sm:mt-14 sm:px-10 sm:py-12 lg:px-14">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="nx-eyebrow nx-eyebrow--light">Vamos juntos</span>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                Vamos desenhar uma solução logística para sua empresa?
              </h3>
            </div>
            <a href="#contato" className="nx-btn-primary shrink-0">
              Iniciar conversa
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
