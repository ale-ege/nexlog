/**
 * Helper único para disparar eventos de conversão.
 *
 * Estratégia de envio (ordem de preferência):
 *   1. `window.dataLayer.push(...)` — GTM (preferido).
 *   2. `window.gtag('event', ...)` — GA4 direto (fallback).
 *   3. `console.debug(...)` em desenvolvimento — para inspecionar sem
 *      precisar de GTM/GA configurado.
 *
 * Os eventos chegam ao GA4 mesmo se o usuário sair imediatamente da
 * página (target=_blank), pois `dataLayer.push` é síncrono e o GTM
 * usa `sendBeacon` por baixo dos panos.
 *
 * Lista canônica de eventos esperados (documente novos aqui):
 *
 *   - click_whatsapp           → clique em qualquer link WhatsApp
 *   - click_email              → clique em mailto:
 *   - click_cta_hero           → botões dentro da seção Hero
 *   - click_cta_final          → botões dentro da seção CtaFinal
 *   - click_solicitar_avaliacao→ CTA "Solicitar avaliação..."
 *   - click_avaliar_transporte → CTA "Avaliar transporte..."
 */
export type ConversionEvent =
  | "click_whatsapp"
  | "click_email"
  | "click_cta_hero"
  | "click_cta_final"
  | "click_solicitar_avaliacao"
  | "click_avaliar_transporte";

export interface EventParams {
  /** Origem visual do clique — útil para distinguir botões iguais
   *  em locais diferentes (ex.: "hero", "footer", "fab"). */
  location?: string;
  /** Texto visível do botão clicado, para análises qualitativas. */
  label?: string;
  /** URL de destino (wa.me, mailto, etc.). */
  destination?: string;
  /** Quaisquer outros parâmetros customizados. */
  [key: string]: unknown;
}

/**
 * Dispara um evento de conversão para GTM/GA4.
 * Seguro de chamar mesmo se nenhuma tag estiver instalada.
 */
export function trackEvent(name: ConversionEvent, params: EventParams = {}): void {
  if (typeof window === "undefined") return;

  const payload = {
    event: name,
    ...params,
    // Timestamp ISO para correlacionar com logs do servidor, se necessário.
    event_time: new Date().toISOString(),
  };

  // 1) GTM — dataLayer
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  } else if (typeof window.gtag === "function") {
    // 2) GA4 direto
    window.gtag("event", name, params);
  }

  // 3) Dev visibility
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", name, params);
  }
}

/**
 * Helper específico para botões: cria um handler `onClick` que dispara
 * o evento sem bloquear a navegação padrão do navegador.
 *
 * Uso:
 *   <a onClick={onTrack("click_whatsapp", { location: "hero" })} ... />
 */
export function onTrack(
  name: ConversionEvent,
  params: EventParams = {}
): (event: React.MouseEvent<HTMLElement>) => void {
  return (event) => {
    trackEvent(name, {
      ...params,
      label: params.label ?? event.currentTarget.textContent?.trim().slice(0, 80),
      destination:
        params.destination ??
        (event.currentTarget instanceof HTMLAnchorElement
          ? event.currentTarget.href
          : undefined),
    });
  };
}
