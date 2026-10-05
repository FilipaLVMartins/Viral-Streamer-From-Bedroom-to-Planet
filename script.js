// --- BASE DE DADOS DE IMAGENS POR SEXO ---
const AVATAR_IMAGES = {
    Masculino: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=800&q=80",
    Feminino: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=800&q=80",
    Outro: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
};

// --- DICIONÁRIO MULTI-IDIOMA (PT / EN) ---
const i18n = {
    pt: {
        liveBadge: "● AO VIVO",
        subs: "Inscritos",
        totalViews: "Views Acumuladas",
        vps: "Views / Segundo",
        streaming: "🎮 A transmitir:",
        recTitle: "GRAVAR / LIVE",
        recSub: "CLICA PARA GERAR VIEWS",
        viralBanner: "🚀 VÍDEO VIRAL! VIEWS 5X (30s)",
        chatHeader: "💬 Chat da Live",
        welcomeChat: "Bem-vindos à live!",
        toastHeader: "CONQUISTA DESBLOQUEADA!",
        titleUpgrades: "⚡ Equipamentos & Equipas",
        titleAchievements: "🏆 Conquistas",
        sfxBtn: "🔊 Efeitos:",
        musicBtn: "🎵 Música:",
        editProfileBtn: "👤 Editar Perfil",
        saveBtn: "💾 Guardar Jogo",
        resetBtn: "🔄 Reiniciar Progresso",
        on: "LIGADO",
        off: "DESLIGADO",
        level: "Nível",
        buyBtnText: "Comprar",
        confirmReset: "Queres mesmo reiniciar todo o teu império de streaming?",
        savedAlert: "Jogo guardado com sucesso!",
        ranks: [
            { title: '📍 Quarto da Mãe' },
            { title: '🏠 Sótão Gamer' },
            { title: '🎙️ Estúdio Neon' },
            { title: '🏙️ Penthouse Streamer' },
            { title: '🚀 Estação Espacial' }
        ],
        upgrades: [
            { name: '💻 Teclado Mecânico RGB', desc: '+1 View/clique' },
            { name: '🎙️ Microfone de Lapela', desc: '+1 View/seg' },
            { name: '💡 Ring Light Profissional', desc: '+8 Views/seg' },
            { name: '🎬 Editor de Vídeo Pago', desc: '+45 Views/seg' },
            { name: '🪑 Cadeira Gamer Pro', desc: '+200 Views/seg' },
            { name: '⚡ Patrocínio Energético', desc: '+1.100 Views/seg' },
            { name: '🖥️ Supercomputador RGC', desc: '+6.000 Views/seg' }
        ],
        events: [
            { name: '🤝 Colab com Streamer', desc: 'Faz uma live conjunta!' },
            { name: '🎟️ Ir à Gaming Con', desc: 'Marca presença num evento VIP!' },
            { name: '🏆 Organizar Torneio', desc: 'Cria um campeonato em direto!' },
            { name: '🎁 Sorteio de PC Gamer', desc: 'Oferece um setup à comunidade!' }
        ],
        cutscenes: [
            {
                npcName: "Streamer Alex",
                avatar: "🎧",
                badge: "🤝 COLAB AO VIVO",
                title: "Live Conjunta com Alex",
                dialogue: "Boas! Estamos ao vivo para 50k pessoas em simultâneo! Como queres gerir o arranque desta partida?",
                choices: [
                    { text: "🎯 'Vamos jogar focado e mostrar jogadas de alto nível!'", bonusMult: 1.0, feedback: "A comunidade técnica adorou a gameplay pro!" },
                    { text: "😂 'Vamos fazer desafios engraçados e rir muito!'", bonusMult: 1.5, feedback: "O vídeo tornou-se viral com os memes do chat!" },
                    { text: "🔥 'Desafio-te a um duelo direto com castigo para o derrotado!'", bonusMult: 2.0, feedback: "A rivalidade fez o chat explodir em subscritores!" }
                ]
            },
            {
                npcName: "Entrevistador Gaming Con",
                avatar: "🎙️",
                badge: "🎟️ ENTREVISTA VIP",
                title: "Palco Principal da Gaming Con",
                dialogue: "Estamos aqui com a nova revelação do streaming! Qual é o verdadeiro segredo por trás do teu crescimento estrondoso?",
                choices: [
                    { text: "❤️️ 'É a dedicação diária e o carinho por quem me assiste.'", bonusMult: 1.2, feedback: "A tua humildade conquistou milhares de fãs!" },
                    { text: "😎 'É o facto de ser simplesmente o melhor no que faço!'", bonusMult: 1.8, feedback: "A tua confiança gerou enorme falatório nas redes!" },
                    { text: "🤪 'Honestamente? Pura sorte e muitos energéticos!'", bonusMult: 1.0, feedback: "A resposta deu origem a novos memes!" }
                ]
            },
            {
                npcName: "Comentador e-Sports",
                avatar: "🏆",
                badge: "🎮 TORNEIO NACIONAL",
                title: "Grande Final do Torneio",
                dialogue: "Chegámos ao momento decisivo! Como queres apresentar este evento para a audiência?",
                choices: [
                    { text: "📊 'Analisar taticamente as equipas antes do tiro de partida.'", bonusMult: 1.1, feedback: "Ganhares respeito entre o público de e-Sports!" },
                    { text: "⚡ 'Criar hype máximo com efeitos e música épica!'", bonusMult: 1.6, feedback: "O espetáculo bateu recordes de audiência simultânea!" },
                    { text: "💰 'Duplicar o prémio do vencedor com patrocínios surpresa!'", bonusMult: 2.2, feedback: "O torneio virou notícia em todos os jornais de tecnologia!" }
                ]
            },
            {
                npcName: "Representante da Marca",
                avatar: "🎁",
                badge: "🎉 MEGA SORTEIO",
                title: "Entrega do PC Gamer",
                dialogue: "Chegou a hora de revelar o vencedor do PC Gamer! Qual é a dinâmica final que queres aplicar?",
                choices: [
                    { text: "🎲 'Sorteio direto e transparente em tempo real.'", bonusMult: 1.3, feedback: "A comunidade elogiou a tua transparência!" },
                    { text: "📞 'Ligar em direto para o vencedor surpresa!'", bonusMult: 1.7, feedback: "A emoção do vencedor fez chorar metade do chat!" },
                    { text: "🧩 'Fazer um jogo de adivinhas para desbloquear o vencedor!'", bonusMult: 2.5, feedback: "O suspense manteve toda a gente colada ao ecrã!" }
                ]
            }
        ],
        achievements: [
            { title: 'Primeiro Take', desc: 'Clica no botão de gravar 1 vez' },
            { title: 'Primeira Viralização', desc: 'Alcança 100 views acumuladas' },
            { title: 'Estrela Nascente', desc: 'Consegue 1.000 inscritos' },
            { title: 'Setup Renovado', desc: 'Compra a tua primeira melhoria' },
            { title: 'Primeira Parceria', desc: 'Realiza a tua primeira Colab' },
            { title: 'Presença VIP', desc: 'Participa no teu primeiro evento' },
            { title: 'Fenómeno das Redes', desc: 'Alcança 50.000 inscritos' },
            { title: 'Magnata das Views', desc: 'Acumula 1.000.000 de views' },
            { title: 'Tendência Mundial', desc: 'Ativa um evento de Vídeo Viral' },
            { title: 'Streamer do Planeta', desc: 'Chega à fase Estação Espacial' }
        ],
        chatMessages: [
            'Manda abraço!', 'QUE JOGADA! 🔥', 'GG!!', 'Subi para patrocinador!', 
            'Melhor live de sempre ❤', 'Hype total!!', 'Qual é o teu setup?', 'LOL fantástico!'
        ]
    },
    en: {
        liveBadge: "● LIVE",
        subs: "Subscribers",
        totalViews: "Total Views",
        vps: "Views / Second",
        streaming: "🎮 Streaming:",
        recTitle: "RECORD / LIVE",
        recSub: "CLICK TO GENERATE VIEWS",
        viralBanner: "🚀 VIRAL VIDEO! VIEWS 5X (30s)",
        chatHeader: "💬 Live Chat",
        welcomeChat: "Welcome to the stream!",
        toastHeader: "ACHIEVEMENT UNLOCKED!",
        titleUpgrades: "⚡ Equipment & Staff",
        titleAchievements: "🏆 Achievements",
        sfxBtn: "🔊 SFX:",
        musicBtn: "🎵 Music:",
        editProfileBtn: "👤 Edit Profile",
        saveBtn: "💾 Save Game",
        resetBtn: "🔄 Reset Progress",
        on: "ON",
        off: "OFF",
        level: "Level",
        buyBtnText: "Buy",
        confirmReset: "Are you sure you want to reset your streaming empire?",
        savedAlert: "Game saved successfully!",
        ranks: [
            { title: "📍 Mom's Bedroom" },
            { title: '🏠 Gamer Attic' },
            { title: '🎙️ Neon Studio' },
            { title: '🏙️ Streamer Penthouse' },
            { title: '🚀 Space Station' }
        ],
        upgrades: [
            { name: '💻 RGB Mechanical Keyboard', desc: '+1 View/click' },
            { name: '🎙️ Lapel Microphone', desc: '+1 View/sec' },
            { name: '💡 Pro Ring Light', desc: '+8 Views/sec' },
            { name: '🎬 Paid Video Editor', desc: '+45 Views/sec' },
            { name: '🪑 Pro Gaming Chair', desc: '+200 Views/sec' },
            { name: '⚡ Energy Drink Sponsor', desc: '+1,100 Views/sec' },
            { name: '🖥️ RGC Supercomputer', desc: '+6,000 Views/sec' }
        ],
        events: [
            { name: '🤝 Streamer Collab', desc: 'Host a joint stream!' },
            { name: '🎟️ Attend Gaming Con', desc: 'Appear at a VIP event!' },
            { name: '🏆 Host Tournament', desc: 'Organize a live cup!' },
            { name: '🎁 PC Gaming Giveaway', desc: 'Give back to your fans!' }
        ],
        cutscenes: [
            {
                npcName: "Streamer Alex",
                avatar: "🎧",
                badge: "🤝 LIVE COLLAB",
                title: "Joint Stream with Alex",
                dialogue: "Hey! We are live for 50k people right now! How should we kick off this game?",
                choices: [
                    { text: "🎯 'Let's focus and show pro-level gameplay!'", bonusMult: 1.0, feedback: "Tech fans loved the pro gameplay!" },
                    { text: "😂 'Let's do funny challenges and laugh!'", bonusMult: 1.5, feedback: "Memes went viral all over Twitter!" },
                    { text: "🔥 'I challenge you to a 1v1 duel with punishment!'", bonusMult: 2.0, feedback: "The rivalry exploded the subscriber counter!" }
                ]
            },
            {
                npcName: "Gaming Con Host",
                avatar: "🎙️",
                badge: "🎟️ VIP INTERVIEW",
                title: "Gaming Con Main Stage",
                dialogue: "Here we are with the newest streaming sensation! What is the real secret behind your fast growth?",
                choices: [
                    { text: "❤️ 'Daily hard work and caring about my community.'", bonusMult: 1.2, feedback: "Your humility won thousands of hearts!" },
                    { text: "😎 'Honestly? I am simply the best at what I do!'", bonusMult: 1.8, feedback: "Your confidence created massive hype!" },
                    { text: "🤪 'Pure luck and way too many energy drinks!'", bonusMult: 1.0, feedback: "Chat turned your quote into a classic meme!" }
                ]
            },
            {
                npcName: "e-Sports Caster",
                avatar: "🏆",
                badge: "🎮 NATIONAL TOURNAMENT",
                title: "Tournament Grand Finals",
                dialogue: "We reached the decisive moment! How do you want to present this final?",
                choices: [
                    { text: "📊 'Analyze team tactics before starting.'", bonusMult: 1.1, feedback: "You gained huge respect in esports!" },
                    { text: "⚡ 'Create maximum hype with epic music!'", bonusMult: 1.6, feedback: "Concurrent viewership hit record highs!" },
                    { text: "💰 'Double the cash prize with surprise sponsors!'", bonusMult: 2.2, feedback: "The tournament made tech news headlines!" }
                ]
            },
            {
                npcName: "Sponsor Rep",
                avatar: "🎁",
                badge: "🎉 MEGA GIVEAWAY",
                title: "PC Gamer Giveaway",
                dialogue: "Time to announce the Gaming PC winner! How should we do the reveal?",
                choices: [
                    { text: "🎲 'Direct and transparent live roll.'", bonusMult: 1.3, feedback: "Fans applauded your transparency!" },
                    { text: "📞 'Call the winner live on stream!'", bonusMult: 1.7, feedback: "The winner's reaction made viewers cry!" },
                    { text: "🧩 'A mini quiz game to unlock the winner!'", bonusMult: 2.5, feedback: "Suspense kept everyone glued to the stream!" }
                ]
            }
        ],
        achievements: [
            { title: 'First Take', desc: 'Click the record button once' },
            { title: 'First Viral Hit', desc: 'Reach 100 accumulated views' },
            { title: 'Rising Star', desc: 'Reach 1,000 subscribers' },
            { title: 'Upgraded Setup', desc: 'Buy your first upgrade' },
            { title: 'First Partnership', desc: 'Complete your first Collab' },
            { title: 'VIP Guest', desc: 'Attend your first event' },
            { title: 'Web Phenomenon', desc: 'Reach 50,000 subscribers' },
            { title: 'Views Tycoon', desc: 'Accumulate 1,000,000 views' },
            { title: 'Global Trending', desc: 'Trigger a Viral Video event' },
            { title: 'Planet Streamer', desc: 'Reach Space Station rank' }
        ],
        chatMessages: [
            'Shoutout please!', 'WHAT A PLAY! 🔥', 'GG!!', 'Just subscribed!', 
            'Best stream ever ❤', 'Total Hype!!', 'What pc specs?', 'LOL awesome!'
        ]
    }
};

// --- ESTADO GLOBAL DO JOGO ---
let gameState = {
    lang: 'pt',
    userProfile: {
        name: '',
        gender: 'Masculino',
        age: 20,
        category: 'Games'
    },
    plaqueAwarded: false,
    views: 0,
    totalViews: 0,
    bonusSubscribers: 0,
    viewsPerClick: 1,
    viewsPerSecond: 0,
    multiplier: 1,
    soundEnabled: true,
    musicEnabled: true,
    upgrades: [
        { id: 'click_1', cost: 15, vpc: 1, vps: 0, count: 0 },
        { id: 'mic', cost: 50, vpc: 0, vps: 1, count: 0 },
        { id: 'ringlight', cost: 350, vpc: 0, vps: 8, count: 0 },
        { id: 'editor', cost: 2000, vpc: 0, vps: 45, count: 0 },
        { id: 'chair', cost: 10000, vpc: 0, vps: 200, count: 0 },
        { id: 'sponsor', cost: 50000, vpc: 0, vps: 1100, count: 0 },
        { id: 'pc', cost: 250000, vpc: 0, vps: 6000, count: 0 }
    ],
    events: [
        { id: 'collab', cost: 500, baseSubBonus: 150, count: 0 },
        { id: 'con', cost: 3000, baseSubBonus: 800, count: 0 },
        { id: 'tournament', cost: 20000, baseSubBonus: 3500, count: 0 },
        { id: 'giveaway', cost: 100000, baseSubBonus: 15000, count: 0 }
    ],
    achievements: [
        { id: 'rec_1', icon: '🔴', unlocked: false },
        { id: 'views_100', icon: '👀', unlocked: false },
        { id: 'subs_1k', icon: '⭐', unlocked: false },
        { id: 'upgrade_first', icon: '🛠️', unlocked: false },
        { id: 'collab_first', icon: '🤝', unlocked: false },
        { id: 'event_first', icon: '🎟️', unlocked: false },
        { id: 'subs_50k', icon: '🚀', unlocked: false },
        { id: 'views_1m', icon: '💎', unlocked: false },
        { id: 'viral_event', icon: '🔥', unlocked: false },
        { id: 'planet_rank', icon: '🪐', unlocked: false }
    ]
};

let viralEventActive = false;

// --- ÁUDIO SINTETIZADO ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let bgMusicTimer = null;
let musicStep = 0;
const bgNotes = [261.63, 329.63, 392.00, 523.25, 293.66, 349.23, 440.00, 587.33];

function playTone(freq, type, duration, vol = 0.1) {
    if (!gameState.soundEnabled) return;
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(vol, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch(e){}
}

function startBgMusic() {
    if (bgMusicTimer) clearInterval(bgMusicTimer);
    bgMusicTimer = setInterval(() => {
        if (!gameState.musicEnabled) return;
        try {
            const freq = bgNotes[musicStep % bgNotes.length];
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.25);
            musicStep++;
        } catch(e){}
    }, 350);
}

function playClickSFX() { playTone(600, 'sine', 0.08); }
function playBuySFX() { 
    playTone(520, 'triangle', 0.1); 
    setTimeout(() => playTone(784, 'triangle', 0.15), 80);
}
function playAchievementSFX() {
    playTone(523, 'sine', 0.1);
    setTimeout(() => playTone(659, 'sine', 0.1), 100);
    setTimeout(() => playTone(784, 'sine', 0.2), 200);
}

// --- FORMATAÇÃO DE NÚMEROS ---
function formatNumber(num) {
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
    return Math.floor(num).toLocaleString(gameState.lang === 'pt' ? 'pt-PT' : 'en-US');
}

// --- FASES (RANKS) ---
const RANKS_CONFIG = [
    { subs: 0, cam: 'CAM-1', game: 'Pixel Quest 4K' },
    { subs: 100, cam: 'CAM-2', game: 'Super Block Crafter' },
    { subs: 1000, cam: 'PRO-1', game: 'Cyber Battle Royale' },
    { subs: 10000, cam: 'PRO-MAX', game: 'GTA 6 Cartoon Edition' },
    { subs: 100000, cam: 'GALACTIC-1', game: 'Interstellar Universe' }
];

function updateRankAndAvatar(subs) {
    let rankIndex = 0;
    RANKS_CONFIG.forEach((r, idx) => {
        if (subs >= r.subs) rankIndex = idx;
    });

    const currentConf = RANKS_CONFIG[rankIndex];
    const currentLangRanks = i18n[gameState.lang].ranks;

    document.getElementById('rank-display').innerText = currentLangRanks[rankIndex].title;
    document.getElementById('webcam-tier').innerText = currentConf.cam;
    document.getElementById('game-title').innerText = `${gameState.userProfile.category || 'Games'} • ${currentConf.game}`;

    // Atualização da foto de acordo com o sexo do jogador
    const gender = gameState.userProfile.gender || 'Masculino';
    const streamImg = document.getElementById('main-stream-img');
    streamImg.src = AVATAR_IMAGES[gender] || AVATAR_IMAGES.Masculino;

    if (rankIndex === 4) unlockAchievement('planet_rank');
}

// --- CHAT AO VIVO ---
const chatUsers = ['Pedro_Gamer', 'Clara_YT', 'PixelQueen', 'ProGamer99', 'Nuno_RGC', 'AnaStream', 'Vítor_Vlog'];

function resetChatForLanguage() {
    const chatContainer = document.getElementById('chat-messages');
    chatContainer.innerHTML = '';
    addChatMessage('ModBot', i18n[gameState.lang].welcomeChat);
}

function addChatMessage(user, text) {
    const chatContainer = document.getElementById('chat-messages');
    if (!chatContainer) return;
    const line = document.createElement('div');
    line.className = 'chat-line';
    line.innerHTML = `<span class="chat-user">${user}:</span> ${text}`;
    chatContainer.appendChild(line);

    if (chatContainer.children.length > 12) {
        chatContainer.removeChild(chatContainer.firstChild);
    }
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

setInterval(() => {
    if (Math.random() < 0.6) {
        const list = i18n[gameState.lang].chatMessages;
        const user = chatUsers[Math.floor(Math.random() * chatUsers.length)];
        const text = list[Math.floor(Math.random() * list.length)];
        addChatMessage(user, text);
    }
}, 2500);

// --- SISTEMA DE TABS ---
document.getElementById('tab-events-btn').addEventListener('click', () => {
    document.getElementById('tab-events-btn').classList.add('active');
    document.getElementById('tab-achievements-btn').classList.remove('active');
    document.getElementById('tab-events-content').classList.add('active');
    document.getElementById('tab-achievements-content').classList.remove('active');
});

document.getElementById('tab-achievements-btn').addEventListener('click', () => {
    document.getElementById('tab-achievements-btn').classList.add('active');
    document.getElementById('tab-events-btn').classList.remove('active');
    document.getElementById('tab-achievements-content').classList.add('active');
    document.getElementById('tab-events-content').classList.remove('active');
});

// --- ATUALIZAÇÃO DA INTERFACE ---
function updateUI() {
    const t = i18n[gameState.lang];

    document.getElementById('live-badge-text').innerText = t.liveBadge;
    document.getElementById('label-total-views').innerText = t.totalViews;
    document.getElementById('label-vps').innerText = t.vps;
    document.getElementById('label-streaming').innerText = t.streaming;
    document.getElementById('rec-btn-title').innerText = t.recTitle;
    document.getElementById('rec-btn-sub').innerText = t.recSub;
    document.getElementById('event-banner').innerText = t.viralBanner;
    document.getElementById('chat-header').innerText = t.chatHeader;
    document.getElementById('toast-header').innerText = t.toastHeader;
    document.getElementById('title-upgrades').innerText = t.titleUpgrades;
    document.getElementById('edit-profile-btn').innerText = t.editProfileBtn;
    document.getElementById('save-btn').innerText = t.saveBtn;
    document.getElementById('reset-btn').innerText = t.resetBtn;
    
    document.getElementById('sound-btn').innerText = `${t.sfxBtn} ${gameState.soundEnabled ? t.on : t.off}`;
    document.getElementById('music-btn').innerText = `${t.musicBtn} ${gameState.musicEnabled ? t.on : t.off}`;

    document.getElementById('views-display').innerText = formatNumber(gameState.views);
    document.getElementById('vps-display').innerText = formatNumber(gameState.viewsPerSecond * gameState.multiplier);
    
    let baseSubs = Math.floor(Math.sqrt(gameState.totalViews));
    let subs = baseSubs + (gameState.bonusSubscribers || 0);
    document.getElementById('subscribers-display').innerText = `👥 ${formatNumber(subs)} ${t.subs}`;

    const u = gameState.userProfile;
    document.getElementById('channel-name').childNodes[0].nodeValue = `${u.name || 'Viral Streamer'} `;
    document.getElementById('user-info-display').innerText = `${u.category || 'Games'} • ${u.age || 20} anos`;

    updateRankAndAvatar(subs);
    checkAchievementsAndPlaque(subs);
    renderUpgrades();
    renderEvents();
    renderAchievements();
}

function checkAchievementsAndPlaque(subs) {
    if (gameState.totalViews >= 100) unlockAchievement('views_100');
    if (gameState.totalViews >= 1000000) unlockAchievement('views_1m');
    if (subs >= 50000) unlockAchievement('subs_50k');

    if (subs >= 1000) {
        unlockAchievement('subs_1k');
        if (!gameState.plaqueAwarded) {
            gameState.plaqueAwarded = true;
            document.getElementById('plaque-user-name').innerText = gameState.userProfile.name || 'STREAMER';
            document.getElementById('plaque-modal').classList.remove('hidden');
        }
    }
}

document.getElementById('close-plaque-btn').addEventListener('click', () => {
    document.getElementById('plaque-modal').classList.add('hidden');
});

// --- BOTÃO DE GERAR VIEWS ---
const clickBtn = document.getElementById('click-btn');
const clickerContainer = document.getElementById('clicker-container');

clickBtn.addEventListener('click', (e) => {
    if (audioCtx.state === 'suspended') audioCtx.resume();

    let gained = gameState.viewsPerClick * gameState.multiplier;
    gameState.views += gained;
    gameState.totalViews += gained;

    playClickSFX();
    unlockAchievement('rec_1');
    createFloatText(e, `+${formatNumber(gained)}`);
    updateUI();
});

function createFloatText(e, text) {
    const rect = clickerContainer.getBoundingClientRect();
    const floatEl = document.createElement('div');
    floatEl.className = 'float-text';
    floatEl.innerText = text;

    let x = e.clientX ? e.clientX - rect.left : rect.width / 2;
    let y = e.clientY ? e.clientY - rect.top : rect.height / 2;

    floatEl.style.left = `${x - 20}px`;
    floatEl.style.top = `${y - 20}px`;

    clickerContainer.appendChild(floatEl);
    setTimeout(() => floatEl.remove(), 800);
}

// --- RENDER DE MELHORIAS ---
function renderUpgrades() {
    const listEl = document.getElementById('upgrades-list');
    listEl.innerHTML = '';
    const t = i18n[gameState.lang];

    gameState.upgrades.forEach((up, index) => {
        const upText = t.upgrades[index];
        const canAfford = gameState.views >= up.cost;

        const card = document.createElement('div');
        card.className = 'upgrade-card';

        card.innerHTML = `
            <div class="card-header-row">
                <span class="card-title">${upText.name}</span>
                <span class="count-tag">${t.level} ${up.count}</span>
            </div>
            <span class="card-desc">${upText.desc}</span>
            <div class="card-footer-row">
                <span class="cost-tag">👁️ ${formatNumber(up.cost)}</span>
                <button class="btn-buy-action" ${canAfford ? '' : 'disabled'}>
                    ${t.buyBtnText}
                </button>
            </div>
        `;

        const buyBtn = card.querySelector('.btn-buy-action');
        buyBtn.onclick = (e) => {
            e.stopPropagation();
            buyUpgrade(index);
        };

        listEl.appendChild(card);
    });
}

function buyUpgrade(index) {
    let up = gameState.upgrades[index];
    if (gameState.views >= up.cost) {
        gameState.views -= up.cost;
        up.count++;
        
        if (up.vpc > 0) gameState.viewsPerClick += up.vpc;
        if (up.vps > 0) recalculateVPS();

        up.cost = Math.floor(up.cost * 1.15);

        playBuySFX();
        unlockAchievement('upgrade_first');
        updateUI();
        saveGame();
    }
}

function recalculateVPS() {
    gameState.viewsPerSecond = gameState.upgrades.reduce((total, up) => total + (up.vps * up.count), 0);
}

// --- RENDER DE EVENTOS E CUTSCENES INTERATIVAS ---
function renderEvents() {
    const listEl = document.getElementById('events-list');
    listEl.innerHTML = '';
    const t = i18n[gameState.lang];

    gameState.events.forEach((ev, index) => {
        const evText = t.events[index];
        const canAfford = gameState.views >= ev.cost;

        const card = document.createElement('div');
        card.className = 'event-card';

        card.innerHTML = `
            <div class="card-header-row">
                <span class="card-title">${evText.name}</span>
                <span class="count-tag">x${ev.count}</span>
            </div>
            <span class="card-desc">${evText.desc}</span>
            <span class="event-bonus">💥 Bónus até +${formatNumber(ev.baseSubBonus * 2.5)} Subs</span>
            <div class="card-footer-row">
                <span class="cost-tag">👁️ ${formatNumber(ev.cost)}</span>
                <button class="btn-buy-action" ${canAfford ? '' : 'disabled'}>
                    🎬 Participar
                </button>
            </div>
        `;

        const buyBtn = card.querySelector('.btn-buy-action');
        buyBtn.onclick = (e) => {
            e.stopPropagation();
            launchCutsceneEvent(index);
        };

        listEl.appendChild(card);
    });
}

// LAUNCH CUTSCENE DIALOGUE
function launchCutsceneEvent(index) {
    let ev = gameState.events[index];
    if (gameState.views < ev.cost) return;

    gameState.views -= ev.cost;
    ev.count++;

    const t = i18n[gameState.lang];
    const cutData = t.cutscenes[index];

    const modal = document.getElementById('cutscene-modal');
    document.getElementById('cut-badge').innerText = cutData.badge;
    document.getElementById('cut-title').innerText = cutData.title;
    document.getElementById('cut-npc-name').innerText = cutData.npcName;
    document.getElementById('cut-npc-avatar').innerText = cutData.avatar;
    document.getElementById('cut-dialogue').innerText = `"${cutData.dialogue}"`;

    const choicesContainer = document.getElementById('cut-choices');
    choicesContainer.innerHTML = '';

    cutData.choices.forEach((choice) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = choice.text;

        btn.onclick = () => {
            let gainedSubs = Math.floor(ev.baseSubBonus * choice.bonusMult);
            gameState.bonusSubscribers = (gameState.bonusSubscribers || 0) + gainedSubs;

            ev.cost = Math.floor(ev.cost * 1.35);

            modal.classList.add('hidden');
            playBuySFX();
            showAchievementToast(`+${formatNumber(gainedSubs)} Subs! ${choice.feedback}`);

            if (index === 0) unlockAchievement('collab_first');
            if (index === 1) unlockAchievement('event_first');

            updateUI();
            saveGame();
        };

        choicesContainer.appendChild(btn);
    });

    modal.classList.remove('hidden');
}

// --- CONQUISTAS ---
function unlockAchievement(id) {
    const index = gameState.achievements.findIndex(a => a.id === id);
    if (index !== -1 && !gameState.achievements[index].unlocked) {
        gameState.achievements[index].unlocked = true;
        const title = i18n[gameState.lang].achievements[index].title;
        showAchievementToast(title);
        playAchievementSFX();
        saveGame();
    }
}

function showAchievementToast(title) {
    const toast = document.getElementById('achievement-toast');
    document.getElementById('toast-desc').innerText = title;
    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3500);
}

function renderAchievements() {
    const listEl = document.getElementById('achievements-list');
    listEl.innerHTML = '';
    const t = i18n[gameState.lang];

    let unlockedCount = 0;
    gameState.achievements.forEach((ach, idx) => {
        if (ach.unlocked) unlockedCount++;
        const achText = t.achievements[idx];
        const card = document.createElement('div');
        card.className = `achievement-card ${ach.unlocked ? 'unlocked' : ''}`;
        card.innerHTML = `
            <div class="achieve-icon">${ach.icon}</div>
            <div class="achieve-info">
                <h4>${achText.title} ${ach.unlocked ? '✅' : '🔒'}</h4>
                <p>${achText.desc}</p>
            </div>
        `;
        listEl.appendChild(card);
    });

    document.getElementById('achievements-count').innerText = `${unlockedCount}/${gameState.achievements.length}`;
}

// --- GAME LOOP ---
setInterval(() => {
    if (gameState.viewsPerSecond > 0) {
        let gained = (gameState.viewsPerSecond / 10) * gameState.multiplier;
        gameState.views += gained;
        gameState.totalViews += gained;
        updateUI();
    }
}, 100);

// --- TROCA DE IDIOMA ---
const langSelect = document.getElementById('lang-select');
langSelect.addEventListener('change', (e) => {
    gameState.lang = e.target.value;
    resetChatForLanguage();
    updateUI();
    saveGame();
});

// --- SUBMISSÃO DO FORMULÁRIO DE SETUP ---
const setupModal = document.getElementById('setup-modal');
const setupForm = document.getElementById('setup-form');

setupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    gameState.userProfile.name = document.getElementById('input-name').value;
    gameState.userProfile.gender = document.getElementById('input-gender').value;
    gameState.userProfile.age = document.getElementById('input-age').value;
    gameState.userProfile.category = document.getElementById('input-category').value;

    setupModal.classList.add('hidden');
    updateUI();
    saveGame();
});

document.getElementById('edit-profile-btn').addEventListener('click', () => {
    document.getElementById('input-name').value = gameState.userProfile.name || '';
    document.getElementById('input-gender').value = gameState.userProfile.gender || 'Masculino';
    document.getElementById('input-age').value = gameState.userProfile.age || 20;
    document.getElementById('input-category').value = gameState.userProfile.category || 'Games';
    setupModal.classList.remove('hidden');
});

// --- GUARDAR E REINICIAR ---
function saveGame() {
    localStorage.setItem('viral_streamer_v6_save', JSON.stringify(gameState));
}

function loadGame() {
    const saved = localStorage.getItem('viral_streamer_v6_save');
    if (saved) {
        const parsed = JSON.parse(saved);
        gameState = { ...gameState, ...parsed };
        recalculateVPS();
    }
    
    if (!gameState.userProfile || !gameState.userProfile.name) {
        setupModal.classList.remove('hidden');
    } else {
        setupModal.classList.add('hidden');
    }

    langSelect.value = gameState.lang;
    resetChatForLanguage();
    updateUI();
}

document.getElementById('save-btn').addEventListener('click', () => {
    saveGame();
    alert(i18n[gameState.lang].savedAlert);
});

document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm(i18n[gameState.lang].confirmReset)) {
        localStorage.removeItem('viral_streamer_v6_save');
        location.reload();
    }
});

// CONTROLOS DE SOM
document.getElementById('sound-btn').addEventListener('click', () => {
    gameState.soundEnabled = !gameState.soundEnabled;
    updateUI();
});

document.getElementById('music-btn').addEventListener('click', () => {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    gameState.musicEnabled = !gameState.musicEnabled;
    updateUI();
});

// INICIALIZAÇÃO
loadGame();
startBgMusic();