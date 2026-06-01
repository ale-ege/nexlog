import {
  Search,
  Route,
  Handshake,
  Truck,
  TrendingUp,
} from "lucide-react";
import type { ProcessStep } from "@/types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Diagnóstico da operação",
    description:
      "Entendemos a demanda, região de atendimento, frequência, tipo de carga, volume e necessidades específicas.",
    icon: Search,
  },
  {
    number: "02",
    title: "Desenho da rota",
    description:
      "Estruturamos o melhor modelo logístico: rota recorrente, caminhão dedicado, distribuição programada ou operação regional personalizada.",
    icon: Route,
  },
  {
    number: "03",
    title: "Definição comercial e operacional",
    description:
      "Alinhamos frequência, horários, documentação, responsabilidades, custos e critérios de acompanhamento.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Execução com controle",
    description:
      "Operamos com veículos rastreados, emissão documental, comunicação direta e compromisso com os prazos.",
    icon: Truck,
  },
  {
    number: "05",
    title: "Acompanhamento e melhoria",
    description:
      "Monitoramos a operação e ajustamos o modelo conforme a demanda cresce ou muda.",
    icon: TrendingUp,
  },
];
