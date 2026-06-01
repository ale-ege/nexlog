import { useCallback, useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_ITEMS } from "@/data/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Lazy initial state evita flash de "navbar transparente" quando
  // o usuário recarrega a página com a rolagem já abaixo do topo.
  const [isScrolled, setIsScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > 12
  );

  // Header sólido quando o menu mobile está aberto, mesmo no topo,
  // para que a logo e o botão fechar tenham contraste correto.
  const useDarkUi = !isScrolled && !isOpen;

  // Throttle do scroll com requestAnimationFrame
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 12);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  // Fecha com Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => setIsOpen((v) => !v), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300
        ${
          isScrolled || isOpen
            ? "border-b border-navy-100/70 bg-white/85 backdrop-blur-md shadow-sm"
            : "border-b border-transparent bg-white/0"
        }`}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-6 lg:px-8"
      >
        <a
          href="#inicio"
          className="-mx-1 inline-flex items-center rounded-lg px-1 py-1"
          aria-label="Ir para o início — NEXLOG"
        >
          <Logo light={useDarkUi} size={40} />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  useDarkUi
                    ? "text-graphite-100 hover:bg-white/10 hover:text-white"
                    : "text-graphite-700 hover:bg-navy-50 hover:text-navy-900"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="#contato" className="nx-btn-primary">
            Solicitar análise de rota
            <ArrowRight
              className="h-4 w-4"
              strokeWidth={2.25}
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Mobile button — adaptativo (claro/escuro) */}
        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border
            transition-colors lg:hidden ${
              useDarkUi
                ? "border-white/15 bg-white/5 text-white hover:bg-white/10"
                : "border-navy-100 bg-white text-navy-800 hover:bg-navy-50"
            }`}
        >
          {isOpen ? (
            <X className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu — fallbacks vh -> dvh para iOS < 15.4 */}
      <div
        id="mobile-menu"
        hidden={!isOpen}
        className="max-h-[calc(100vh-4rem)] max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-navy-100 bg-white shadow-soft sm:max-h-[calc(100vh-5rem)] sm:max-h-[calc(100dvh-5rem)] lg:hidden"
      >
        <div className="px-5 pb-8 pt-4">
          <ul className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="flex min-h-[48px] items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-navy-900 transition-colors hover:bg-navy-50"
                >
                  <span>{item.label}</span>
                  <ArrowRight
                    className="h-4 w-4 text-graphite-400"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            onClick={closeMenu}
            className="nx-btn-primary mt-4 w-full"
          >
            Solicitar análise de rota
            <ArrowRight
              className="h-4 w-4"
              strokeWidth={2.25}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
