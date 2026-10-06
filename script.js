// --- BASE DE DADOS DE IMAGENS POR SEXO (ATUALIZADA) ---
const AVATAR_IMAGES = {
    Masculino: "https://www.esafety.gov.au/sites/default/files/2023-01/esafety-online-streaming_thumb.jpg",
    Feminino: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgxXQILc3wjjftJ6d8NhS93fypBisSWcSd25omE6jME68VKzGeXT_Qyvg&s=10",
    Outro: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
};

// --- DICIONÁRIO MULTI-IDIOMA COMPLETO (PT / EN) ---
const i18n = {
    pt: {
        liveBadge: "● AO VIVO",
        subs: "Inscritos",
        totalViews: "Views Acumuladas",
        vps: "Views / Segundo",
        streaming: "🎮 A transmitir:",
        recTitle: "RECORD / LIVE",
        recSub: "CLICA PARA GERAR VIEWS",
        viralBanner: "🚀 VÍDEO VIRAL! VIEWS 5X (30s)",
        chatHeader: "💬 Chat da Live",
        welcomeChat: "Bem-vindos à live!",
        interactFansBtn: "💬 Interagir com os Fãs",
        donationsTitle: "💰 Donativos & Saldo",
        newsTitle: "📰 Notícias do Streamer",
        eventsSubtext: "Gasta views para participar em eventos interativos e ganhar bónus de subscritores!",
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
        participateText: "🎬 Participar",
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
        eventStories: {
            collab: [
                {
                    npcName: "Streamer Alex", avatar: "🎧", badge: "🤝 COLAB AO VIVO", title: "Live Conjunta com Alex",
                    dialogue: "Boas! Estamos ao vivo para 50k pessoas em simultâneo! Como queres gerir o arranque da partida?",
                    choices: [
                        { text: "🎯 'Vamos jogar focado e mostrar jogadas de alto nível!'", bonusMult: 1.0, feedback: "A comunidade pro adorou a jogada!" },
                        { text: "😂 'Vamos fazer desafios engraçados e rir muito!'", bonusMult: 1.5, feedback: "O vídeo tornou-se viral em memes!" },
                        { text: "🔥 'Desafio-te a um duelo direto com castigo!'", bonusMult: 2.0, feedback: "A rivalidade fez o contador de subs explodir!" }
                    ]
                },
                {
                    npcName: "Gamer Sofia", avatar: "🎮", badge: "🤝 MARATONA CO-OP", title: "Maratona Co-Op",
                    dialogue: "Chegámos ao nível final do jogo! O chat quer saber qual vai ser a nossa estratégia!",
                    choices: [
                        { text: "🛡️ 'Eu protejo a retaguarda enquanto avanças!'", bonusMult: 1.1, feedback: "Trabalho de equipa exemplar louvado pelo chat!" },
                        { text: "🚀 'Avançar à doida sem olhar para trás!'", bonusMult: 1.7, feedback: "O caos gerou momentos hilariantes na stream!" }
                    ]
                }
            ],
            con: [
                {
                    npcName: "Entrevistador Gaming Con", avatar: "🎙️", badge: "🎟️ ENTREVISTA VIP", title: "Palco Principal da Gaming Con",
                    dialogue: "Estamos aqui com a nova revelação do streaming! Qual é o segredo por trás do teu sucesso?",
                    choices: [
                        { text: "❤️ 'É o apoio diário da minha incrível comunidade.'", bonusMult: 1.2, feedback: "A tua humildade conquistou milhares de fãs!" },
                        { text: "😎 'É o facto de ser simplesmente o melhor no que faço!'", bonusMult: 1.8, feedback: "A tua confiança gerou enorme falatório!" }
                    ]
                }
            ],
            tournament: [
                {
                    npcName: "Comentador e-Sports", avatar: "🏆", badge: "🎮 TORNEIO NACIONAL", title: "Grande Final do Torneio",
                    dialogue: "Estamos no momento decisivo! Como queres apresentar esta final para o público?",
                    choices: [
                        { text: "⚡ 'Criar hype máximo com música épica!'", bonusMult: 1.6, feedback: "O espetáculo bateu recordes de audiência!" },
                        { text: "💰 'Duplicar o prémio do vencedor com patrocínios!'", bonusMult: 2.2, feedback: "O torneio virou notícia em jornais de tecnologia!" }
                    ]
                }
            ],
            giveaway: [
                {
                    npcName: "Representante da Marca", avatar: "🎁", badge: "🎉 MEGA SORTEIO", title: "Entrega do PC Gamer",
                    dialogue: "Chegou a hora de revelar o vencedor! Qual é a dinâmica final que queres aplicar?",
                    choices: [
                        { text: "📞 'Ligar em direto para o vencedor surpresa!'", bonusMult: 1.7, feedback: "A emoção do vencedor contagiou o chat!" },
                        { text: "🧩 'Fazer um jogo de adivinhas para desbloquear!'", bonusMult: 2.5, feedback: "O suspense manteve toda a gente colada ao ecrã!" }
                    ]
                }
            ]
        },
        fanStories: [
            {
                npcName: "Fã Subscritor #1", avatar: "💬", badge: "💬 INTERAÇÃO COM O CHAT", title: "Pergunta dos Fãs",
                dialogue: "Oii! Sou teu fã desde o início! Podes dar um conselho para quem quer começar a fazer streams como tu?",
                choices: [
                    { text: "🌟 'Começa com o que tens e sê sempre autêntico!'", bonusSubs: 120, money: 15.0, feedback: "O teu conselho inspirou centenas de novos inscritos!" },
                    { text: "🎧 'Investe tudo num bom microfone e boa iluminação!'", bonusSubs: 80, money: 25.0, feedback: "Dica valiosa elogiada pela comunidade!" },
                    { text: "🤖 'Sinceramente? Clica no botão vermelho e não penses muito!'", bonusSubs: 200, money: 10.0, feedback: "A tua resposta descontraída virou meme no chat!" }
                ]
            },
            {
                npcName: "Moderador do Chat", avatar: "🛡️️", badge: "💬 PERGUNTA DA COMUNIDADE", title: "Escolha de Conteúdo",
                dialogue: "A comunidade no Discord está a pedir um especial de 24 horas! O que respondemos?",
                choices: [
                    { text: "🚀 'Vamos a isso! Preparar os energéticos para as 24h!'", bonusSubs: 350, money: 50.0, feedback: "Hype absoluto! O chat explodiu em subscrições!" },
                    { text: "🎮 'Preferia fazer uma maratona de 12h focada num jogo novo.'", bonusSubs: 180, money: 30.0, feedback: "A comunidade adorou o plano de maratona!" }
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
        ],
        donators: ['Nuno_RGC', 'Clara_YT', 'Vítor_Vlog', 'PixelQueen', 'PedroGamer99', 'AnaStream'],
        donationMsgs: ['Para o café!', 'Continua o grande trabalho! 🔥', 'Manda um abraço na stream!', 'Top de live!'],
        newsTemplates: [
            "📈 O teu canal superou o marco de {subs} inscritos!",
            "🔥 A tua última stream virou tendência nas redes sociais!",
            "🎙️ Marcas de tecnologia estão de olho no teu crescimento!",
            "⭐ Fãs criaram uma página de memes sobre a tua live!"
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
        interactFansBtn: "💬 Interact with Fans",
        donationsTitle: "💰 Donations & Balance",
        newsTitle: "📰 Streamer News",
        eventsSubtext: "Spend views to participate in interactive events and gain subscriber bonuses!",
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
        participateText: "🎬 Join",
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
            { name: '🎙️️ Lapel Microphone', desc: '+1 View/sec' },
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
        eventStories: {
            collab: [
                {
                    npcName: "Streamer Alex", avatar: "🎧", badge: "🤝 LIVE COLLAB", title: "Joint Stream with Alex",
                    dialogue: "Hey! We are live for 50k people right now! How should we kick off this game?",
                    choices: [
                        { text: "🎯 'Let's focus and show pro-level gameplay!'", bonusMult: 1.0, feedback: "Pro gamers loved your skills!" },
                        { text: "😂 'Let's do funny challenges and laugh!'", bonusMult: 1.5, feedback: "The stream clip went viral on social media!" },
                        { text: "🔥 'I challenge you to a 1v1 duel with punishment!'", bonusMult: 2.0, feedback: "The rivalry exploded the subscriber counter!" }
                    ]
                },
                {
                    npcName: "Gamer Sofia", avatar: "🎮", badge: "🤝 CO-OP MARATHON", title: "Co-Op Marathon",
                    dialogue: "We reached the final level of the game! The chat wants to know our strategy!",
                    choices: [
                        { text: "🛡️ 'I cover your back while you advance!'", bonusMult: 1.1, feedback: "Exemplary teamwork praised by the chat!" },
                        { text: "🚀 'Rush blindly without looking back!'", bonusMult: 1.7, feedback: "The chaos generated hilarious moments!" }
                    ]
                }
            ],
            con: [
                {
                    npcName: "Gaming Con Host", avatar: "🎙️", badge: "🎟️ VIP INTERVIEW", title: "Gaming Con Stage",
                    dialogue: "Here we are with the newest streaming star! What is the secret behind your growth?",
                    choices: [
                        { text: "❤️ 'Daily hard work and caring about my community.'", bonusMult: 1.2, feedback: "Your humility won thousands of hearts!" },
                        { text: "😎 'Honestly? I am simply the best at what I do!'", bonusMult: 1.8, feedback: "Your confidence created huge hype!" }
                    ]
                }
            ],
            tournament: [
                {
                    npcName: "e-Sports Caster", avatar: "🏆", badge: "🎮 TOURNAMENT FINALS", title: "Grand Finals",
                    dialogue: "Decision time! How do you want to present this final?",
                    choices: [
                        { text: "⚡ 'Create maximum hype with epic music!'", bonusMult: 1.6, feedback: "Viewership hit record numbers!" },
                        { text: "💰 'Double the cash prize with sponsors!'", bonusMult: 2.2, feedback: "The tournament made tech news headlines!" }
                    ]
                }
            ],
            giveaway: [
                {
                    npcName: "Sponsor Rep", avatar: "🎁", badge: "🎉 MEGA GIVEAWAY", title: "PC Giveaway",
                    dialogue: "Time to announce the winner! How should we do it?",
                    choices: [
                        { text: "📞 'Call the winner live on stream!'", bonusMult: 1.7, feedback: "The winner reaction touched everyone!" },
                        { text: "🧩 'A mini quiz game to unlock the winner!'", bonusMult: 2.5, feedback: "Suspense kept everyone glued to the stream!" }
                    ]
                }
            ]
        },
        fanStories: [
            {
                npcName: "Fan Subscriber #1", avatar: "💬", badge: "💬 CHAT INTERACTION", title: "Fan Question",
                dialogue: "Hi! I love your streams! Any advice for someone who wants to start streaming?",
                choices: [
                    { text: "🌟 'Start with what you have and be authentic!'", bonusSubs: 120, money: 15.0, feedback: "Your advice inspired many new subs!" },
                    { text: "🎧 'Invest in a good microphone and lighting!'", bonusSubs: 80, money: 25.0, feedback: "Great tip praised by the community!" },
                    { text: "🤖 'Just press the red button and don't overthink!'", bonusSubs: 200, money: 10.0, feedback: "Your chill answer became a chat meme!" }
                ]
            },
            {
                npcName: "Chat Moderator", avatar: "🛡️", badge: "💬 COMMUNITY QUESTION", title: "Content Choice",
                dialogue: "Discord community is asking for a 24h stream special! What should we say?",
                choices: [
                    { text: "🚀 'Let's do it! Get the energy drinks ready!'", bonusSubs: 350, money: 50.0, feedback: "Total hype! Chat exploded with sub renewals!" },
                    { text: "🎮 'I prefer a 12h marathon focused on a new game.'", bonusSubs: 180, money: 30.0, feedback: "Community loved the marathon plan!" }
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
        ],
        donators: ['Nuno_RGC', 'Clara_YT', 'Vítor_Vlog', 'PixelQueen', 'PedroGamer99', 'AnaStream'],
        donationMsgs: ['Coffee money!', 'Keep up the epic work! 🔥', 'Shoutout on stream please!', 'Best stream!'],
        newsTemplates: [
            "📈 Your channel crossed the {subs} subscribers mark!",
            "🔥 Your latest stream is trending on social media!",
            "🎙️ Tech sponsors are noticing your fast growth!",
            "⭐ Fans created a meme page dedicated to your live!"
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
    money: 0.00,
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
            gain.gain.setValueAtTime(0.012, audioCtx.currentTime);
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

    const gender = gameState.userProfile.gender || 'Masculino';
    const streamImg = document.getElementById('main-stream-img');
    streamImg.src = AVATAR_IMAGES[gender] || AVATAR_IMAGES.Masculino;

    if (rankIndex === 4) unlockAchievement('planet_rank');
}

// --- CHAT, DONATIVOS & NOTÍCIAS DINÂMICAS ---
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

    if (chatContainer.children.length > 10) {
        chatContainer.removeChild(chatContainer.firstChild);
    }
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function triggerRandomDonation() {
    const t = i18n[gameState.lang];
    const user = t.donators[Math.floor(Math.random() * t.donators.length)];
    const msg = t.donationMsgs[Math.floor(Math.random() * t.donationMsgs.length)];
    const amount = (Math.random() * 20 + 2).toFixed(2);

    gameState.money = (gameState.money || 0) + parseFloat(amount);

    const feed = document.getElementById('donations-feed');
    if (!feed) return;

    const item = document.createElement('div');
    item.className = 'donation-item';
    item.innerHTML = `<span class="donation-user">${user}</span> doou <span class="donation-amount">€${amount}</span>: "${msg}"`;
    feed.appendChild(item);

    if (feed.children.length > 6) feed.removeChild(feed.firstChild);
    feed.scrollTop = feed.scrollHeight;
}

function addNewsItem(text) {
    const feed = document.getElementById('news-feed');
    if (!feed) return;
    const item = document.createElement('div');
    item.className = 'news-item';
    item.innerText = text;
    feed.appendChild(item);
    if (feed.children.length > 6) feed.removeChild(feed.firstChild);
    feed.scrollTop = feed.scrollHeight;
}

setInterval(() => {
    const t = i18n[gameState.lang];
    if (Math.random() < 0.5) {
        const list = t.chatMessages;
        const user = t.donators[Math.floor(Math.random() * t.donators.length)];
        const text = list[Math.floor(Math.random() * list.length)];
        addChatMessage(user, text);
    }
    if (Math.random() < 0.25) {
        triggerRandomDonation();
    }
}, 3000);

// --- ATUALIZAÇÃO LEVE DA INTERFACE (SEM DELAY) ---
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
    document.getElementById('interact-fans-btn').innerText = t.interactFansBtn;
    document.getElementById('label-donations-title').innerText = t.donationsTitle;
    document.getElementById('label-news-title').innerText = t.newsTitle;
    document.getElementById('label-events-subtext').innerText = t.eventsSubtext;
    document.getElementById('edit-profile-btn').innerText = t.editProfileBtn;
    document.getElementById('save-btn').innerText = t.saveBtn;
    document.getElementById('reset-btn').innerText = t.resetBtn;
    
    document.getElementById('sound-btn').innerText = `${t.sfxBtn} ${gameState.soundEnabled ? t.on : t.off}`;
    document.getElementById('music-btn').innerText = `${t.musicBtn} ${gameState.musicEnabled ? t.on : t.off}`;

    document.getElementById('views-display').innerText = formatNumber(gameState.views);
    document.getElementById('vps-display').innerText = formatNumber(gameState.viewsPerSecond * gameState.multiplier);
    document.getElementById('balance-display').innerText = `€ ${(gameState.money || 0).toFixed(2)}`;
    
    let baseSubs = Math.floor(Math.sqrt(gameState.totalViews));
    let subs = baseSubs + (gameState.bonusSubscribers || 0);
    document.getElementById('subscribers-display').innerText = `👥 ${formatNumber(subs)} ${t.subs}`;

    const u = gameState.userProfile;
    document.getElementById('channel-name').childNodes[0].nodeValue = `${u.name || 'Viral Streamer'} `;
    document.getElementById('user-info-display').innerText = `${u.category || 'Games'} • ${u.age || 20} anos`;

    updateRankAndAvatar(subs);
    checkAchievementsAndPlaque(subs);
    updateUpgradeButtonsState();
    updateEventButtonsState();
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

// --- BOTÃO RED DE CLIQUE ---
const clickBtn = document.getElementById('click-btn');

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
    const rect = clickBtn.getBoundingClientRect();
    const floatEl = document.createElement('div');
    floatEl.className = 'float-text';
    floatEl.innerText = text;

    let x = e.clientX ? e.clientX - rect.left : rect.width / 2;
    let y = e.clientY ? e.clientY - rect.top : rect.height / 2;

    floatEl.style.left = `${rect.left + x - 20}px`;
    floatEl.style.top = `${rect.top + y - 20}px`;

    document.body.appendChild(floatEl);
    setTimeout(() => floatEl.remove(), 800);
}

// --- CONSTRUÇÃO & ATUALIZAÇÃO SEM LAG DOS UPGRADES ---
function buildUpgradesDOM() {
    const listEl = document.getElementById('upgrades-list');
    listEl.innerHTML = '';
    const t = i18n[gameState.lang];

    gameState.upgrades.forEach((up, index) => {
        const upText = t.upgrades[index];
        const card = document.createElement('div');
        card.className = 'upgrade-card';

        card.innerHTML = `
            <div class="card-header-row">
                <span class="card-title">${upText.name}</span>
                <span class="count-tag" id="up-count-${index}">${t.level} ${up.count}</span>
            </div>
            <span class="card-desc">${upText.desc}</span>
            <div class="card-footer-row">
                <span class="cost-tag" id="up-cost-${index}">👁️ ${formatNumber(up.cost)}</span>
                <button class="btn-buy-action" id="up-btn-${index}">
                    ${t.buyBtnText}
                </button>
            </div>
        `;

        listEl.appendChild(card);
        document.getElementById(`up-btn-${index}`).onclick = () => buyUpgrade(index);
    });
}

function updateUpgradeButtonsState() {
    const t = i18n[gameState.lang];
    gameState.upgrades.forEach((up, index) => {
        const btn = document.getElementById(`up-btn-${index}`);
        const costTag = document.getElementById(`up-cost-${index}`);
        const countTag = document.getElementById(`up-count-${index}`);

        if (btn) {
            btn.disabled = gameState.views < up.cost;
            btn.innerText = t.buyBtnText;
        }
        if (costTag) costTag.innerText = `👁️ ${formatNumber(up.cost)}`;
        if (countTag) countTag.innerText = `${t.level} ${up.count}`;
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

// --- CONSTRUÇÃO E ATUALIZAÇÃO DE EVENTOS & CUTSCENES ---
function buildEventsDOM() {
    const listEl = document.getElementById('events-list');
    listEl.innerHTML = '';
    const t = i18n[gameState.lang];

    gameState.events.forEach((ev, index) => {
        const evText = t.events[index];
        const card = document.createElement('div');
        card.className = 'event-card';

        card.innerHTML = `
            <div class="card-header-row">
                <span class="card-title">${evText.name}</span>
                <span class="count-tag" id="ev-count-${index}">x${ev.count}</span>
            </div>
            <span class="card-desc">${evText.desc}</span>
            <span class="event-bonus">💥 Bónus até +${formatNumber(ev.baseSubBonus * 2.5)} Subs</span>
            <div class="card-footer-row">
                <span class="cost-tag" id="ev-cost-${index}">👁️ ${formatNumber(ev.cost)}</span>
                <button class="btn-buy-action" id="ev-btn-${index}">
                    ${t.participateText}
                </button>
            </div>
        `;

        listEl.appendChild(card);
        document.getElementById(`ev-btn-${index}`).onclick = () => launchCutsceneEvent(index);
    });
}

function updateEventButtonsState() {
    const t = i18n[gameState.lang];
    gameState.events.forEach((ev, index) => {
        const btn = document.getElementById(`ev-btn-${index}`);
        const costTag = document.getElementById(`ev-cost-${index}`);
        const countTag = document.getElementById(`ev-count-${index}`);

        if (btn) {
            btn.disabled = gameState.views < ev.cost;
            btn.innerText = t.participateText;
        }
        if (costTag) costTag.innerText = `👁️ ${formatNumber(ev.cost)}`;
        if (countTag) countTag.innerText = `x${ev.count}`;
    });
}

// LANÇAMENTO DE CUTSCENE EVENTO
function launchCutsceneEvent(index) {
    let ev = gameState.events[index];
    if (gameState.views < ev.cost) return;

    gameState.views -= ev.cost;
    ev.count++;

    const t = i18n[gameState.lang];
    const storiesArray = t.eventStories[ev.id] || t.eventStories.collab;
    const cutData = storiesArray[Math.floor(Math.random() * storiesArray.length)];

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
            addNewsItem(`💥 ${cutData.title}: +${formatNumber(gainedSubs)} subs!`);

            if (index === 0) unlockAchievement('collab_first');
            if (index === 1) unlockAchievement('event_first');

            updateUI();
            saveGame();
        };

        choicesContainer.appendChild(btn);
    });

    modal.classList.remove('hidden');
}

// INTERAÇÃO DIRETA COM OS FÃS
document.getElementById('interact-fans-btn').addEventListener('click', () => {
    const t = i18n[gameState.lang];
    const fanStories = t.fanStories;
    const story = fanStories[Math.floor(Math.random() * fanStories.length)];

    const modal = document.getElementById('cutscene-modal');
    document.getElementById('cut-badge').innerText = story.badge;
    document.getElementById('cut-title').innerText = story.title;
    document.getElementById('cut-npc-name').innerText = story.npcName;
    document.getElementById('cut-npc-avatar').innerText = story.avatar;
    document.getElementById('cut-dialogue').innerText = `"${story.dialogue}"`;

    const choicesContainer = document.getElementById('cut-choices');
    choicesContainer.innerHTML = '';

    story.choices.forEach((choice) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = choice.text;

        btn.onclick = () => {
            gameState.bonusSubscribers = (gameState.bonusSubscribers || 0) + choice.bonusSubs;
            gameState.money = (gameState.money || 0) + choice.money;

            modal.classList.add('hidden');
            playBuySFX();
            showAchievementToast(`+${choice.bonusSubs} Subs! ${choice.feedback}`);

            updateUI();
            saveGame();
        };

        choicesContainer.appendChild(btn);
    });

    modal.classList.remove('hidden');
});

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

// --- EVENTO VIRAL ---
setInterval(() => {
    if (!viralEventActive && Math.random() < 0.3) {
        triggerViralEvent();
    }
}, 60000);

function triggerViralEvent() {
    viralEventActive = true;
    gameState.multiplier = 5;
    document.getElementById('event-banner').style.display = 'block';
    unlockAchievement('viral_event');

    setTimeout(() => {
        viralEventActive = false;
        gameState.multiplier = 1;
        document.getElementById('event-banner').style.display = 'none';
        updateUI();
    }, 30000);
}

// --- LÓGICA DE ALTERNÂNCIA DE ABAS (EVENTOS & CONQUISTAS) ---
const tabEventsBtn = document.getElementById('tab-events-btn');
const tabAchievementsBtn = document.getElementById('tab-achievements-btn');

const tabEventsContent = document.getElementById('tab-events-content');
const tabAchievementsContent = document.getElementById('tab-achievements-content');

if (tabEventsBtn && tabAchievementsBtn) {
    tabEventsBtn.addEventListener('click', () => {
        tabEventsBtn.classList.add('active');
        tabAchievementsBtn.classList.remove('active');

        tabEventsContent.classList.add('active');
        tabAchievementsContent.classList.remove('active');
    });

    tabAchievementsBtn.addEventListener('click', () => {
        tabAchievementsBtn.classList.add('active');
        tabEventsBtn.classList.remove('active');

        tabAchievementsContent.classList.add('active');
        tabEventsContent.classList.remove('active');
    });
}

// --- GAME LOOP AUTOMÁTICO ---
setInterval(() => {
    if (gameState.viewsPerSecond > 0) {
        let gained = (gameState.viewsPerSecond / 10) * gameState.multiplier;
        gameState.views += gained;
        gameState.totalViews += gained;
        updateUI();
    }
}, 100);

// --- SELEÇÃO DE IDIOMA ---
const langSelect = document.getElementById('lang-select');
langSelect.addEventListener('change', (e) => {
    gameState.lang = e.target.value;
    resetChatForLanguage();
    buildUpgradesDOM();
    buildEventsDOM();
    updateUI();
    saveGame();
});

// --- SUBMISSÃO DO FORMULÁRIO ---
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

// --- SISTEMA DE GUARDAR E CARREGAR ---
function saveGame() {
    localStorage.setItem('viral_streamer_v7_save', JSON.stringify(gameState));
}

function loadGame() {
    const saved = localStorage.getItem('viral_streamer_v7_save');
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
    buildUpgradesDOM();
    buildEventsDOM();
    updateUI();
}

document.getElementById('save-btn').addEventListener('click', () => {
    saveGame();
    alert(i18n[gameState.lang].savedAlert);
});

document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm(i18n[gameState.lang].confirmReset)) {
        localStorage.removeItem('viral_streamer_v7_save');
        location.reload();
    }
});

// CONTROLOS DE ÁUDIO
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