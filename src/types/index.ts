import type { LucideIcon } from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  domain: string;
  email: string;
  whatsappLabel: string;
  /** Link de WhatsApp puro, sem mensagem (uso institucional). */
  whatsappLink: string;
  /** Link de WhatsApp com mensagem pré-preenchida (uso em CTAs). */
  whatsappCtaLink: string;
  mailtoLink: string;
  /** Telefone em formato internacional (E.164) para schema.org / tel:. */
  phoneE164: string;
  /** Região de atuação (estado/área administrativa). */
  region: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface IconCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CompanySegment {
  icon: LucideIcon;
  label: string;
}

export interface ComparisonColumn {
  id: string;
  title: string;
  subtitle: string;
  bullets: string[];
  /** Coluna em destaque (visual diferenciado). */
  highlight?: boolean;
  /** Selo opcional exibido no topo da coluna em destaque. */
  badge?: string;
  icon: LucideIcon;
}
