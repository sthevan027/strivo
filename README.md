# Protótipos de Design - Strivo

## 📱 Sobre os Protótipos

Esta pasta contém os protótipos de design em HTML/CSS da plataforma Strivo. Estes arquivos representam a interface visual e a experiência do usuário que será implementada na versão final da aplicação React.

## 🎨 Design System

### Paleta de Cores
- **Primária**: `#53fc18` (Verde vibrante)
- **Primária Escura**: `#45d614`
- **Fundo Escuro**: `#0f0f0f`
- **Card Escuro**: `#1a1a1a`
- **Borda Escura**: `#2a2a2a`

### Tecnologias Utilizadas
- **HTML5**: Estrutura semântica
- **CSS3**: Estilos e animações
- **Tailwind CSS**: Framework CSS para estilização rápida
- **JavaScript**: Interatividade básica

## 📄 Arquivos e Conteúdo

### 1. `index.html` - Página Inicial
**Conteúdo Principal:**
- **Header**: Logo Strivo, barra de pesquisa, ícones de perfil e configurações
- **Top 5 Streamers do Mês**: Cards com avatares circulares e indicadores de status online
- **Lives em Destaque**: Grid com 3 lives principais (GTA V, Minecraft, League of Legends)
  - Cada card mostra thumbnail, status "AO VIVO", contador de espectadores
  - Streamers: Pierry (GTA V), CrisGamer (Minecraft), LucaPlay (LoL)
- **Principais Categorias**: Cards horizontais com gradientes coloridos
  - Jogos de Tiro, Just Chatting, Interações, Cooking
- **Seção Jogos de Tiro**: Placeholder para conteúdo futuro

**Funcionalidades:**
- Navegação entre páginas via JavaScript
- Layout responsivo com grid system
- Efeitos hover e transições suaves

### 2. `profile.html` - Perfil do Usuário
**Conteúdo Principal:**
- **Header**: Logo Strivo com navegação (home, busca, configurações)
- **Card de Perfil**: Layout centralizado estilo Instagram
  - Avatar circular com borda verde gradiente
  - Username "strivo" e bio "Connecting creators"
  - Botões de ação: mensagens, editar, notificações, "Editar Perfil"
- **Estatísticas**: Grid 3x1 com números
  - 1,8M seguidores, 103 seguindo, 529 posts
- **Abas**: Posts (ativa), Klips, Lives
- **Seção Posts**: Estado vazio com mensagem motivacional

**Funcionalidades:**
- Sistema de abas com JavaScript
- Navegação entre páginas
- Layout mobile-first

### 3. `categories.html` - Categorias e Interações
**Conteúdo Principal:**
- **Header**: Botão voltar, logo Strivo, ícone de busca
- **Principais Categorias Ao Vivo**: Grid com 3 categorias
  - GTA V (2.1K espectadores), PUBG Mobile (1.8K), Valorant (1.5K)
  - Cada card com ícone colorido e contador de espectadores
- **Apenas Interação**: 2 cards com gradientes
  - Card 1: "strando" com 420 espectadores (gradiente vermelho-laranja)
  - Card 2: "CookChef" - Live de culinária (320 espectadores, gradiente laranja-amarelo)
- **Artes Visuais & Sons**: 2 cards
  - Card 1: "onteúdo" com 890 espectadores (gradiente teal-azul)
  - Card 2: "DJMaster" - DJ Set eletrônico (3.2K espectadores, gradiente roxo-violeta)

**Funcionalidades:**
- Cards interativos com hover effects
- Layout responsivo
- Navegação entre páginas

### 4. `support.html` - Sistema de Apoio/Doação
**Conteúdo Principal:**
- **Header**: Botão voltar, logo Strivo
- **Perfil do Streamer**: Avatar circular com nome "Striver"
- **Seção de Apoio**: Card principal
  - Título "Apoyar" e subtítulo "Escolha um valor"
  - Grid 4x1 com valores: R$ 5, R$ 10 (selecionado), R$ 25, R$ 50
  - Botão "Apoiar Agora" em verde
  - Campo de mensagem personalizada
- **Histórico de Apoios**: Card secundário
  - "Seu apoio" com lista de doadores recentes
  - Lucas Tavares (R$ 10,00), Valentina Gomes (R$ 5,00)

**Funcionalidades:**
- Seleção de valores com JavaScript
- Validação de formulário
- Feedback visual para seleção
- Alert de confirmação

### 5. `ranking.html` - Ranking de Streamers
**Conteúdo Principal:**
- **Header**: Botão voltar, logo Strivo, ícone de busca
- **Top 5 Streamers Mais Populares**: Lista vertical
  1. GamerPro (47.2K audiência/dia) - Badge dourada
  2. PubgMaster (38.9K audiência/dia) - Badge cinza
  3. FifaKing (32.1K audiência/dia) - Badge laranja
  4. ValorantPro (28.7K audiência/dia) - Badge cinza
  5. CSGOLegend (24.5K audiência/dia) - Badge cinza
- **Ranking Geral**: Lista expandida
  - paulinholokobr (1º) - Badges: K, estrela, link, 🇧🇷
  - JonVlogs (2º) - Badges: chat, estrela, link, 🇧🇷
  - facada (3º) - Badges: K, estrela, link, 🇧🇷
  - alanzoka (4º) - Badges: coração, chat
  - balanotv (5º) - Badges: coração, K

**Funcionalidades:**
- Layout de ranking com badges e ícones
- Sistema de posicionamento visual
- Navegação entre páginas

### 6. `settings.html` - Configurações
**Conteúdo Principal:**
- **Header**: Botão voltar, título "Configurações e atividade"
- **Também da Meta**: Seção com apps relacionados
  - **WhatsApp**: Ícone verde, descrição de mensagens privadas
  - **Edits**: Ícone azul, ferramentas de edição (com indicador de notificação)
  - **Threads**: Ícone cinza, compartilhamento de ideias
  - **Facebook**: Ícone azul, exploração de conteúdo
  - **Messenger**: Ícone azul, conversas e compartilhamento
- **Meta AI**: Card especial com ícone roxo e descrição sobre ferramentas da Meta

**Funcionalidades:**
- Layout inspirado no Meta/Instagram
- Cards clicáveis com hover effects
- Navegação de volta

### 7. `search.html` - Página de Busca
**Conteúdo Principal:**
- **Header**: Botão voltar, logo Strivo
- **Barra de Pesquisa**: Campo grande com placeholder e ícone de lupa
- **Buscas em Alta**: Tags clicáveis
  - GTA V, Minecraft, League of Legends, Valorant, Just Chatting, PUBG
- **Categorias**: Grid 2x2 (desktop) / 4x1 (mobile)
  - Jogos de Tiro (FPS), Just Chatting (CHAT), MOBA, RPG
  - Cada categoria com ícone colorido e gradiente
- **Streamers Populares**: Lista vertical
  - GamerPro (47.2K espectadores)
  - PubgMaster (38.9K espectadores)
  - FifaKing (32.1K espectadores)
  - Cada item com avatar, nome, contador e indicador verde

**Funcionalidades:**
- Interface de busca completa
- Tags clicáveis para busca rápida
- Layout responsivo
- Navegação entre páginas

## 🎯 Características de Design

### Responsividade
- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: Adaptação para tablet e desktop
- **Grid System**: Layout flexível com CSS Grid e Flexbox

### Interatividade
- **Hover Effects**: Transições suaves em elementos clicáveis
- **JavaScript**: Navegação entre páginas e funcionalidades básicas
- **Feedback Visual**: Estados de seleção e interação

### Acessibilidade
- **Contraste**: Cores com bom contraste para leitura
- **Navegação**: Estrutura semântica HTML5
- **Ícones**: SVG para escalabilidade e acessibilidade

## 🚀 Como Visualizar

1. Abra qualquer arquivo `.html` em um navegador moderno
2. Navegue entre as páginas usando os links e botões
3. Teste a responsividade redimensionando a janela
4. Explore as diferentes funcionalidades implementadas

## 📱 Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge (versões recentes)
- **Dispositivos**: Desktop, Tablet, Mobile
- **Resoluções**: 320px até 1920px+

## 🔄 Próximos Passos

Estes protótipos servirão como base para:
- Implementação em React 19
- Integração com backend
- Funcionalidades de streaming em tempo real
- Sistema de autenticação
- Chat interativo
- Notificações push

## 📝 Notas de Desenvolvimento

- Todos os arquivos usam Tailwind CSS via CDN
- JavaScript vanilla para funcionalidades básicas
- Imagens de exemplo do Unsplash
- Cores e estilos consistentes em todos os arquivos
- Estrutura preparada para migração para React
