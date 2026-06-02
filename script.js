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

// Collectible stickers with names + rarity tiers ("gotta find 'em all!")
const STICKER_SET = [
    // Common critters
    { id: 'fox', e: '🦊', n: 'Finn the Fox', r: 'common' },
    { id: 'bunny', e: '🐰', n: 'Hops', r: 'common' },
    { id: 'turtle', e: '🐢', n: 'Shelldon', r: 'common' },
    { id: 'owl', e: '🦉', n: 'Professor Hoot', r: 'common' },
    { id: 'bee', e: '🐝', n: 'Buzzy', r: 'common' },
    { id: 'butterfly', e: '🦋', n: 'Flutter', r: 'common' },
    { id: 'ladybug', e: '🐞', n: 'Dot', r: 'common' },
    { id: 'frog', e: '🐸', n: 'Hopkins', r: 'common' },
    { id: 'penguin', e: '🐧', n: 'Waddles', r: 'common' },
    { id: 'cat', e: '🐱', n: 'Whiskers', r: 'common' },
    { id: 'dog', e: '🐶', n: 'Patch', r: 'common' },
    { id: 'panda', e: '🐼', n: 'Bamboo', r: 'common' },
    { id: 'duck', e: '🦆', n: 'Quackers', r: 'common' },
    { id: 'hedgehog', e: '🦔', n: 'Prickles', r: 'common' },
    // Rare critters
    { id: 'unicorn', e: '�', n: 'Sparkle', r: 'rare' },
    { id: 'lion', e: '�', n: 'King Roar', r: 'rare' },
    { id: 'tiger', e: '🐯', n: 'Stripes', r: 'rare' },
    { id: 'octopus', e: '�', n: 'Inky', r: 'rare' },
    { id: 'parrot', e: '🦜', n: 'Rio', r: 'rare' },
    { id: 'whale', e: '�', n: 'Splash', r: 'rare' },
    { id: 'koala', e: '🐨', n: 'Snuggle', r: 'rare' },
    // Legendary critters
    { id: 'dragon', e: '�', n: 'Emberwing', r: 'legendary' },
    { id: 'robot', e: '�', n: 'Gizmo', r: 'legendary' },
    { id: 'alien', e: '�', n: 'Zorp', r: 'legendary' },
];
const RARITY = {
    common: { label: 'Common', weight: 70, stars: 1 },
    rare: { label: 'Rare', weight: 25, stars: 1 },
    legendary: { label: 'Legendary', weight: 5, stars: 1 },
};
const STICKER_KEY = 'critterQuestStickers';
const PREF_KEY = 'critterQuestPrefs';
const STATS_KEY = 'critterQuestStats';
const DAILY_KEY = 'critterQuestDaily';

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
const BONUS_MISSIONS = [
    ['🕵️', 'Sneaky Search', 'Tiptoe like a secret explorer for 5 steps, then look again!'],
    ['🦘', 'Kangaroo Hop', 'Do 3 tiny hops before you search for the next thing!'],
    ['👂', 'Super Listener', 'Close your eyes, listen for 3 sounds, then keep hunting!'],
    ['🌪️', 'Spin Scanner', 'Slowly turn in a circle and scan the room like a treasure radar!'],
    ['🤖', 'Robot Finder', 'Walk like a robot to the next place you search!'],
    ['🦀', 'Crab Walk', 'Take 4 crab steps, then look low for your next treasure!'],
    ['🧙', 'Magic Words', 'Say “Critter magic!” before you tap the next find!'],
    ['🙌', 'Team High Five', 'Give your helper a high five or give yourself one!'],
    ['🔎', 'Tiny Detective', 'Look under, beside, and behind something safe!'],
    ['🎵', 'Hunt Song', 'Hum a silly tune while you search for 10 seconds!'],
    ['🐢', 'Slow Motion', 'Search in slow motion until you spot something!'],
    ['🚀', 'Rocket Countdown', 'Count down 5, 4, 3, 2, 1, then blast off to search!'],
];
const ITEM_PROMPTS = [
    'Can you point to it with one finger before you tap?',
    'Can you find it without running?',
    'Can you whisper its name like a secret code?',
    'Can you spot it from far away first?',
    'Can you make a silly face when you find it?',
    'Can you search high, middle, and low?',
    'Can you ask your helper, “hot or cold?”',
    'Can you touch your nose, then keep looking?',
];
const MILESTONES = [
    [0.25, 'Warm-up explorer!', 'You are already on the trail!'],
    [0.5, 'Halfway hero!', 'Do a tiny wiggle dance — you are halfway there!'],
    [0.75, 'Almost there!', 'Take a big explorer breath and finish strong!'],
];

const state = {
    theme: 'surprise',
    count: 8,
    items: [],
    found: new Set(),
    stars: 0,
    sound: true,
    music: true,
    pendingPhotoId: null,
    haptics: true,
    photoProof: true,
    easyMode: false,
    bigCards: false,
    twist: 'classic',
    starMult: 1,
    bonusStars: 0,
    completedChallenges: 0,
    currentChallenge: null,
    lastMilestone: 0,
    mascot: '🐶',
    popTimer: null,
    daily: false,
    lastStickerId: null,
};

let audioCtx = null;

// ---------- Helpers ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function showScreen(id) {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
        document.activeElement.blur();
    }
    $$('.screen').forEach((s) => s.classList.remove('active'));
    $('#' + id).classList.add('active');
    window.scrollTo(0, 0);
    requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }));
    setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 80);
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

function currentQuestText() {
    const theme = THEMES[state.theme] || THEMES.surprise;
    const mode = state.easyMode ? 'Easy mode' : 'Surprise twist';
    return `${theme.name} • ${state.count} things • ${mode}`;
}

function renderQuestSummary() {
    const theme = THEMES[state.theme] || THEMES.surprise;
    const emoji = $('#questSummaryEmoji');
    const text = $('#questSummaryText');
    if (!emoji || !text) return;
    emoji.textContent = theme.emoji;
    text.textContent = currentQuestText();
}

function updateHuntProgress() {
    const el = $('#huntProgress');
    if (!el) return;
    el.textContent = `${state.found.size} of ${state.items.length}`;
}

function updateHuntInstruction() {
    const el = $('#huntInstruction');
    if (!el) return;
    if (state.twist === 'mystery') {
        el.textContent = 'Tap a card when you spot its secret thing!';
    } else if (state.photoProof) {
        el.textContent = 'Tap a card, or use 📸 for photo proof!';
    } else {
        el.textContent = 'Tap a card when you find it!';
    }
}

function applySettingsUi() {
    document.body.classList.toggle('photo-proof-off', !state.photoProof);
    document.body.classList.toggle('big-cards', state.bigCards);
    const photo = $('#photoProofSetting');
    const easy = $('#easyModeSetting');
    const big = $('#bigCardsSetting');
    const haptics = $('#hapticsSetting');
    if (photo) photo.checked = state.photoProof;
    if (easy) easy.checked = state.easyMode;
    if (big) big.checked = state.bigCards;
    if (haptics) haptics.checked = state.haptics;
}

function saveCurrentPrefs() {
    const prefs = loadPrefs();
    prefs.sound = state.sound;
    prefs.music = state.music;
    prefs.haptics = state.haptics;
    prefs.photoProof = state.photoProof;
    prefs.easyMode = state.easyMode;
    prefs.bigCards = state.bigCards;
    savePrefs(prefs);
}

// ---------- Lifetime stats ----------
function loadStats() {
    try {
        const s = JSON.parse(localStorage.getItem(STATS_KEY)) || {};
        return { hunts: s.hunts || 0, stars: s.stars || 0, best: s.best || 0 };
    } catch (e) { return { hunts: 0, stars: 0, best: 0 }; }
}
function saveStats(stats) {
    try { localStorage.setItem(STATS_KEY, JSON.stringify(stats)); } catch (e) { /* ignore */ }
}
function recordWin(stars) {
    const stats = loadStats();
    stats.hunts += 1;
    stats.stars += stars;
    const isRecord = stars > stats.best;
    if (isRecord) stats.best = stars;
    saveStats(stats);
    return { isRecord, best: stats.best };
}
function renderStats() {
    const stats = loadStats();
    const stickers = uniqueStickerCount();
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

// A few different cheerful "found it" jingles, chosen at random for variety
const CHIMES = [
    [523, 659, 784],
    [587, 740, 880],
    [659, 784, 988],
    [523, 784, 1047],
    [440, 554, 659, 880],
];
function happyChime() {
    rand(CHIMES).forEach((f, i) => setTimeout(() => tone(f, 0.15, 'triangle'), i * 80));
}

function winFanfare() {
    [523, 587, 659, 784, 880, 1047, 1175, 1319].forEach((f, i) => setTimeout(() => tone(f, 0.22, 'triangle'), i * 120));
}

function sparkleSound() {
    [988, 1319, 1568, 2093].forEach((f, i) => setTimeout(() => tone(f, 0.12, 'sine', 0.16), i * 70));
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

// ---------- Background music (gentle looping melody) ----------
let musicTimer = null;
let musicStep = 0;
const MELODY = [523, 587, 659, 784, 659, 587, 523, 392, 440, 523, 659, 587];
function softNote(freq, dur = 0.4) {
    if (!state.music) return;
    try {
        audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.06, audioCtx.currentTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
        osc.start();
        osc.stop(audioCtx.currentTime + dur);
    } catch (e) { /* ignore */ }
}
function startMusic() {
    if (!state.music || musicTimer) return;
    try { audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { /* ignore */ }
    musicTimer = setInterval(() => {
        softNote(MELODY[musicStep % MELODY.length]);
        if (musicStep % 4 === 0) softNote(MELODY[musicStep % MELODY.length] / 2, 0.6);
        musicStep++;
    }, 500);
}
function stopMusic() {
    clearInterval(musicTimer);
    musicTimer = null;
}

// ---------- Daily Quest + streak ----------
function todayStr(d = new Date()) {
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
}
function yesterdayStr() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return todayStr(d);
}
function hashStr(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) { h = (h * 31 + str.charCodeAt(i)) >>> 0; }
    return h;
}
function loadDaily() {
    try {
        const d = JSON.parse(localStorage.getItem(DAILY_KEY)) || {};
        return { lastCompleted: d.lastCompleted || null, streak: d.streak || 0 };
    } catch (e) { return { lastCompleted: null, streak: 0 }; }
}
function saveDaily(d) {
    try { localStorage.setItem(DAILY_KEY, JSON.stringify(d)); } catch (e) { /* ignore */ }
}
// Deterministic config so everyone gets the same quest on a given day
function dailyConfig() {
    const seed = hashStr('cq-' + todayStr());
    const themeKeys = Object.keys(THEMES).filter((k) => !THEMES[k].special);
    const counts = [5, 8, 12];
    const theme = themeKeys[seed % themeKeys.length];
    const count = counts[(seed >> 3) % counts.length];
    const twist = QUEST_TWISTS[(seed >> 5) % QUEST_TWISTS.length];
    return { theme, count, twist };
}
function isDailyDoneToday() {
    return loadDaily().lastCompleted === todayStr();
}
function markDailyComplete() {
    const d = loadDaily();
    const today = todayStr();
    if (d.lastCompleted === today) return d.streak; // already counted today
    d.streak = d.lastCompleted === yesterdayStr() ? d.streak + 1 : 1;
    d.lastCompleted = today;
    saveDaily(d);
    return d.streak;
}
function renderDailyCard() {
    const cfg = dailyConfig();
    const d = loadDaily();
    const theme = THEMES[cfg.theme];
    const done = isDailyDoneToday();
    const emojiEl = $('#dailyEmoji');
    const subEl = $('#dailySub');
    const streakWrap = $('#dailyStreak');
    if (!emojiEl) return;
    emojiEl.textContent = theme.emoji;
    subEl.textContent = done
        ? 'Done today! Come back tomorrow 🌙'
        : `${theme.name} • ${cfg.twist.name}`;
    subEl.textContent = done
        ? 'Done today! Come back tomorrow 🌙'
        : `${theme.name} • ${cfg.twist.name}`;
    $('#dailyBtn').classList.toggle('done', done);
    if (d.streak > 0) {
        streakWrap.style.display = 'flex';
        $('#streakNum').textContent = d.streak;
    } else {
        streakWrap.style.display = 'none';
    }
}
function startDailyQuest() {
    const cfg = dailyConfig();
    startHunt({ theme: cfg.theme, count: cfg.count, twist: cfg.twist, daily: true });
}

// ---------- Onboarding (pre-reader friendly) ----------
const ONBOARD_STEPS = [
    ['🦊', "Hi! I'm Finn!", "Let's go on a treasure hunt together!"],
    ['👀', 'Find real things!', 'I show you a picture. You find it in real life!'],
    ['👆', 'Tap when you find it!', 'Tap the picture and earn a shiny star.'],
    ['🎟️', 'Collect critters!', 'Finish hunts to win surprise stickers!'],
];
const ONBOARD_STEPS_CLEAN = [
    ['🦊', "Hi! I'm Finn!", 'Pick a quest, find real things, and tap each card when you spot it.'],
    ['🎟️', 'Collect critters!', 'Finish hunts to win surprise stickers for your book.'],
];
let onboardIdx = 0;
function showOnboardStep() {
    const steps = ONBOARD_STEPS_CLEAN;
    const [emoji, title, text] = steps[onboardIdx];
    $('#onboardMascot').textContent = emoji;
    $('#onboardTitle').textContent = title;
    $('#onboardText').textContent = text;
    const dots = $('#onboardDots');
    dots.innerHTML = '';
    steps.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'onboard-dot' + (i === onboardIdx ? ' active' : '');
        dots.appendChild(dot);
    });
    $('#onboardNext').querySelector('span').textContent =
        onboardIdx === steps.length - 1 ? "Let's Play!" : 'Next';
    speak(`${title}. ${text}`);
    tone(660, 0.08, 'triangle', 0.14);
}
function nextOnboard() {
    if (onboardIdx < ONBOARD_STEPS_CLEAN.length - 1) {
        onboardIdx++;
        showOnboardStep();
    } else {
        finishOnboarding();
    }
}
function finishOnboarding() {
    $('#onboardLayer').classList.remove('active');
    const prefs = loadPrefs();
    prefs.onboarded = true;
    savePrefs(prefs);
    if (state.music) startMusic();
    burstConfetti(20);
}
function maybeShowOnboarding() {
    const prefs = loadPrefs();
    if (prefs.onboarded) return;
    onboardIdx = 0;
    $('#onboardLayer').classList.add('active');
    showOnboardStep();
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
            renderQuestSummary();
            speak(t2.name);
        });
        grid.appendChild(card);
    });
}

// ---------- Start hunt ----------
// opts (optional) lets the Daily Quest force a fixed theme/count/twist
function startHunt(opts = {}) {
    const isOpts = opts && typeof opts === 'object' && !opts.type && opts.theme;
    if (isOpts && opts.theme) state.theme = opts.theme;
    if (isOpts && opts.count) state.count = opts.count;
    state.daily = !!(isOpts && opts.daily);

    const theme = THEMES[state.theme];
    const pool = themeItems(state.theme);
    const picks = shuffle(pool).slice(0, Math.min(state.count, pool.length));
    state.items = picks.map(([emoji, name], i) => ({
        id: i, emoji, name, photo: null,
        golden: false, rainbow: false, mystery: false,
    }));

    // Pick a twist (forced for daily, otherwise a fresh random one) + random mascot
    let twist = (isOpts && opts.twist) ? opts.twist : pickTwist();
    if (state.easyMode && twist.id === 'mystery') {
        twist = QUEST_TWISTS.find((t) => t.id === 'classic') || twist;
    }
    state.twist = twist.id;
    state.starMult = twist.id === 'double' ? 2 : 1;
    state.mascot = themeMascot(theme);

    applyTwist(twist);

    state.found = new Set();
    state.stars = 0;
    state.bonusStars = 0;
    state.completedChallenges = 0;
    state.currentChallenge = null;
    state.lastMilestone = 0;

    $('#starCount').textContent = '0';
    $('#huntInstruction').textContent = state.twist === 'mystery'
        ? 'Tap a card when you spot its secret thing!'
        : 'Tap it, or use 📸 for photo proof!';
    updateHuntProgress();
    updateHuntInstruction();
    buildPath();
    buildCards();
    showScreen('huntScreen');
    const intro = state.daily ? "Today's special quest! " : '';
    setGuide('Ready, explorer?', `${intro}Start with any card, or tap 🎲 for a silly bonus mission.`, state.mascot, true);
    showTwistBanner(twist);
    happyChime();
    buzz(20);
    requestWakeLock();
    if (state.music) startMusic();
    scheduleCritterPop();
}

// ---------- Stepping-stone adventure map ----------
function buildPath() {
    const path = $('#path');
    if (!path) return;
    path.innerHTML = '';
    state.items.forEach((it, i) => {
        const stone = document.createElement('div');
        stone.className = 'stone';
        stone.dataset.index = i;
        stone.textContent = (i + 1);
        path.appendChild(stone);
    });
    const goal = document.createElement('div');
    goal.className = 'stone goal';
    goal.textContent = '🏆';
    path.appendChild(goal);

    const m = document.createElement('div');
    m.className = 'path-mascot';
    m.id = 'pathMascot';
    m.textContent = state.mascot;
    path.appendChild(m);
    updateTrack();
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
    showTwistBanner._t = setTimeout(() => banner.classList.remove('show'), 1500);
}

function setGuide(title, text, emoji = state.mascot, speakIt = false) {
    const panel = $('#guidePanel');
    if (!panel) return;
    $('#guideMascot').textContent = emoji;
    $('#guideTitle').textContent = title;
    $('#guideText').textContent = text;
    panel.classList.remove('pulse');
    void panel.offsetWidth;
    panel.classList.add('pulse');
    if (speakIt) speak(`${title}. ${text}`);
}

function nextUnfoundItem() {
    return state.items.find((it) => !state.found.has(it.id));
}

function promptNextFind() {
    const item = nextUnfoundItem();
    if (!item) return;
    const label = item.mystery ? clueFor(item.name) : item.name;
    setGuide('Next clue!', `Try to find ${label}. ${rand(ITEM_PROMPTS)}`, state.mascot);
}

function checkMilestone() {
    const pct = state.items.length ? state.found.size / state.items.length : 0;
    const hit = MILESTONES.find(([mark]) => pct >= mark && state.lastMilestone < mark);
    if (!hit) return;
    state.lastMilestone = hit[0];
    setGuide(hit[1], hit[2], '🏅', true);
    burstConfetti(24);
    buzz([20, 30, 20]);
}

function pickMission() {
    const [emoji, title, text] = rand(BONUS_MISSIONS);
    return { emoji, title, text };
}

function showChallenge(mission = pickMission()) {
    state.currentChallenge = mission;
    $('#challengeEmoji').textContent = mission.emoji;
    $('#challengeTitle').textContent = mission.title;
    $('#challengeText').textContent = mission.text;
    $('#challengeLayer').classList.add('active');
    tone(740, 0.08, 'square', 0.12);
    buzz(18);
    speak(`${mission.title}. ${mission.text}`);
}

function closeChallenge() {
    $('#challengeLayer').classList.remove('active');
}

function completeChallenge() {
    if (!state.currentChallenge) return;
    closeChallenge();
    state.completedChallenges += 1;
    state.bonusStars += 1;
    updateStars();
    setGuide('Bonus star!', `Mission complete! You have done ${state.completedChallenges} bonus mission${state.completedChallenges === 1 ? '' : 's'}!`, '⭐', true);
    happyChime();
    burstConfetti(26);
    buzz([20, 40, 40]);
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
        card.querySelector('.say-btn').textContent = '🔊';
        card.querySelector('.cam-btn').textContent = '📸';
        card.querySelector('.photo-badge').textContent = '📸';
        card.querySelector('.check-stamp').textContent = '✅';
        if (item.mystery) card.querySelector('.card-emoji').textContent = '?';
        if (item.golden) card.querySelector('.card-emoji').textContent = '✨';
        if (item.rainbow) card.querySelector('.card-emoji').textContent = '🌈';
        card.classList.toggle('photo-disabled', !state.photoProof);
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
            if (!state.photoProof) return;
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
        updateHuntProgress();
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
    updateHuntProgress();
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
    } else {
        checkMilestone();
        if (state.found.size > 0 && state.found.size % 3 === 0 && Math.random() < 0.8) {
            setTimeout(() => showChallenge(), 550);
        } else {
            setTimeout(promptNextFind, 550);
        }
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
    const path = $('#path');
    if (!path) return;
    const found = state.found.size;
    const stones = path.querySelectorAll('.stone');
    stones.forEach((s, i) => {
        const isGoal = s.classList.contains('goal');
        const lit = isGoal ? found >= state.items.length : i < found;
        s.classList.toggle('lit', lit);
    });
    // Hop the mascot onto the current stone
    const idx = Math.min(found, stones.length - 1);
    const target = stones[idx];
    const m = $('#pathMascot');
    if (target && m) {
        m.style.left = (target.offsetLeft + target.offsetWidth / 2) + 'px';
        m.style.top = target.offsetTop + 'px';
        m.classList.remove('hop');
        void m.offsetWidth;
        m.classList.add('hop');
        target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
}

// ---------- Win ----------
function win() {
    clearTimeout(state.popTimer);
    $$('.critter-pop').forEach((c) => c.remove());
    releaseWakeLock();
    const record = recordWin(state.stars);
    buzz([30, 50, 30, 50, 30, 50, 120]);
    $('#winMascot').textContent = state.mascot;
    $('#winSub').textContent = `You found all ${state.items.length} things and earned ${state.stars} stars!`;
    $('#winStars').textContent = '⭐'.repeat(Math.min(state.stars, 14));

    // Best-stars record line
    const bestEl = $('#bestRecord');
    if (bestEl) {
        bestEl.textContent = record.isRecord
            ? `🎉 New best score: ${record.best} stars!`
            : `Best score: ${record.best} stars`;
        bestEl.classList.toggle('is-record', record.isRecord);
    }

    // Daily streak handling
    let dailyMsg = '';
    if (state.daily) {
        const streak = markDailyComplete();
        dailyMsg = ` Daily streak: ${streak} day${streak === 1 ? '' : 's'}!`;
        const tag = $('#winDailyTag');
        if (tag) { tag.style.display = 'block'; tag.textContent = `🔥 ${streak}-day streak!`; }
    } else {
        const tag = $('#winDailyTag');
        if (tag) tag.style.display = 'none';
    }

    buildScrapbook();
    const award = awardSticker();

    showScreen('winScreen');
    winFanfare();

    // Extra sparkle for new and/or rare critters
    if (award.isNew || award.sticker.r !== 'common') {
        setTimeout(sparkleSound, 700);
        if (award.sticker.r === 'legendary') rainbowBurst(80);
    }
    const rarityWord = award.isNew ? `a new ${RARITY[award.sticker.r].label} critter` : 'a critter';
    speak(`Hooray! You did it! You found ${award.sticker.n}, ${rarityWord}!${dailyMsg}`);
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

// ---------- Sticker collection ----------
// Stored as a map of { stickerId: count }. Migrates old emoji-array format.
function loadCollection() {
    try {
        const raw = JSON.parse(localStorage.getItem(STICKER_KEY));
        if (Array.isArray(raw)) {
            const map = {};
            raw.forEach((e) => {
                const s = STICKER_SET.find((x) => x.e === e);
                if (s) map[s.id] = (map[s.id] || 0) + 1;
            });
            return map;
        }
        return raw || {};
    } catch (e) { return {}; }
}
function saveCollection(map) {
    try { localStorage.setItem(STICKER_KEY, JSON.stringify(map)); } catch (e) { /* ignore */ }
}
function uniqueStickerCount() {
    return Object.keys(loadCollection()).length;
}

// Weighted pick of a rarity, then a random sticker within that tier
function rollSticker() {
    const pool = [];
    Object.entries(RARITY).forEach(([key, r]) => { for (let i = 0; i < r.weight; i++) pool.push(key); });
    const tier = rand(pool);
    const choices = STICKER_SET.filter((s) => s.r === tier);
    return rand(choices.length ? choices : STICKER_SET);
}

function awardSticker() {
    const collection = loadCollection();
    const sticker = rollSticker();
    const isNew = !collection[sticker.id];
    collection[sticker.id] = (collection[sticker.id] || 0) + 1;
    saveCollection(collection);
    state.lastStickerId = sticker.id;

    // Fill in the win-screen reward card
    $('#rewardEmoji').textContent = sticker.e;
    $('#rewardName').textContent = sticker.n;
    $('#rewardRarity').textContent = RARITY[sticker.r].label;
    $('#rewardRarity').className = 'reward-rarity rarity-' + sticker.r;
    $('#rewardLabel').textContent = isNew ? 'New sticker unlocked!' : 'Sticker found again!';
    $('#rewardNewBadge').style.display = isNew ? 'inline-block' : 'none';
    const card = $('#rewardSticker');
    card.className = 'reward-sticker rarity-' + sticker.r + (isNew ? ' is-new' : '');
    card.style.display = 'flex';

    return { sticker, isNew };
}

function renderStickerBook() {
    const collection = loadCollection();
    const book = $('#stickerBook');
    const row = $('#stickerRow');
    const total = STICKER_SET.length;
    const owned = Object.keys(collection).length;
    const pct = (owned / total) * 100;

    $('#stickerCountBadge').textContent = `${owned}/${total}`;
    $('#stickerProgressFill').style.width = pct + '%';
    $('#stickerBookSub').textContent = owned >= total
        ? '🎉 Wow! You collected every critter!'
        : owned
            ? `Great collection! ${total - owned} critters still hiding.`
            : 'Finish hunts to unlock surprise critters!';

    if (!owned) {
        $('#stickerBookSub').textContent = 'Mystery spots are waiting. Finish a hunt to reveal your first critter!';
    }
    row.innerHTML = '';
    STICKER_SET.forEach((s, i) => {
        const count = collection[s.id] || 0;
        const span = document.createElement('span');
        const got = count > 0;
        span.className = 'sticker ' + (got ? 'rarity-' + s.r : 'locked')
            + (got && s.id === state.lastStickerId ? ' is-new' : '');
        span.textContent = got ? s.e : '?';
        span.style.setProperty('--sticker-delay', (i * 0.02) + 's');
        if (got) {
            span.title = `${s.n} (${RARITY[s.r].label})`;
            span.setAttribute('aria-label', `${s.n}, ${RARITY[s.r].label}`);
            if (count > 1) {
                const badge = document.createElement('span');
                badge.className = 'sticker-count';
                badge.textContent = '×' + count;
                span.appendChild(badge);
            }
            if (s.id === state.lastStickerId) {
                const nb = document.createElement('span');
                nb.className = 'sticker-new';
                nb.textContent = 'NEW';
                span.appendChild(nb);
            }
            span.addEventListener('click', () => {
                tone(720, 0.06, 'triangle', 0.12);
                speak(`${s.n}. ${RARITY[s.r].label}.`);
                $('#homeSpeech').textContent = `That's ${s.n}, a ${RARITY[s.r].label.toLowerCase()} critter!`;
            });
        } else {
            span.textContent = '';
            span.setAttribute('aria-label', 'Locked sticker');
        }
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
    $('#soundToggle').textContent = on ? '🔊' : '🔇';
    $('#huntSoundToggle').textContent = on ? '🔊' : '🔇';
    $('#soundToggle').classList.toggle('muted', !on);
    $('#huntSoundToggle').classList.toggle('muted', !on);
    if (!on && 'speechSynthesis' in window) window.speechSynthesis.cancel();
    const prefs = loadPrefs();
    prefs.sound = on;
    savePrefs(prefs);
}
function setMusic(on) {
    state.music = on;
    const btn = $('#musicToggle');
    if (btn) {
        btn.textContent = on ? '🎵' : '🔇';
        btn.textContent = on ? '🎵' : '🔇';
        btn.classList.toggle('muted', !on);
    }
    if (on) startMusic(); else stopMusic();
    const prefs = loadPrefs();
    prefs.music = on;
    savePrefs(prefs);
}

function openSettings() {
    applySettingsUi();
    $('#settingsLayer')?.classList.add('active');
    tone(520, 0.06, 'triangle', 0.1);
}

function closeSettings() {
    $('#settingsLayer')?.classList.remove('active');
}

function resetProgress() {
    const ok = window.confirm('Reset stickers, stats, daily streak, and onboarding progress?');
    if (!ok) return;
    try {
        localStorage.removeItem(STICKER_KEY);
        localStorage.removeItem(STATS_KEY);
        localStorage.removeItem(DAILY_KEY);
        const prefs = loadPrefs();
        prefs.onboarded = false;
        savePrefs(prefs);
    } catch (e) { /* ignore */ }
    state.lastStickerId = null;
    renderStickerBook();
    renderStats();
    renderDailyCard();
    renderQuestSummary();
    closeSettings();
    $('#homeSpeech').textContent = 'Fresh start! Your next quest is ready.';
    burstConfetti(12);
}

// ---------- Wire up ----------
function goHome() {
    clearTimeout(state.popTimer);
    $$('.critter-pop').forEach((c) => c.remove());
    closeChallenge();
    releaseWakeLock();
    stopMusic();
    renderStickerBook();
    renderStats();
    renderDailyCard();
    renderQuestSummary();
    showScreen('homeScreen');
}

function init() {
    // Restore saved preferences
    const prefs = loadPrefs();
    if (typeof prefs.sound === 'boolean') state.sound = prefs.sound;
    if (typeof prefs.music === 'boolean') state.music = prefs.music;
    if (typeof prefs.haptics === 'boolean') state.haptics = prefs.haptics;
    if (typeof prefs.photoProof === 'boolean') state.photoProof = prefs.photoProof;
    if (typeof prefs.easyMode === 'boolean') state.easyMode = prefs.easyMode;
    if (typeof prefs.bigCards === 'boolean') state.bigCards = prefs.bigCards;

    buildThemeGrid();
    renderStickerBook();
    renderStats();
    renderDailyCard();
    renderQuestSummary();
    applySettingsUi();
    setSound(state.sound);
    if (state.music) startMusic();

    $$('.count-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            state.count = parseInt(btn.dataset.count, 10);
            $$('.count-btn').forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            renderQuestSummary();
            tone(560, 0.08, 'square', 0.15);
        });
    });

    $('#startBtn').addEventListener('click', startHunt);
    $('#backBtn').addEventListener('click', () => { goHome(); tone(330, 0.1); });
    $('#playAgainBtn').addEventListener('click', startHunt);
    $('#homeFromWinBtn').addEventListener('click', goHome);
    $('#shareBtn').addEventListener('click', sharePhotos);
    $('#guideMissionBtn').addEventListener('click', () => showChallenge());
    $('#challengeClose').addEventListener('click', closeChallenge);
    $('#challengeDoneBtn').addEventListener('click', completeChallenge);
    $('#challengeNewBtn').addEventListener('click', () => showChallenge());

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
    const musicBtn = $('#musicToggle');
    if (musicBtn) musicBtn.addEventListener('click', () => setMusic(!state.music));

    // Daily quest button
    const dailyBtn = $('#dailyBtn');
    if (dailyBtn) dailyBtn.addEventListener('click', startDailyQuest);

    // Onboarding navigation
    const onboardNext = $('#onboardNext');
    if (onboardNext) onboardNext.addEventListener('click', nextOnboard);
    const onboardSkip = $('#onboardSkip');
    if (onboardSkip) onboardSkip.addEventListener('click', finishOnboarding);

    const settingsToggle = $('#settingsToggle');
    const settingsClose = $('#settingsClose');
    if (settingsToggle) settingsToggle.addEventListener('click', openSettings);
    if (settingsClose) settingsClose.addEventListener('click', closeSettings);
    $('#settingsLayer')?.addEventListener('click', (e) => {
        if (e.target.id === 'settingsLayer') closeSettings();
    });
    $('#photoProofSetting')?.addEventListener('change', (e) => {
        state.photoProof = e.target.checked;
        saveCurrentPrefs();
        applySettingsUi();
        updateHuntInstruction();
    });
    $('#easyModeSetting')?.addEventListener('change', (e) => {
        state.easyMode = e.target.checked;
        saveCurrentPrefs();
        applySettingsUi();
        renderQuestSummary();
    });
    $('#bigCardsSetting')?.addEventListener('change', (e) => {
        state.bigCards = e.target.checked;
        saveCurrentPrefs();
        applySettingsUi();
    });
    $('#hapticsSetting')?.addEventListener('change', (e) => {
        state.haptics = e.target.checked;
        saveCurrentPrefs();
        applySettingsUi();
    });
    $('#resetProgressBtn')?.addEventListener('click', resetProgress);

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

    // Show onboarding for first-time players
    maybeShowOnboarding();
}

// Register the service worker for offline / installable PWA support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => { /* ignore */ });
    });
}

document.addEventListener('DOMContentLoaded', init);
