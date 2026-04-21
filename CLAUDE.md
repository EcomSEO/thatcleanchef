# ThatCleanChef — Claude Code Guide

Source of truth for how thatcleanchef.com is built.

## What this repo is
Next.js 14 recipe site at **thatcleanchef.com** — chef-tested clean-eating recipes. Every recipe has a Nutrition Ledger (USDA FDC-backed), honest prep times, original photography.

## Stack
- Next.js 14 App Router, TypeScript, Tailwind
- Brand tokens: `sage-herb #7A8F6B, warm-cream #F6F1E8, kitchen-terracotta #C4663D, olive #4A5530`
- Fonts: Fraunces (headlines), Inter (body), IBM Plex Mono (nutrition numerics)

## Signature components (planned, stubbed — data is in `lib/content/posts.ts`)
- `<RecipeCard>` with print/scale/copy buttons
- `<NutritionLedger>` — USDA FDC-backed macros (calories, protein, fiber, sodium, sat fat, added sugar)
- `<RecipeJsonLd>` — full Recipe schema is MANDATORY on every recipe page
- `<PinterestTallImage>` with save-to-Pinterest button
- `<ChefNotes>` — "Why this works" section
- `<RecipeSwaps>`, `<JumpToRecipe>`, `<MealPlanGrid>`, `<ShoppingList>`

Recipe metadata (totalTimeMinutes, nutritionLedger, dietTags, etc.) lives in `lib/content/posts.ts`. Render the components post-launch.

## Launch flag
`lib/content/site.ts` → `SITE.launched = false` until launch checklist is green.

## Display ads — network exception
**ThatCleanChef is the one site in the network where display ads are allowed**, via Mediavine (at 50k+ sessions) or Raptive (at 100k+). Recipe-site economics make this material. Ad placement rules are strict — NEVER between recipe ingredients, NEVER between steps, NEVER in the Nutrition Ledger or Chef Notes. See `docs/site-spec.md` §3.

Until then, a `SITE.displayAdsEnabled` flag (to be added) gates the ad slots. Keep it `false`.

## Voice
Chef-authoritative, photo-led, time-honest. Alison-Roman-adjacent. No food-blog preamble. No guilt-free language. See `content/brand-book.md`.

## Commands
```bash
pnpm install
pnpm dev       # http://localhost:3001
pnpm build
```

## What not to do
- Flip `SITE.launched` early
- Use "guilt-free," "skinny," "slimming," "flat belly"
- Publish recipes without original photography
- Inflate prep times (hide dishes or waiting time)
- Place display ads between recipe ingredients or steps
- Publish recipes without Recipe schema

## Pointers
- Voice: `content/brand-book.md`
- 150 recipes + 5 pillars: `docs/topical-map.md`
- Recipe schema + display-ad rules: `docs/site-spec.md`
- Affiliate partners incl. Mediavine setup: `docs/affiliate-partners.md`
- Sample recipe briefs: `docs/sample-briefs.md`
- SERP wedge: `docs/competitive-analysis.md`
