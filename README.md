# thatcleanchef.com

Clean plates, sharp recipes. Next.js 14 recipe site with real Nutrition Ledgers, honest prep times, original photography.

Read [CLAUDE.md](./CLAUDE.md) first.

## Local dev
```bash
pnpm install
pnpm dev       # http://localhost:3001
pnpm build
```

## Deploy
Auto-deploys to Vercel on push to `main`. Keep `SITE.launched = false` until the launch checklist (`docs/site-spec.md`) is green.

## The recipe-site economics
Unlike the other 6 sites in the network, ThatCleanChef allows display ads (Mediavine at 50k+ sessions, Raptive at 100k+) as part of its revenue model. Strict placement rules in `docs/site-spec.md` §3 — never between recipe ingredients, never between steps.

## Key docs
- `content/brand-book.md` — voice, Kate persona, Alison-Roman-adjacent voice
- `docs/topical-map.md` — 150 recipes across 5 hubs
- `docs/site-spec.md` — IA, Recipe schema spec, display ad rules
- `docs/sample-briefs.md` — 5 anchor recipe briefs incl. cottage cheese flatbread
- `docs/affiliate-partners.md` — Mediavine, Thrive Market, Butcher Box, ingredient brands
- `docs/competitive-analysis.md` — SERP wedge vs EatingWell, AllRecipes, Pinterest cluster
