import {
  ShieldOff,
  CalendarCheck,
  Wallet,
  MessageSquareText,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";
import type { CompanySegment } from "@/types";

/**
 * Destaques do problema/solução exibidos como chips na seção "Problema do cliente".
 * Cada item representa um ganho da operação NEXLOG em relação ao frete avulso.
 */
export const PROBLEM_BENEFITS: CompanySegment[] = [
  { icon: ShieldOff, label: "Menos improviso" },
  { icon: CalendarCheck, label: "Mais previsibilidade" },
  { icon: Wallet, label: "Custo mais controlado" },
  { icon: MessageSquareText, label: "Atendimento mais próximo" },
  { icon: FileCheck2, label: "Operação documentada" },
  { icon: ShieldCheck, label: "Segurança no transporte" },
];
