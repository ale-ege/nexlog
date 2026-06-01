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
  /** Cidade-sede da operação (usada em SEO local e Footer). */
  city: string;
  /** Sigla do estado, ex: "RS". */
  stateCode: string;
  /** Contexto regional, ex: "Região metropolitana de Porto Alegre". */
  metroArea: string;
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
