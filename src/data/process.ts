import {
  Search,
  Route,
  FileCheck2,
  Activity,
} from "lucide-react";
import type { ProcessStep } from "@/types";

/**
 * Como a NEXLOG estrutura uma operação — 4 etapas claras,
 * do diagnóstico ao acompanhamento ativo da execução.
 */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Entendemos sua operação",
    description:
      "Mapeamos volume, frequência, cidades atendidas, tipo de carga e restrições da operação.",
    icon: Search,
  },
  {
    number: "02",
    title: "Desenhamos a rota ou modelo dedicado",
    description:
      "Definimos veículo, frequência, janelas de coleta e entrega, responsabilidades e formato de acompanhamento.",
    icon: Route,
  },
  {
    number: "03",
    title: "Formalizamos a operação",
    description:
      "Organizamos condições, custos, responsabilidades e padrão de atendimento para reduzir incertezas.",
    icon: FileCheck2,
  },
  {
    number: "04",
    title: "Acompanhamos a execução",
    description:
      "Realizamos comunicação ativa e ajustes conforme a necessidade da empresa.",
    icon: Activity,
  },
];
