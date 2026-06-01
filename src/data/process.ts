import { Search, ClipboardList, FileCheck2, Activity } from "lucide-react";
import type { ProcessStep } from "@/types";

/**
 * Como a NEXLOG estrutura uma operação de transporte — 4 etapas
 * consultivas, do entendimento da necessidade ao acompanhamento.
 *
 * O texto do briefing reforça que a NEXLOG é consultiva: antes de
 * falar em preço, entende a operação.
 */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Entendemos sua necessidade",
    description:
      "Mapeamos origem, destino, frequência, tipo de carga, volume, horários, restrições e expectativa da operação.",
    icon: Search,
  },
  {
    number: "02",
    title: "Avaliamos o melhor modelo de transporte",
    description:
      "Analisamos se a operação exige transporte de cargas pontual, caminhão dedicado, frete dedicado, rota programada ou uma solução recorrente.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Organizamos a operação",
    description:
      "Definimos frequência, veículo, janelas de coleta e entrega, responsabilidades e formato de comunicação com a empresa.",
    icon: FileCheck2,
  },
  {
    number: "04",
    title: "Acompanhamos a execução",
    description:
      "Mantemos comunicação direta durante a operação e ajustamos o modelo conforme a evolução da demanda.",
    icon: Activity,
  },
];
