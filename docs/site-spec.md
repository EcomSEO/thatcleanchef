# ThatCleanChef — Site Build Spec

Pairs with `content/thatcleanchef/brand-book.md`, `docs/topical-maps/thatcleanchef.md`, `docs/thatcleanchef-sample-briefs.md`, `docs/thatcleanchef-affiliate-partners.md`, `docs/thatcleanchef-competitive-analysis.md`, `docs/thatcleanchef-research.md`, `CLAUDE.md`.

**Unique characteristics:**
- **Recipe schema is non-negotiable on every recipe** — this is Google SERP feature territory
- **Pinterest-tall images required** on every recipe (1000×1500)
- **Original photography required** — no stock
- **Nutrition Ledger** on every recipe (USDA FDC-backed)
- **Display ads allowed** (Mediavine at 50k sessions, Raptive at 100k) — the one site in the network where display is part of the monetization thesis

---

## 1. Information architecture

### URL structure

```
https://thatcleanchef.com/
https://thatcleanchef.com/recipes/{slug}              # individual recipe
https://thatcleanchef.com/{slug}                      # non-recipe posts (pillars, guides)
https://thatcleanchef.com/guides/{hub-slug}            # hub landing
https://thatcleanchef.com/meal-plans/{slug}            # meal plans
https://thatcleanchef.com/about, /editorial-standards, /methodology
https://thatcleanchef.com/privacy, /terms, /affiliate-disclosure, /contact, /newsletter
https://thatcleanchef.com/sitemap.xml, /robots.txt, /llms.txt, /feed.xml
```

**Note on URL structure:** Recipe URLs live under `/recipes/` for clean separation from guides/pillars. This also simplifies sitemap partitioning — recipes can have their own sitemap subsection.

Hub slugs:
- `guides/diet-specific`
- `guides/meal-types`
- `guides/protein-forward`
- `guides/technique`
- `guides/seasonal`

### Canonical, redirect rules
Standard: self-canonical, www → apex 301, http → https 301, no trailing slash.

### Global navigation

```
[Logo]  Recipes ▾  Diets ▾  Meal Plans  About  Newsletter       [Search: "30-minute chicken..."]

Recipes dropdown:
  Breakfast, Lunch, Dinner, Snacks, Desserts, Drinks (by meal type)
  + "Browse all →"

Diets dropdown:
  Anti-Inflammatory, Whole30, Mediterranean, High-Protein, PCOS-Friendly, Low-FODMAP
  + "All diets →"

Meal Plans:
  7-Day Anti-Inflammatory, 7-Day Mediterranean, 7-Day High-Protein, and seasonal.
```

Mobile: hamburger → flat list; search is surface-level, not buried.

### Footer (4 columns)
Recipes by meal type (5) | Recipes by diet (6) | About (About, Standards, Methodology, Contact, Newsletter) | Fine print (Privacy, Terms, Affiliate Disclosure)

Bottom strip: `© 2026 ThatCleanChef · Clean plates, sharp recipes · Affiliate disclosure`

---

## 2. Page templates

### A — HomePage
Hero (recipe-led, photo-forward) → Featured recipe (hero + jump-to-recipe card) → 5 hub cards → Latest recipes (6-card grid with Pinterest-friendly images) → Featured diet pillar (rotating) → Email capture → Trust strip → Footer.

### B — HubPage
Hub hero → pillar card → recipe grid filtered by hub → sidebar filter (by diet, time, protein, meal type) → email capture → footer.

### C — RecipeTemplate (signature — 80% of content)
1. Hero photo (landscape, 1920×1080 optimized; additional 1200×1200 square)
2. Breadcrumbs
3. H1
4. Time block + servings + diet tags (above the fold)
5. **Nutrition Ledger card** (above the fold)
6. **"Jump to recipe"** anchor link (respect readers who want the recipe)
7. 3-paragraph intro (max)
8. Process photos (2-4 inline)
9. **Recipe card** (bordered, distinct styling):
   - Ingredients (with amounts, organized by prep station)
   - Instructions (numbered)
   - Nutrition block (linked to methodology page)
   - Print button, scale button (×2, ×4), copy ingredients button
10. Chef notes section ("Why this works")
11. Swaps + variations
12. Storage + reheating
13. FAQ (schema-marked)
14. Pinterest-tall image (at the bottom, for saving)
15. Related recipes (3 cards)
16. Email capture
17. Footer

### D — DietPillarTemplate
For the 5 diet pillars (Anti-Inflammatory, Whole30, etc.). Similar to network pillar template + recipe grid section + meal plan cross-link + lead-magnet block.

### E — MealPlanTemplate
For 7-day meal plans. Grid table (day × meal), recipe links, shopping list, prep-sequence timeline, macros summary.

### F — TechniqueTemplate
For how-to posts (roast chicken, bone broth, etc.). HowTo schema. Step-numbered procedure with inline photography.

### G — ListiclePage
Standard. Each list item = recipe card with image + key nutrition.

### H — TrustPageTemplate
Clean reading layout.

---

## 3. Component inventory

### Signature components
- **`<RecipeCard>`** — the bordered, printable recipe block. Print button, scale buttons (×2, ×4), copy-to-clipboard ingredients button. Recipe schema rendered within.
- **`<NutritionLedger>`** — per-serving macros (calories, protein, fiber, sodium, sat fat, added sugar). USDA-sourced. Linked methodology note.
- **`<ChefNotes>`** — "Why this works" section with 3-5 technique explanations.
- **`<RecipeSwaps>`** — variation + substitution table (ingredient swap, effect on macros, diet impact).
- **`<PinterestTallImage>`** — 1000×1500 pin with headline overlay, save-to-Pinterest button.
- **`<JumpToRecipe>`** — anchor link, sticky on scroll once past the intro.
- **`<RecipeFilter>`** — hub-page filter UI (by diet, by time, by protein ceiling, by meal type, by ingredient exclude).
- **`<MealPlanGrid>`** — 7-day × 3-meal table with recipe links.
- **`<ShoppingList>`** — auto-generated from a meal plan's recipe ingredients. Organized by grocery section. Exportable.

### Schema components (critical)
- **`<RecipeJsonLd>`** — full Recipe schema with ingredients array, instructions array with step images, nutrition object, prepTime, cookTime, totalTime, recipeYield, recipeCategory, recipeCuisine, keywords, multi-size image array, aggregateRating (once reviews exist). **This is the single most important schema on the site.**
- `<HowToJsonLd>` — for technique posts
- `<FAQPageJsonLd>` — for FAQ blocks
- `<ItemListJsonLd>` — for listicles and meal plans
- `<BreadcrumbJsonLd>`, `<ArticleJsonLd>`, `<OrganizationJsonLd>`

---

## 4. SEO technical spec

### Meta tag patterns

| Page | Title | Description |
|---|---|---|
| Home | `ThatCleanChef — Clean plates, sharp recipes` | `Chef-tested recipes with real Nutrition Ledgers, honest prep times, and original photography. Anti-Inflammatory, Mediterranean, Whole30, High-Protein.` |
| Recipe | `{Recipe name} ({time}, {protein}g protein) | ThatCleanChef` | First line of recipe intro trimmed to 155 chars |
| Diet pillar | `{Diet} — A Cook's Guide (with {N} recipes) | ThatCleanChef` | Pillar thesis + recipe count |
| Meal plan | `{N}-Day {Diet} Meal Plan — Shopping List + Macros | ThatCleanChef` | Plan overview |
| Hub | `{Hub} Recipes — ThatCleanChef` | Hub description |

### Schema by template

| Template | Schema |
|---|---|
| Home | Organization + WebSite + SearchAction |
| Hub | CollectionPage + BreadcrumbList |
| Recipe | **Recipe** (mandatory) + FAQPage + BreadcrumbList |
| Diet pillar | Article + ItemList (recipes) + FAQPage |
| Meal plan | Article + ItemList + FAQPage |
| Technique | Article + HowTo + FAQPage |
| Listicle | Article + ItemList |

**Recipe schema is the single most important schema to get right on this site.** Google's recipe SERP features (rich cards with star ratings, image, cook time) depend on it.

### robots / llms
Standard. AI crawlers explicitly allowed.

### Internal linking
- Every recipe → its diet pillar(s) + its meal-type hub
- Every diet pillar → 8+ recipes in that diet
- Every meal plan → every recipe in the plan + related recipes
- Every recipe → 3-5 related recipes at the bottom
- Cross-tagging recipes into multiple hubs is encouraged (cottage cheese flatbread = High-Protein + Mediterranean + Breakfast)

### Core Web Vitals (recipe SERP weights LCP heavily)
- **LCP < 2.0s** (strict — recipe SERP visually rewards fast-loading pages)
- INP < 200ms
- CLS < 0.05
- Hero image optimized aggressively (WebP + AVIF, lazy-load below fold)

### Sitemap
Split into:
- `sitemap-home.xml` — home, hubs, trust pages
- `sitemap-recipes.xml` — all recipes
- `sitemap-meal-plans.xml` — meal plans
- `sitemap-index.xml` — master index

---

## 5. Recipe schema requirements (safety-critical for ranking)

Every recipe page must render complete Recipe schema:

```json
{
  "@context": "https://schema.org",
  "@type": "Recipe",
  "name": "Anti-Inflammatory Golden Chicken Soup",
  "image": [
    "https://thatcleanchef.com/images/golden-chicken-soup-1x1.jpg",
    "https://thatcleanchef.com/images/golden-chicken-soup-4x3.jpg",
    "https://thatcleanchef.com/images/golden-chicken-soup-16x9.jpg"
  ],
  "author": { "@type": "Organization", "name": "The ThatCleanChef Kitchen" },
  "datePublished": "2026-04-21",
  "description": "Chef-tested anti-inflammatory chicken soup with turmeric, ginger, and bone broth. 55 min, 32g protein.",
  "prepTime": "PT15M",
  "cookTime": "PT40M",
  "totalTime": "PT55M",
  "recipeCategory": "Soup",
  "recipeCuisine": "American",
  "recipeYield": "4 servings",
  "keywords": "anti-inflammatory, chicken soup, turmeric, Whole30",
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": "380 kcal",
    "proteinContent": "32g",
    "fiberContent": "4g",
    "sodiumContent": "620mg",
    "saturatedFatContent": "3g",
    "sugarContent": "2g"
  },
  "recipeIngredient": [
    "2 tbsp avocado oil",
    "2 lb bone-in skin-on chicken thighs",
    "..."
  ],
  "recipeInstructions": [
    { "@type": "HowToStep", "text": "Heat avocado oil in a 6-quart Dutch oven over medium-high heat." },
    { "@type": "HowToStep", "text": "..." }
  ],
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "42" }
}
```

CI validation: every recipe page's Recipe schema must pass Google Structured Data Testing Tool (now merged into Search Console Rich Results Test). PR blocked if validation fails.

---

## 6. Image pipeline

Every recipe requires minimum 4 images:
- Hero (overhead or 3/4 angle, 1920×1080)
- Process (2-3 inline shots, 1200×800)
- Final beauty (1200×1200 square)
- Pinterest-tall (1000×1500)

Image optimization:
- Original shot at minimum 4000×3000 (room to crop)
- WebP primary, AVIF fallback where supported, JPG ultimate fallback
- Multiple sizes generated at build: 400w, 800w, 1200w, 1920w
- All images lazy-loaded below the fold
- Priority hint on hero image only

Storage: Supabase CDN (per `supabase-cdn` skill) under `thatcleanchef/recipes/{slug}/`. Each recipe's images live in its own folder.

---

## 7. Homepage copy

### Hero
**H1:** Clean plates, sharp recipes.
**Subhead:** Chef-tested recipes with real Nutrition Ledgers, honest prep times, and original photography. Anti-Inflammatory, Mediterranean, Whole30, High-Protein.
**Primary CTA:** Browse recipes →
**Secondary CTA:** Get the Clean Chef Starter Kit

### Featured recipe block
Rotating weekly. The week's hero recipe with its hero image + jump-to-recipe CTA.

### Hub grid (5 cards)
Diet-Specific Recipes, Meal Types, Protein-Forward, Technique, Seasonal & Weekly Menus.

### Email capture
**Headline:** The Clean Chef Starter Kit.
**Subhead:** A 14-day anti-inflammatory meal plan PDF with grocery lists, macros, and prep-ahead schedule. Free.

### Trust strip
- **Every recipe tested.** In home kitchens, on home equipment.
- **Every nutrition number real.** USDA FDC-sourced, per serving.
- **Every photo original.** No stock.

---

## 8. Lead magnet — "Clean Chef Starter Kit"

14-day anti-inflammatory meal plan PDF:
- 2 weeks × 21 meals = 42 meal slots
- All recipes cross-link to the live site
- Grocery list organized by section, by week
- Sunday prep sequence for each week
- Macros totaled per day + per week
- Pantry staples checklist

Format: beautifully designed PDF (not a boring Word export). Uses brand colors, real photography, warm typography.

Delivered via Beehiiv welcome sequence:
- Email 1 (instant): PDF + "how to use this meal plan"
- Email 2 (Day 3): "The 5 staples to stock before Monday"
- Email 3 (Day 7): "Why we chose these 14 days (and what to add next)"

Day 8+: weekly digest with 1-2 new recipes + seasonal note.

---

## 9. Launch checklist

- [ ] Domain + SSL + redirects
- [ ] All 8 trust pages live
- [ ] Home with featured recipe block
- [ ] At least 20 recipes live with complete Recipe schema + original photography
- [ ] 5 diet pillars live
- [ ] First meal plan live (Anti-Inflammatory 7-day)
- [ ] Recipe schema validating in Rich Results Test for all recipes
- [ ] Pinterest-tall image on every recipe
- [ ] Core Web Vitals green (LCP < 2.0s especially)
- [ ] Cookie banner
- [ ] Email capture wired to Beehiiv
- [ ] Clean Chef Starter Kit PDF designed + delivered end-to-end
- [ ] Welcome sequence tested
- [ ] Analytics (Neon)
- [ ] Search Console + Bing verified
- [ ] Pinterest business account created + first 60 pins scheduled
- [ ] Mediavine pre-application prep (submit at 50k sessions — estimated month 4-6)

---

## 10. Content at launch (Wave 1 — 40 recipes + 5 pillars + 1 meal plan)

See `docs/topical-maps/thatcleanchef.md` Wave 1 section.

---

## 11. Handoff to Claude Code

> Read all circadianstack-thatcleanchef-related docs. Scaffold standalone Next.js 14 at `~/Developer/active/thatcleanchef-standalone`.
>
> Implement:
> - 8 page templates: Home, Hub, **RecipeTemplate**, DietPillar, MealPlan, Technique, Listicle, TrustPage
> - **`<RecipeCard>`** with print/scale/copy buttons
> - **`<NutritionLedger>`** component (USDA-backed)
> - **`<RecipeJsonLd>`** with full schema (critical)
> - **`<PinterestTallImage>`** with save-to-Pinterest button
> - `<JumpToRecipe>`, `<RecipeFilter>`, `<MealPlanGrid>`, `<ShoppingList>`, `<RecipeSwaps>`, `<ChefNotes>`
> - Split sitemap (recipes, meal-plans, home)
> - Image pipeline (WebP/AVIF/JPG, multiple sizes, lazy-load)
> - All 8 trust pages
> - Homepage
> - 20 recipe stubs + 5 diet pillar stubs + 1 meal plan stub (all with placeholder photography references)
> - SITE.launched = false
> - **Display ad slots** (Mediavine-compatible) — rendered conditionally on SITE.displayAdsEnabled flag (false at launch)
>
> Brand tokens: `sage-herb #7A8F6B, warm-cream #F6F1E8, kitchen-terracotta #C4663D, olive #4A5530, charcoal #2B2B2B`. Fonts: Fraunces or Source Serif 4 (headlines) + Inter (body) + IBM Plex Mono (Nutrition Ledger numerics).
>
> Commit as `feat: initial thatcleanchef site — recipe schema, nutrition ledger, pinterest images`.
