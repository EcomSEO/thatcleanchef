# thatcleanchef-seo — SKILL

Source-of-truth instructions for Claude Code on **thatcleanchef.com**. Loaded every session — keep it concise, keep it current.

## 1. Positioning

**ThatCleanChef is a chef-tested clean-eating recipe site that respects your time.** Every recipe carries:

- A USDA-sourced Nutrition Ledger
- Honest prep + cook + total times (no hiding the dishes or the rest)
- Original photography (16:9, 4:3, 1:1 for the rich-result image carousel)
- A registered-dietitian review byline
- A "Why we tested this 3 times" methodology card on flagship recipes

This is **NOT** a peptide-therapy nutrition site. It is the network's only display-ad revenue site (Mediavine at 50k sessions, Raptive at 100k).

**Audience:** Kate, 34, busy professional. Cooks 4–6 dinners a week. Reads on phone in the kitchen. Tired of food-blog preamble, inflated prep times, and Pinterest clickbait.

**Voice:** confident-chef-friend. "We tested this three times to nail the salt level." Specific over generic. Warmth without saccharine. No "guilt-free," "skinny," "flat belly," or "you-deserve-this."

## 2. The 5 hubs

Mapped 1:1 to `lib/content/hubs.ts`. Every recipe slots into one primary hub; cross-tags handle the multi-dimensional reality.

| slug | name | what's here |
|------|------|-------------|
| `diet-specific` | Diet-Specific Recipes | Anti-inflammatory, Whole30, Mediterranean, PCOS, low-FODMAP |
| `meal-types` | Meal Types | Breakfast, lunch, dinner, snack, dessert, drinks |
| `protein-forward` | Protein-Forward Recipes | 30g+ protein per serving, real-food only |
| `technique` | Technique & Reference | How to roast a chicken, make bone broth, cook salmon four ways |
| `seasonal-menus` | Seasonal Menus & Meal Plans | Quarterly menus + 3 weekly meal plans (Anti-Inflammatory, Mediterranean, High-Protein) |

## 3. URL architecture

```
/                                    # homepage
/guides/[hub]                        # 5 hub landing pages (dynamic)
/recipes                             # full recipe index
/recipes/[category]                  # high-protein-X SERP filters
/meal-plans/[slug]                   # 3 weekly meal plans (anti-inflammatory, mediterranean, high-protein)
/team/[slug]                         # author + reviewer profiles
/[slug]                              # individual recipe page
/[locale]                            # 12-locale homepage (en at /, others at prefix)
```

Reserved routes are listed in `app/[slug]/page.tsx` RESERVED set.

## 4. Mandatory schema on every recipe (the carousel lever)

Recipe SEO lives or dies on Recipe schema completeness. Every recipe page emits:

- `Recipe` JSON-LD with FULL payload:
  - `name`, `description`
  - `image` — array of 3 (16:9, 4:3, 1:1) — required for image carousel inclusion
  - `author.@id` resolving to `/team/{slug}#person`
  - `datePublished` + `dateModified`
  - `recipeCuisine` + `recipeCategory` + `keywords`
  - `recipeYield`, `prepTime`, `cookTime`, `totalTime` (ISO 8601)
  - `nutrition.NutritionInformation` with calories/protein/fat/carbs/fiber/sugar/sodium/servingSize
  - `recipeIngredient` array (full ingredient lines as written)
  - `recipeInstructions` as `HowToStep` array
  - `aggregateRating` ONLY if real ratings exist — never fake
- `Article` for the editorial wrapping
- `BreadcrumbList`
- `FAQPage` when the post has an FAQ section
- `reviewedBy` Person on every recipe (RD reviewer)

## 5. Display ads — the Mediavine thesis

ThatCleanChef is the **only** site in the EcomSEO health network where display ads are permitted. `SITE.displayAdsEnabled` flag gates them — keep `false` until 50k sessions/mo + Mediavine onboarding complete.

When live, ad placement rules are non-negotiable:

- NEVER between recipe ingredients
- NEVER between recipe steps
- NEVER inside the Nutrition Ledger
- NEVER inside the Chef Notes / "Why we tested" block
- Above the recipe card, between H2 sections, in the right rail (sticky), and below the FAQ are all allowed slots
- Mediavine script ships behind a content-availability check: `<MediavineScript />` returns `null` when `SITE.displayAdsEnabled === false`

## 6. Voice — what we don't say

- "guilt-free", "skinny", "slimming", "flat belly", "detox", "clean girl"
- "miracle", "shocking", "secret"
- First-person preamble ("My grandmother...", "I love when...")
- Inflated prep times that hide dish-washing or resting time
- Diet-scolding ("forbidden food," "cheat day")
- Prescriptive medical advice — never claim a recipe "treats" any condition

## 7. Photography requirement

Every published recipe ships with **three aspect ratios** in `/public/images/recipes/{slug}-{16x9,4x3,1x1}.jpg`. The 4:3 + 1:1 variants are the rich-result image-carousel lever. Photo requirement enforced in CI before any post can move from `status: draft` to `status: published`.

## 8. Launch state

- `SITE.launched = true` — site is indexable
- `SITE.displayAdsEnabled = false` — ads gated until the threshold
- 12-locale i18n shipped (en canonical, 11 locale prefixes)
- 23 recipes live as of 2026-04-28; target 80 by month 6 to qualify for Mediavine

## 9. What ships next (priority order)

1. Multi-aspect (4:3 + 1:1) image generation for the 23 existing recipes via kie.ai Nano Banana
2. The 17-recipe pipeline to clear the 40-Wave-1 mark
3. Mediavine `<MediavineScript />` component + ad slots in templates (gated `false`)
4. The 3 RD-reviewed weekly meal plans (Anti-Inflammatory 7-day, Mediterranean 7-day, High-Protein 7-day)
5. Full Recipe schema audit — every recipe must emit the 14-field payload above

## 10. Pointers

- `~/Developer/active/health-network/content/thatcleanchef/brand-book.md` — voice, audience (Kate), anti-patterns
- `~/Developer/active/health-network/docs/topical-maps/thatcleanchef.md` — the 150-recipe roadmap
- `docs/site-spec.md` — Recipe schema spec, display-ad rules, Mediavine onboarding checklist
- `docs/affiliate-partners.md` — Mediavine setup, never-affiliate list
- `lib/content/hubs.ts` — single source of truth for hubs
- `lib/content/posts.ts` — recipe data
- `lib/content/team.ts` — authors + reviewer (Lena Marsh RDN, no peptide-specialism framing)
