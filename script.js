class ScavengerHuntGenerator {
    constructor() {
        this.items = {
            indoor: [
                "Find something that starts with the letter 'B'",
                "Locate a red object in the room",
                "Find something that makes noise",
                "Discover an item with wheels",
                "Find something that reflects light",
                "Locate something soft and fluffy",
                "Find an object with numbers on it",
                "Discover something that can be opened and closed",
                "Find something that smells good",
                "Locate an item that is taller than you",
                "Find something with a pattern",
                "Discover an object that is round",
                "Find something that is battery powered",
                "Locate something that folds",
                "Find an item with buttons"
            ],
            outdoor: [
                "Find a leaf with interesting colors",
                "Locate something that grows",
                "Find a rock with unique features",
                "Discover something that moves in the wind",
                "Find something that makes shadows",
                "Locate an insect or bug",
                "Find something that is natural",
                "Discover a flower",
                "Find something that is rough",
                "Locate something that is smooth",
                "Find a stick that looks like something else",
                "Discover something that is green",
                "Find something that is brown",
                "Locate something that is crunchy",
                "Find something that is soft"
            ],
            nature: [
                "Find a pinecone",
                "Locate a bird feather",
                "Find an interesting seed pod",
                "Discover animal tracks",
                "Find a mushroom or fungus",
                "Locate a piece of bark",
                "Find a nest",
                "Discover a spider web",
                "Find something that shows signs of decay",
                "Locate something that shows signs of growth",
                "Find a fossil or impression",
                "Discover something that lives in water",
                "Find something that protects itself",
                "Locate something that spreads",
                "Find something that climbs"
            ],
            urban: [
                "Find a street sign",
                "Locate a fire hydrant",
                "Find graffiti or street art",
                "Discover a unique door",
                "Find something made of brick",
                "Locate a bicycle",
                "Find a security camera",
                "Discover a mailbox",
                "Find something made of glass",
                "Locate a traffic light",
                "Find a bench",
                "Discover a manhole cover",
                "Find something with graffiti",
                "Locate a poster or flyer",
                "Find something that lights up"
            ],
            home: [
                "Find something in the kitchen that starts with 'S'",
                "Locate a family photo",
                "Find something that keeps you warm",
                "Discover a book you haven't read",
                "Find something that tells time",
                "Locate something that holds liquid",
                "Find something that plugs into the wall",
                "Discover something that hangs on the wall",
                "Find something that is usually hidden",
                "Locate something that is older than you",
                "Find something that is newer than you",
                "Discover something that makes music",
                "Find something that is broken",
                "Locate something that needs fixing",
                "Find something that is handmade"
            ],
            school: [
                "Find a textbook",
                "Locate something with the school mascot",
                "Find a locker",
                "Discover something written in chalk",
                "Find a pencil",
                "Locate something that is blue",
                "Find a map",
                "Discover something that measures",
                "Find something that is sharp",
                "Locate something that is sticky",
                "Find a ruler",
                "Discover something that is magnetic",
                "Find something that folds",
                "Locate something that is transparent",
                "Find something that is recyclable"
            ]
        };

        this.currentHunt = [];
        this.completedItems = new Set();
        this.timer = null;
        this.timeRemaining = 0;
        this.isPaused = false;

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        document.getElementById('generateBtn').addEventListener('click', () => this.generateHunt());
        document.getElementById('startTimerBtn').addEventListener('click', () => this.startTimer());
        document.getElementById('pauseTimerBtn').addEventListener('click', () => this.pauseTimer());
        document.getElementById('resetBtn').addEventListener('click', () => this.resetHunt());
        document.getElementById('newHuntBtn').addEventListener('click', () => this.generateHunt());
    }

    generateHunt() {
        const category = document.getElementById('category').value;
        const difficulty = document.getElementById('difficulty').value;
        const itemCount = parseInt(document.getElementById('itemCount').value);
        const timeLimit = parseInt(document.getElementById('timeLimit').value);

        this.currentHunt = this.getRandomItems(category, itemCount, difficulty);
        this.completedItems.clear();
        this.timeRemaining = timeLimit * 60;
        this.isPaused = false;

        this.displayHunt(category, difficulty, timeLimit);
        this.updateStats();
    }

    getRandomItems(category, count, difficulty) {
        let availableItems = [];
        
        if (category === 'all') {
            Object.values(this.items).forEach(categoryItems => {
                availableItems = availableItems.concat(categoryItems);
            });
        } else {
            availableItems = [...this.items[category]];
        }

        // Apply difficulty modifications
        const modifiedItems = availableItems.map(item => this.applyDifficulty(item, difficulty));
        
        // Shuffle and select items
        const shuffled = modifiedItems.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(count, shuffled.length)).map((item, index) => ({
            id: index + 1,
            text: item.text,
            points: item.points,
            hint: item.hint
        }));
    }

    applyDifficulty(item, difficulty) {
        let points = 10;
        let hint = '';

        switch (difficulty) {
            case 'easy':
                points = 10;
                hint = 'Look around carefully!';
                break;
            case 'medium':
                points = 20;
                hint = 'Think outside the box!';
                break;
            case 'hard':
                points = 30;
                hint = 'This might take some creativity!';
                break;
        }

        return { text: item, points, hint };
    }

    displayHunt(category, difficulty, timeLimit) {
        const huntDisplay = document.getElementById('huntDisplay');
        const stats = document.getElementById('stats');
        const itemsList = document.getElementById('itemsList');
        const categoryBadge = document.getElementById('categoryBadge');
        const difficultyBadge = document.getElementById('difficultyBadge');
        const timeDisplay = document.getElementById('timeRemaining');

        huntDisplay.style.display = 'block';
        stats.style.display = 'block';

        categoryBadge.textContent = category === 'all' ? 'Mixed' : category;
        categoryBadge.className = 'category-badge';
        
        difficultyBadge.textContent = difficulty;
        difficultyBadge.className = `difficulty-badge ${difficulty}`;

        this.updateTimerDisplay(timeLimit);

        itemsList.innerHTML = '';
        this.currentHunt.forEach(item => {
            const itemElement = this.createItemElement(item);
            itemsList.appendChild(itemElement);
        });

        // Reset timer display
        document.getElementById('startTimerBtn').style.display = 'inline-flex';
        document.getElementById('pauseTimerBtn').style.display = 'none';
    }

    createItemElement(item) {
        const div = document.createElement('div');
        div.className = 'hunt-item';
        div.dataset.itemId = item.id;
        
        div.innerHTML = `
            <div class="item-checkbox">
                <i class="fas fa-check"></i>
            </div>
            <div class="item-content">
                <div class="item-number">Item ${item.id}</div>
                <div class="item-text">${item.text}</div>
            </div>
            <div class="item-points">${item.points} pts</div>
        `;

        div.addEventListener('click', () => this.toggleItem(item.id));
        
        return div;
    }

    toggleItem(itemId) {
        const itemElement = document.querySelector(`[data-item-id="${itemId}"]`);
        
        if (this.completedItems.has(itemId)) {
            this.completedItems.delete(itemId);
            itemElement.classList.remove('completed');
        } else {
            this.completedItems.add(itemId);
            itemElement.classList.add('completed');
            this.playCompletionSound();
        }

        this.updateStats();
        this.checkCompletion();
    }

    playCompletionSound() {
        // Create a simple completion sound using Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }

    updateStats() {
        const completedCount = this.completedItems.size;
        const totalCount = this.currentHunt.length;
        const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

        document.getElementById('completedCount').textContent = completedCount;
        document.getElementById('totalCount').textContent = totalCount;
        document.getElementById('progressPercent').textContent = progressPercent;

        const progressFill = document.getElementById('progressFill');
        progressFill.style.width = `${progressPercent}%`;
    }

    checkCompletion() {
        if (this.completedItems.size === this.currentHunt.length && this.currentHunt.length > 0) {
            this.stopTimer();
            this.showCompletionMessage();
        }
    }

    showCompletionMessage() {
        const totalPoints = this.currentHunt.reduce((sum, item) => {
            return sum + (this.completedItems.has(item.id) ? item.points : 0);
        }, 0);

        const message = document.createElement('div');
        message.className = 'completion-message';
        message.innerHTML = `
            <h3>🎉 Congratulations! 🎉</h3>
            <p>You completed the scavenger hunt!</p>
            <p>Total Points: ${totalPoints}</p>
            <p>Time: ${this.formatTime(Math.abs(this.timeRemaining - (parseInt(document.getElementById('timeLimit').value) * 60)))}</p>
        `;

        const itemsList = document.getElementById('itemsList');
        itemsList.appendChild(message);

        // Add celebration animation
        this.celebrate();
    }

    celebrate() {
        // Create confetti effect
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
                confetti.style.animationDelay = Math.random() * 0.5 + 's';
                document.body.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 3000);
            }, i * 30);
        }
    }

    startTimer() {
        if (this.timer) return;

        document.getElementById('startTimerBtn').style.display = 'none';
        document.getElementById('pauseTimerBtn').style.display = 'inline-flex';

        this.timer = setInterval(() => {
            if (!this.isPaused) {
                this.timeRemaining--;
                this.updateTimerDisplay(this.timeRemaining);

                if (this.timeRemaining <= 0) {
                    this.stopTimer();
                    this.showTimeUpMessage();
                }
            }
        }, 1000);
    }

    pauseTimer() {
        this.isPaused = !this.isPaused;
        const pauseBtn = document.getElementById('pauseTimerBtn');
        
        if (this.isPaused) {
            pauseBtn.innerHTML = '<i class="fas fa-play"></i> Resume';
        } else {
            pauseBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
        }
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        
        document.getElementById('startTimerBtn').style.display = 'inline-flex';
        document.getElementById('pauseTimerBtn').style.display = 'none';
    }

    resetHunt() {
        this.stopTimer();
        this.completedItems.clear();
        this.timeRemaining = parseInt(document.getElementById('timeLimit').value) * 60;
        this.isPaused = false;

        document.querySelectorAll('.hunt-item').forEach(item => {
            item.classList.remove('completed');
        });

        this.updateStats();
        this.updateTimerDisplay(this.timeRemaining);

        // Remove completion message if exists
        const completionMessage = document.querySelector('.completion-message');
        if (completionMessage) {
            completionMessage.remove();
        }
    }

    updateTimerDisplay(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        const display = `${minutes}:${secs.toString().padStart(2, '0')}`;
        document.getElementById('timeRemaining').textContent = display;

        // Add warning class when time is running low
        if (seconds <= 60 && seconds > 0) {
            document.getElementById('timer').classList.add('warning');
        } else {
            document.getElementById('timer').classList.remove('warning');
        }
    }

    showTimeUpMessage() {
        const message = document.createElement('div');
        message.className = 'time-up-message';
        message.innerHTML = `
            <h3>⏰ Time's Up! ⏰</h3>
            <p>You found ${this.completedItems.size} out of ${this.currentHunt.length} items!</p>
            <p>Great effort! Try again?</p>
        `;

        const itemsList = document.getElementById('itemsList');
        itemsList.appendChild(message);
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    }
}

// Add CSS for dynamic elements
const additionalCSS = `
.completion-message {
    grid-column: 1 / -1;
    text-align: center;
    padding: 30px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border-radius: 12px;
    margin-top: 20px;
    animation: fadeIn 0.5s ease-in;
}

.completion-message h3 {
    font-size: 2rem;
    margin-bottom: 15px;
}

.time-up-message {
    grid-column: 1 / -1;
    text-align: center;
    padding: 30px;
    background: linear-gradient(135deg, #fc8181, #f56565);
    color: white;
    border-radius: 12px;
    margin-top: 20px;
    animation: fadeIn 0.5s ease-in;
}

.time-up-message h3 {
    font-size: 2rem;
    margin-bottom: 15px;
}

.confetti {
    position: fixed;
    width: 10px;
    height: 10px;
    background: #ffd700;
    border-radius: 50%;
    pointer-events: none;
    animation: confettiFall 3s linear forwards;
    z-index: 9999;
}

@keyframes confettiFall {
    to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}

.timer.warning {
    background: var(--danger-color) !important;
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}
`;

// Inject additional CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalCSS;
document.head.appendChild(styleSheet);

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new ScavengerHuntGenerator();
});
