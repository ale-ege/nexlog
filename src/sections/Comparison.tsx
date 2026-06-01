import { Check } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { COMPARISON_COLUMNS } from "@/data/comparison";
import type { ComparisonColumn } from "@/types";

export function Comparison() {
  return (
    <section
      id="comparativo"
      aria-labelledby="comparison-title"
      className="relative nx-section overflow-hidden bg-graphite-50"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px
          bg-gradient-to-r from-transparent via-navy-200/60 to-transparent"
        aria-hidden="true"
      />

      <Container size="wide">
        <SectionHeader
          titleId="comparison-title"
          eyebrow="Comparativo estratégico"
          title="Entre o frete avulso e a grande transportadora, existe uma solução regional mais eficiente."
          subtitle="Empresas com demandas recorrentes não precisam depender todos os dias de fretes avulsos nem contratar uma estrutura maior do que a operação exige. Compare os três modelos e veja por que a operação regional dedicada da NEXLOG é a alternativa mais eficiente."
        />

        <div
          className="nx-grid-cards mt-12 items-stretch sm:mt-14
            lg:mt-16 lg:grid-cols-3"
        >
          {COMPARISON_COLUMNS.map((column) => (
            <ComparisonCard key={column.id} column={column} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ComparisonCard({ column }: { column: ComparisonColumn }) {
  const Icon = column.icon;
  const isHighlight = column.highlight;

  return (
    <article
      className={
        isHighlight
          ? "relative flex flex-col overflow-hidden rounded-3xl border border-accent-400/40 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 p-7 text-white shadow-soft transition-shadow duration-300 hover:shadow-[0_30px_70px_-25px_rgba(34,211,238,0.45)] lg:-translate-y-2 lg:p-8"
          : "relative flex flex-col rounded-3xl border border-navy-100/70 bg-white p-7 shadow-card transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-soft lg:p-8"
      }
      aria-label={`${column.title} — ${column.subtitle}`}
    >
      {isHighlight && (
        <>
          <span
            aria-hidden="true"
            className="absolute -top-16 right-0 h-40 w-40 rounded-full
              bg-accent-400/25 blur-3xl"
          />
          {column.badge && (
            <span
              className="absolute right-5 top-5 inline-flex items-center
                rounded-full border border-accent-400/40 bg-accent-400/15
                px-2.5 py-1 text-[11px] font-semibold uppercase tracking-brand
                text-accent-200"
            >
              {column.badge}
            </span>
          )}
        </>
      )}

      <div
        className={
          isHighlight
            ? "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-400/15 text-accent-300 ring-1 ring-inset ring-accent-400/30"
            : "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-100"
        }
        aria-hidden="true"
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>

      <h3
        className={
          isHighlight
            ? "font-display text-xl font-semibold text-white sm:text-2xl"
            : "font-display text-xl font-semibold text-navy-900 sm:text-2xl"
        }
      >
        {column.title}
      </h3>
      <p
        className={
          isHighlight
            ? "mt-2 text-sm leading-relaxed text-graphite-200"
            : "mt-2 text-sm leading-relaxed text-graphite-600"
        }
      >
        {column.subtitle}
      </p>

      <ul className="mt-6 space-y-3">
        {column.bullets.map((bullet) => (
          <li
            key={bullet}
            className={
              isHighlight
                ? "flex items-start gap-3 text-sm leading-relaxed text-graphite-100"
                : "flex items-start gap-3 text-sm leading-relaxed text-graphite-700"
            }
          >
            <span
              className={
                isHighlight
                  ? "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-400/20 text-accent-300"
                  : "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700"
              }
              aria-hidden="true"
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
