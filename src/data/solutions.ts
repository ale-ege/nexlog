import {
  PackageCheck,
  Truck,
  Route,
  CalendarClock,
  Repeat,
  MapPinned,
} from "lucide-react";
import type { IconCard } from "@/types";

/**
 * 6 soluções de transporte oferecidas para empresas no RS.
 * Ordem pensada para SEO + jornada de leitura: começa pelo termo mais
 * buscado (transporte de cargas) e termina no diferencial regional.
 */
export const SOLUTIONS: IconCard[] = [
  {
    icon: PackageCheck,
    title: "Transporte de Cargas no RS",
    description:
      "Transporte regional para empresas que precisam movimentar cargas entre cidades do Rio Grande do Sul com organização, responsabilidade e atendimento próximo.",
  },
  {
    icon: Truck,
    title: "Caminhão Dedicado",
    description:
      "Disponibilização de caminhão dedicado para operações fixas, recorrentes ou programadas, aumentando o controle da empresa sobre sua logística.",
  },
  {
    icon: Route,
    title: "Frete Dedicado para Empresas",
    description:
      "Modelo indicado para empresas que precisam de uma operação mais exclusiva, com planejamento de rota, frequência definida e menor dependência de fretes improvisados.",
  },
  {
    icon: CalendarClock,
    title: "Rotas Programadas",
    description:
      "Planejamento de coletas e entregas com dias, horários e destinos combinados, trazendo mais previsibilidade para a rotina logística.",
  },
  {
    icon: Repeat,
    title: "Rotas Dedicadas",
    description:
      "Operações estruturadas para atender demandas recorrentes, com foco em regularidade, comunicação direta e acompanhamento da execução.",
  },
  {
    icon: MapPinned,
    title: "Logística Regional",
    description:
      "Apoio logístico para empresas que precisam atender clientes, fornecedores ou unidades operacionais no Rio Grande do Sul.",
  },
];
