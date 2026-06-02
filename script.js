// ===== Critter Quest - kid-friendly scavenger hunt =====

const THEMES = {
    surprise: {
        name: 'Surprise Mix', emoji: '🎲', mascots: ['🦊', '🐵', '🦄', '🐙', '🦜', '🐲', '🐼', '🦁'],
        special: 'mix',
        items: [],
    },
    home: {
        name: 'My House', emoji: '🏠', mascots: ['🐶', '🐱', '🐹'],
        items: [
            ['🪑', 'Chair'], ['📚', 'Book'], ['🥄', 'Spoon'], ['🧸', 'Teddy'],
            ['🧦', 'Sock'], ['🕐', 'Clock'], ['🍴', 'Fork'], ['🪥', 'Toothbrush'],
            ['🛏️', 'Bed'], ['🧴', 'Soap'], ['🖍️', 'Crayon'], ['🪞', 'Mirror'],
            ['🧺', 'Basket'], ['🔑', 'Key'], ['💡', 'Lamp'], ['🪟', 'Window'],
            ['📺', 'TV'], ['🚪', 'Door'], ['🪜', 'Ladder'], ['🧹', 'Broom'],
            ['🛋️', 'Couch'], ['🖼️', 'Picture'], ['🧦', 'Slipper'], ['☎️', 'Phone'],
        ],
    },
    outside: {
        name: 'Outside', emoji: '🌳', mascots: ['🐿️', '🐦', '🐰'],
        items: [
            ['🌳', 'Tree'], ['🌸', 'Flower'], ['🪨', 'Rock'], ['🍃', 'Leaf'],
            ['🐦', 'Bird'], ['🐛', 'Bug'], ['☁️', 'Cloud'], ['🌼', 'Daisy'],
            ['🦋', 'Butterfly'], ['🐜', 'Ant'], ['🌱', 'Sprout'], ['🪵', 'Stick'],
            ['🐝', 'Bee'], ['🕸️', 'Web'], ['🍄', 'Mushroom'], ['🐌', 'Snail'],
            ['🪺', 'Nest'], ['🌰', 'Acorn'], ['🐞', 'Ladybug'], ['🦗', 'Cricket'],
            ['🌲', 'Pine'], ['🪻', 'Bluebell'], ['🐸', 'Frog'], ['🌧️', 'Rain'],
        ],
    },
    park: {
        name: 'The Park', emoji: '🛝', mascots: ['🦆', '🐕', '🐿️'],
        items: [
            ['🛝', 'Slide'], ['🌳', 'Tree'], ['🐕', 'Dog'], ['⚽', 'Ball'],
            ['🪁', 'Kite'], ['🦆', 'Duck'], ['🚲', 'Bike'], ['🌷', 'Tulip'],
            ['🪑', 'Bench'], ['🐿️', 'Squirrel'], ['🏀', 'Hoop'], ['🌊', 'Pond'],
            ['🍦', 'Ice cream'], ['🐦', 'Bird'], ['🌞', 'Sun'], ['🧺', 'Picnic'],
            ['🛹', 'Skateboard'], ['🤸', 'Cartwheel'], ['🎡', 'Wheel'], ['🌳', 'Bush'],
            ['🦢', 'Swan'], ['🍂', 'Leaves'], ['🚰', 'Fountain'], ['🐶', 'Puppy'],
        ],
    },
    colors: {
        name: 'Colors', emoji: '🌈', mascots: ['🦄', '🦜', '🌈'],
        items: [
            ['🔴', 'Red'], ['🟠', 'Orange'], ['🟡', 'Yellow'], ['🟢', 'Green'],
            ['🔵', 'Blue'], ['🟣', 'Purple'], ['🟤', 'Brown'], ['⚫', 'Black'],
            ['⚪', 'White'], ['🌸', 'Pink'], ['🩵', 'Sky blue'], ['🟩', 'Lime'],
            ['🩷', 'Rose'], ['🟦', 'Navy'], ['🟨', 'Gold'], ['🟧', 'Amber'],
            ['🩶', 'Gray'], ['🟥', 'Cherry'], ['🟪', 'Violet'], ['🌈', 'Rainbow'],
        ],
    },
    farm: {
        name: 'The Farm', emoji: '🚜', mascots: ['🐄', '🐖', '🐔'],
        items: [
            ['🐄', 'Cow'], ['🐖', 'Pig'], ['🐑', 'Sheep'], ['🐔', 'Chicken'],
            ['🐴', 'Horse'], ['🦆', 'Duck'], ['🚜', 'Tractor'], ['🌽', 'Corn'],
            ['🥚', 'Egg'], ['🐐', 'Goat'], ['🐱', 'Cat'], ['🌾', 'Hay'],
            ['🐰', 'Bunny'], ['🦃', 'Turkey'], ['🥕', 'Carrot'], ['🍎', 'Apple'],
            ['🐓', 'Rooster'], ['🐑', 'Lamb'], ['🍅', 'Tomato'], ['🐝', 'Bee'],
            ['🪣', 'Bucket'], ['🥬', 'Lettuce'], ['🐶', 'Sheepdog'], ['🌻', 'Sunflower'],
        ],
    },
    ocean: {
        name: 'The Sea', emoji: '🌊', mascots: ['🐠', '🐬', '🐙'],
        items: [
            ['🐠', 'Fish'], ['🐙', 'Octopus'], ['🦀', 'Crab'], ['🐚', 'Shell'],
            ['⭐', 'Starfish'], ['🐬', 'Dolphin'], ['🐳', 'Whale'], ['🦈', 'Shark'],
            ['🐢', 'Turtle'], ['🦞', 'Lobster'], ['🪸', 'Coral'], ['🐡', 'Pufferfish'],
            ['🦭', 'Seal'], ['🐧', 'Penguin'], ['🌊', 'Wave'], ['⛵', 'Boat'],
            ['🦑', 'Squid'], ['🐳', 'Spout'], ['🪼', 'Jellyfish'], ['🦦', 'Otter'],
            ['🏝️', 'Island'], ['🦐', 'Shrimp'], ['🐊', 'Croc'], ['🧜', 'Mermaid'],
        ],
    },
    kitchen: {
        name: 'The Kitchen', emoji: '🍳', mascots: ['🐭', '🐱', '🐧'],
        items: [
            ['🍳', 'Pan'], ['🍴', 'Fork'], ['🥄', 'Spoon'], ['🔪', 'Knife'],
            ['🍽️', 'Plate'], ['🥛', 'Milk'], ['🧊', 'Ice'], ['🧂', 'Salt'],
            ['🫖', 'Teapot'], ['☕', 'Cup'], ['🍞', 'Bread'], ['🧈', 'Butter'],
            ['🥚', 'Egg'], ['🧀', 'Cheese'], ['🍯', 'Honey'], ['🥣', 'Bowl'],
            ['🫕', 'Pot'], ['🧁', 'Cupcake'], ['🍪', 'Cookie'], ['🥤', 'Drink'],
        ],
    },
    toys: {
        name: 'Toy Box', emoji: '🧸', mascots: ['🐻', '🐰', '🤖'],
        items: [
            ['🧸', 'Teddy'], ['🪀', 'Yo-yo'], ['🎈', 'Balloon'], ['🎲', 'Dice'],
            ['🧩', 'Puzzle'], ['🪁', 'Kite'], ['🚂', 'Train'], ['🚗', 'Car'],
            ['🤖', 'Robot'], ['🪅', 'Piñata'], ['🎯', 'Target'], ['🥁', 'Drum'],
            ['🎺', 'Trumpet'], ['🪃', 'Boomerang'], ['🏎️', 'Racecar'], ['🦖', 'Dino'],
            ['🪆', 'Doll'], ['⚽', 'Ball'], ['🎮', 'Game'], ['🧱', 'Blocks'],
        ],
    },
    shapes: {
        name: 'Shapes', emoji: '🔷', mascots: ['🦉', '🐢', '🦄'],
        items: [
            ['⭕', 'Circle'], ['🔺', 'Triangle'], ['⬛', 'Square'], ['⭐', 'Star'],
            ['❤️', 'Heart'], ['🔷', 'Diamond'], ['➕', 'Plus'], ['🔶', 'Orange diamond'],
            ['⬜', 'White square'], ['🔵', 'Blue circle'], ['🟥', 'Red square'], ['🌙', 'Crescent'],
            ['🔻', 'Down triangle'], ['🟢', 'Dot'], ['✴️', 'Sparkle'], ['🔘', 'Button'],
        ],
    },
    weather: {
        name: 'Weather', emoji: '⛅', mascots: ['🐧', '🦆', '🐻‍❄️'],
        items: [
            ['☀️', 'Sun'], ['☁️', 'Cloud'], ['🌧️', 'Rain'], ['⛈️', 'Storm'],
            ['🌈', 'Rainbow'], ['❄️', 'Snow'], ['⛄', 'Snowman'], ['🌬️', 'Wind'],
            ['🌪️', 'Tornado'], ['🌫️', 'Fog'], ['🌙', 'Moon'], ['⭐', 'Star'],
            ['🌡️', 'Hot'], ['☂️', 'Umbrella'], ['⚡', 'Lightning'], ['🌊', 'Flood'],
        ],
    },
    vehicles: {
        name: 'Things That Go', emoji: '🚓', mascots: ['🐵', '🐶', '🦊'],
        items: [
            ['🚗', 'Car'], ['🚌', 'Bus'], ['🚓', 'Police car'], ['🚒', 'Fire truck'],
            ['🚑', 'Ambulance'], ['🚜', 'Tractor'], ['🚲', 'Bike'], ['🛵', 'Scooter'],
            ['✈️', 'Plane'], ['🚁', 'Helicopter'], ['🚂', 'Train'], ['🚀', 'Rocket'],
            ['⛵', 'Boat'], ['🚢', 'Ship'], ['🚚', 'Truck'], ['🚕', 'Taxi'],
            ['🛻', 'Pickup'], ['🚐', 'Van'], ['🏍️', 'Motorbike'], ['🛺', 'Tuk-tuk'],
        ],
    },
    space: {
        name: 'Outer Space', emoji: '🚀', mascots: ['👽', '🐲', '🤖'],
        items: [
            ['🚀', 'Rocket'], ['🌟', 'Star'], ['🌙', 'Moon'], ['☀️', 'Sun'],
            ['🪐', 'Planet'], ['👽', 'Alien'], ['🛸', 'UFO'], ['☄️', 'Comet'],
            ['🌌', 'Galaxy'], ['👨‍🚀', 'Astronaut'], ['🌍', 'Earth'], ['⭐', 'Twinkle'],
            ['🔭', 'Telescope'], ['🌠', 'Wish star'], ['🌑', 'Dark moon'], ['🛰️', 'Satellite'],
        ],
    },
    sweets: {
        name: 'Sweet Treats', emoji: '🍭', mascots: ['🐻', '🐰', '🐱'],
        items: [
            ['🍭', 'Lollipop'], ['🍬', 'Candy'], ['🍫', 'Chocolate'], ['🍩', 'Donut'],
            ['🧁', 'Cupcake'], ['🍰', 'Cake'], ['🍪', 'Cookie'], ['🍦', 'Ice cream'],
            ['🍮', 'Pudding'], ['🍡', 'Dango'], ['🍯', 'Honey'], ['🎂', 'Birthday cake'],
            ['🥧', 'Pie'], ['🍓', 'Strawberry'], ['🍒', 'Cherry'], ['🍌', 'Banana'],
        ],
    },
};

const PRAISE = ['Yay!', 'Great job!', 'You found it!', 'Awesome!', 'Wow!', 'Super!', 'Nice!', 'Woohoo!'];
const CONFETTI_COLORS = ['#ff5ca8', '#ffd23f', '#3ddc84', '#29b6f6', '#7c4dff', '#ff9f43'];
const RAINBOW = ['#ff3b3b', '#ff9f43', '#ffd23f', '#3ddc84', '#29b6f6', '#7c4dff', '#ff5ca8'];

// Stickers a kid can earn and keep in their sticker book
const STICKERS = ['🦊', '🐰', '🐢', '🦉', '🐝', '🦋', '🐞', '🐸', '🐧', '🦄', '🐱', '🐶', '🐼', '🦁', '🐯', '🐵', '🐙', '🐟', '🦜', '🐛'];
const STICKER_KEY = 'critterQuestStickers';
const PREF_KEY = 'critterQuestPrefs';
const STATS_KEY = 'critterQuestStats';

// Random "Quest Twists" — each round randomly gets one to keep things fresh
const QUEST_TWISTS = [
    { id: 'classic', name: 'Classic Quest', emoji: '🧭', desc: 'Find them all!', weight: 3 },
    { id: 'golden', name: 'Golden Rush', emoji: '✨', desc: 'Extra golden treasures hide inside!', weight: 2 },
    { id: 'mystery', name: 'Mystery Mode', emoji: '❓', desc: 'Some cards are secret — use the clues!', weight: 2 },
    { id: 'rainbow', name: 'Rainbow Round', emoji: '🌈', desc: 'A rainbow treasure is worth 5 stars!', weight: 2 },
    { id: 'double', name: 'Double Stars', emoji: '⭐', desc: 'Every find counts double!', weight: 2 },
    { id: 'speedy', name: 'Speedy Safari', emoji: '⚡', desc: 'Find fast, little explorer!', weight: 2 },
];

// Cheerful surprise critters that randomly pop in during a hunt
const POP_CRITTERS = ['🐸', '🐝', '🦋', '🐞', '🐰', '🐿️', '🦔', '🐥', '🦊', '🐢'];

const state = {
    theme: 'surprise',
    count: 8,
    items: [],
    found: new Set(),
    stars: 0,
    sound: true,
    pendingPhotoId: null,
    haptics: true,
    twist: 'classic',
    starMult: 1,
    bonusStars: 0,
    mascot: '🐶',
    popTimer: null,
};

let audioCtx = null;

// ---------- Helpers ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function showScreen(id) {
    $$('.screen').forEach((s) => s.classList.remove('active'));
    $('#' + id).classList.add('active');
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

// Weighted random pick from QUEST_TWISTS
function pickTwist() {
    const pool = [];
    QUEST_TWISTS.forEach((t) => { for (let i = 0; i < t.weight; i++) pool.push(t); });
    return rand(pool);
}

// Pick a random mascot for a theme
function themeMascot(t) {
    return rand(t.mascots || [t.mascot || '🦊']);
}

// Resolve the item pool for a theme. The Surprise Mix pulls from everything.
function themeItems(key) {
    const t = THEMES[key];
    if (t && t.special === 'mix') {
        const all = [];
        const seen = new Set();
        Object.entries(THEMES).forEach(([k, th]) => {
            if (th.special === 'mix') return;
            th.items.forEach((it) => {
                if (!seen.has(it[1])) { seen.add(it[1]); all.push(it); }
            });
        });
        return all;
    }
    return t.items;
}

// Build a kid-friendly clue from an item name (for Mystery Mode)
function clueFor(name) {
    const letter = name[0].toUpperCase();
    const len = name.replace(/[^a-zA-Z]/g, '').length;
    return `Starts with "${letter}" • ${len} letters`;
}

// ---------- Haptics ----------
function buzz(pattern) {
    if (!state.haptics) return;
    try { if (navigator.vibrate) navigator.vibrate(pattern); } catch (e) { /* ignore */ }
}

// ---------- Screen Wake Lock (keep screen on while hunting) ----------
let wakeLock = null;
async function requestWakeLock() {
    try {
        if ('wakeLock' in navigator) {
            wakeLock = await navigator.wakeLock.request('screen');
            wakeLock.addEventListener('release', () => { wakeLock = null; });
        }
    } catch (e) { /* ignore (e.g. battery saver) */ }
}
function releaseWakeLock() {
    try { if (wakeLock) { wakeLock.release(); wakeLock = null; } } catch (e) { /* ignore */ }
}

// ---------- Preferences ----------
function loadPrefs() {
    try { return JSON.parse(localStorage.getItem(PREF_KEY)) || {}; }
    catch (e) { return {}; }
}
function savePrefs(prefs) {
    try { localStorage.setItem(PREF_KEY, JSON.stringify(prefs)); } catch (e) { /* ignore */ }
}

// ---------- Lifetime stats ----------
function loadStats() {
    try { return JSON.parse(localStorage.getItem(STATS_KEY)) || { hunts: 0, stars: 0 }; }
    catch (e) { return { hunts: 0, stars: 0 }; }
}
function saveStats(stats) {
    try { localStorage.setItem(STATS_KEY, JSON.stringify(stats)); } catch (e) { /* ignore */ }
}
function recordWin(stars) {
    const stats = loadStats();
    stats.hunts += 1;
    stats.stars += stars;
    saveStats(stats);
}
function renderStats() {
    const stats = loadStats();
    const stickers = loadStickers().length;
    const strip = $('#statStrip');
    if (!strip) return;
    if (!stats.hunts && !stats.stars && !stickers) { strip.style.display = 'none'; return; }
    $('#statHunts').textContent = stats.hunts;
    $('#statStars').textContent = stats.stars;
    $('#statStickers').textContent = stickers;
    strip.style.display = 'flex';
}

// ---------- Sound ----------
function tone(freq, dur = 0.12, type = 'sine', vol = 0.25) {
    if (!state.sound) return;
    try {
        audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.type = type;
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(vol, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
        osc.start();
        osc.stop(audioCtx.currentTime + dur);
    } catch (e) { /* ignore */ }
}

function happyChime() {
    [523, 659, 784].forEach((f, i) => setTimeout(() => tone(f, 0.15, 'triangle'), i * 90));
}

function winFanfare() {
    [523, 587, 659, 784, 880, 1047].forEach((f, i) => setTimeout(() => tone(f, 0.22, 'triangle'), i * 130));
}

function speak(text) {
    if (!state.sound || !('speechSynthesis' in window)) return;
    try {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.rate = 0.9; u.pitch = 1.3; u.volume = 1;
        window.speechSynthesis.speak(u);
    } catch (e) { /* ignore */ }
}

// ---------- Build home ----------
function buildThemeGrid() {
    const grid = $('#themeGrid');
    grid.innerHTML = '';
    Object.entries(THEMES).forEach(([key, t]) => {
        const card = document.createElement('button');
        card.className = 'theme-card' + (key === state.theme ? ' selected' : '') + (t.special === 'mix' ? ' surprise-card' : '');
        card.dataset.theme = key;
        card.innerHTML = `<span class="emoji">${t.emoji}</span><span class="name">${t.name}</span>`;
        card.addEventListener('click', () => {
            state.theme = key;
            $$('.theme-card').forEach((c) => c.classList.remove('selected'));
            card.classList.add('selected');
            tone(660, 0.08, 'square', 0.15);
            const t2 = THEMES[key];
            const m = themeMascot(t2);
            $('#homeMascot').textContent = m;
            $('#homeSpeech').textContent = t2.special === 'mix'
                ? `A different mix every time!`
                : `Let's explore ${t2.name}!`;
            speak(t2.name);
        });
        grid.appendChild(card);
    });
}

// ---------- Start hunt ----------
function startHunt() {
    const theme = THEMES[state.theme];
    const pool = themeItems(state.theme);
    const picks = shuffle(pool).slice(0, Math.min(state.count, pool.length));
    state.items = picks.map(([emoji, name], i) => ({
        id: i, emoji, name, photo: null,
        golden: false, rainbow: false, mystery: false,
    }));

    // Pick a fresh random twist and pick a random mascot for the round
    const twist = pickTwist();
    state.twist = twist.id;
    state.starMult = twist.id === 'double' ? 2 : 1;
    state.mascot = themeMascot(theme);

    applyTwist(twist);

    state.found = new Set();
    state.stars = 0;
    state.bonusStars = 0;

    $('#starCount').textContent = '0';
    $('#trackCritter').textContent = state.mascot;
    $('#huntInstruction').textContent = state.twist === 'mystery'
        ? 'Tap a card when you spot its secret thing!'
        : 'Tap it, or use 📸 for photo proof!';
    updateTrack();
    buildCards();
    showScreen('huntScreen');
    showTwistBanner(twist);
    happyChime();
    buzz(20);
    requestWakeLock();
    scheduleCritterPop();
}

// Apply special item types based on the chosen twist
function applyTwist(twist) {
    const items = state.items;
    if (!items.length) return;

    // Golden treasures: 1 normally, 2-3 on a Golden Rush
    let goldCount = Math.random() < 0.5 ? 1 : 0;
    if (twist.id === 'golden') goldCount = 2 + (Math.random() < 0.5 ? 1 : 0);
    const order = shuffle(items.map((it) => it.id));
    let oi = 0;
    for (let g = 0; g < goldCount && oi < order.length; g++, oi++) {
        const it = items.find((x) => x.id === order[oi]);
        if (it) it.golden = true;
    }

    // Rainbow treasure (worth 5 stars) on Rainbow Round
    if (twist.id === 'rainbow' && oi < order.length) {
        const it = items.find((x) => x.id === order[oi]);
        if (it) { it.rainbow = true; it.golden = false; oi++; }
    }

    // Mystery Mode: about half the non-special cards become secret clue cards
    if (twist.id === 'mystery') {
        items.forEach((it) => {
            if (!it.golden && !it.rainbow && Math.random() < 0.6) it.mystery = true;
        });
    }
}

// Announce the round's twist with a quick banner overlay
function showTwistBanner(twist) {
    const banner = $('#twistBanner');
    if (!banner) return;
    banner.innerHTML = `
        <span class="twist-emoji">${twist.emoji}</span>
        <span class="twist-name">${twist.name}</span>
        <span class="twist-desc">${twist.desc}</span>
    `;
    banner.classList.remove('show');
    void banner.offsetWidth; // restart animation
    banner.classList.add('show');
    speak(twist.name);
    clearTimeout(showTwistBanner._t);
    showTwistBanner._t = setTimeout(() => banner.classList.remove('show'), 2200);
}

// Randomly pop a friendly critter onto the screen for a tappable bonus
function scheduleCritterPop() {
    clearTimeout(state.popTimer);
    if (state.twist === 'speedy') { /* still pops, just flavor */ }
    const delay = 4000 + Math.random() * 6000;
    state.popTimer = setTimeout(spawnCritterPop, delay);
}

function spawnCritterPop() {
    if (!$('#huntScreen').classList.contains('active')) return;
    const el = document.createElement('button');
    el.className = 'critter-pop';
    el.textContent = rand(POP_CRITTERS);
    el.style.left = (10 + Math.random() * 76) + 'vw';
    el.style.top = (30 + Math.random() * 50) + 'vh';
    el.addEventListener('click', () => {
        tone(990, 0.08, 'triangle', 0.18);
        buzz([15, 30, 15]);
        burstConfetti(10);
        state.bonusStars += 1;
        updateStars();
        speak('Bonus star!');
        el.classList.add('caught');
        setTimeout(() => el.remove(), 300);
    });
    document.body.appendChild(el);
    setTimeout(() => { if (el.isConnected) el.remove(); }, 3500);
    scheduleCritterPop();
}

function buildCards() {
    const grid = $('#cardGrid');
    grid.innerHTML = '';
    state.items.forEach((item) => {
        const card = document.createElement('div');
        let cls = 'find-card';
        if (item.golden) cls += ' golden';
        if (item.rainbow) cls += ' rainbow';
        if (item.mystery) cls += ' mystery';
        card.className = cls;
        card.dataset.id = item.id;
        const faceEmoji = item.mystery ? '❓' : (item.golden ? '✨' : (item.rainbow ? '🌈' : item.emoji));
        const faceName = item.mystery ? clueFor(item.name) : item.name;
        card.innerHTML = `
            <button class="say-btn" aria-label="Hint for ${item.name}">🔊</button>
            <img class="photo-thumb" alt="">
            <span class="card-emoji">${faceEmoji}</span>
            <span class="card-name">${faceName}</span>
            <span class="photo-badge">📸</span>
            <button class="cam-btn" aria-label="Take a photo of ${item.name}">📸</button>
            <span class="check-stamp">✅</span>
        `;
        card.addEventListener('click', (e) => {
            if (e.target.closest('.say-btn') || e.target.closest('.cam-btn')) return;
            collect(item, card);
        });
        card.querySelector('.say-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            tone(720, 0.06, 'square', 0.12);
            speak(item.mystery && !state.found.has(item.id) ? clueFor(item.name) : item.name);
        });
        card.querySelector('.cam-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            takePhoto(item.id);
        });
        grid.appendChild(card);
    });
}

// ---------- Photo proof ----------
function takePhoto(id) {
    state.pendingPhotoId = id;
    tone(880, 0.05, 'square', 0.12);
    $('#cameraInput').click();
}

function onPhotoChosen(e) {
    const file = e.target.files && e.target.files[0];
    e.target.value = '';
    if (file == null || state.pendingPhotoId == null) return;
    const id = state.pendingPhotoId;
    state.pendingPhotoId = null;
    const reader = new FileReader();
    reader.onload = () => {
        const item = state.items.find((it) => it.id === id);
        if (!item) return;
        item.photo = reader.result;
        const card = $(`.find-card[data-id="${id}"]`);
        if (card) {
            card.querySelector('.photo-thumb').src = reader.result;
            card.classList.add('has-photo');
            if (!state.found.has(id)) collect(item, card);
        }
    };
    reader.readAsDataURL(file);
}

function collect(item, card) {
    if (state.found.has(item.id)) {
        // tapping again un-finds (in case of mistake)
        state.found.delete(item.id);
        card.classList.remove('found');
        updateStars();
        updateTrack();
        tone(300, 0.1, 'sine', 0.15);
        return;
    }
    state.found.add(item.id);
    card.classList.add('found', 'pop');
    setTimeout(() => card.classList.remove('pop'), 460);

    // Reveal the real item if it was a Mystery card
    if (item.mystery) {
        card.querySelector('.card-emoji').textContent = item.emoji;
        card.querySelector('.card-name').textContent = item.name;
        card.classList.add('revealed');
    }

    updateStars();
    updateTrack();
    if (item.rainbow) {
        winFanfare();
        rainbowBurst(60);
        buzz([20, 40, 20, 40, 60]);
        speak('Wow! A rainbow treasure!');
    } else if (item.golden) {
        winFanfare();
        rainbowBurst(40);
        buzz([20, 40, 60]);
        speak('Wow! A golden surprise!');
    } else {
        happyChime();
        burstConfetti(14);
        buzz(30);
        speak(item.mystery ? 'It was a ' + item.name + '!' : rand(PRAISE));
    }

    if (state.found.size === state.items.length) {
        setTimeout(win, 700);
    }
}

function updateStars() {
    // rainbow = 5, golden = 3, normal = 1; whole round can be doubled
    const base = [...state.found].reduce((sum, id) => {
        const it = state.items.find((x) => x.id === id);
        if (!it) return sum;
        if (it.rainbow) return sum + 5;
        if (it.golden) return sum + 3;
        return sum + 1;
    }, 0);
    state.stars = base * state.starMult + state.bonusStars;
    $('#starCount').textContent = state.stars;
}

function updateTrack() {
    const pct = state.items.length ? (state.found.size / state.items.length) * 100 : 0;
    $('#trackFill').style.width = pct + '%';
    $('#trackCritter').style.left = pct + '%';
}

// ---------- Win ----------
function win() {
    clearTimeout(state.popTimer);
    $$('.critter-pop').forEach((c) => c.remove());
    releaseWakeLock();
    recordWin(state.stars);
    buzz([30, 50, 30, 50, 30, 50, 120]);
    $('#winMascot').textContent = state.mascot;
    $('#winSub').textContent = `You found all ${state.items.length} things and earned ${state.stars} stars!`;
    $('#winStars').textContent = '⭐'.repeat(Math.min(state.stars, 14));

    buildScrapbook();
    awardSticker();

    showScreen('winScreen');
    winFanfare();
    speak('Hooray! You did it!');
    confettiStorm();
}

// ---------- Scrapbook ----------
function buildScrapbook() {
    const photos = state.items.filter((it) => it.photo);
    const wrap = $('#scrapbook');
    const grid = $('#scrapGrid');
    if (!photos.length) { wrap.style.display = 'none'; return; }
    grid.innerHTML = '';
    photos.forEach((it) => {
        const cell = document.createElement('div');
        cell.className = 'scrap-item';
        cell.innerHTML = `<img src="${it.photo}" alt="${it.name}"><span class="scrap-tag">${it.name}</span>`;
        grid.appendChild(cell);
    });
    wrap.style.display = 'block';
}

async function sharePhotos() {
    const photos = state.items.filter((it) => it.photo);
    if (!photos.length) return;
    try {
        const files = await Promise.all(photos.map(async (it, i) => {
            const blob = await (await fetch(it.photo)).blob();
            return new File([blob], `find-${i + 1}-${it.name}.jpg`, { type: blob.type || 'image/jpeg' });
        }));
        if (navigator.canShare && navigator.canShare({ files })) {
            await navigator.share({ files, title: 'My Critter Quest finds!', text: 'Look what I found! 🎉' });
            return;
        }
    } catch (e) { /* fall through to download */ }
    // Fallback: download each photo
    photos.forEach((it, i) => {
        const a = document.createElement('a');
        a.href = it.photo;
        a.download = `find-${i + 1}-${it.name}.jpg`;
        document.body.appendChild(a);
        a.click();
        a.remove();
    });
}

// ---------- Sticker book ----------
function loadStickers() {
    try { return JSON.parse(localStorage.getItem(STICKER_KEY)) || []; }
    catch (e) { return []; }
}

function saveStickers(list) {
    try { localStorage.setItem(STICKER_KEY, JSON.stringify(list)); } catch (e) { /* ignore */ }
}

function awardSticker() {
    const earned = loadStickers();
    const sticker = rand(STICKERS);
    earned.push(sticker);
    saveStickers(earned);
    $('#rewardEmoji').textContent = sticker;
    $('#rewardSticker').style.display = 'flex';
}

function renderStickerBook() {
    const earned = loadStickers();
    const book = $('#stickerBook');
    const row = $('#stickerRow');
    if (!earned.length) { book.style.display = 'none'; return; }
    row.innerHTML = '';
    earned.slice(-24).forEach((s) => {
        const span = document.createElement('span');
        span.className = 'sticker';
        span.textContent = s;
        row.appendChild(span);
    });
    book.style.display = 'block';
}

// ---------- Confetti ----------
function makePiece(x, fromTop) {
    const layer = $('#confettiLayer');
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.left = x + 'vw';
    p.style.background = rand(CONFETTI_COLORS);
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    const dur = 1.6 + Math.random() * 1.4;
    p.style.animationDuration = dur + 's';
    if (fromTop) p.style.top = '-20px';
    layer.appendChild(p);
    setTimeout(() => p.remove(), dur * 1000 + 200);
}

function burstConfetti(n) {
    for (let i = 0; i < n; i++) makePiece(Math.random() * 100, true);
}

function rainbowBurst(n) {
    const layer = $('#confettiLayer');
    for (let i = 0; i < n; i++) {
        const p = document.createElement('div');
        p.className = 'confetti-piece';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.background = RAINBOW[i % RAINBOW.length];
        p.style.borderRadius = '50%';
        p.style.width = p.style.height = (10 + Math.random() * 12) + 'px';
        const dur = 1.4 + Math.random() * 1.6;
        p.style.animationDuration = dur + 's';
        layer.appendChild(p);
        setTimeout(() => p.remove(), dur * 1000 + 200);
    }
}

function confettiStorm() {
    let i = 0;
    const t = setInterval(() => {
        burstConfetti(10);
        if (++i > 12) clearInterval(t);
    }, 200);
}

// ---------- Sound toggle ----------
function setSound(on) {
    state.sound = on;
    const icon = on ? '🔊' : '🔇';
    $('#soundToggle').textContent = icon;
    $('#huntSoundToggle').textContent = icon;
    $('#soundToggle').classList.toggle('muted', !on);
    $('#huntSoundToggle').classList.toggle('muted', !on);
    if (!on && 'speechSynthesis' in window) window.speechSynthesis.cancel();
    const prefs = loadPrefs();
    prefs.sound = on;
    savePrefs(prefs);
}

// ---------- Wire up ----------
function goHome() {
    clearTimeout(state.popTimer);
    $$('.critter-pop').forEach((c) => c.remove());
    releaseWakeLock();
    renderStickerBook();
    renderStats();
    showScreen('homeScreen');
}

function init() {
    // Restore saved preferences
    const prefs = loadPrefs();
    if (typeof prefs.sound === 'boolean') state.sound = prefs.sound;

    buildThemeGrid();
    renderStickerBook();
    renderStats();
    setSound(state.sound);

    $$('.count-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            state.count = parseInt(btn.dataset.count, 10);
            $$('.count-btn').forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            tone(560, 0.08, 'square', 0.15);
        });
    });

    $('#startBtn').addEventListener('click', startHunt);
    $('#backBtn').addEventListener('click', () => { goHome(); tone(330, 0.1); });
    $('#playAgainBtn').addEventListener('click', startHunt);
    $('#homeFromWinBtn').addEventListener('click', goHome);
    $('#shareBtn').addEventListener('click', sharePhotos);

    $('#cameraInput').addEventListener('change', onPhotoChosen);

    // Tap the mascot for a cheerful word
    $('#homeMascot').addEventListener('click', () => {
        const cheers = ["You're awesome!", 'Ready to explore?', 'Let\'s find treasures!', 'High five!', 'You can do it!'];
        $('#homeSpeech').textContent = rand(cheers);
        speak($('#homeSpeech').textContent);
        $('#homeMascot').style.animation = 'none';
        requestAnimationFrame(() => { $('#homeMascot').style.animation = ''; });
        burstConfetti(8);
    });

    $('#soundToggle').addEventListener('click', () => setSound(!state.sound));
    $('#huntSoundToggle').addEventListener('click', () => setSound(!state.sound));

    // Prime speech voices on first interaction (mobile)
    document.body.addEventListener('pointerdown', function prime() {
        if ('speechSynthesis' in window) window.speechSynthesis.getVoices();
        document.body.removeEventListener('pointerdown', prime);
    }, { once: true });

    // Re-acquire the wake lock if the user tabs away and comes back mid-hunt
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible' && $('#huntScreen').classList.contains('active')) {
            requestWakeLock();
        }
    });
}

// Register the service worker for offline / installable PWA support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => { /* ignore */ });
    });
}

document.addEventListener('DOMContentLoaded', init);
