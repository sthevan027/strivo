# Strivo Frontend — Documentação Oficial (Mobile/React Native)

Este documento descreve exclusivamente o frontend mobile do Strivo usando React Native com Expo: arquitetura, stack sugerida, fluxos funcionais, contratos de integração (mock), padrões, qualidade e execução local.

▶ Consulte a versão detalhada em `docs/Frontend.md`. Lançamento prioriza experiência mobile-first — veja a seção "Mobile-first (lançamento inicial)" no documento.

—

## 🧭 Visão Geral

O **Strivo** é uma plataforma de lives com forte integração social. O frontend mobile entrega as experiências de:

## 🎯 Funcionalidades MVP (Beta)

### 🔐 1. Autenticação & Perfis
- Login/cadastro (e-mail, Google, redes sociais)
- Perfis básicos (nome, foto, bio, seguidores/seguindo)
- Sistema de seguidores completo

### 📺 2. Lives
- Iniciar e encerrar live (streaming básico)
- Chat em tempo real
- Contador de visualizações e reações
- Categorias de jogos/temas (GTA, LoL, Just Chatting)
- Listagem de lives em destaque/populares

### 🧭 3. Exploração
- Página inicial com lives em alta
- Busca por streamer/jogo
- Destaque para top streamers do mês

### 💬 4. Engajamento
- Curtir e comentar em clipes/postagens
- Ranking de streamers
- Destaque para "streamers do mês"

### 💸 5. Monetização (básico)
- Sistema de apoio direto (doações R$5, R$10, R$25, R$50)
- Histórico de apoios no perfil

### 🧩 6. Infraestrutura
- Streaming estável (WebRTC, RTMP)
- CDN para vídeos
- Banco de dados escalável
- Logs e métricas de desempenho

Funcionalidades pós-beta estão descritas em `docs/Frontend.md`.

—

## 🧱 Stack Sugerida (Frontend Mobile)

- Framework: React Native + Expo (TypeScript)
- Navegação: Expo Router (React Navigation)
- Estilos: NativeWind/Tamagui
- Estado: TanStack Query + Zustand
- Realtime: Socket.IO Client / WebSocket
- Player: expo-av / react-native-video; WebRTC quando aplicável
- Formulários: React Hook Form + Zod
- Storage seguro: expo-secure-store
- Push/OTA: expo-notifications, expo-updates
- Qualidade: ESLint, Prettier, Husky + lint-staged
- Testes: Jest + @testing-library/react-native; Detox/Maestro (E2E)

> Gerenciador de pacotes: usamos pnpm. Todos os comandos abaixo usam pnpm.

—

## ▶️ Como Rodar Localmente

1. Requisitos: Node LTS (>=18), pnpm (>=9)
2. Clonar o repositório e instalar deps:

```bash
pnpm install
```

3. Criar arquivo `.env` com variáveis mínimas (Expo usa EXPO_PUBLIC_*):

```bash
EXPO_PUBLIC_API_URL=http://localhost:4000
EXPO_PUBLIC_SOCKET_URL=http://localhost:4000
EXPO_PUBLIC_CDN_URL=http://localhost:8080
```

4. Executar em desenvolvimento (Expo):

```bash
pnpm expo start
```

5. Rodar em dispositivo/emulador e build local:

```bash
pnpm expo run:android
pnpm expo run:ios
```

—

## 🗂️ Estrutura de Pastas (sugerida)

```
Strivo/
├─ app/                        # Rotas (Expo Router)
├─ assets/                     # Ícones, fontes, imagens
├─ src/
│  ├─ components/
│  ├─ features/                # auth, live, explore, donate...
│  ├─ hooks/
│  ├─ lib/                     # api, socket, analytics, updates
│  ├─ stores/
│  ├─ styles/
│  ├─ types/
│  └─ utils/
├─ .env.example                # Exemplo de env
└─ README.md
```

—

## 🔐 1. Autenticação & Perfis (MVP)

- Login/cadastro por e-mail e provedores (`expo-auth-session`)
- Sessão com tokens (secure storage); proteção de rotas (guards)
- Perfis: nome, foto, bio, contagens (seguidores/seguindo)
- Ação seguir/deixar de seguir, listagens de seguidores/seguindo

Páginas/componentes:
- `app/(auth)/login`, `app/(auth)/signup`
- `app/profile/[username]`
- `ProfileHeader`, `FollowButton`, `Avatar`, `BioEditor`

—

## 📺 2. Lives (MVP)

- Iniciar/encerrar live (UI do streamer) com exibição do status
- Player para espectadores (expo-av/react-native-video; WebRTC quando aplicável)
- Chat em tempo real (mensagens, moderação básica do cliente)
- Contadores: espectadores e reações (com throttle/debounce)
- Categorias de jogos/temas e lives em destaque/populares

Páginas/componentes:
- `app/live/[id]` (controles condicionais para streamer)
- `LivePlayer`, `LiveControls`, `ReactionBar`, `ViewerCount`, `ChatPanel`

—

## 🧭 3. Exploração (MVP)

- Home com lives em alta e destaques
- Busca por streamer/jogo/categoria com sugestões
- Destaque para top streamers do mês

Páginas/componentes:
- `app/(public)/` (Home)
- `app/(public)/search`
- `LiveCard`, `CategoryPill`, `TopStreamersCarousel`

—

## 💬 4. Engajamento (MVP)

- Curtir e comentar em clipes/postagens relacionadas
- Ranking de streamers e destaque de “streamers do mês”

Páginas/componentes:
- `app/(public)/ranking`
- `ClipCard`, `LikeButton`, `CommentList`, `MonthlyHighlight`

—

## 💸 5. Monetização (MVP)

- Apoio direto (doações) com valores fixos: R$5, R$10, R$25, R$50
- Histórico de apoios no perfil do usuário/streamer

Páginas/componentes:
- `DonateModal`, `DonateButton`, `SupportHistory`

—

## 🧩 6. Infraestrutura de Frontend (MVP)

- Streaming: reprodução via HLS.js; fallback para WebRTC quando necessário
- CDN: URLs de mídia vindas do `NEXT_PUBLIC_CDN_URL`
- Observabilidade: ErrorBoundary, logging no cliente e integração futura com Sentry
- Métricas: Web Vitals + eventos customizados (page_view, live_join, donate_click)
- Acessibilidade (WCAG 2.1 AA): navegação por teclado, labels e contrastes adequados
- Performance: imagens otimizadas, lazy-loading, code-splitting, virtualização (chat)

—

## 🔗 Integração (Contratos Mock do Front)

Rotas/serviços que o frontend espera consumir (sujeitos a ajuste durante implementação do backend):

```ts
// Auth
POST /auth/login { email, password }
POST /auth/signup { name, email, password }
POST /auth/provider/{google|...} { token }
GET  /auth/session -> { user, tokens }
POST /auth/logout

// Perfil & social
GET  /profiles/:username
POST /profiles/:username/follow
DELETE /profiles/:username/follow
GET  /profiles/:username/followers
GET  /profiles/:username/following

// Lives
GET  /lives?status=live|scheduled&category=...
GET  /lives/:id -> { playbackUrl, title, category, streamer }
POST /lives/:id/reactions { type }
GET  /lives/:id/viewers

// Exploração
GET  /search?q=...
GET  /top-streamers?period=month

// Engajamento
POST /clips/:id/like
POST /clips/:id/comment { text }
GET  /ranking?period=month

// Monetização
POST /donations { toStreamerId, amount, message? }
GET  /donations/history?userId=...
```

Sockets (eventos cliente):

```ts
connect -> join_live_room { liveId }
on message:new -> { id, user, text, sentAt }
emit message:send -> { text }
on live:viewers -> { count }
on live:reaction -> { type, total }
```

—

## 🧑‍🎨 UI/UX

- Design system com tokens: cores, tipografia, espaçamentos e raios
- Tema escuro padrão; modo claro como futura melhoria
- Padrões de navegação consistentes, feedbacks em tempo real (toasts)
- Estados de carregamento e vazios claros (skeletons)

Paleta base sugerida:
- Primária (destaques): `#53FC18`
- Fundo escuro: `#0F0F0F`
- Cartão: `#1A1A1A`
- Borda: `#2A2A2A`

—

## 🧪 Testes

- Unitários: componentes e hooks críticos (Vitest/Jest)
- Integração: páginas/fluxos (Testing Library)
- E2E: login, iniciar/assistir live, chat, doação (Playwright)

Scripts típicos:

```bash
pnpm test
pnpm test:watch
pnpm e2e
```

—

## 🧹 Qualidade & Padrões

- ESLint + Prettier com checagem em pre-commit (Husky + lint-staged)
- Mensagens de commit (Conventional Commits)
- Nomes de branch: `feat/`, `fix/`, `chore/`, `docs/`
- PRs com checklist: testes passam, cobertura mínima, UX revisada

—

## 🔮 Funcionalidades Futuras (pós-beta)

- Clips automáticos (highlights)
- Lives gravadas (VOD)
- Assinaturas recorrentes (subscribers)
- Integração social (compartilhar live/clipes)
- Notificações push (início de live)
- Selos/achievements de engajamento
- Loja de créditos/moedas virtuais
- Modo escuro/claro customizável
- Ferramentas de moderação (banir, mutar no chat)
- Dashboard do streamer (analytics de audiência)

—

## 👤 Papéis (Contexto)

- Chefe do projeto: liderança estratégica, roadmap e monetização
- Engenheiro de software (este repo): estrutura técnica, documentação, revisão de PRs, qualidade e escalabilidade do frontend

—

## 📄 Licença e Avisos

Este projeto está sob licença proprietária. Todos os direitos reservados.

**© 2024 Strivo. Todos os direitos reservados.**

É proibida a reprodução, distribuição, modificação ou uso comercial sem autorização expressa por escrito. Marcas, design e assets são propriedade da Strivo.