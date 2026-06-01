import type { CompanyInfo } from "@/types";

// WhatsApp em formato internacional (E.164) sem símbolos.
// Brasil (55) + DDD 51 (RS) + 9 dígitos.
const WHATSAPP_NUMBER = "5551990000009";

// Mensagem pré-preenchida do WhatsApp — alinhada ao posicionamento:
// rota dedicada / operação recorrente (e não "frete avulso").
const WHATSAPP_CTA_MESSAGE =
  "Olá, gostaria de avaliar uma rota dedicada para minha empresa no RS.";

export const COMPANY: CompanyInfo = {
  name: "NEXLOG",
  tagline: "Transporte dedicado e operação programada no Rio Grande do Sul.",
  domain: "nex.log.br",
  email: "contato@nexpixai.com",
  whatsappLabel: "051 99000-0009",
  whatsappLink: `https://wa.me/${WHATSAPP_NUMBER}`,
  whatsappCtaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_CTA_MESSAGE
  )}`,
  mailtoLink: "mailto:contato@nexpixai.com",
  phoneE164: "+5551990000009",
  region: "Rio Grande do Sul",
};
