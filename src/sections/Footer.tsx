import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { COMPANY } from "@/data/company";
import { NAV_ITEMS } from "@/data/navigation";

// Reaproveita o menu principal e adiciona FAQ como âncora extra.
const FOOTER_LINKS = [
  ...NAV_ITEMS,
  { id: "faq", label: "Perguntas frequentes", href: "#faq" },
];

interface ContactLink {
  icon: typeof Phone;
  label: string;
  href: string;
  external?: boolean;
}

const CONTACT_LINKS: ReadonlyArray<ContactLink> = [
  {
    icon: Phone,
    label: COMPANY.whatsappLabel,
    href: COMPANY.whatsappCtaLink,
    external: true,
  },
  { icon: Mail, label: COMPANY.email, href: COMPANY.mailtoLink },
  {
    icon: Globe,
    label: COMPANY.domain,
    href: `https://${COMPANY.domain}`,
    external: true,
  },
];

const FOOTER_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      aria-labelledby="footer-title"
      className="relative overflow-hidden bg-navy-950 text-graphite-200"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px
          bg-gradient-to-r from-transparent via-accent-400/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72
          rounded-full bg-accent-500/[0.06] blur-3xl"
      />

      <h2 id="footer-title" className="sr-only">
        Rodapé NEXLOG
      </h2>

      <Container size="wide" className="relative py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Coluna 1 — marca */}
          <div className="lg:col-span-5">
            <Logo light size={44} />
            <p className="mt-6 max-w-sm font-display text-base font-semibold leading-snug text-white">
              {COMPANY.tagline}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-graphite-300">
              Parceira logística regional para empresas que precisam de rotas
              dedicadas, caminhão dedicado e operação programada — com
              previsibilidade, segurança e atendimento próximo.
            </p>

            <div
              className="mt-6 inline-flex items-start gap-3 rounded-2xl
                border border-white/10 bg-white/[0.04] px-4 py-3
                backdrop-blur-sm"
              itemScope
              itemType="https://schema.org/Place"
            >
              <span
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-xl bg-accent-400/15 text-accent-300 ring-1 ring-inset
                  ring-accent-400/30"
                aria-hidden="true"
              >
                <MapPin className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <div
                className="leading-tight"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <p className="nx-label text-accent-300">Atuação</p>
                <p className="text-sm font-semibold text-white">
                  <span itemProp="addressLocality">{COMPANY.city}</span>
                  {" · "}
                  <span itemProp="addressRegion">{COMPANY.stateCode}</span>
                </p>
                <p className="mt-0.5 text-xs text-graphite-300">
                  {COMPANY.metroArea}
                </p>
              </div>
            </div>
          </div>

          {/* Coluna 2 — navegação */}
          <nav
            aria-label="Rodapé — navegação"
            className="lg:col-span-3"
          >
            <h3 className="nx-label text-white">Navegação</h3>
            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[28px] items-center text-sm text-graphite-300 transition-colors hover:text-accent-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coluna 3 — contato */}
          <div className="lg:col-span-4">
            <h3 className="nx-label text-white">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {CONTACT_LINKS.map(({ icon: Icon, label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group inline-flex min-h-[28px] items-center gap-3 break-words text-graphite-300 transition-colors hover:text-accent-300"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center
                        rounded-lg border border-white/10 bg-white/[0.04]
                        text-graphite-300 transition-colors duration-300
                        group-hover:border-accent-400/30 group-hover:text-accent-300"
                    >
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                    </span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-xs text-xs leading-relaxed text-graphite-400">
              Atendimento a empresas no Rio Grande do Sul mediante análise de
              rota e operação.
            </p>
          </div>
        </div>

        <div className="mt-12 nx-divider nx-divider--light" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-graphite-400 sm:flex-row sm:items-center">
          <p>
            © {FOOTER_YEAR} {COMPANY.name}. Todos os direitos reservados.
          </p>
          <p>
            Rotas dedicadas · Caminhão dedicado · Transporte programado no RS
          </p>
        </div>
      </Container>
    </footer>
  );
}
