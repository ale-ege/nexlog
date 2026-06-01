import {
  Repeat,
  Truck,
  MapPinned,
  Handshake,
  Boxes,
  FileCheck2,
} from "lucide-react";
import type { IconCard } from "@/types";

export const SOLUTIONS: IconCard[] = [
  {
    icon: Repeat,
    title: "Rotas recorrentes",
    description:
      "Para empresas que realizam coletas e entregas frequentes em regiões definidas, com necessidade de previsibilidade, organização e acompanhamento.",
  },
  {
    icon: Truck,
    title: "Caminhão dedicado",
    description:
      "Operação alinhada à rotina do cliente, com veículo dedicado para atender demandas programadas, rotas fixas ou entregas recorrentes.",
  },
  {
    icon: MapPinned,
    title: "Distribuição programada",
    description:
      "Planejamento e execução de entregas regionais para lojas, clientes, unidades, pontos comerciais ou redes de distribuição.",
  },
  {
    icon: Handshake,
    title: "Parceiro logístico regional",
    description:
      "Apoio para empresas, marcas e distribuidores que precisam estruturar presença regional com operação próxima, flexível e profissional.",
  },
  {
    icon: Boxes,
    title: "Coletas e entregas empresariais",
    description:
      "Atendimento a operações B2B com foco em responsabilidade, comunicação direta e compromisso com prazos.",
  },
  {
    icon: FileCheck2,
    title: "Operação formalizada",
    description:
      "Transporte com emissão documental, CIOT quando aplicável, rastreamento e seguro para maior segurança da empresa contratante.",
  },
];
