import { Headphones, Ruler, ShieldCheck, HandHeart } from "lucide-react";
import type { IconCard } from "@/types";

/**
 * Diferenciais comerciais — argumentos que respondem
 * "por que escolher a NEXLOG?" do ponto de vista do contratante.
 */
export const DIFFERENTIALS: IconCard[] = [
  {
    icon: Headphones,
    title: "Atendimento direto",
    description:
      "Você fala com quem entende da operação, sem camadas desnecessárias e sem perder tempo.",
  },
  {
    icon: Ruler,
    title: "Rotas sob medida",
    description:
      "Desenhamos a solução conforme a recorrência, volume e necessidade da empresa.",
  },
  {
    icon: ShieldCheck,
    title: "Previsibilidade operacional",
    description:
      "Menos improviso, menos urgência e mais controle sobre a entrega.",
  },
  {
    icon: HandHeart,
    title: "Parceria de longo prazo",
    description:
      "Não buscamos apenas fretes isolados. Buscamos operações recorrentes e bem estruturadas.",
  },
];
