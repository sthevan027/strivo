// Estado simples da aplicação (mock)
const state = {
    currentSection: 'home',
    postType: 'image',
    profile: {
        name: 'Novo Usuário',
        username: 'novo_usuario',
        bio: 'Novo no Strivo! 🎮'
    },
    posts: []
};

// Utilidades
function qs(sel) { return document.querySelector(sel); }
function qsa(sel) { return Array.from(document.querySelectorAll(sel)); }

function showNotification(message, type = 'success') {
    const container = qs('#notification-container');
    const wrapper = document.createElement('div');
    wrapper.className = `notification bg-dark-card border ${type === 'error' ? 'border-red-500' : 'border-primary'} text-white px-4 py-3 rounded-lg shadow-lg animate-slide-up`;
    wrapper.innerHTML = `<div class="flex items-center justify-between gap-4">
        <span class="text-sm">${message}</span>
        <button class="text-gray-400 hover:text-white" aria-label="Fechar">✕</button>
    </div>`;
    wrapper.querySelector('button').onclick = () => wrapper.remove();
    container.appendChild(wrapper);
    setTimeout(() => wrapper.remove(), 4000);
}

// Navegação
function navigateTo(section) {
    state.currentSection = section;
    qsa('.section').forEach(el => el.classList.add('hidden'));
    const target = qs(`#${section}-section`);
    if (target) target.classList.remove('hidden');
}

// Perfil Menu
function toggleProfileMenu() {
    const menu = qs('#profile-menu');
    menu.classList.toggle('hidden');
}

// Editar Perfil Modal
function openEditProfileModal() { qs('#edit-profile-modal').classList.remove('hidden'); }
function closeEditProfileModal() { qs('#edit-profile-modal').classList.add('hidden'); }

function changeProfilePhoto() {
    showNotification('Funcionalidade de alterar foto ainda não implementada.');
}

function saveProfile() {
    const name = qs('#edit-name').value.trim();
    const username = qs('#edit-username').value.trim();
    const bio = qs('#edit-bio').value.trim();
    if (!name || !username) {
        showNotification('Nome e usuário são obrigatórios.', 'error');
        return;
    }
    state.profile = { name, username, bio };
    // Atualiza visual
    qs('#menu-name').textContent = name;
    qs('#menu-username').textContent = `@${username}`;
    qs('#profile-name').textContent = name;
    qs('#profile-username').textContent = `@${username}`;
    qs('#profile-bio').textContent = bio || '';
    showNotification('Perfil atualizado!');
    closeEditProfileModal();
}

// Criar Post Modal
function openCreatePostModal() { qs('#create-post-modal').classList.remove('hidden'); }
function closeCreatePostModal() { qs('#create-post-modal').classList.add('hidden'); }

function selectPostType(type) {
    state.postType = type;
    qsa('.post-type-btn').forEach(btn => btn.classList.remove('border-primary'));
    // Marca o botão selecionado de forma simples pelo index
    const index = type === 'image' ? 0 : 1;
    const btn = qsa('.post-type-btn')[index];
    if (btn) btn.classList.add('border-primary');
}

function publishPost() {
    const caption = qs('#post-caption').value.trim();
    const game = qs('#post-game').value.trim();
    const newPost = {
        id: Date.now(),
        type: state.postType,
        caption,
        game,
        likes: 0,
        comments: 0
    };
    state.posts.unshift(newPost);
    renderFeed();
    renderProfileGrid();
    showNotification('Post publicado!');
    // limpa
    qs('#post-caption').value = '';
    qs('#post-game').value = '';
    selectPostType('image');
    closeCreatePostModal();
}

// Stories / misc
function createStory() { showNotification('Criação de story em breve.'); }
function toggleNotifications() { showNotification('Aqui apareceriam as notificações.'); }
function showHelp() { showNotification('Ajuda breve: use o menu para navegar.'); }
function logout() { showNotification('Logout simulado.'); }

function performSearch() {
    const term = qs('#search-input').value.trim();
    if (!term) { showNotification('Digite algo para pesquisar.'); return; }
    showNotification(`Buscando por: ${term}`);
}

// Renderizações
function renderFeed() {
    const feed = qs('#feed');
    if (!feed) return;
    feed.innerHTML = '';
    if (state.posts.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'bg-dark-card border border-dark-border rounded-2xl p-10 text-center text-gray-400';
        empty.innerHTML = `<div class="flex flex-col items-center gap-4"><div class="w-12 h-12 rounded-full bg-[#121212] border border-dark-border flex items-center justify-center"><svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></div><p class="text-sm">Seu feed está vazio. Crie seu primeiro post!</p><button onclick="openCreatePostModal()" class="px-4 py-2 bg-primary text-black rounded-lg font-medium hover:bg-primary-dark smooth-transition">Criar post</button></div>`;
        feed.appendChild(empty);
        return;
    }

    state.posts.forEach(post => {
        const card = document.createElement('article');
        card.className = 'group bg-dark-card border border-dark-border hover:border-primary/30 rounded-2xl p-4 animate-fade-in transition-colors';
        card.innerHTML = `
            <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center"><span class="text-black font-bold">U</span></div>
                <div>
                    <div class="font-semibold">${state.profile.name}</div>
                    <div class="text-xs text-gray-400">@${state.profile.username}</div>
                </div>
            </div>
            <div class="rounded-xl overflow-hidden bg-dark-bg border border-dark-border mb-3 flex items-center justify-center aspect-[16/9]">
                <div class="text-gray-500 text-sm">${post.type === 'image' ? 'Imagem' : 'Vídeo'} de demonstração</div>
            </div>
            <div class="text-sm text-gray-300">${post.caption || ''}</div>
            ${post.game ? `<div class="text-xs text-gray-400 mt-1">Jogando: ${post.game}</div>` : ''}
            <div class="flex items-center gap-6 mt-4 text-gray-300">
                <button class="inline-flex items-center gap-2 hover:text-primary smooth-transition" data-like="${post.id}">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                    <span>${post.likes}</span>
                </button>
                <button class="inline-flex items-center gap-2 hover:text-primary smooth-transition">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a4 4 0 01-4 4H7l-4 4V5a4 4 0 014-4h10a4 4 0 014 4z"/></svg>
                    <span>${post.comments}</span>
                </button>
                <button class="inline-flex items-center gap-2 hover:text-primary smooth-transition">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v2a2 2 0 002 2h12"/><path d="M12 12l-3-3m3 3l3-3m-3 3V3"/></svg>
                    <span>Share</span>
                </button>
            </div>
        `;
        feed.appendChild(card);
        card.querySelector(`[data-like="${post.id}"]`).onclick = () => {
            post.likes += 1;
            renderFeed();
        };
    });
}

function renderProfileGrid() {
    const grid = qs('#profile-grid');
    if (!grid) return;
    grid.innerHTML = '';
    if (state.posts.length === 0) return;

    state.posts.forEach(post => {
        const tile = document.createElement('div');
        tile.className = 'instagram-post';
        tile.innerHTML = `
            <div class="overlay">
                <div class="stats">
                    <span>❤ ${post.likes}</span>
                    <span>💬 ${post.comments}</span>
                </div>
            </div>
        `;
        grid.appendChild(tile);
    });
}

// Inicialização
document.addEventListener('click', (e) => {
    const menu = qs('#profile-menu');
    const button = e.target.closest('button');
    if (menu && !menu.classList.contains('hidden')) {
        const clickedInside = e.target.closest('#profile-menu') || (button && button.getAttribute('onclick') === 'toggleProfileMenu()');
        if (!clickedInside) menu.classList.add('hidden');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    selectPostType('image');
    renderFeed();
    renderProfileGrid();
});

// Expondo funções ao escopo global (para os onclicks inline)
Object.assign(window, {
    navigateTo,
    toggleProfileMenu,
    openEditProfileModal,
    closeEditProfileModal,
    changeProfilePhoto,
    saveProfile,
    openCreatePostModal,
    closeCreatePostModal,
    selectPostType,
    publishPost,
    createStory,
    toggleNotifications,
    showHelp,
    logout,
    performSearch
});


