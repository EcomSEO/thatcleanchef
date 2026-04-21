# ThatCleanChef — Sample Briefs

Five anchor briefs across the five hubs. Recipe-format briefs are structurally different from other sites' briefs — the recipe IS the post, with Nutrition Ledger + chef notes as the supporting structure.

**Source data:** DataForSEO April 2026 via `docs/thatcleanchef-research.md` §4.

---

## Brief 1: Anti-Inflammatory Golden Chicken Soup (recipe, Hub 1)

```markdown
---
slug: anti-inflammatory-golden-chicken-soup
site: thatcleanchef
hub: diet-specific-recipes
post_type: recipe
target_keyword: anti inflammatory chicken soup
target_keyword_volume: 2900
target_keyword_difficulty: 14
secondary_keywords:
  - anti inflammatory soup (6600, kd 16)
  - turmeric chicken soup (1300, kd 12)
  - healing chicken soup (880, kd 15)
  - golden chicken soup (590, kd 10)
  - ginger turmeric chicken soup (320, kd 9)
search_intent: recipe
word_count_target: 1500
schema_types: [Recipe, Article, FAQPage]
has_nutrition_ledger: true
has_pinterest_tall_image: true
diet_tags: [anti-inflammatory, whole30-compatible, dairy-free, gluten-free]
internal_links:
  - diet-specific-recipes/anti-inflammatory-diet-pillar
  - technique-and-recipes/bone-broth
  - protein-forward/high-protein-dinner-ideas
affiliate_relevant: bone broth brand (Kettle & Fire), organic turmeric, high-quality chicken
analyst: The Analyst
review_status: brief
generated_at: 2026-04-21
---

## The opportunity
2,900/mo at KD 14 on seed term + 6,600/mo at KD 16 on the broader "anti inflammatory soup." Combined: ~12k/mo at accessible KDs. Top 10: EatingWell, Food Network, Simply Recipes, various recipe blogs. None have a proper Nutrition Ledger; most have either weak photography or long preambles. Our wedge: chef-tested, time-honest, Nutrition Ledger visible above the fold, Pinterest-tall photography.

## Required structure
- Hero photo (overhead, warm light, bowl + garnish)
- H1 with primary keyword
- Time block: Total 55 min (15 prep + 40 cook), 4 servings
- **Nutrition Ledger (above the fold):** 380 cal / 32g protein / 4g fiber / 620mg sodium / 3g sat fat / 2g added sugar
- **Diet tags:** Anti-Inflammatory · Whole30 · Dairy-Free · Gluten-Free
- **Jump to recipe** button (anchor link to recipe card)
- Intro (3 paragraphs max): why golden chicken soup is a category worth making, the role of turmeric + ginger (cited to anti-inflammatory literature briefly), what makes this version different (bone-in thighs for collagen, toasting spices, finishing acid)
- Process photos (2-3)
- **Recipe card:**
  - Ingredients (organized by prep station)
  - Instructions (numbered, timed where helpful — e.g., "sear for 4-6 min until golden")
  - Recipe yield, total/prep/cook time
  - Nutrition (linked to USDA FDC source)
- **Chef notes section** ("Why this works"):
  - Why bone-in thighs (collagen, flavor)
  - Why toast the turmeric (volatile oil activation)
  - Why finish with lime not lemon (brighter, better with ginger)
  - Why coconut aminos over soy (Whole30 compatible + umami)
  - Storage: 4 days fridge, 3 months freezer; reheat notes
- Swaps section (chicken breasts if preferred; cilantro → parsley; add noodles for non-Whole30)
- FAQ (schema-marked)
- Pinterest-tall image at the bottom

## Ingredients (for the brief — recipe developers refine)
- 2 tbsp avocado oil
- 2 lb bone-in skin-on chicken thighs
- 1 yellow onion, diced
- 4 cloves garlic, minced
- 2 tbsp fresh ginger, minced
- 1 tbsp ground turmeric
- 1/2 tsp black pepper (bioavailability)
- 8 cups chicken bone broth (Kettle & Fire or homemade)
- 2 carrots, sliced
- 2 celery stalks, sliced
- 1 lime, juiced
- Kosher salt to taste
- Fresh cilantro, chopped, for finish

## Required citations (brief)
- One or two peer-reviewed sources on turmeric + anti-inflammatory effects (Jurenka 2009, Hewlings & Kalman 2017)
- Mention that piperine in black pepper improves curcumin bioavailability (Shoba 1998)
- USDA FDC for nutrition

## Pinterest pin angles
1. "Golden chicken soup — 55 minutes, 32g protein, anti-inflammatory"
2. "The only chicken soup you'll make this winter"
3. "Save: golden chicken soup recipe (Whole30 + Paleo)"
4. "Anti-inflammatory chicken soup with turmeric + ginger"

## Editor notes
- This is a flagship Wave 1 recipe. Original photography is mandatory.
- Time-honest: 55 minutes including chopping and dishes. The research doc's 40 minutes assumed pre-chopped vegetables. We don't hide prep.
- Nutrition Ledger numbers per serving (4 servings from recipe). Rerun through USDA FDC after recipe developer finalizes.
- The Chef Notes are the differentiator vs EatingWell/Food Network versions. Don't shortchange them.
- Recipe schema must be complete — `recipeIngredient` array, `recipeInstructions` with step images where possible, `nutrition` object with full macros.
```

---

## Brief 2: Cottage Cheese Flatbread (high-protein trending, Hub 3)

```markdown
---
slug: cottage-cheese-flatbread
site: thatcleanchef
hub: protein-forward
post_type: recipe
target_keyword: cottage cheese flatbread
target_keyword_volume: 40500
target_keyword_difficulty: 22
secondary_keywords:
  - high protein flatbread (2400, kd 16)
  - cottage cheese bread (8100, kd 18)
  - protein flatbread recipe (1600, kd 14)
  - 2 ingredient cottage cheese flatbread (720, kd 10)
search_intent: recipe_trending
word_count_target: 1200
schema_types: [Recipe, Article, FAQPage]
has_nutrition_ledger: true
diet_tags: [high-protein, vegetarian, gluten-free-option]
trending: true  # +620% YoY per research
internal_links:
  - protein-forward/cottage-cheese-collection-pillar
  - protein-forward/high-protein-breakfast
  - meal-types/breakfast-playbook
analyst: The Analyst
review_status: brief
generated_at: 2026-04-21
---

## The opportunity
**40,500/mo at KD 22. +620% YoY.** This is one of the single fastest-growing recipe search terms. Top 10 is a mix of Pinterest-friendly recipe blogs that captured the initial wave — Fit Foodie Finds, Eating Bird Food, The Big Man's World. Our wedge: chef-tested variations (different ratios tested), Nutrition Ledger, proper photography, and the "why it works" section explaining the cottage cheese chemistry.

## Required structure
- Hero photo (cut flatbread with visible texture, natural light)
- H1
- Time: 20 min (5 prep + 15 bake), makes 1 large flatbread (2 servings)
- **Nutrition Ledger:** 320 cal / 28g protein / 2g fiber / 480mg sodium / 5g sat fat / 0g added sugar (per serving)
- **Diet tags:** High-Protein · Vegetarian · Gluten-Free (with gluten-free flour swap)
- Jump to recipe
- Intro (3 paragraphs): why cottage cheese flatbread became a thing, the protein math (28g protein in 2 slices vs 4-8g in conventional flatbread), what we tested and landed on (our ratio)
- Process photos (2): blending the base, pressed on parchment
- Recipe card
- Chef notes ("Why this works"):
  - The cottage cheese / egg ratio that doesn't collapse
  - Why 375°F not higher
  - Why to blend vs whisk (texture difference)
  - Toppings that work (hot honey + prosciutto; avocado + tomato; everything bagel)
- Swaps (4% vs 2% cottage cheese; gluten-free flour swap; seasoning variations)
- Storage: 3 days fridge; reheat in oven 5 min
- FAQ (schema-marked)
- Pinterest-tall image

## Ingredients (for the brief)
- 1 cup full-fat (4%) cottage cheese
- 2 large eggs
- 1/4 cup unsweetened almond flour (or oat flour for AIP)
- 1/2 tsp salt
- 1/4 tsp garlic powder
- 1/4 tsp onion powder
- Everything Bagel seasoning (top)
- Parchment + sheet pan

## Pinterest pin angles
1. "Cottage cheese flatbread — 28g protein, 20 minutes"
2. "Viral cottage cheese flatbread — the version that works"
3. "The protein flatbread the internet is obsessed with (tested)"
4. "Save: cottage cheese flatbread — only 4 ingredients"

## Editor notes
- Trending keyword at +620% YoY. Publish fast, then maintain.
- The 2-ingredient variant exists (cottage cheese + eggs only) but doesn't hold together as well — we'll mention it as a simpler version but our tested recipe uses almond flour for structure.
- Nutrition: calculate from full-fat cottage cheese + 2 eggs + 1/4 cup almond flour. Macros should show the ~28g protein clearly.
- The cottage cheese Wave 1 recipes cross-link to each other — this flatbread links to Alfredo, Ice Cream, Caesar Dressing as a "cottage cheese collection" internal cluster.
- Shoot the beauty shot with a topping (hot honey drizzled Parmesan is very Pinterest-pin-friendly).
```

---

## Brief 3: The Anti-Inflammatory Diet — Cook's Version (pillar, Hub 1)

```markdown
---
slug: anti-inflammatory-diet
site: thatcleanchef
hub: diet-specific-recipes
post_type: diet_pillar
target_keyword: anti inflammatory recipes
target_keyword_volume: 18100
target_keyword_difficulty: 5
secondary_keywords:
  - anti inflammatory diet (40500, kd 38)
  - anti inflammatory foods (33100, kd 32)
  - anti inflammatory meal plan (5400, kd 14)
  - anti inflammatory breakfast (3600, kd 7)
  - anti inflammatory smoothie (5400, kd 16)
search_intent: informational_with_recipe_discovery
word_count_target: 3500
schema_types: [Article, ItemList, FAQPage]
has_nutrition_philosophy_section: true
is_hub_pillar: true
internal_links:
  - [all 8 Wave 1 anti-inflammatory recipes]
  - technique-and-recipes/bone-broth
analyst: The Analyst
review_status: brief
generated_at: 2026-04-21
---

## The opportunity
18,100/mo at KD 5 on "anti inflammatory recipes" — the accessible variant. The broader terms are KD 30+. Our wedge: a chef-first take that organizes recipes around practical eating (breakfast, lunch, dinner, snack) rather than the "foods to eat / foods to avoid" grocery-list format every top-10 result uses.

## Required structure
- Hero photo (anti-inflammatory ingredient flatlay: salmon, berries, olive oil, leafy greens, turmeric, walnuts)
- H1
- Intro: what anti-inflammatory eating is (short, cited), what it isn't (a fad diet, a cure), who benefits most (post-40 readers, chronic-condition readers, post-workout recovery readers)
- Section 1: The evidence brief
  - What "inflammation" means in nutritional context (brief, cited to the literature)
  - The three patterns the research supports (Mediterranean-style, omega-3-heavy, polyphenol-rich)
  - What the research is honest about (diet as one of many levers, not a cure)
- Section 2: The ingredient inventory (table)
  - Omega-3-rich (salmon, sardines, flax, walnuts, EPA/DHA quantities per serving)
  - Polyphenol-rich (berries, green tea, olive oil, turmeric + pepper)
  - Fiber-rich (leafy greens, legumes, whole grains)
  - What to limit (ultra-processed, added sugar, refined omega-6-heavy oils — with nuance, not dogma)
- Section 3: The weekly framework
  - 7 breakfasts (cross-link to recipes)
  - 7 lunches (cross-link)
  - 7 dinners (cross-link)
  - 7 snacks
- Section 4: Meal prep for the anti-inflammatory eater (Sunday routine)
- Section 5: The 14-day Clean Chef Starter Kit (lead magnet pitch)
- Section 6: FAQ
- Sources (peer-reviewed: Calder 2013, 2015; Galland 2010; Willett 2019 Mediterranean meta-analysis)

## Editor notes
- This pillar is a lead-magnet driver. The "Clean Chef Starter Kit" (14-day meal plan PDF) is the primary email capture asset — this pillar is where most signups originate.
- Anti-inflammatory is NOT a miracle-cure narrative. Frame honestly: it's a pattern, not a cure, with good evidence for certain conditions and weaker evidence for others.
- Cross-link liberally to the Wave 1 anti-inflammatory recipes. Each recipe gets its own mention in the "weekly framework" section.
- The ingredient inventory is the Pinterest artifact (save-worthy grocery reference).
- Do NOT use "toxin," "detox," "cleanse," or "heal your body" language.
```

---

## Brief 4: High-Protein Breakfast Bowl (recipe, Hub 3)

```markdown
---
slug: high-protein-breakfast-bowl
site: thatcleanchef
hub: protein-forward
post_type: recipe
target_keyword: high protein breakfast
target_keyword_volume: 49500
target_keyword_difficulty: 11
secondary_keywords:
  - high protein breakfast bowl (3600, kd 14)
  - 40g protein breakfast (1300, kd 12)
  - savory breakfast high protein (2400, kd 15)
  - high protein breakfast ideas (6600, kd 18)
search_intent: recipe
word_count_target: 1200
schema_types: [Recipe, Article]
has_nutrition_ledger: true
diet_tags: [high-protein, gluten-free, dairy-free-option]
internal_links:
  - protein-forward/high-protein-cooking-guide
  - meal-types/breakfast-playbook
  - protein-forward/cottage-cheese-collection
analyst: The Analyst
review_status: brief
generated_at: 2026-04-21
---

## The opportunity
49,500/mo at KD 11 — enormous search volume, accessible KD. The generic "high protein breakfast" SERP is recipe-blog-heavy but the Nutrition Ledger is universally missing. Our wedge: 42g protein breakfast bowl with full macros visible above the fold, 15 minutes, and swappable base proteins.

## Required structure
- Hero photo (overhead bowl: eggs, spinach, quinoa or sweet potato, salsa, avocado)
- H1
- Time: 15 minutes, 1 serving (scales to 4)
- **Nutrition Ledger:** 480 cal / 42g protein / 8g fiber / 520mg sodium / 7g sat fat / 0g added sugar
- **Diet tags:** High-Protein · Gluten-Free · Dairy-Free-Option
- Jump to recipe
- 2-paragraph intro: the target (40g+ protein per meal), why this recipe hits it, what to swap if preferred
- Recipe card
- Chef notes:
  - Cook eggs in the spinach pan (saves time + infuses flavor)
  - Why room-temp eggs cook better
  - Starch base swaps (quinoa / sweet potato / rice / none)
  - Protein swaps (2 eggs + 3oz chicken for 50g; or 2 eggs + 1/2 cup cottage cheese for 35g vegetarian)
- Meal prep version (4 servings, 15 minutes if components are prepped Sunday)
- FAQ (schema-marked)
- Pinterest-tall image

## Editor notes
- Primary target keyword is huge but the recipe itself is simple. Don't oversell with preamble.
- The "swap" logic is the differentiator — readers who want plant-based, vegetarian, or dairy-free should have clear substitutions that maintain the protein target.
- Pinterest pin angle: "42g protein breakfast bowl — 15 min" is share-worthy.
```

---

## Brief 5: Mediterranean Meal Prep Week 1 (meal plan, Hub 5)

```markdown
---
slug: mediterranean-meal-prep-week-1
site: thatcleanchef
hub: seasonal-and-menus
post_type: meal_plan
target_keyword: mediterranean diet meal plan
target_keyword_volume: 9900
target_keyword_difficulty: 18
secondary_keywords:
  - mediterranean meal prep (4400, kd 16)
  - 7 day mediterranean meal plan (2400, kd 14)
  - mediterranean diet weekly menu (1600, kd 15)
  - mediterranean breakfast lunch dinner (720, kd 11)
search_intent: meal_plan
word_count_target: 2500
schema_types: [Article, ItemList, Recipe_per_meal]
has_pinterest_tall_image: true
diet_tags: [mediterranean, meal-plan]
is_lead_magnet_companion: true
internal_links:
  - diet-specific-recipes/mediterranean-diet
  - diet-specific-recipes/greek-lemon-chicken
  - diet-specific-recipes/white-bean-kale-soup
  - technique-and-recipes/weeknight-meal-prep-framework
analyst: The Analyst
review_status: brief
generated_at: 2026-04-21
---

## The opportunity
9,900/mo at KD 18. The top 10 is dominated by EatingWell, Mayo Clinic, and pop-diet sites. Nobody publishes a working meal prep plan — they publish a "here are 7 meal ideas" that doesn't sequence Sunday prep. Our wedge: actual Sunday-prep-sequence + day-by-day-shopping-list + reheating-protocol + make-ahead math.

## Required structure
- Hero photo (meal prep containers with a week of Mediterranean dinners)
- H1
- Intro: what this meal plan is (7 days, breakfast + lunch + dinner), who it's for (Mediterranean-curious cook who wants a real starting point), what makes it different (time-honest prep sequence)
- The 7-day menu (table with links to each recipe)
  - Monday: breakfast (Mediterranean plate), lunch (grain bowl), dinner (Greek lemon chicken)
  - Tuesday through Sunday (varied but leveraging Sunday prep)
- Sunday prep sequence (30/60/90 minute plan):
  - 30-minute version (minimum viable)
  - 60-minute version (optimal)
  - 90-minute version (if you love Sunday prep)
- Shopping list (organized by grocery section, quantities for 2 adults × 7 days)
- Cost estimate (~$120/week at regular grocery, ~$95 at Costco)
- Total weekly macros
- Storage + reheating guide
- Swap options (vegetarian version, higher-protein version, higher-fiber version)
- FAQ
- **Lead magnet:** Download the 14-day Clean Chef Starter Kit — includes this week + week 2 with grocery lists

## Editor notes
- This is a high-save Pinterest format. Design the hero image accordingly — 7 meal prep containers on a neutral background.
- The cost estimate is a sticky detail. Date it. Show the breakdown (protein $45, produce $30, pantry $25, dairy $20).
- Lead magnet integration is the primary goal — this post should convert at 8%+ to email signups.
- Cross-link to every recipe in the menu (7 dinners, 3-7 lunches, 3-7 breakfasts).
```
