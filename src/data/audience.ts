import { Factory, Boxes, ShoppingBag, Repeat } from "lucide-react";
import type { IconCard } from "@/types";

/**
 * Públicos-alvo da NEXLOG — empresas com rotina logística que querem
 * sair do frete avulso sem precisar montar frota própria.
 *
 * Ordem pensada para conversão: do mais óbvio (indústria/distribuidor)
 * para o mais específico (operação fixa com caminhão dedicado).
 */
export const AUDIENCE_CARDS: IconCard[] = [
  {
    icon: Factory,
    title: "Indústrias regionais",
    description:
      "Entregas programadas para clientes, fornecedores e centros de distribuição.",
  },
  {
    icon: Boxes,
    title: "Distribuidores",
    description:
      "Rotas recorrentes com previsibilidade de coleta e entrega.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerces e operações regionais",
    description:
      "Apoio logístico para entregas no RS e conexões com outros estados.",
  },
  {
    icon: Repeat,
    title: "Empresas com operação fixa",
    description:
      "Caminhão dedicado para demandas recorrentes e processos padronizados.",
  },
];
