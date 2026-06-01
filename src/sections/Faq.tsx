import { Plus } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { FAQ_ITEMS } from "@/data/faq";
import type { FaqItem } from "@/types";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="nx-section bg-graphite-50"
    >
      <Container size="wide">
        <SectionHeader
          titleId="faq-title"
          eyebrow="Perguntas frequentes"
          title="Dúvidas comuns sobre transporte dedicado e operação programada."
          subtitle="Respostas claras sobre como funcionam rotas dedicadas, caminhão dedicado, operação programada e o modelo de parceria regional da NEXLOG no RS."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3 sm:mt-14 lg:mt-16">
          {FAQ_ITEMS.map((item) => (
            <FaqEntry key={item.question} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function FaqEntry({ item }: { item: FaqItem }) {
  return (
    <details
      className="group rounded-2xl border border-navy-100/70 bg-white
        shadow-card transition-colors duration-300 hover:border-navy-200
        open:border-accent-400/40 open:shadow-soft"
    >
      <summary
        className="flex cursor-pointer list-none items-start justify-between
          gap-4 rounded-2xl px-5 py-4 text-left
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-accent-400 focus-visible:ring-offset-2 sm:px-6 sm:py-5"
      >
        <h3 className="font-display text-base font-semibold leading-snug text-navy-900 sm:text-lg">
          {item.question}
        </h3>
        <span
          aria-hidden="true"
          className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center
            rounded-full bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-100
            transition-transform duration-300 group-open:rotate-45
            group-open:bg-accent-500/15 group-open:text-accent-500
            group-open:ring-accent-400/30"
        >
          <Plus className="h-4 w-4" strokeWidth={2.25} />
        </span>
      </summary>
      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
        <p className="text-sm leading-relaxed text-graphite-700 sm:text-base">
          {item.answer}
        </p>
      </div>
    </details>
  );
}
