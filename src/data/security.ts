import {
  FileText,
  FileCheck2,
  Satellite,
  ShieldCheck,
  MessageSquare,
  RefreshCw,
} from "lucide-react";
import type { IconCard } from "@/types";

export const SECURITY_CARDS: IconCard[] = [
  {
    icon: FileText,
    title: "Emissão documental",
    description:
      "Operações com emissão dos documentos necessários para transporte empresarial e controle da operação.",
  },
  {
    icon: FileCheck2,
    title: "CIOT quando aplicável",
    description:
      "Formalização da operação conforme exigências do transporte rodoviário de cargas.",
  },
  {
    icon: Satellite,
    title: "Caminhões rastreados",
    description:
      "Monitoramento dos veículos para maior controle, segurança e acompanhamento das rotas.",
  },
  {
    icon: ShieldCheck,
    title: "Seguro completo",
    description:
      "Cobertura para carga, terceiros e caminhão, reduzindo riscos e aumentando a tranquilidade do contratante.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação direta",
    description:
      "Contato próximo para alinhamento, acompanhamento e ajustes operacionais.",
  },
  {
    icon: RefreshCw,
    title: "Compromisso com continuidade",
    description:
      "Operação pensada para rotas recorrentes, com foco em estabilidade e relacionamento de longo prazo.",
  },
];
