import type { CompanyInfo } from "@/types";

const WHATSAPP_NUMBER = "555191119111";
const WHATSAPP_CTA_MESSAGE =
  "Olá, gostaria de avaliar uma rota logística recorrente para minha empresa.";

export const COMPANY: CompanyInfo = {
  name: "NEXLOG",
  tagline: "Operações logísticas regionais no RS.",
  domain: "nex.log.br",
  email: "contato@nex.log.br",
  whatsappLabel: "051 91119-1111",
  whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}`,
  whatsappCtaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_CTA_MESSAGE
  )}`,
  mailtoLink: "mailto:contato@nex.log.br",
  phoneE164: "+5551911191111",
  region: "Rio Grande do Sul",
};
