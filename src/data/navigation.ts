import type { NavItem } from "@/types";

/**
 * Menu principal — 6 itens balanceados para desktop.
 * Removemos "Para Quem" e "Diferenciais" do menu (continuam visíveis
 * por scroll) para abrir espaço para "Sobre" e "Como Funciona", que
 * são as queries mais buscadas por novos visitantes.
 */
export const NAV_ITEMS: NavItem[] = [
  { id: "inicio", label: "Início", href: "#inicio" },
  { id: "sobre", label: "Sobre", href: "#sobre" },
  { id: "solucoes", label: "Soluções", href: "#solucoes" },
  { id: "como-funciona", label: "Como Funciona", href: "#como-funciona" },
  { id: "faq", label: "FAQ", href: "#faq" },
  { id: "contato", label: "Contato", href: "#contato" },
];
