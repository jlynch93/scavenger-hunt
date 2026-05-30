# Random Scavenger Hunt Generator

A fully interactive scavenger hunt generator with random items, difficulty levels, timer, and progress tracking. Pure HTML/CSS/JS — no build step required.

## Live Demo

Deployed on Cloudflare Pages.

## Local Preview

```bash
python -m http.server 8000
# open http://localhost:8000
```

## Deploy to Cloudflare Pages

### Option A — Connect GitHub repo (recommended)

1. Push this repo to GitHub (see below).
2. Go to **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**.
3. Select your repo.
4. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`
5. Click **Save and Deploy**. Every push to `main` will auto-deploy.

### Option B — Direct deploy via Wrangler CLI

```bash
npm install -g wrangler
wrangler login
wrangler pages deploy . --project-name=scavenger-hunt
```

### Option C — GitHub Actions (automated)

A workflow is included at `.github/workflows/deploy.yml`. To enable it:

1. Get your Cloudflare **Account ID** (Dashboard sidebar) and create an **API Token** with the `Cloudflare Pages — Edit` template.
2. In your GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
3. Create a Pages project named `scavenger-hunt` in the Cloudflare dashboard (one-time).
4. Push to `main` — the workflow deploys automatically.

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
