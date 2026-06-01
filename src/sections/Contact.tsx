import type { ReactNode } from "react";
import { Mail, Phone, Globe, ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { COMPANY } from "@/data/company";

interface ContactRow {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

const CONTACT_ROWS: ContactRow[] = [
  {
    icon: <Phone className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />,
    label: "WhatsApp",
    value: COMPANY.whatsappLabel,
    href: COMPANY.whatsappCtaLink,
    external: true,
  },
  {
    icon: <Mail className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />,
    label: "E-mail",
    value: COMPANY.email,
    href: COMPANY.mailtoLink,
  },
  {
    icon: <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />,
    label: "Localização",
    value: `${COMPANY.city} · ${COMPANY.stateCode}`,
  },
  {
    icon: <Globe className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />,
    label: "Site",
    value: COMPANY.domain,
    href: `https://${COMPANY.domain}`,
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="nx-section bg-white"
    >
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeader
              titleId="contact-title"
              eyebrow="Contato"
              title="Fale com a NEXLOG sobre o transporte da sua empresa"
              subtitle="Avaliamos transporte de cargas, caminhão dedicado, frete dedicado e rotas programadas para empresas no Rio Grande do Sul. Cada solução é desenhada conforme a rotina da operação."
            />

            <p className="mt-6 text-sm leading-relaxed text-graphite-700 sm:text-base">
              Atendimento a empresas no Rio Grande do Sul mediante análise de
              rota e operação. Informe origem, destino, frequência, tipo de
              carga e necessidade da operação.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={COMPANY.whatsappCtaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="nx-btn-primary"
              >
                Falar pelo WhatsApp
                <ArrowRight
                  className="h-4 w-4"
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
              </a>
              <a href={COMPANY.mailtoLink} className="nx-btn-secondary">
                Enviar e-mail
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-navy-100 bg-gradient-to-br from-white to-graphite-50 p-2 shadow-card">
              <ul className="divide-y divide-navy-100">
                {CONTACT_ROWS.map((row) => (
                  <ContactRow key={row.label} {...row} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({ icon, label, value, href, external }: ContactRow) {
  const inner = (
    <>
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl
          bg-navy-50 text-navy-700 ring-1 ring-inset ring-navy-100 transition-colors
          ${
            href
              ? "group-hover:bg-accent-500/10 group-hover:text-accent-500 group-hover:ring-accent-400/30"
              : ""
          }`}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="nx-label text-graphite-500">{label}</span>
        <span className="mt-1 truncate font-display text-base font-semibold text-navy-900">
          {value}
        </span>
      </span>
      {href && (
        <ArrowRight
          className="h-4 w-4 shrink-0 text-graphite-400 transition-transform group-hover:translate-x-0.5 group-hover:text-accent-500"
          strokeWidth={2}
          aria-hidden="true"
        />
      )}
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="group flex items-center gap-4 rounded-2xl p-4 transition-colors hover:bg-white sm:p-5"
        >
          {inner}
        </a>
      ) : (
        <div className="flex items-center gap-4 rounded-2xl p-4 sm:p-5">
          {inner}
        </div>
      )}
    </li>
  );
}
