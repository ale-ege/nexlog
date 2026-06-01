import type { CompanyInfo } from "@/types";

// WhatsApp em formato internacional (E.164) sem símbolos.
// Brasil (55) + DDD 51 (RS) + 9 dígitos.
const WHATSAPP_NUMBER = "5551991119111";

// Mensagem pré-preenchida do WhatsApp — sinaliza canal de aquisição
// (Google) para análise de origem e abre conversa orientada a "avaliar
// uma solução de transporte" (não "frete avulso").
const WHATSAPP_CTA_MESSAGE =
  "Olá, encontrei a NEXLOG pelo Google e gostaria de avaliar uma solução de transporte para minha empresa.";

export const COMPANY: CompanyInfo = {
  name: "NEXLOG",
  tagline:
    "Transportadora no RS para transporte de cargas, caminhão dedicado e frete dedicado.",
  domain: "nex.log.br",
  email: "contato@nex.log.br",
  whatsappLabel: "051 99111-9111",
  whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}`,
  whatsappCtaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_CTA_MESSAGE
  )}`,
  mailtoLink: "mailto:contato@nex.log.br",
  phoneE164: "+5551991119111",
  region: "Rio Grande do Sul",
  city: "Nova Santa Rita",
  stateCode: "RS",
  metroArea: "Região metropolitana de Porto Alegre",
};
