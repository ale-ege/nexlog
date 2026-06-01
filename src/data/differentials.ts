import { Headphones, Building2, ShieldCheck, MapPinned } from "lucide-react";
import type { IconCard } from "@/types";

/**
 * Diferenciais comerciais — argumentos que respondem
 * "por que escolher a NEXLOG como transportadora no RS?"
 */
export const DIFFERENTIALS: IconCard[] = [
  {
    icon: Headphones,
    title: "Atendimento direto",
    description:
      "Você fala com quem entende da operação, sem camadas desnecessárias e sem perder tempo.",
  },
  {
    icon: Building2,
    title: "Foco em empresas",
    description:
      "Atuamos com transporte de cargas para empresas que precisam de organização, regularidade e responsabilidade.",
  },
  {
    icon: ShieldCheck,
    title: "Previsibilidade operacional",
    description:
      "Menos improviso, menos urgência e mais controle sobre coletas, entregas e rotas.",
  },
  {
    icon: MapPinned,
    title: "Flexibilidade regional",
    description:
      "Estruturamos o transporte conforme a recorrência, volume e necessidade da empresa no Rio Grande do Sul.",
  },
];
