# NEXLOG — Guia de Analytics, Tag Manager e Conversões

Este documento explica como ativar e validar todo o stack de
monitoramento do site da NEXLOG:

- **Google Tag Manager** (GTM) — orquestrador central
- **Google Analytics 4** (GA4) — métricas e eventos
- **Microsoft Clarity** — heatmaps + session replay
- **Google Search Console** (GSC) — SEO

---

## Status atual da instalação

| Ferramenta | Status | Local |
|---|---|---|
| Google Tag Manager | **INSTALADO** (`GTM-KQZ5VVLG`) | `index.html` — snippet no `<head>` + noscript após `<body>` |
| Google Analytics 4 | Configurar **dentro do GTM** (`G-FQFSE62VC0`) | Tag "Google Tag (GA4 Configuration)" no container do GTM |
| Microsoft Clarity | Não instalado | Suporte via env `VITE_CLARITY_PROJECT_ID` ou tag custom HTML no GTM |

> **IMPORTANTE — sem duplicação:** o GTM está direto no HTML.
> **NÃO** preencha `VITE_GTM_CONTAINER_ID` nem `VITE_GA_MEASUREMENT_ID`
> em `.env.local` — o GA4 vai por dentro do GTM. O componente
> `<Analytics />` detecta `window.dataLayer` já criado pelo snippet e
> retorna sem recarregar (segurança extra).

### Como configurar o GA4 dentro do GTM (passo a passo)

1. Acesse https://tagmanager.google.com e abra o container **GTM-KQZ5VVLG**
2. **Tags** → **Nova** → tipo **Google Tag (Google Analytics: GA4 Configuration)**
3. Em "Tag ID" cole: `G-FQFSE62VC0`
4. Trigger: **All Pages** (Initialization)
5. Salve a tag
6. Crie uma **Tag GA4 Event** para cada evento de conversão (lista abaixo):
   - Tag Type: **Google Analytics: GA4 Event**
   - Configuration Tag: a tag criada no passo 2
   - Event Name: `click_whatsapp` (ou outro da lista)
   - Trigger: **Custom Event** com Event name `click_whatsapp`
7. Repita o passo 6 para cada um dos 6 eventos
8. **Submit** (canto superior direito) → versiona e publica

---

## 1. Estrutura técnica do projeto

| Arquivo | Função |
|---|---|
| `.env.example` | Template das variáveis de ambiente (sem IDs reais) |
| `.env.local` | (Você cria) IDs reais — **não commitar**, já está no `.gitignore` |
| `index.html` | Contém os blocos GTM `<script>` e `<noscript>` comentados, prontos para colar |
| `src/components/Analytics.tsx` | Carregador alternativo: injeta GTM + Clarity via env |
| `src/lib/analytics.ts` | Helper `trackEvent()` usado em todos os CTAs |
| `src/vite-env.d.ts` | Tipagem TS das envs e do `window.dataLayer` |
| `public/.htaccess` / `public/_headers` | CSP atualizada para permitir GTM/GA/Clarity |

---

## 2. Duas abordagens — use UMA, nunca as duas

> **Não misture HTML + env.** Senão o GTM carrega duas vezes e cada
> evento é contado em duplicidade.

### Abordagem A — HTML direto (recomendada pelo Google)

1. Abra `index.html`
2. Procure o bloco `<!-- BEGIN GTM -->` no `<head>` e remova os
   marcadores `<!--` / `-->` que envolvem o `<script>`
3. Substitua `GTM-XXXXXXX` pelo seu ID real
4. Repita o mesmo no bloco `<!-- BEGIN GTM NOSCRIPT -->` dentro do `<body>`
5. Rode `npm run build` e suba a pasta `dist/` no cPanel

### Abordagem B — via env (mais moderna, sem editar HTML)

1. Copie o template:
   ```bash
   cp .env.example .env.local
   ```
2. Edite `.env.local` e preencha os IDs:
   ```env
   VITE_GTM_CONTAINER_ID=GTM-ABC1234
   VITE_CLARITY_PROJECT_ID=abc123def4
   # VITE_GA_MEASUREMENT_ID=  ← deixe vazio se usar GTM
   ```
3. Rode `npm run build`
4. Suba a pasta `dist/` no cPanel

O componente `<Analytics />` (em `src/main.tsx`) detecta as envs e
carrega as tags **somente** se os IDs forem válidos (validação regex).
Sem env, nada é carregado — zero impacto em dev.

---

## 3. Google Analytics 4

**Recomendação:** carregar GA4 **dentro do GTM**, não direto.

### Como configurar dentro do GTM
1. No GTM, crie uma nova Tag → tipo **Google Tag (GA4 Configuration)**
2. Cole o `G-XXXXXXXXXX` do seu stream GA4
3. Trigger: **All Pages**
4. Publique o container

### Se for usar GA4 direto (sem GTM)
- Deixe `VITE_GTM_CONTAINER_ID` vazio
- Preencha `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
- O componente `<Analytics />` carrega `gtag.js` automaticamente

---

## 4. Microsoft Clarity

1. Crie um projeto em https://clarity.microsoft.com
2. Copie o **Project ID** (10 caracteres alfanuméricos)
3. Coloque em `.env.local`:
   ```env
   VITE_CLARITY_PROJECT_ID=abc123def4
   ```
4. Rebuild

> Alternativa: você também pode adicionar como tag personalizada
> dentro do GTM (Tag → Custom HTML). Use **uma** das duas opções.

---

## 5. Eventos de conversão implementados

Todos os CTAs principais já disparam eventos via `data-event` +
`onClick` que chama `trackEvent(...)`:

| Evento | Onde dispara | Botão/Link |
|---|---|---|
| `click_whatsapp` | Hero, CtaFinal, Contact, Footer, WhatsAppFab | qualquer botão WhatsApp |
| `click_email` | Contact, Footer | "Enviar e-mail" e links `mailto:` |
| `click_cta_hero` | Hero | ambos CTAs (primário + secundário) |
| `click_cta_final` | CtaFinal | ambos CTAs |
| `click_solicitar_avaliacao` | Navbar, Hero, CtaFinal | botão "Solicitar avaliação..." |
| `click_avaliar_transporte` | DedicatedRoutes, CtaFinal | botão "Solicitar avaliação de transporte" |

### Parâmetros padrão de cada evento

```ts
{
  event: "click_whatsapp",
  location: "hero" | "cta_final" | "contato" | "footer" | "fab" | ...,
  label: "Falar pelo WhatsApp",
  destination: "https://wa.me/5551991119111?text=...",
  event_time: "2026-06-01T18:00:00.000Z"
}
```

### Como marcar como **conversão** no GA4

1. GA4 → **Admin** → **Eventos**
2. Cada evento listado acima vai aparecer assim que receber 1+ hit
3. Toggle "Marcar como conversão" → ON nos eventos relevantes
   (sugestão: `click_whatsapp`, `click_email`, `click_solicitar_avaliacao`)

### Como criar Trigger no GTM
- Trigger type: **Custom Event**
- Event name: `click_whatsapp` (ou outro)
- This trigger fires on: **All Custom Events**
- Use como trigger de uma Tag GA4 Event

---

## 6. Validar que os eventos disparam

### Em desenvolvimento
1. `npm run dev`
2. Abra DevTools → Console
3. Clique em qualquer CTA
4. Você verá: `[analytics] click_whatsapp { location: "hero", ... }`

### Em produção com GTM
1. No GTM, clique em **Preview** (modo Tag Assistant)
2. Cole a URL do site
3. Clique nos CTAs e veja os eventos no painel do Tag Assistant
4. Cada `click_whatsapp` deve aparecer em **Data Layer** → **Messages**

### Em produção com GA4
- GA4 → **Relatórios** → **Tempo real**
- Realize um clique no site
- O evento deve aparecer em ~30 segundos

### Em produção com Clarity
- Clarity → **Recordings** (leva ~2h para primeira sessão aparecer)
- Heatmaps em **Heatmaps** (precisa de 50+ sessões)

---

## 7. Google Search Console

Status atual do site:

| Item | Arquivo | Status |
|---|---|---|
| `sitemap.xml` | `public/sitemap.xml` | OK — submeter em GSC |
| `robots.txt` | `public/robots.txt` | OK |
| Canonical URL | `index.html` (meta `<link rel="canonical">`) | OK — apex (`nex.log.br`) |
| Meta title | `index.html` | OK (≤ 60 chars) |
| Meta description | `index.html` | OK (≤ 160 chars) |
| Open Graph + Twitter | `index.html` | OK |
| Headings | Cada `.tsx` em `src/sections/` | OK — 1 H1 (Hero), H2 por seção |
| Structured Data | `index.html` (JSON-LD) | OK — LocalBusiness + WebSite + FAQPage |

### Submissão GSC
1. https://search.google.com/search-console → adicionar propriedade `nex.log.br`
2. Verificação: **TXT** record no DNS (cPanel → Zone Editor)
3. Após verificação: **Sitemaps** → adicionar `sitemap.xml`
4. **URL Inspection** → cole `https://nex.log.br/` → **Request Indexing**

> O `.htaccess` já redireciona `www.nex.log.br` → `nex.log.br` (301)
> para consolidar autoridade no apex.

---

## 8. Checklist final antes de "ir ao ar"

- [ ] `.env.local` criado com IDs reais
- [ ] OU `index.html` editado com IDs reais nos blocos GTM
- [ ] `npm run build` rodou sem erros
- [ ] `dist/` deployado no cPanel
- [ ] Teste em produção: clique no botão WhatsApp do Hero
- [ ] GA4 Realtime mostrou o evento `click_whatsapp`
- [ ] No GA4 marquei os eventos como **Conversão**
- [ ] Submeti `sitemap.xml` no Search Console
- [ ] Validei `https://nex.log.br/robots.txt` e `/sitemap.xml` no navegador

---

## 9. LGPD / Consent Mode (próximo passo recomendado)

Hoje as tags carregam sem banner de consentimento. Para conformidade
LGPD/GDPR, recomenda-se adicionar **Consent Mode v2** do Google.
Pode ser implementado depois sem alterar o resto do código —
basta inserir o snippet de consentimento antes do GTM e ajustar
o componente `<Analytics />` para esperar a decisão do usuário.
