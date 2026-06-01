import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { PROCESS_STEPS } from "@/data/process";

export function Process() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="process-title"
      className="relative nx-section overflow-hidden bg-navy-950 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:48px_48px] opacity-25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-1/4 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl"
        aria-hidden="true"
      />

      <Container size="wide" className="relative">
        <SectionHeader
          titleId="process-title"
          eyebrow="Como funciona"
          title="Como estruturamos sua operação — em 4 etapas."
          subtitle="Do entendimento inicial à execução acompanhada, cada operação é construída com método, proximidade e clareza de responsabilidades."
          variant="dark"
        />

        <ol className="relative mt-14 lg:mt-16">
          {/* Linha vertical da timeline — centralizada em desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[26px] top-3 h-[calc(100%-1.5rem)] w-px
              bg-gradient-to-b from-accent-400/60 via-white/15 to-transparent
              md:left-1/2 md:-translate-x-px"
          />

          {PROCESS_STEPS.map((step, idx) => (
            <ProcessItem
              key={step.number}
              step={step}
              alignRight={idx % 2 === 1}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
}

function ProcessItem({
  step,
  alignRight,
}: {
  step: (typeof PROCESS_STEPS)[number];
  alignRight: boolean;
}) {
  const Icon = step.icon;

  return (
    <li className="relative mb-10 last:mb-0 md:mb-16">
      {/* Marcador: glow sutil + cápsula com ícone */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-5 z-10 flex h-[52px] w-[52px]
          items-center justify-center rounded-2xl border border-accent-400/30
          bg-navy-900/95 text-accent-300 shadow-[0_10px_30px_-10px_rgba(34,211,238,0.45)]
          ring-1 ring-inset ring-white/5
          md:left-1/2 md:-translate-x-1/2"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl bg-accent-400/10 blur-md"
        />
        <Icon className="relative h-5 w-5" strokeWidth={1.75} />
      </span>

      {/* Grid 2 colunas no desktop com gap-20 (80px) para respirar bem
          em torno do marker centralizado de 52px. */}
      <div className="ml-[68px] md:ml-0 md:grid md:grid-cols-2 md:gap-20">
        <div
          className={
            alignRight
              ? "md:col-start-2 md:pl-12"
              : "md:col-start-1 md:pr-12 md:text-right"
          }
        >
          <div
            className="rounded-2xl border border-white/10 bg-white/[0.04]
              p-6 shadow-card backdrop-blur-sm
              transition-[border-color,background-color] duration-300
              hover:border-accent-400/40 hover:bg-white/[0.06]"
          >
            <div
              className={`flex items-baseline gap-3 ${
                !alignRight ? "md:justify-end" : ""
              }`}
            >
              <span
                className="font-display text-3xl font-extrabold leading-none
                  bg-gradient-to-r from-accent-300 to-accent-400
                  bg-clip-text text-transparent sm:text-4xl"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <span className="nx-label text-accent-300">Etapa</span>
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold text-white sm:text-xl">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-graphite-200">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
