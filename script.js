// --- CONFIGURAÇÃO DO SUPABASE ---
const SUPABASE_URL = 'https://vsjxpklaqnlqzyyjqfqt.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzanhwa2xhcW5scXp5eWpxZnF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEyMTQzMTksImV4cCI6MjEwNjc5MDMxOX0.gPszq6IVGaSD5SpbKVaoUBYheEwdIVmV7akxeL1lpXU';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const AVATAR_IMAGES = {
    Masculino: "https://www.esafety.gov.au/sites/default/files/2023-01/esafety-online-streaming_thumb.jpg",
    Feminino: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgxXQILc3wjjftJ6d8NhS93fypBisSWcSd25omE6jME68VKzGeXT_Qyvg&s=10",
    Outro: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
};

// --- DICIONÁRIO MULTI-IDIOMA SEM MISTURAS DE TRADUÇÃO (PT / EN) ---
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
        joinText: "💬 Participar",
        totalProgress: "Progresso Total:",
        confirmReset: "Queres mesmo reiniciar todo o teu império de streaming?",
        savedAlert: "Jogo guardado com sucesso!",
        titleStream: "📹 Ecrã de Transmissão",
        tabEvents: "🤝 Eventos & Colabs",
        tabAchievements: "🏆 Conquistas",
        bonusUpTo: "💥 Bónus até",
        yearsOld: "anos",
        subsAbbrev: "Subs",
        loginTitle: "🎮 Criar Canal de Stream",
        loginSubtitle: "Configura a tua identidade para começar a transmitir!",
        labelName: "Nome do Streamer / Canal",
        labelGender: "Sexo do Avatar",
        optFemale: "Feminino ♀",
        optMale: "Masculino ♂",
        labelAge: "Idade",
        labelContent: "Tipo de Conteúdo",
        optGames: "Games / Jogos",
        optJustChatting: "Just Chatting / Conversa",
        btnStartCareer: "🚀 Iniciar Carreira de Streamer",
        navStudio: "Estúdio",
        navLife: "Vida Pessoal",
        navMerch: "Loja Merch",
        navMarketing: "Marketing",
        reqLife: "🔒 Requer 500 Subs",
        reqMerch: "🔒 Requer 10.000 Subs",
        reqMarketing: "🔒 Requer 100.000 Subs",
        titleHouses: "🏠 Casas & Imóveis",
        titleCars: "🏎️ Carros & Veículos",
        titleLifestyle: "❤️ Encontros & Vida Social",
        titleMerch: "👕 Lançar Produtos de Merchandising (€/s)",
        subtextMerch: "Gasta Euros para criar a tua marca de roupa e gerar rendimento passivo!",
        titleMarketing: "📢 Campanhas de Anúncios & Patrocínios",
        subtextMarketing: "Investe em publicidade e ganha bónus temporários massivos de Views!",
        labelMoneyTitle: "Saldo (€)",
        cooldownWait: "Aguarde",
        plaqueBronze: "Placa de Bronze",
        plaqueSilver: "Placa de Prata",
        plaqueGold: "Placa de Ouro",
        plaqueDiamond: "Placa de Diamante",
        plaqueDark: "Placa de Matéria Escura",
        plaqueUnlockedHeader: "APRESENTADO A",
        plaqueHeaderTitle: "🎉 PARABÉNS! GANHASTE A",
        plaqueSubtextText: "A tua comunidade continua a crescer!",
        plaqueCategoryDesc: "POR ULTRAPASSAR {subs} SUBSCRITORES",
        plaqueCloseBtn: "✨ Continuar a Transmitir",
        bannerLife: "🏡 Mansão & Estilo de Vida",
        bannerMerch: "👕 Armazém Oficial de Merchandising",
        bannerMarketing: "📢 Agência de Marketing & Publicidade",
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
        houses: [
            { name: '🏠 Sótão Gamer', desc: '+10% retenção de subs', cost: 500 },
            { name: '🎙️ Estúdio Neon Moderno', desc: '+25% retenção de subs', cost: 2500 },
            { name: '🏙️ Penthouse Luxuosa', desc: '+50% retenção de subs', cost: 15000 },
            { name: '🚀 Villa na Estação Espacial', desc: 'Duplica todos os ganhos!', cost: 100000 }
        ],
        cars: [
            { name: '🚲 Bicicleta Urbana', desc: '+10 Subs em post social', cost: 50 },
            { name: '🛵 Mota Scooter', desc: '+25 Subs em post social', cost: 120 },
            { name: '🚗 Carro Usado de Cidade', desc: '+50 Subs em post social', cost: 200 },
            { name: '🏍️ Mota Superbike', desc: '+150 Subs em post social', cost: 600 },
            { name: '🏎️ Coupé Desportivo', desc: '+500 Subs em post social', cost: 1500 },
            { name: '🏎️ Supercarro Italiano', desc: '+5.000 Subs em post social', cost: 12000 },
            { name: '✈️ Avião Ligeiro', desc: '+25.000 Subs em post social', cost: 80000 },
            { name: '🛩️ Jato Privado VIP', desc: '+100.000 Subs em post social', cost: 350000 }
        ],
        lifestyle: [
            { name: '☕ Café com Streamer Amigo', desc: 'Encontro descontraído de networking', cost: 50 },
            { name: '🎬 Jantar VIP de Criadores', desc: 'Jantar exclusivo com grandes nomes', cost: 300 },
            { name: '✈️ Viagem de Luxo com Fãs', desc: 'Férias inesquecíveis com a comunidade', cost: 2000 }
        ],
        socialStories: [
            {
                badge: "☕ ENCONTRO SOCIAL", title: "Café com Streamer Amigo",
                npcName: "Alex Streamer", avatar: "☕", dialogue: "Que bom rever-te! Como vão correndo as tuas transmissões?",
                choices: [
                    { text: "🤝 'Vamos trocar dicas e fazer uma mentoria!'", bonusSubs: 120, feedback: "A conversa deu ótimas ideias para o canal!" },
                    { text: "📸 'Tirar uma foto juntos para o Instagram!'", bonusSubs: 150, feedback: "A foto teve imenso engajamento!" }
                ]
            },
            {
                badge: "🎬 JANTAR VIP", title: "Jantar de Criadores de Conteúdo",
                npcName: "Organizador VIP", avatar: "🍽️", dialogue: "Bem-vindo ao jantar exclusivo! Vários influenciadores querem falar contigo.",
                choices: [
                    { text: "🥂 'Fazer contactos com os maiores streamers!'", bonusSubs: 800, feedback: "Fizeste grandes parcerias na indústria!" }
                ]
            },
            {
                badge: "✈️ VIAGEM VIP", title: "Viagem de Luxo com Fãs",
                npcName: "Comunidade de Fãs", avatar: "✈️", dialogue: "Chegámos ao resort de luxo! Todos os fãs estão entusiasmados!",
                choices: [
                    { text: "🎉 'Organizar uma festa em direto para os subs!'", bonusSubs: 4000, feedback: "A viagem virou tendência nas redes!" }
                ]
            }
        ],
        merch: [
            { name: '👕 T-Shirt Oficial do Canal', desc: '+€0.50 / segundo', cost: 100 },
            { name: '🧥 Hoodie Gamer Edição Limitada', desc: '+€2.50 / segundo', cost: 500 },
            { name: '🧢 Boné Neon Personalizado', desc: '+€10.00 / segundo', cost: 2500 },
            { name: '🥤 Bebida Energética Própria', desc: '+€50.00 / segundo', cost: 10000 }
        ],
        marketing: [
            { name: '📢 Impulsionar Vídeo no TikTok', desc: 'Multiplica views 2x por 30s', cost: 50, mult: 2, duration: 30 },
            { name: '⭐ Anúncio com Influencer VIP', desc: 'Multiplica views 5x por 20s', cost: 250, mult: 5, duration: 20 },
            { name: '📺 Anúncio de Televisão em Direto', desc: 'Multiplica views 10x por 15s', cost: 1500, mult: 10, duration: 15 }
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
                        { text: "😂 'Vamos fazer desafios engraçados e rir muito!'", bonusMult: 1.5, feedback: "O vídeo tornou-se viral em memes!" }
                    ]
                }
            ]
        },
        fanStories: [
            {
                npcName: "Fã Subscritor #1", avatar: "💬", badge: "💬 INTERAÇÃO COM O CHAT", title: "Pergunta dos Fãs",
                dialogue: "Oii! Sou teu fã desde o início! Podes dar um conselho para quem quer começar a fazer streams como tu?",
                choices: [
                    { text: "🌟 'Começa com o que tens e sê sempre autêntico!'", bonusSubs: 120, money: 15.0, feedback: "O teu conselho inspirou centenas de novos inscritos!" }
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
        chatMessages: ['Manda abraço!', 'QUE JOGADA! 🔥', 'GG!!', 'Subi para patrocinador!', 'Melhor live de sempre ❤'],
        donators: ['Nuno_RGC', 'Clara_YT', 'Vítor_Vlog', 'PixelQueen', 'PedroGamer99', 'AnaStream'],
        donationMsgs: ['Para o café!', 'Continua o grande trabalho! 🔥', 'Manda um abraço na stream!']
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
        joinText: "💬 Join",
        totalProgress: "Total Progress:",
        confirmReset: "Are you sure you want to reset your streaming empire?",
        savedAlert: "Game saved successfully!",
        titleStream: "📹 Stream Screen",
        tabEvents: "🤝 Events & Collabs",
        tabAchievements: "🏆 Achievements",
        bonusUpTo: "💥 Bonus up to",
        yearsOld: "years old",
        subsAbbrev: "Subs",
        loginTitle: "🎮 Create Stream Channel",
        loginSubtitle: "Set up your identity to start streaming!",
        labelName: "Streamer / Channel Name",
        labelGender: "Avatar Gender",
        optFemale: "Female ♀",
        optMale: "Male ♂",
        labelAge: "Age",
        labelContent: "Content Type",
        optGames: "Games",
        optJustChatting: "Just Chatting",
        btnStartCareer: "🚀 Start Streamer Career",
        navStudio: "Studio",
        navLife: "Personal Life",
        navMerch: "Merch Shop",
        navMarketing: "Marketing",
        reqLife: "🔒 Requires 500 Subs",
        reqMerch: "🔒 Requires 10,000 Subs",
        reqMarketing: "🔒 Requires 100,000 Subs",
        titleHouses: "🏠 Houses & Real Estate",
        titleCars: "🏎️ Cars & Vehicles",
        titleLifestyle: "❤️ Dates & Social Life",
        titleMerch: "👕 Launch Merchandising Products (€/s)",
        subtextMerch: "Spend Euros to build your apparel brand and generate passive income!",
        titleMarketing: "📢 Ad Campaigns & Sponsorships",
        subtextMarketing: "Invest in advertising for massive temporary View boosts!",
        labelMoneyTitle: "Balance (€)",
        cooldownWait: "Wait",
        plaqueBronze: "Bronze Play Button",
        plaqueSilver: "Silver Play Button",
        plaqueGold: "Gold Play Button",
        plaqueDiamond: "Diamond Play Button",
        plaqueDark: "Dark Matter Play Button",
        plaqueUnlockedHeader: "PRESENTED TO",
        plaqueHeaderTitle: "🎉 CONGRATULATIONS! YOU UNLOCKED THE",
        plaqueSubtextText: "Your community keeps growing!",
        plaqueCategoryDesc: "FOR PASSING {subs} SUBSCRIBERS",
        plaqueCloseBtn: "✨ Keep Streaming",
        bannerLife: "🏡 Mansion & Lifestyle",
        bannerMerch: "👕 Official Merchandising Warehouse",
        bannerMarketing: "📢 Marketing & Advertising Agency",
        ranks: [
            { title: "📍 Mom's Bedroom" },
            { title: '🏠 Gamer Attic' },
            { title: '🎙️ Neon Studio' },
            { title: '🏙️ Streamer Penthouse' },
            { title: '🚀 Space Station' }
        ],
        upgrades: [
            { name: '💻 RGB Mechanical Keyboard', desc: '+1 View/click' },
            { name: '🎙 Lapel Microphone', desc: '+1 View/sec' },
            { name: '💡 Pro Ring Light', desc: '+8 Views/sec' },
            { name: '🎬 Paid Video Editor', desc: '+45 Views/sec' },
            { name: '🪑 Pro Gaming Chair', desc: '+200 Views/sec' },
            { name: '⚡ Energy Drink Sponsor', desc: '+1,100 Views/sec' },
            { name: '🖥️ RGC Supercomputer', desc: '+6,000 Views/sec' }
        ],
        houses: [
            { name: '🏠 Gamer Attic', desc: '+10% sub retention', cost: 500 },
            { name: '🎙️ Modern Neon Studio', desc: '+25% sub retention', cost: 2500 },
            { name: '🏙️ Luxury Penthouse', desc: '+50% sub retention', cost: 15000 },
            { name: '🚀 Space Station Villa', desc: 'Double all earnings!', cost: 100000 }
        ],
        cars: [
            { name: '🚲 City Bicycle', desc: '+10 Subs on social post', cost: 50 },
            { name: '🛵 Scooter Motorbike', desc: '+25 Subs on social post', cost: 120 },
            { name: '🚗 Used City Car', desc: '+50 Subs on social post', cost: 200 },
            { name: '🏍️ Superbike Motorcycle', desc: '+150 Subs on social post', cost: 600 },
            { name: '🏎️ Sports Coupe', desc: '+500 Subs on social post', cost: 1500 },
            { name: '🏎️ Italian Supercar', desc: '+5,000 Subs on social post', cost: 12000 },
            { name: '✈️ Light Aircraft', desc: '+25,000 Subs on social post', cost: 80000 },
            { name: '🛩️ Private VIP Jet', desc: '+100,000 Subs on social post', cost: 350000 }
        ],
        lifestyle: [
            { name: '☕ Coffee with Streamer Friend', desc: 'Casual networking meetup', cost: 50 },
            { name: '🎬 VIP Creator Dinner', desc: 'Exclusive dinner with top creators', cost: 300 },
            { name: '✈️ Luxury Trip with Fans', desc: 'Unforgettable vacation with community', cost: 2000 }
        ],
        socialStories: [
            {
                badge: "☕ SOCIAL DATE", title: "Coffee with Streamer Friend",
                npcName: "Alex Streamer", avatar: "☕", dialogue: "Great to see you! How are your streams going?",
                choices: [
                    { text: "🤝 'Let's exchange tips and mentor each other!'", bonusSubs: 120, feedback: "The talk gave great ideas for the channel!" },
                    { text: "📸 'Take a photo together for Instagram!'", bonusSubs: 150, feedback: "The photo received great engagement!" }
                ]
            },
            {
                badge: "🎬 VIP DINNER", title: "VIP Creator Dinner",
                npcName: "VIP Host", avatar: "🍽️", dialogue: "Welcome to the VIP dinner! Many creators want to network with you.",
                choices: [
                    { text: "🥂 'Network with top streamers!'", bonusSubs: 800, feedback: "You made great connections in the industry!" }
                ]
            },
            {
                badge: "✈️ VIP TRIP", title: "Luxury Trip with Fans",
                npcName: "Fan Community", avatar: "✈️", dialogue: "We arrived at the luxury resort! Everyone is super excited!",
                choices: [
                    { text: "🎉 'Host an exclusive live party for subs!'", bonusSubs: 4000, feedback: "The trip trended all over social media!" }
                ]
            }
        ],
        merch: [
            { name: '👕 Official Channel T-Shirt', desc: '+€0.50 / second', cost: 100 },
            { name: '🧥 Limited Edition Gamer Hoodie', desc: '+€2.50 / second', cost: 500 },
            { name: '🧢 Custom Neon Cap', desc: '+€10.00 / second', cost: 2500 },
            { name: '🥤 Branded Energy Drink', desc: '+€50.00 / second', cost: 10000 }
        ],
        marketing: [
            { name: '📢 Boost Video on TikTok', desc: 'Multiply views 2x for 30s', cost: 50, mult: 2, duration: 30 },
            { name: '⭐ Ad with VIP Influencer', desc: 'Multiply views 5x for 20s', cost: 250, mult: 5, duration: 20 },
            { name: '📺 Live TV Commercial', desc: 'Multiply views 10x for 15s', cost: 1500, mult: 10, duration: 15 }
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
                        { text: "🎯 'Let's focus and show pro-level gameplay!'", bonusMult: 1.0, feedback: "Pro gamers loved your skills!" }
                    ]
                }
            ]
        },
        fanStories: [
            {
                npcName: "Fan Subscriber #1", avatar: "💬", badge: "💬 CHAT INTERACTION", title: "Fan Question",
                dialogue: "Hi! I love your streams! Any advice for someone who wants to start streaming?",
                choices: [
                    { text: "🌟 'Start with what you have and be authentic!'", bonusSubs: 120, money: 15.0, feedback: "Your advice inspired many new subs!" }
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
        chatMessages: ['Shoutout please!', 'WHAT A PLAY! 🔥', 'GG!!', 'Just subscribed!', 'Best stream ever ❤'],
        donators: ['Nuno_RGC', 'Clara_YT', 'Vítor_Vlog', 'PixelQueen', 'PedroGamer99', 'AnaStream'],
        donationMsgs: ['Coffee money!', 'Keep up the epic work! 🔥', 'Shoutout on stream please!']
    }
};

// --- ESTADO GLOBAL DO JOGO ---
let gameState = {
    lang: 'pt',
    currentLocation: 'studio',
    userProfile: { name: '', gender: 'Masculino', age: 20, category: 'Games' },
    plaqueAwarded: false,
    plaquesUnlocked: { bronze: false, silver: false, gold: false, diamond: false, dark: false },
    views: 0,
    totalViews: 0,
    money: 0.00,
    moneyPerSecond: 0.00,
    bonusSubscribers: 0,
    viewsPerClick: 1,
    viewsPerSecond: 0,
    multiplier: 1,
    soundEnabled: true,
    musicEnabled: true,
    interactCooldownEnd: 0,
    upgrades: [
        { id: 'click_1', cost: 15, vpc: 1, vps: 0, count: 0 },
        { id: 'mic', cost: 50, vpc: 0, vps: 1, count: 0 },
        { id: 'ringlight', cost: 350, vpc: 0, vps: 8, count: 0 },
        { id: 'editor', cost: 2000, vpc: 0, vps: 45, count: 0 },
        { id: 'chair', cost: 10000, vpc: 0, vps: 200, count: 0 },
        { id: 'sponsor', cost: 50000, vpc: 0, vps: 1100, count: 0 },
        { id: 'pc', cost: 250000, vpc: 0, vps: 6000, count: 0 }
    ],
    houses: [ { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 } ],
    cars: [ { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 } ],
    lifestyle: [ { count: 0 }, { count: 0 }, { count: 0 } ],
    merch: [ { count: 0 }, { count: 0 }, { count: 0 }, { count: 0 } ],
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

function changeLoginLang(lang) {
    gameState.lang = lang;
    updateLoginUI();
    const mainLangSelect = document.getElementById('lang-select');
    if (mainLangSelect) mainLangSelect.value = lang;
}

function updateLoginUI() {
    const t = i18n[gameState.lang];
    if (!t) return;
    const setTxt = (id, txt) => {
        const el = document.getElementById(id);
        if (el && txt) el.innerText = txt;
    };

    setTxt('setup-title', t.loginTitle);
    setTxt('setup-subtitle', t.loginSubtitle);
    setTxt('label-setup-name', t.labelName);
    setTxt('label-setup-gender', t.labelGender);
    setTxt('opt-gender-male', t.optMale);
    setTxt('opt-gender-female', t.optFemale);
    setTxt('label-setup-age', t.labelAge);
    setTxt('label-setup-category', t.labelContent);
    setTxt('opt-cat-games', t.optGames);
    setTxt('opt-cat-irl', t.optJustChatting);
    setTxt('btn-setup-start', t.btnStartCareer);
}

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

function formatNumber(num) {
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
    return Math.floor(num).toLocaleString(gameState.lang === 'pt' ? 'pt-PT' : 'en-US');
}

// --- ESCALA DE EFICIÊNCIA ---
function recalculateStats() {
    let newVpc = 1;
    let newVps = 0;

    gameState.upgrades.forEach((up, index) => {
        if (up.count > 0) {
            let count = up.count;
            let mult = 1 + ((count - 1) * 0.12);

            if (index === 0) {
                newVpc += Math.floor(count * 1 * mult);
            } else {
                let baseValues = [0, 1, 8, 45, 200, 1100, 6000];
                newVps += Math.floor(baseValues[index] * count * mult);
            }
        }
    });

    gameState.viewsPerClick = newVpc;
    gameState.viewsPerSecond = newVps;
}

function recalculateMerchIncome() {
    let totalIncome = 0;
    const baseIncomes = [0.5, 2.5, 10.0, 50.0];
    gameState.merch.forEach((item, idx) => {
        totalIncome += item.count * baseIncomes[idx];
    });
    gameState.moneyPerSecond = totalIncome;
}

// --- RANKS & PLACAS ---
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
    if (streamImg) streamImg.src = AVATAR_IMAGES[gender] || AVATAR_IMAGES.Masculino;

    if (rankIndex === 4) unlockAchievement('planet_rank');
}

function switchLocation(locationKey) {
    const subs = Math.floor(Math.sqrt(gameState.totalViews)) + (gameState.bonusSubscribers || 0);

    if (locationKey === 'life' && subs < 500) return;
    if (locationKey === 'merch' && subs < 10000) return;
    if (locationKey === 'marketing' && subs < 100000) return;

    gameState.currentLocation = locationKey;

    document.querySelectorAll('.location-section').forEach(sec => sec.classList.add('hidden'));
    document.querySelectorAll('.nav-loc-btn').forEach(btn => btn.classList.remove('active'));

    const activeSec = document.getElementById(`location-${locationKey}`);
    const activeBtn = document.getElementById(`nav-btn-${locationKey}`);

    if (activeSec) activeSec.classList.remove('hidden');
    if (activeBtn) activeBtn.classList.add('active');

    const recordDock = document.getElementById('record-dock');
    if (recordDock) {
        if (locationKey === 'studio') recordDock.style.display = 'flex';
        else recordDock.style.display = 'none';
    }
}

function updateNavigationButtons() {
    const t = i18n[gameState.lang];
    const subs = Math.floor(Math.sqrt(gameState.totalViews)) + (gameState.bonusSubscribers || 0);

    const btnStudio = document.getElementById('nav-btn-studio');
    const btnLife = document.getElementById('nav-btn-life');
    const btnMerch = document.getElementById('nav-btn-merch');
    const btnMarketing = document.getElementById('nav-btn-marketing');

    if (btnStudio) document.getElementById('nav-label-studio').innerText = t.navStudio;

    if (btnLife) {
        if (subs >= 500) {
            btnLife.disabled = false;
            document.getElementById('nav-label-life').innerText = t.navLife;
        } else {
            btnLife.disabled = true;
            document.getElementById('nav-label-life').innerText = t.reqLife;
        }
    }

    if (btnMerch) {
        if (subs >= 10000) {
            btnMerch.disabled = false;
            document.getElementById('nav-label-merch').innerText = t.navMerch;
        } else {
            btnMerch.disabled = true;
            document.getElementById('nav-label-merch').innerText = t.reqMerch;
        }
    }

    if (btnMarketing) {
        if (subs >= 100000) {
            btnMarketing.disabled = false;
            document.getElementById('nav-label-marketing').innerText = t.navMarketing;
        } else {
            btnMarketing.disabled = true;
            document.getElementById('nav-label-marketing').innerText = t.reqMarketing;
        }
    }
}

function checkPlaques(subs) {
    const t = i18n[gameState.lang];
    const p = gameState.plaquesUnlocked;

    const checkPlaqueTier = (tierKey, reqSubs, plaqueTitle, icon) => {
        const wallEl = document.getElementById(`wall-plaque-${tierKey}`);
        if (subs >= reqSubs) {
            if (wallEl) wallEl.classList.remove('locked');
            if (!p[tierKey]) {
                p[tierKey] = true;
                triggerPlaqueModal(plaqueTitle, reqSubs, icon);
            }
        }
    };

    checkPlaqueTier('bronze', 1000, t.plaqueBronze, '🥉');
    checkPlaqueTier('silver', 10000, t.plaqueSilver, '🥈');
    checkPlaqueTier('gold', 100000, t.plaqueGold, '🥇');
    checkPlaqueTier('diamond', 1000000, t.plaqueDiamond, '💎');
    checkPlaqueTier('dark', 10000000, t.plaqueDark, '👑');
}

// CORREÇÃO COMPLETA DO MODAL DA PLACA EM AMBOS OS IDIOMAS
function triggerPlaqueModal(title, reqSubs, icon) {
    const modal = document.getElementById('plaque-modal');
    if (!modal) return;
    const t = i18n[gameState.lang];

    document.getElementById('modal-plaque-icon').innerText = icon;
    document.getElementById('modal-plaque-header').innerText = t.plaqueUnlockedHeader;
    document.getElementById('plaque-user-name').innerText = gameState.userProfile.name || 'STREAMER';
    document.getElementById('plaque-category-desc').innerText = t.plaqueCategoryDesc.replace('{subs}', formatNumber(reqSubs));
    document.getElementById('plaque-title-text').innerText = `${t.plaqueHeaderTitle} ${title.toUpperCase()}!`;
    document.getElementById('plaque-subtext').innerText = t.plaqueSubtextText;
    document.getElementById('close-plaque-btn').innerText = t.plaqueCloseBtn;
    
    modal.classList.remove('hidden');
    playAchievementSFX();
}

document.getElementById('close-plaque-btn').addEventListener('click', () => {
    document.getElementById('plaque-modal').classList.add('hidden');
});

function resetChatForLanguage() {
    const chatContainer = document.getElementById('chat-messages');
    if (chatContainer) {
        chatContainer.innerHTML = '';
        addChatMessage('ModBot', i18n[gameState.lang].welcomeChat);
    }
}

function addChatMessage(user, text) {
    const chatContainer = document.getElementById('chat-messages');
    if (!chatContainer) return;
    const line = document.createElement('div');
    line.className = 'chat-line';
    line.innerHTML = `<span class="chat-user">${user}:</span> ${text}`;
    chatContainer.appendChild(line);

    if (chatContainer.children.length > 10) chatContainer.removeChild(chatContainer.firstChild);
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

function updateUI() {
    const t = i18n[gameState.lang];

    const setTxt = (id, txt) => {
        const el = document.getElementById(id);
        if (el && txt !== undefined) el.innerText = txt;
    };

    setTxt('live-badge-text', t.liveBadge);
    setTxt('label-total-views', t.totalViews);
    setTxt('label-vps', t.vps);
    setTxt('label-streaming', t.streaming);
    setTxt('rec-btn-title', t.recTitle);
    setTxt('rec-btn-sub', t.recSub);
    setTxt('event-banner', t.viralBanner);
    setTxt('chat-header', t.chatHeader);
    setTxt('toast-header', t.toastHeader);
    setTxt('title-upgrades', t.titleUpgrades);
    setTxt('label-donations-title', t.donationsTitle);
    setTxt('label-news-title', t.newsTitle);
    setTxt('label-events-subtext', t.eventsSubtext);
    setTxt('edit-profile-btn', t.editProfileBtn);
    setTxt('save-btn', t.saveBtn);
    setTxt('reset-btn', t.resetBtn);
    setTxt('title-stream', t.titleStream);
    setTxt('tab-events-btn', t.tabEvents);
    setTxt('tab-achievements-btn', t.tabAchievements);
    setTxt('label-money-title', t.labelMoneyTitle);
    setTxt('title-achievements-progress', t.totalProgress);

    setTxt('title-houses', t.titleHouses);
    setTxt('title-cars', t.titleCars);
    setTxt('title-lifestyle', t.titleLifestyle);
    setTxt('title-merch', t.titleMerch);
    setTxt('subtext-merch', t.subtextMerch);
    setTxt('title-marketing', t.titleMarketing);
    setTxt('subtext-marketing', t.subtextMarketing);

    setTxt('banner-life-title', t.bannerLife);
    setTxt('banner-merch-title', t.bannerMerch);
    setTxt('banner-marketing-title', t.bannerMarketing);

    setTxt('sound-btn', `${t.sfxBtn} ${gameState.soundEnabled ? t.on : t.off}`);
    setTxt('music-btn', `${t.musicBtn} ${gameState.musicEnabled ? t.on : t.off}`);

    setTxt('views-display', formatNumber(gameState.views));
    setTxt('vps-display', formatNumber(gameState.viewsPerSecond * gameState.multiplier));
    setTxt('balance-display', `€ ${(gameState.money || 0).toFixed(2)}${gameState.moneyPerSecond > 0 ? ` (+€${gameState.moneyPerSecond.toFixed(1)}/s)` : ''}`);
    
    let baseSubs = Math.floor(Math.sqrt(gameState.totalViews));
    let subs = baseSubs + (gameState.bonusSubscribers || 0);
    setTxt('subscribers-display', `👥 ${formatNumber(subs)} ${t.subs}`);

    const u = gameState.userProfile;
    const chName = document.getElementById('channel-name');
    if (chName && chName.childNodes[0]) {
        chName.childNodes[0].nodeValue = `${u.name || 'Viral Streamer'} `;
    }
    setTxt('user-info-display', `${u.category || 'Games'} • ${u.age || 20} ${t.yearsOld}`);

    updateRankAndAvatar(subs);
    checkAchievementsAndPlaque(subs);
    checkPlaques(subs);
    updateNavigationButtons();
    updateUpgradeButtonsState();
    updateEventButtonsState();
    updateLifeButtonsState();
    updateMerchButtonsState();
    updateMarketingButtonsState();
    updateInteractCooldownBtn();
    renderAchievements();
}

function checkAchievementsAndPlaque(subs) {
    if (gameState.totalViews >= 100) unlockAchievement('views_100');
    if (gameState.totalViews >= 1000000) unlockAchievement('views_1m');
    if (subs >= 50000) unlockAchievement('subs_50k');
    if (subs >= 1000) unlockAchievement('subs_1k');
}

const clickBtn = document.getElementById('click-btn');
if (clickBtn) {
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
}

function createFloatText(e, text) {
    if (!clickBtn) return;
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

function buildUpgradesDOM() {
    const listEl = document.getElementById('upgrades-list');
    if (!listEl) return;
    listEl.innerHTML = '';
    const t = i18n[gameState.lang];

    gameState.upgrades.forEach((up, index) => {
        const upText = t.upgrades[index];
        const card = document.createElement('div');
        card.className = 'upgrade-card';

        let currentLevel = up.count;
        let efficiencyMultiplier = 1 + (currentLevel > 0 ? (currentLevel - 1) * 0.12 : 0);
        let baseValues = [1, 1, 8, 45, 200, 1100, 6000];
        let currentGains = currentLevel > 0 ? Math.floor(baseValues[index] * currentLevel * efficiencyMultiplier) : 0;
        let unitText = index === 0 ? 'View/click' : 'Views/sec';

        card.innerHTML = `
            <div class="card-header-row">
                <span class="card-title">${upText.name}</span>
                <span class="count-tag" id="up-count-${index}">${t.level} ${up.count}</span>
            </div>
            <span class="card-desc">${upText.desc} (${currentGains > 0 ? `Atual: +${formatNumber(currentGains)}${unitText}` : 'Nível 0'})</span>
            <div class="card-footer-row">
                <span class="cost-tag" id="up-cost-${index}">👁️ ${formatNumber(up.cost)}</span>
                <button class="btn-buy-action" id="up-btn-${index}">${t.buyBtnText}</button>
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

        if (btn) btn.disabled = gameState.views < up.cost;
        if (costTag) costTag.innerText = `👁️ ${formatNumber(up.cost)}`;
        if (countTag) countTag.innerText = `${t.level} ${up.count}`;
    });
}

function buyUpgrade(index) {
    let up = gameState.upgrades[index];
    if (gameState.views >= up.cost) {
        gameState.views -= up.cost;
        up.count++;
        recalculateStats();
        up.cost = Math.floor(up.cost * 1.25);
        playBuySFX();
        unlockAchievement('upgrade_first');
        buildUpgradesDOM();
        updateUI();
        saveGame();
    }
}

function buildLifeDOM() {
    const housesEl = document.getElementById('houses-list');
    const carsEl = document.getElementById('cars-list');
    const socialEl = document.getElementById('social-list');
    const t = i18n[gameState.lang];

    if (housesEl) {
        housesEl.innerHTML = '';
        t.houses.forEach((h, idx) => {
            const card = document.createElement('div');
            card.className = 'upgrade-card';
            card.innerHTML = `
                <div class="card-header-row">
                    <span class="card-title">${h.name}</span>
                    <span class="count-tag" id="house-count-${idx}">${t.level} ${gameState.houses[idx].count}</span>
                </div>
                <span class="card-desc">${h.desc}</span>
                <div class="card-footer-row">
                    <span class="cost-tag">€ ${h.cost}</span>
                    <button class="btn-buy-action" id="house-btn-${idx}">${t.buyBtnText}</button>
                </div>
            `;
            housesEl.appendChild(card);
            document.getElementById(`house-btn-${idx}`).onclick = () => buyHouse(idx);
        });
    }

    if (carsEl) {
        carsEl.innerHTML = '';
        t.cars.forEach((c, idx) => {
            const card = document.createElement('div');
            card.className = 'upgrade-card';
            card.innerHTML = `
                <div class="card-header-row">
                    <span class="card-title">${c.name}</span>
                    <span class="count-tag" id="car-count-${idx}">${t.level} ${gameState.cars[idx].count}</span>
                </div>
                <span class="card-desc">${c.desc}</span>
                <div class="card-footer-row">
                    <span class="cost-tag">€ ${c.cost}</span>
                    <button class="btn-buy-action" id="car-btn-${idx}">${t.buyBtnText}</button>
                </div>
            `;
            carsEl.appendChild(card);
            document.getElementById(`car-btn-${idx}`).onclick = () => buyCar(idx);
        });
    }

    if (socialEl) {
        socialEl.innerHTML = '';
        t.lifestyle.forEach((s, idx) => {
            const card = document.createElement('div');
            card.className = 'upgrade-card';
            card.innerHTML = `
                <div class="card-header-row">
                    <span class="card-title">${s.name}</span>
                </div>
                <span class="card-desc">${s.desc}</span>
                <div class="card-footer-row">
                    <span class="cost-tag">€ ${s.cost}</span>
                    <button class="btn-buy-action" id="social-btn-${idx}">${t.joinText}</button>
                </div>
            `;
            socialEl.appendChild(card);
            document.getElementById(`social-btn-${idx}`).onclick = () => launchSocialCutscene(idx);
        });
    }
}

function updateLifeButtonsState() {
    const t = i18n[gameState.lang];
    t.houses.forEach((h, idx) => {
        const btn = document.getElementById(`house-btn-${idx}`);
        if (btn) btn.disabled = gameState.money < h.cost;
    });
    t.cars.forEach((c, idx) => {
        const btn = document.getElementById(`car-btn-${idx}`);
        if (btn) btn.disabled = gameState.money < c.cost;
    });
    t.lifestyle.forEach((s, idx) => {
        const btn = document.getElementById(`social-btn-${idx}`);
        if (btn) btn.disabled = gameState.money < s.cost;
    });
}

function buyHouse(idx) {
    const h = i18n[gameState.lang].houses[idx];
    if (gameState.money >= h.cost) {
        gameState.money -= h.cost;
        gameState.houses[idx].count++;
        playBuySFX();
        updateUI();
        saveGame();
    }
}

function buyCar(idx) {
    const c = i18n[gameState.lang].cars[idx];
    const bonuses = [10, 25, 50, 150, 500, 5000, 25000, 100000];
    if (gameState.money >= c.cost) {
        gameState.money -= c.cost;
        gameState.cars[idx].count++;
        gameState.bonusSubscribers += bonuses[idx];
        playBuySFX();
        addNewsItem(`🏎️ Veículo adquirido: ${c.name}! +${bonuses[idx]} subs!`);
        updateUI();
        saveGame();
    }
}

function launchSocialCutscene(idx) {
    const t = i18n[gameState.lang];
    const s = t.lifestyle[idx];
    const stories = t.socialStories;
    if (!stories || !stories[idx]) return;
    if (gameState.money < s.cost) return;

    gameState.money -= s.cost;
    const story = stories[idx];

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
            gameState.lifestyle[idx].count++;

            modal.classList.add('hidden');
            playBuySFX();
            showAchievementToast(`+${choice.bonusSubs} Subs! ${choice.feedback}`);
            addNewsItem(`❤️ ${story.title}: +${choice.bonusSubs} subs!`);

            updateUI();
            saveGame();
        };

        choicesContainer.appendChild(btn);
    });

    modal.classList.remove('hidden');
}

function buildMerchDOM() {
    const listEl = document.getElementById('merch-list');
    if (!listEl) return;
    listEl.innerHTML = '';
    const t = i18n[gameState.lang];

    t.merch.forEach((m, idx) => {
        const card = document.createElement('div');
        card.className = 'upgrade-card';
        card.innerHTML = `
            <div class="card-header-row">
                <span class="card-title">${m.name}</span>
                <span class="count-tag" id="merch-count-${idx}">${t.level} ${gameState.merch[idx].count}</span>
            </div>
            <span class="card-desc">${m.desc}</span>
            <div class="card-footer-row">
                <span class="cost-tag">€ ${m.cost}</span>
                <button class="btn-buy-action" id="merch-btn-${idx}">${t.buyBtnText}</button>
            </div>
        `;
        listEl.appendChild(card);
        document.getElementById(`merch-btn-${idx}`).onclick = () => buyMerch(idx);
    });
}

function updateMerchButtonsState() {
    const t = i18n[gameState.lang];
    t.merch.forEach((m, idx) => {
        const btn = document.getElementById(`merch-btn-${idx}`);
        if (btn) btn.disabled = gameState.money < m.cost;
    });
}

function buyMerch(idx) {
    const m = i18n[gameState.lang].merch[idx];
    if (gameState.money >= m.cost) {
        gameState.money -= m.cost;
        gameState.merch[idx].count++;
        recalculateMerchIncome();
        playBuySFX();
        updateUI();
        saveGame();
    }
}

function buildMarketingDOM() {
    const listEl = document.getElementById('marketing-list');
    if (!listEl) return;
    listEl.innerHTML = '';
    const t = i18n[gameState.lang];

    t.marketing.forEach((m, idx) => {
        const card = document.createElement('div');
        card.className = 'upgrade-card';
        card.innerHTML = `
            <div class="card-header-row">
                <span class="card-title">${m.name}</span>
            </div>
            <span class="card-desc">${m.desc}</span>
            <div class="card-footer-row">
                <span class="cost-tag">€ ${m.cost}</span>
                <button class="btn-buy-action" id="marketing-btn-${idx}">${t.participateText}</button>
            </div>
        `;
        listEl.appendChild(card);
        document.getElementById(`marketing-btn-${idx}`).onclick = () => triggerMarketing(idx);
    });
}

function updateMarketingButtonsState() {
    const t = i18n[gameState.lang];
    t.marketing.forEach((m, idx) => {
        const btn = document.getElementById(`marketing-btn-${idx}`);
        if (btn) btn.disabled = gameState.money < m.cost;
    });
}

function triggerMarketing(idx) {
    const m = i18n[gameState.lang].marketing[idx];
    if (gameState.money >= m.cost) {
        gameState.money -= m.cost;
        gameState.multiplier = m.mult;
        playBuySFX();
        updateUI();

        setTimeout(() => {
            gameState.multiplier = 1;
            updateUI();
        }, m.duration * 1000);
    }
}

function buildEventsDOM() {
    const listEl = document.getElementById('events-list');
    if (!listEl) return;
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
            <span class="event-bonus">${t.bonusUpTo} +${formatNumber(ev.baseSubBonus * 2.5)} ${t.subsAbbrev}</span>
            <div class="card-footer-row">
                <span class="cost-tag">👁️ ${formatNumber(ev.cost)}</span>
                <button class="btn-buy-action" id="ev-btn-${index}">${t.participateText}</button>
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
        if (btn) btn.disabled = gameState.views < ev.cost;
    });
}

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

document.getElementById('interact-fans-btn').addEventListener('click', () => {
    const now = Date.now();
    if (now < gameState.interactCooldownEnd) return;

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
            gameState.interactCooldownEnd = Date.now() + 45000;

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

function updateInteractCooldownBtn() {
    const btn = document.getElementById('interact-fans-btn');
    if (!btn) return;
    const t = i18n[gameState.lang];
    const remaining = Math.ceil((gameState.interactCooldownEnd - Date.now()) / 1000);

    if (remaining > 0) {
        btn.disabled = true;
        btn.innerText = `⏳ ${t.cooldownWait} (${remaining}s)`;
    } else {
        btn.disabled = false;
        btn.innerText = t.interactFansBtn;
    }
}

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
    if (!toast) return;
    document.getElementById('toast-desc').innerText = title;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3500);
}

function renderAchievements() {
    const listEl = document.getElementById('achievements-list');
    if (!listEl) return;
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

    const achCount = document.getElementById('achievements-count');
    if (achCount) achCount.innerText = `${unlockedCount}/${gameState.achievements.length}`;
}

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

setInterval(() => {
    if (gameState.viewsPerSecond > 0) {
        let gained = (gameState.viewsPerSecond / 10) * gameState.multiplier;
        gameState.views += gained;
        gameState.totalViews += gained;
    }
    if (gameState.moneyPerSecond > 0) {
        gameState.money += (gameState.moneyPerSecond / 10);
    }
    updateUI();
}, 100);

const langSelect = document.getElementById('lang-select');
if (langSelect) {
    langSelect.addEventListener('change', (e) => {
        gameState.lang = e.target.value;
        resetChatForLanguage();
        rebuildAllDOMs();
        updateUI();
        saveGame();
    });
}

function rebuildAllDOMs() {
    buildUpgradesDOM();
    buildEventsDOM();
    buildLifeDOM();
    buildMerchDOM();
    buildMarketingDOM();
}

const setupModal = document.getElementById('setup-modal');
const setupForm = document.getElementById('setup-form');

if (setupForm) {
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
}

document.getElementById('edit-profile-btn').addEventListener('click', () => {
    document.getElementById('input-name').value = gameState.userProfile.name || '';
    document.getElementById('input-gender').value = gameState.userProfile.gender || 'Masculino';
    document.getElementById('input-age').value = gameState.userProfile.age || 20;
    document.getElementById('input-category').value = gameState.userProfile.category || 'Games';
    setupModal.classList.remove('hidden');
});

async function saveGame() {
    try {
        localStorage.setItem('viral_streamer_v10_save', JSON.stringify(gameState));
    } catch (e) {}

    const playerName = gameState?.userProfile?.name;
    if (!playerName) return;

    if (typeof supabaseClient !== 'undefined') {
        try {
            await supabaseClient.from('saves').upsert({ player_id: playerName, game_data: gameState });
        } catch (err) {}
    }
}

async function loadGame() {
    const saved = localStorage.getItem('viral_streamer_v10_save');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            gameState = { ...gameState, ...parsed };
            recalculateStats();
            recalculateMerchIncome();
        } catch (e) {}
    }

    if (!gameState.userProfile || !gameState.userProfile.name) {
        setupModal.classList.remove('hidden');
    } else {
        setupModal.classList.add('hidden');
    }

    if (langSelect && gameState.lang) langSelect.value = gameState.lang;
    resetChatForLanguage();
    rebuildAllDOMs();
    switchLocation(gameState.currentLocation || 'studio');
    updateUI();
}

document.getElementById('sound-btn').addEventListener('click', () => {
    gameState.soundEnabled = !gameState.soundEnabled;
    updateUI();
});

document.getElementById('music-btn').addEventListener('click', () => {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    gameState.musicEnabled = !gameState.musicEnabled;
    updateUI();
});

loadGame();
startBgMusic();