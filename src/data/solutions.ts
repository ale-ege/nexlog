import { Route, Truck, CalendarClock, Handshake } from "lucide-react";
import type { IconCard } from "@/types";

/**
 * 4 soluções principais, exatamente como definidas no briefing comercial.
 * Cada card representa um produto/modelo de operação que a NEXLOG entrega.
 */
export const SOLUTIONS: IconCard[] = [
  {
    icon: Route,
    title: "Rota Dedicada Regional",
    description:
      "Para empresas que fazem entregas recorrentes entre cidades do Rio Grande do Sul e precisam de previsibilidade, segurança e padrão de atendimento.",
  },
  {
    icon: Truck,
    title: "Caminhão Dedicado",
    description:
      "Disponibilização de veículo dedicado para operações fixas, recorrentes ou programadas, reduzindo improvisos e aumentando o controle da operação.",
  },
  {
    icon: CalendarClock,
    title: "Operação Programada",
    description:
      "Planejamento de coletas e entregas com frequência definida, janelas combinadas e acompanhamento ativo da execução.",
  },
  {
    icon: Handshake,
    title: "Parceria Logística Local",
    description:
      "Modelo ideal para empresas que buscam uma transportadora próxima, flexível e comprometida com a rotina do cliente.",
  },
];
