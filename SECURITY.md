# Segurança — NEXLOG

Site estático (Vite + React). Sem backend, sem banco, sem formulários,
sem autenticação. A superfície de ataque é mínima, mas seguimos boas
práticas de defesa em profundidade.

## Estado do código

| Item | Status |
| --- | --- |
| Vulnerabilidades em dependências (`npm audit`) | **0** |
| `dangerouslySetInnerHTML` | não usado |
| `eval` / `new Function` / `document.write` | não usado |
| `console.log` / `debugger` em produção | nenhum |
| Variáveis de ambiente expostas no bundle | nenhuma (não há `import.meta.env.*`) |
| Sourcemaps publicados em produção | desabilitados (`vite.config.ts`) |
| `target="_blank"` sem `rel="noopener noreferrer"` | 0 (todos protegidos) |
| Style inline (`style={{ ... }}`) | 0 — viabiliza CSP sem `'unsafe-inline'` |
| Secrets em commits / arquivos | nenhum |
| Comentários expondo dados internos | nenhum |

## Defesa em profundidade no HTML

`index.html` já entrega via `<meta>`:

- `Content-Security-Policy` rigorosa
- `referrer="strict-origin-when-cross-origin"`
- `format-detection=telephone=no`
- `color-scheme=light`
- `theme-color`
- `robots`

## Headers HTTP — configurar no host

Os headers HTTP têm prioridade sobre meta tags. **Sempre** configure no host:

### Netlify / Cloudflare Pages

O arquivo `public/_headers` já está pronto e é copiado para `dist/_headers`
no build. Os hosts o leem automaticamente.

### Vercel

Crie um `vercel.json` na raiz:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Content-Security-Policy", "value": "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; manifest-src 'self'; upgrade-insecure-requests" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), interest-cohort=()" },
        { "key": "Cross-Origin-Opener-Policy", "value": "same-origin" },
        { "key": "Cross-Origin-Resource-Policy", "value": "same-origin" }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    }
  ]
}
```

### Nginx

```nginx
add_header Content-Security-Policy "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; manifest-src 'self'; upgrade-insecure-requests" always;
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), interest-cohort=()" always;
add_header Cross-Origin-Opener-Policy "same-origin" always;
add_header Cross-Origin-Resource-Policy "same-origin" always;

location ^~ /assets/ {
  add_header Cache-Control "public, max-age=31536000, immutable";
}
```

## Antes de publicar — checklist

- [ ] Servir somente via HTTPS (Let's Encrypt / TLS 1.2+).
- [ ] Garantir que os headers acima estão sendo entregues
  (verificar em <https://securityheaders.com>).
- [ ] Validar CSP em <https://csp-evaluator.withgoogle.com/>.
- [ ] Confirmar que `dist/` não foi commitado.
- [ ] Confirmar que `/sitemap.xml` aparece em
  <https://search.google.com/search-console>.
- [ ] Atualizar `<lastmod>` do `sitemap.xml` a cada deploy de conteúdo
  (ou automatizar via script).
- [ ] Verificar o `.well-known/security.txt` (opcional, recomendado)
  apontando contato de segurança.

## Reporte de vulnerabilidades

Envie para **contato@nex.log.br** com o assunto **`[security]`**.
