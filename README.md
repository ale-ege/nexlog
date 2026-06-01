# NEXLOG — Site institucional

Site institucional one-page da **NEXLOG**, focado em transporte sob demanda,
distribuição regional e apoio logístico para empresas, marcas e operações
comerciais.

> Domínio: **nex.log.br**
> Contato: **051 91119-1111** · **contato@nex.log.br**

---

## Stack

- [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) — ícones minimalistas
- Sem dependências de UI pesadas — componentes próprios, código limpo.

## Estrutura

```
src/
├── App.tsx              # Composição da página
├── main.tsx             # Bootstrap React
├── components/          # Componentes reutilizáveis (Navbar, Logo, Cards, etc.)
├── sections/            # Seções da landing (Hero, About, Solutions, ...)
├── data/                # Conteúdo desacoplado (textos, listas, links)
├── styles/globals.css   # Tailwind + tokens e componentes utilitários
└── types/               # Tipos compartilhados
```

A regra do projeto é: **conteúdo separado da apresentação**. Para mudar textos,
edite os arquivos em `src/data/*` — sem mexer em JSX.

## Scripts

```bash
npm install     # instalar dependências
npm run dev     # ambiente de desenvolvimento (http://localhost:5173)
npm run build   # build de produção (gera /dist)
npm run preview # servir o build localmente
```

## Identidade visual

- **Navy/azul profundo** — confiança, operação, tecnologia
- **Grafite escuro** — sofisticação
- **Branco / cinza claro** — clareza e equilíbrio
- **Ciano (accent)** — destaque corporativo discreto

Tipografia: **Sora** (display) + **Inter** (texto) via Google Fonts.

## SEO & Acessibilidade

- Meta title e description configurados em `index.html`
- Open Graph, Twitter Cards e JSON-LD de `Organization`
- HTML semântico (`header`, `nav`, `main`, `section`, `footer`, `ol`, `ul`)
- Foco visível, skip-link, contraste alto e suporte a `prefers-reduced-motion`

## Publicação

Após `npm run build`, o conteúdo da pasta `dist/` pode ser publicado em
qualquer host estático (Vercel, Netlify, Cloudflare Pages, S3 + CloudFront,
GitHub Pages, etc.).
