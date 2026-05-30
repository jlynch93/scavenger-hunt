# Random Scavenger Hunt Generator

A fully interactive scavenger hunt generator with random items, difficulty levels, timer, and progress tracking. Pure HTML/CSS/JS — no build step required.

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
