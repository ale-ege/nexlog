/// <reference types="vite/client" />

declare module "*.css";
declare module "*.svg" {
  const src: string;
  export default src;
}

/**
 * Tipagem das variáveis de ambiente expostas ao bundle do navegador.
 * Veja `.env.example` para descrição de cada uma.
 */
interface ImportMetaEnv {
  /** Google Tag Manager container ID — formato GTM-XXXXXXX. */
  readonly VITE_GTM_CONTAINER_ID?: string;
  /** Google Analytics 4 measurement ID — formato G-XXXXXXXXXX. */
  readonly VITE_GA_MEASUREMENT_ID?: string;
  /** Microsoft Clarity project ID — formato alfanumérico de 10 chars. */
  readonly VITE_CLARITY_PROJECT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/**
 * Tipagem do `window.dataLayer` (GTM) e `window.gtag` (GA4 direto),
 * para evitar usos com `any` no helper `trackEvent`.
 */
interface Window {
  dataLayer?: Array<Record<string, unknown>>;
  gtag?: (...args: unknown[]) => void;
}
