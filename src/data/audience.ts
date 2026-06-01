import { Factory, Boxes, ShoppingBag, Truck } from "lucide-react";
import type { IconCard } from "@/types";

/**
 * Públicos-alvo da NEXLOG — empresas com rotina logística que precisam
 * de transporte regular sem ter frota própria.
 */
export const AUDIENCE_CARDS: IconCard[] = [
  {
    icon: Factory,
    title: "Indústrias regionais",
    description:
      "Transporte de cargas para clientes, fornecedores, centros de distribuição e unidades operacionais.",
  },
  {
    icon: Boxes,
    title: "Distribuidores",
    description:
      "Rotas recorrentes para empresas que precisam manter regularidade nas coletas e entregas.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerces regionais",
    description:
      "Apoio para operações de entrega no Rio Grande do Sul e conexões estratégicas com outras regiões.",
  },
  {
    icon: Truck,
    title: "Empresas com operação fixa",
    description:
      "Caminhão dedicado e frete dedicado para demandas recorrentes, processos padronizados e maior controle logístico.",
  },
];
