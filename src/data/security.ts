import {
  MessageSquare,
  Repeat,
  CalendarCheck,
  MapPin,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";
import type { IconCard } from "@/types";

/**
 * 6 pontos da seção "Segurança e previsibilidade".
 * Foco em comportamento operacional (comunicação, planejamento,
 * responsabilidade) — e não em "marketing técnico".
 */
export const SECURITY_CARDS: IconCard[] = [
  {
    icon: MessageSquare,
    title: "Comunicação direta durante a operação",
    description:
      "Canal aberto com quem opera. Sem intermediários, sem desencontros — informação clara em cada etapa.",
  },
  {
    icon: Repeat,
    title: "Planejamento de rotas recorrentes",
    description:
      "Rotas estruturadas com frequência definida, janelas combinadas e visão de longo prazo da operação.",
  },
  {
    icon: CalendarCheck,
    title: "Apoio para operações programadas",
    description:
      "Coletas e entregas organizadas com antecedência, reduzindo correria e contratações de última hora.",
  },
  {
    icon: MapPin,
    title: "Atendimento próximo e regional",
    description:
      "Equipe presente no Rio Grande do Sul, com conhecimento das rotas, das cidades e da rotina das empresas locais.",
  },
  {
    icon: ShieldCheck,
    title: "Responsabilidade com prazos e cargas",
    description:
      "Cada operação é tratada com cuidado, do recebimento à entrega — com responsabilidade clara em cada etapa.",
  },
  {
    icon: FileCheck2,
    title: "Operação formalizada",
    description:
      "Emissão documental, CIOT quando aplicável e formalização adequada para empresas que exigem padrão profissional.",
  },
];
