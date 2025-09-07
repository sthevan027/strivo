# 🎮 Strivo

**Strivo** é uma plataforma de rede social moderna focada em gamers e criadores de conteúdo, oferecendo uma interface elegante e intuitiva para compartilhamento de clips, lives e interação entre usuários.

## ✨ Funcionalidades

### 🏠 Feed Principal
- **Stories interativos** com design circular e gradiente
- **Feed de posts** com suporte a imagens e vídeos
- **Sistema de curtidas** e comentários em tempo real
- **Interface responsiva** adaptável a diferentes dispositivos

### 👤 Perfil de Usuário
- **Perfil personalizável** com foto, nome, bio e username
- **Grid estilo Instagram** para visualização de conteúdo
- **Métricas sociais** (seguidores, seguindo, posts)
- **Sistema de verificação** com badge verificado

### 📝 Criação de Conteúdo
- **Modal de criação** com seleção de tipo de mídia
- **Suporte a legendas** e tags de jogos
- **Upload de imagens e vídeos** (interface preparada)
- **Publicação instantânea** no feed

### 🔧 Funcionalidades Adicionais
- **Sistema de notificações** em tempo real
- **Busca integrada** no cabeçalho
- **Menu de perfil** com opções rápidas
- **Tema escuro** com paleta de cores personalizada
- **Animações suaves** e transições elegantes

## 🎨 Design

### Paleta de Cores
- **Primary**: `#53fc18` (Verde neon vibrante)
- **Primary Dark**: `#45d614` (Verde escuro para hover)
- **Dark Background**: `#0f0f0f` (Fundo principal)
- **Dark Card**: `#1a1a1a` (Cartões e elementos)
- **Dark Border**: `#2a2a2a` (Bordas e divisores)

### Características Visuais
- **Interface minimalista** com foco na usabilidade
- **Animações CSS** personalizadas (fade-in, slide-up, pulse-glow)
- **Scrollbar customizada** com cores do tema
- **Tipografia moderna** com hierarquia clara
- **Elementos interativos** com feedback visual

## 🚀 Tecnologias

### Frontend
- **HTML5** com estrutura semântica
- **CSS3** com variáveis customizadas e animações
- **JavaScript ES6+** com manipulação de DOM moderna
- **Tailwind CSS** via CDN para estilização rápida

### Estrutura do Projeto
```
strivo/
├── index.html          # Página principal com feed
├── profile.html        # Página de perfil detalhada
├── app.js             # Lógica JavaScript principal
├── styles.css         # Estilos personalizados
├── profile.css        # Estilos específicos do perfil
└── README.md          # Documentação do projeto
```

## 📦 Instalação e Uso

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor local (opcional, para desenvolvimento)

### Executando o Projeto

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd strivo
```

2. **Abra o projeto**
```bash
# Método 1: Abrir diretamente no navegador
open index.html

# Método 2: Usar servidor local (recomendado)
python -m http.server 8000
# ou
npx serve .
```

3. **Acesse no navegador**
```
http://localhost:8000
```

## 🎯 Como Usar

### Navegação Básica
1. **Feed Principal**: Visualize posts de outros usuários
2. **Criar Post**: Clique no botão "+" no cabeçalho
3. **Perfil**: Acesse através do avatar no canto superior direito
4. **Busca**: Use a barra de pesquisa no cabeçalho

### Criando Conteúdo
1. Clique no botão de criar post (+)
2. Escolha o tipo de mídia (Foto ou Vídeo)
3. Adicione uma legenda e tag do jogo (opcional)
4. Clique em "Publicar"

### Personalizando Perfil
1. Clique no avatar → "Editar Perfil"
2. Atualize nome, username e bio
3. Salve as alterações

## 🔄 Estado da Aplicação

O projeto utiliza um sistema de estado simples em JavaScript:

```javascript
const state = {
    currentSection: 'home',    // Seção atual
    postType: 'image',         // Tipo de post selecionado
    profile: { /* dados */ },  // Informações do perfil
    posts: []                  // Array de posts
};
```

## 🚧 Funcionalidades Futuras

### Em Desenvolvimento
- [ ] **Upload real de arquivos** (imagens/vídeos)
- [ ] **Sistema de autenticação** completo
- [ ] **Banco de dados** para persistência
- [ ] **API REST** para backend
- [ ] **Chat em tempo real** entre usuários
- [ ] **Sistema de lives** integrado

### Melhorias Planejadas
- [ ] **PWA** (Progressive Web App)
- [ ] **Notificações push**
- [ ] **Modo offline** básico
- [ ] **Compartilhamento social**
- [ ] **Analytics** de engajamento
- [ ] **Sistema de moderação**

## 🤝 Contribuindo

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/nova-funcionalidade`)
5. **Abra** um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ para a comunidade gamer.

---

**Strivo** - *Connecting creators* 🎮✨
