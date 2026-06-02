# Critter Quest — Scavenger Hunt for Kids

A colorful, mobile-first scavenger hunt game for little kids. Pick a world (or the **Surprise Mix**), then tap big emoji cards as you find each thing in real life. Every round is different thanks to randomized item picks, random **Quest Twists**, mystery clue cards, rainbow treasures, rotating mascots, and surprise pop-in critters. Features read-aloud item names (great for pre-readers), sound effects, confetti, and a star counter. Pure HTML/CSS/JS — no build step required.

## Features

- **Mobile-first** with large touch targets and no zoom jitter
- **Read-aloud** item names via the Web Speech API (tap the 🔊 on any card)
- **13 themed worlds** (House, Outside, Park, Colors, Farm, Sea, Kitchen, Toys, Shapes, Weather, Vehicles, Space, Sweets) with 16–24 items each
- **Surprise Mix** world that pulls a fresh random set from every theme
- **Random Quest Twists** each round: Classic, Golden Rush, Mystery Mode, Rainbow Round, Double Stars, Speedy Safari
- **Special item types**: golden treasures (3⭐), rainbow treasures (5⭐), and mystery clue cards that reveal when found
- **Random rotating mascots** per world and **pop-in bonus critters** you can tap for extra stars
- **Fun feedback**: chimes, spoken praise, confetti, and a progress critter
- **Star rewards**, earnable stickers, photo scrapbook, and a celebration win screen
- **Sound toggle** for quiet play (preference is remembered)

## Mobile & PWA

- **Installable PWA** — add to the home screen and launch fullscreen (`manifest.webmanifest`, `sw.js`, `icon.svg`)
- **Works offline** — the app shell is cached, so it plays with no signal
- **Haptic feedback** — gentle vibrations on finds, treasures, bonus critters, and wins
- **Screen Wake Lock** — the screen stays on while a kid is hunting in the real world
- **Lifetime stats** — hunts completed, total stars, and stickers shown on the home screen
- **Reduced-motion friendly** — calmer animations when the device requests it

> Note: icons are SVG. For the widest install support on Android you may want to add 192px and 512px PNG icons and reference them in `manifest.webmanifest`.

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
