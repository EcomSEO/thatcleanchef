# thatcleanchef-seo — SKILL

Source-of-truth instructions for Claude Code on **thatcleanchef.com**. Loaded every session — keep it concise, keep it current.

## 1. Positioning

**ThatCleanChef is clean-eating recipes for people on peptide therapy.**

Not a generic recipe blog. Every recipe is selected, scaled, and annotated for one of three patient contexts:

1. **GLP-1 patients** (Mounjaro, Ozempic, Wegovy, Zepbound) fighting reduced appetite + muscle loss
2. **Peptide-cycle users** running BPC-157 / TB-500 protocols supporting recovery
3. **Health optimizers** building anti-inflammatory, bone/tendon, or muscle-preservation patterns around a peptide stack

Market: **UK-first** (en-GB), USA-secondary. Voice: chef-authoritative, time-honest, no food-blog preamble, no guilt-free language, no "skinny," no "miracle."

## 2. The 5 pillars

Mapped 1:1 to `lib/content/hubs.ts`. Every recipe and guide must clip to one:

| slug | name | hero metric |
|------|------|-------------|
| `glp1-friendly` | GLP-1 Friendly Recipes | Small portions, 25g+ protein, easy on slow stomach |
| `muscle-preservation` | High-Protein for Muscle Preservation | 30g+ protein/serving, hits 1.2-1.6 g/kg/day target |
| `anti-inflammatory-recovery` | Anti-Inflammatory Recovery | Turmeric, omega-3, dark greens — pairs with BPC-157/TB-500 |
| `bone-tendon-health` | Bone & Tendon Health | Collagen, gelatin, vitamin C — connective-tissue substrate |
| `cycle-nutrition` | Pre/Post-Cycle Nutrition | Pre-cycle priming, post-cycle recovery windows |

## 3. URL architecture

```
/                               # homepage
/guides/[hub]                   # 5 pillar guide pages (dynamic, drives hub.slug)
/medications/[slug]             # 4 medication hubs (mounjaro, ozempic, wegovy, zepbound)
/meal-plans/[slug]              # meal plan landing pages (gated lead magnets)
/recipes/[slug]                 # high-protein category indexes
/[slug]                         # individual recipe / guide pages
/team/[reviewer-slug]           # RD reviewer profile pages
```

Reserved routes are listed in `app/[slug]/page.tsx` RESERVED set — keep new top-level routes there.

## 4. Mandatory schema on every recipe

- `Recipe` JSON-LD (full payload — name, description, nutrition, prepTime, cookTime, totalTime, recipeYield, recipeInstructions[], recipeIngredient[])
- `BreadcrumbList`
- `MedicalWebPage` when `medicalDisclaimer === "required"`
- `reviewedBy` Person on every recipe and guide (RD reviewer)
- USDA FDC citation on every Nutrition Ledger value

## 5. Content quality bar

Every published page passes these gates:

1. **Original photography** — hero + 3 step shots minimum on recipes
2. **Time-honest** prep/cook/total times (no hiding the dishes or the resting time)
3. **Nutrition Ledger above the fold** — calories, protein, fiber, sodium, sat fat, added sugar, all USDA FDC-backed
4. **RD reviewer byline** with date — `<PostReviewStamp>` on every recipe and medication hub
5. **"Why we tested this 3 times" module** on flagship recipes — what we changed and why
6. **Internal-link blueprint** — every recipe links to: 1 pillar, 1 medication hub (when relevant), 2 sibling recipes
7. **Lighthouse SEO ≥ 95** before deploy

## 6. Voice — what we don't say

- "guilt-free", "skinny", "slimming", "flat belly", "detox", "clean girl"
- "miracle", "shocking", "secret"
- First-person preamble ("My grandmother...", "I love when...")
- Inflated prep times that hide dish-washing or resting time
- Prescriptive medical advice. We say "patients on GLP-1 therapy commonly report..." — never "you should take X."

## 7. Display ads — network exception

ThatCleanChef is the **only** site in the EcomSEO health network where display ads are permitted (Mediavine at 50k+ sessions, Raptive at 100k+). `SITE.displayAdsEnabled` flag gates them — keep `false` until traffic threshold is hit. Never between recipe ingredients, never between steps, never inside the Nutrition Ledger or Chef Notes.

## 8. Launch state

- `SITE.launched = true` — site is indexable
- `peptideContext = true` — repositioning is live
- 10 launch recipes are stubbed in `lib/content/posts.ts`
- 4 medication hubs and 2 meal plans live under `app/medications/` and `app/meal-plans/`

## 9. What ships next (priority order)

1. Cottage-cheese pancakes recipe (KD 22, 6,600/mo) — `muscle-preservation`
2. Bone broth recipe (KD 13, 8,100/mo) — `bone-tendon-health`
3. "Natural Mounjaro" recipe roundup (KD 5, 720/mo) — pillar listicle linking to GLP-1 medication hub
4. 6 high-protein category pages under `/recipes/` (meals, snacks, breakfast, lunch, dinner, meal-prep)
5. RD reviewer profile pages at `/team/[slug]`

## 10. Pointers

- `content/brand-book.md` — voice, audience, anti-patterns
- `docs/topical-map.md` — full 150-recipe roadmap
- `docs/site-spec.md` — Recipe schema spec, display-ad rules
- `docs/affiliate-partners.md` — Mediavine setup, never-affiliate list (no peptide vendors)
- `lib/content/hubs.ts` — single source of truth for pillars
- `lib/content/medications.ts` — single source of truth for medication hubs
