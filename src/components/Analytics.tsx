import { useEffect } from "react";

/**
 * Carregador de tags de analytics — Google Tag Manager + Microsoft Clarity.
 *
 * As tags são carregadas APENAS quando as envs correspondentes estão
 * definidas (em `.env.local`). Sem IDs, nada é injetado — zero impacto
 * em dev e em ambientes sem configuração.
 *
 * Recomendação: configurar o GA4 dentro do GTM (não duplicar via env
 * VITE_GA_MEASUREMENT_ID). Veja `docs/ANALYTICS.md`.
 *
 * Alternativa ao componente: você também pode colar o snippet oficial
 * do GTM diretamente no `index.html` (head + noscript). Use uma das
 * duas abordagens, NUNCA as duas (evita duplicidade de tags).
 */
const GTM_ID = import.meta.env.VITE_GTM_CONTAINER_ID;
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const CLARITY_ID = import.meta.env.VITE_CLARITY_PROJECT_ID;

// Padrões de validação simples — evitam injetar tags com placeholders
// como "GTM-XXXXXXX" ou strings vazias herdadas do template.
const GTM_PATTERN = /^GTM-[A-Z0-9]{6,}$/;
const GA_PATTERN = /^G-[A-Z0-9]{8,}$/;
const CLARITY_PATTERN = /^[a-z0-9]{8,12}$/;

export function Analytics() {
  useEffect(() => {
    if (GTM_ID && GTM_PATTERN.test(GTM_ID)) {
      loadGTM(GTM_ID);
    } else if (GA_ID && GA_PATTERN.test(GA_ID)) {
      // Fallback: GA4 direto, sem GTM.
      loadGA4(GA_ID);
    }

    if (CLARITY_ID && CLARITY_PATTERN.test(CLARITY_ID)) {
      loadClarity(CLARITY_ID);
    }
  }, []);

  return null;
}

/**
 * Snippet oficial do Google Tag Manager — convertido para JS.
 * https://developers.google.com/tag-platform/tag-manager/web
 */
function loadGTM(id: string): void {
  if (window.dataLayer) return; // já carregado
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "gtm.start": Date.now(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}

/**
 * Snippet oficial do Google Analytics 4 — quando NÃO há GTM.
 * https://developers.google.com/analytics/devguides/collection/ga4
 */
function loadGA4(id: string): void {
  if (window.gtag) return; // já carregado

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  // gtag() é apenas um wrapper que empurra no dataLayer.
  window.gtag = function gtag(...args: unknown[]): void {
    window.dataLayer!.push(args as unknown as Record<string, unknown>);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, { anonymize_ip: true });
}

/**
 * Snippet oficial do Microsoft Clarity.
 * https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-setup
 */
function loadClarity(id: string): void {
  // Detecta tag já presente (caso o usuário tenha colado direto no HTML).
  if (document.querySelector(`script[src*="clarity.ms/tag/"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}
