import { Zap, Building2, Target } from "lucide-react";
import type { ComparisonColumn } from "@/types";

export const COMPARISON_COLUMNS: ComparisonColumn[] = [
  {
    id: "avulso",
    title: "Frete avulso",
    subtitle: "Operação improvisada, sem continuidade.",
    icon: Zap,
    bullets: [
      "Baixa previsibilidade",
      "Dependência diária de disponibilidade",
      "Menor padronização",
      "Maior risco operacional",
      "Dificuldade de controle",
    ],
  },
  {
    id: "nexlog",
    title: "NEXLOG",
    subtitle: "Operação regional dedicada e profissional.",
    icon: Target,
    highlight: true,
    badge: "Recomendado",
    bullets: [
      "Operação regional dedicada",
      "Custo competitivo",
      "Atendimento direto",
      "Rotas recorrentes",
      "Caminhão dedicado",
      "Emissão documental",
      "Rastreamento",
      "Seguro completo",
    ],
  },
  {
    id: "grandes",
    title: "Grandes transportadoras",
    subtitle: "Estrutura robusta, mas pouco flexível.",
    icon: Building2,
    bullets: [
      "Estrutura robusta",
      "Processos mais engessados",
      "Menor flexibilidade regional",
      "Custo maior para operações específicas",
      "Atendimento menos próximo",
    ],
  },
];
