# SAED — Site Institucional

Landing page comercial do **SAED (Sistema de Apoio Educacional)** — Copiloto Pedagógico Inteligente.

**Domínio:** https://saed.app.br

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Resend (e-mails server-side)

Projeto **desacoplado** do sistema principal em `D:\Incorpore\Saed` (frontend/backend). Não altera o MVP.

## Desenvolvimento

```bash
npm install
cp .env.example .env.local
# Preencha RESEND_API_KEY em .env.local
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## E-mail e notificações (Resend)

Domínio `saed.app.br` verificado no Resend.

### Variáveis de ambiente

| Variável | Obrigatória | Padrão | Uso |
|---|---|---|---|
| `RESEND_API_KEY` | Sim | — | API Key do Resend (somente server-side) |
| `SAED_ADMIN_EMAIL` | Não | `saed.gerenciador@gmail.com` | Destinatário administrativo |
| `SAED_FROM_EMAIL` | Não | `noreply@saed.app.br` | Remetente de notificações internas |
| `SAED_CONTACT_EMAIL` | Não | `contato@saed.app.br` | Remetente da confirmação ao interessado |
| `SAED_SITE_URL` | Não | `https://saed.app.br` | URL canônica / validação de origem |
| `SAED_VISIT_NOTIFICATION_COOLDOWN_MINUTES` | Não | `1440` | Cooldown de notificação de visita |

### Endpoints

- `POST /api/contact` — solicitação de demonstração (admin + confirmação)
- `POST /api/visit` — notificação controlada de nova visita/sessão

### Configuração na Vercel

1. Project → Settings → Environment Variables
2. Adicionar as variáveis acima (pelo menos `RESEND_API_KEY`)
3. Redeploy

## Assets

- `public/logo-wordmark.svg` — wordmark baseado na logo oficial (`Logo (2).jpg`)
- `public/logo-mark.png` — marca visual (`LogoSaed.png`)
- `public/logo-saed.jpg` — arte oficial completa
- `public/favicon.png` — favicon do frontend SAED
