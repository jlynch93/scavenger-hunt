// ===== Critter Quest - kid-friendly scavenger hunt =====

const THEMES = {
    home: {
        name: 'My House', emoji: '🏠', mascot: '🐶',
        items: [
            ['🪑', 'Chair'], ['📚', 'Book'], ['🥄', 'Spoon'], ['🧸', 'Teddy'],
            ['🧦', 'Sock'], ['🕐', 'Clock'], ['🍴', 'Fork'], ['🪥', 'Toothbrush'],
            ['🛏️', 'Bed'], ['🧴', 'Soap'], ['🖍️', 'Crayon'], ['🪞', 'Mirror'],
            ['🧺', 'Basket'], ['🔑', 'Key'], ['💡', 'Lamp'], ['🪟', 'Window'],
        ],
    },
    outside: {
        name: 'Outside', emoji: '🌳', mascot: '🐿️',
        items: [
            ['🌳', 'Tree'], ['🌸', 'Flower'], ['🪨', 'Rock'], ['🍃', 'Leaf'],
            ['🐦', 'Bird'], ['🐛', 'Bug'], ['☁️', 'Cloud'], ['🌼', 'Daisy'],
            ['🦋', 'Butterfly'], ['🐜', 'Ant'], ['🌱', 'Sprout'], ['🪵', 'Stick'],
            ['🐝', 'Bee'], ['🕸️', 'Web'], ['🍄', 'Mushroom'], ['🐌', 'Snail'],
        ],
    },
    park: {
        name: 'The Park', emoji: '🛝', mascot: '🦆',
        items: [
            ['🛝', 'Slide'], ['🌳', 'Tree'], ['🐕', 'Dog'], ['⚽', 'Ball'],
            ['🪁', 'Kite'], ['🦆', 'Duck'], ['🚲', 'Bike'], ['🌷', 'Tulip'],
            ['🪑', 'Bench'], ['🐿️', 'Squirrel'], ['🏀', 'Hoop'], ['🌊', 'Pond'],
            ['🍦', 'Ice cream'], ['🐦', 'Bird'], ['🌞', 'Sun'], ['🧺', 'Picnic'],
        ],
    },
    colors: {
        name: 'Colors', emoji: '🌈', mascot: '🦄',
        items: [
            ['🔴', 'Red'], ['🟠', 'Orange'], ['🟡', 'Yellow'], ['🟢', 'Green'],
            ['🔵', 'Blue'], ['🟣', 'Purple'], ['🟤', 'Brown'], ['⚫', 'Black'],
            ['⚪', 'White'], ['🌸', 'Pink'], ['🩵', 'Sky blue'], ['🟩', 'Lime'],
        ],
    },
    farm: {
        name: 'The Farm', emoji: '🚜', mascot: '🐄',
        items: [
            ['🐄', 'Cow'], ['🐖', 'Pig'], ['🐑', 'Sheep'], ['🐔', 'Chicken'],
            ['🐴', 'Horse'], ['🦆', 'Duck'], ['🚜', 'Tractor'], ['🌽', 'Corn'],
            ['🥚', 'Egg'], ['🐐', 'Goat'], ['🐱', 'Cat'], ['🌾', 'Hay'],
            ['🐰', 'Bunny'], ['🦃', 'Turkey'], ['🥕', 'Carrot'], ['🍎', 'Apple'],
        ],
    },
    ocean: {
        name: 'The Sea', emoji: '🌊', mascot: '🐠',
        items: [
            ['🐠', 'Fish'], ['🐙', 'Octopus'], ['🦀', 'Crab'], ['🐚', 'Shell'],
            ['⭐', 'Starfish'], ['🐬', 'Dolphin'], ['🐳', 'Whale'], ['🦈', 'Shark'],
            ['🐢', 'Turtle'], ['🦞', 'Lobster'], ['🪸', 'Coral'], ['🐡', 'Pufferfish'],
            ['🦭', 'Seal'], ['🐧', 'Penguin'], ['🌊', 'Wave'], ['⛵', 'Boat'],
        ],
    },
};

const PRAISE = ['Yay!', 'Great job!', 'You found it!', 'Awesome!', 'Wow!', 'Super!', 'Nice!', 'Woohoo!'];
const CONFETTI_COLORS = ['#ff5ca8', '#ffd23f', '#3ddc84', '#29b6f6', '#7c4dff', '#ff9f43'];

const state = {
    theme: 'home',
    count: 8,
    items: [],
    found: new Set(),
    stars: 0,
    sound: true,
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
        card.className = 'theme-card' + (key === state.theme ? ' selected' : '');
        card.dataset.theme = key;
        card.innerHTML = `<span class="emoji">${t.emoji}</span><span class="name">${t.name}</span>`;
        card.addEventListener('click', () => {
            state.theme = key;
            $$('.theme-card').forEach((c) => c.classList.remove('selected'));
            card.classList.add('selected');
            tone(660, 0.08, 'square', 0.15);
            const t2 = THEMES[key];
            $('#homeMascot').textContent = t2.mascot;
            $('#homeSpeech').textContent = `Let's explore ${t2.name}!`;
            speak(t2.name);
        });
        grid.appendChild(card);
    });
}

// ---------- Start hunt ----------
function startHunt() {
    const theme = THEMES[state.theme];
    const picks = shuffle(theme.items).slice(0, Math.min(state.count, theme.items.length));
    state.items = picks.map(([emoji, name], i) => ({ id: i, emoji, name }));
    state.found = new Set();
    state.stars = 0;

    $('#starCount').textContent = '0';
    $('#trackCritter').textContent = theme.mascot;
    $('#huntInstruction').textContent = 'Tap a picture when you find it!';
    updateTrack();
    buildCards();
    showScreen('huntScreen');
    happyChime();
    speak('Find ' + theme.name);
}

function buildCards() {
    const grid = $('#cardGrid');
    grid.innerHTML = '';
    state.items.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'find-card';
        card.dataset.id = item.id;
        card.innerHTML = `
            <button class="say-btn" aria-label="Say ${item.name}">🔊</button>
            <span class="card-emoji">${item.emoji}</span>
            <span class="card-name">${item.name}</span>
            <span class="check-stamp">✅</span>
        `;
        card.addEventListener('click', (e) => {
            if (e.target.closest('.say-btn')) return;
            collect(item, card);
        });
        card.querySelector('.say-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            tone(720, 0.06, 'square', 0.12);
            speak(item.name);
        });
        grid.appendChild(card);
    });
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
    updateStars();
    updateTrack();
    happyChime();
    burstConfetti(14);
    speak(rand(PRAISE));

    if (state.found.size === state.items.length) {
        setTimeout(win, 700);
    }
}

function updateStars() {
    state.stars = state.found.size;
    $('#starCount').textContent = state.stars;
}

function updateTrack() {
    const pct = state.items.length ? (state.found.size / state.items.length) * 100 : 0;
    $('#trackFill').style.width = pct + '%';
    $('#trackCritter').style.left = pct + '%';
}

// ---------- Win ----------
function win() {
    const theme = THEMES[state.theme];
    $('#winMascot').textContent = theme.mascot;
    $('#winSub').textContent = `You found all ${state.items.length} things!`;
    $('#winStars').textContent = '⭐'.repeat(Math.min(state.items.length, 12));
    showScreen('winScreen');
    winFanfare();
    speak('Hooray! You did it!');
    confettiStorm();
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
}

// ---------- Wire up ----------
function init() {
    buildThemeGrid();

    $$('.count-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            state.count = parseInt(btn.dataset.count, 10);
            $$('.count-btn').forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            tone(560, 0.08, 'square', 0.15);
        });
    });

    $('#startBtn').addEventListener('click', startHunt);
    $('#backBtn').addEventListener('click', () => { showScreen('homeScreen'); tone(330, 0.1); });
    $('#playAgainBtn').addEventListener('click', startHunt);
    $('#homeFromWinBtn').addEventListener('click', () => showScreen('homeScreen'));

    $('#soundToggle').addEventListener('click', () => setSound(!state.sound));
    $('#huntSoundToggle').addEventListener('click', () => setSound(!state.sound));

    // Prime speech voices on first interaction (mobile)
    document.body.addEventListener('pointerdown', function prime() {
        if ('speechSynthesis' in window) window.speechSynthesis.getVoices();
        document.body.removeEventListener('pointerdown', prime);
    }, { once: true });
}

document.addEventListener('DOMContentLoaded', init);
