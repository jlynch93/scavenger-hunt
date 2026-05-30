# Critter Quest — Scavenger Hunt for Kids

A colorful, mobile-first scavenger hunt game for little kids. Pick a place (House, Outside, Park, Colors, Farm, Sea), then tap big emoji cards as you find each thing in real life. Features read-aloud item names (great for pre-readers), sound effects, confetti, a star counter, and a friendly critter mascot. Pure HTML/CSS/JS — no build step required.

## Features

- **Mobile-first** with large touch targets and no zoom jitter
- **Read-aloud** item names via the Web Speech API (tap the 🔊 on any card)
- **Six themed worlds** with random items each round
- **Fun feedback**: chimes, spoken praise, confetti, and a progress critter
- **Star rewards** and a celebration win screen
- **Sound toggle** for quiet play

## Live Demo

Deployed on Cloudflare Pages.

## Local Preview

```bash
python -m http.server 8000
# open http://localhost:8000
```

## Deploy to Cloudflare Pages (Wrangler)

Config lives in `wrangler.toml` (`pages_build_output_dir = "."`).

```bash
npm install -g wrangler
wrangler login
wrangler pages deploy .
```

First run will offer to create the `scavenger-hunt` Pages project. Re-run the
`deploy` command any time to push a new version.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
gh repo create scavenger-hunt --public --source=. --remote=origin --push
```

Or manually:

```bash
git init
git branch -M main
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<your-user>/scavenger-hunt.git
git push -u origin main
```

## Files

- `index.html` — markup
- `styles.css` — styling
- `script.js` — hunt generation, timer, interactivity
