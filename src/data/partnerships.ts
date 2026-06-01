import {
  Repeat,
  MapPinned,
  Truck,
  Store,
  CalendarClock,
  Building2,
} from "lucide-react";
import type { IconCard } from "@/types";

/**
 * 6 cards intencionalmente: garante grid 2 ou 3 colunas perfeito (sem órfão).
 * "Operações empresariais recorrentes" foi removido por ser redundante com
 * "Rotas recorrentes" + "Caminhão dedicado".
 */
export const PARTNERSHIPS: IconCard[] = [
  {
    icon: Repeat,
    title: "Rotas recorrentes",
    description:
      "Estruturamos rotas regionais com frequência definida e acompanhamento próximo para empresas com demanda constante.",
  },
  {
    icon: MapPinned,
    title: "Distribuição regional",
    description:
      "Atendimento programado para lojas, unidades e clientes em diferentes regiões do Rio Grande do Sul.",
  },
  {
    icon: Truck,
    title: "Caminhão dedicado",
    description:
      "Veículo dedicado à rotina da empresa, com previsibilidade de horários, custo e responsabilidades.",
  },
  {
    icon: Store,
    title: "Abastecimento de lojas",
    description:
      "Reposição programada para redes varejistas e operações com múltiplos pontos de entrega.",
  },
  {
    icon: CalendarClock,
    title: "Coletas e entregas programadas",
    description:
      "Coletas recorrentes para indústrias, distribuidores e e-commerces regionais com rotina logística no RS.",
  },
  {
    icon: Building2,
    title: "Presença regional de marcas",
    description:
      "Suporte logístico para marcas e distribuidores que querem estruturar presença ativa no RS.",
  },
];
