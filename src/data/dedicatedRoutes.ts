import {
  Store,
  Building2,
  PackageCheck,
  CalendarClock,
  Users,
  Truck,
} from "lucide-react";
import type { CompanySegment } from "@/types";

/**
 * Exemplos de uso típicos para rotas dedicadas — listados como bullets
 * na seção "Rotas Dedicadas".
 */
export const DEDICATED_USE_CASES: CompanySegment[] = [
  { icon: Store, label: "Entregas recorrentes para lojas" },
  { icon: Building2, label: "Abastecimento de unidades" },
  { icon: PackageCheck, label: "Distribuição regional de produtos" },
  { icon: CalendarClock, label: "Coletas programadas" },
  { icon: Users, label: "Atendimento a clientes fixos" },
  { icon: Truck, label: "Operação com caminhão dedicado" },
];
