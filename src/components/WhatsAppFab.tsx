import { useEffect, useState } from "react";
import { COMPANY } from "@/data/company";
import { onTrack } from "@/lib/analytics";

/**
 * Botão flutuante de WhatsApp.
 * Aparece após o usuário rolar a página para não ser invasivo ao chegar no site.
 */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => setVisible(window.scrollY > 400);
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={COMPANY.whatsappCtaLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar com a NEXLOG no WhatsApp (${COMPANY.whatsappLabel})`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      data-event="click_whatsapp"
      data-cta="whatsapp-fab"
      onClick={onTrack("click_whatsapp", { location: "fab" })}
      className={`fixed bottom-5 right-5 z-40 inline-flex min-h-[52px]
        items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm
        font-semibold text-white
        shadow-[0_18px_40px_-12px_rgba(37,211,102,0.55)]
        ring-1 ring-inset ring-white/15
        transition-[transform,opacity,background-color] duration-300
        hover:bg-[#1ebe57]
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-[#25D366] focus-visible:ring-offset-2
        sm:bottom-7 sm:right-7
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M19.11 17.86c-.27-.13-1.59-.78-1.83-.87-.25-.09-.43-.13-.61.13-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.66 1.12 2.84.14.18 1.95 2.98 4.73 4.18.66.28 1.18.45 1.58.58.66.21 1.27.18 1.75.11.53-.08 1.59-.65 1.82-1.27.22-.62.22-1.16.16-1.27-.07-.11-.25-.18-.52-.31zM16.02 4C9.39 4 4 9.39 4 16.02c0 2.12.56 4.18 1.6 6L4 28l6.18-1.55c1.74.95 3.71 1.45 5.84 1.45 6.63 0 12.02-5.39 12.02-12.02S22.65 4 16.02 4zm0 21.95c-1.92 0-3.79-.51-5.42-1.49l-.39-.23-3.66.92.97-3.59-.25-.4a9.97 9.97 0 01-1.55-5.31c0-5.49 4.49-9.97 9.99-9.97 5.5 0 9.99 4.48 9.99 9.97s-4.49 10.1-9.99 10.1z" />
    </svg>
  );
}
