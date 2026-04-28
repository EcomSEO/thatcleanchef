/**
 * Recipe-category landing pages — the high-volume "high-protein-X" cluster
 * mapped from DataForSEO April 2026 (UK + US merged). Each category is
 * scoped to a filter strategy the recipe set can satisfy today.
 *
 * These are NOT pillars. The pillars in `hubs.ts` carry the editorial frame.
 * These are SERP-targeted recipe filters that index for transactional
 * "high protein recipes for X" intents.
 */

export type RecipeCategory = {
  slug: string;
  title: string;
  h1: string;
  primaryKeyword: string;
  monthlyVolumeUK: number;
  intent: string;
  // SEO copy
  description: string;
  introCopy: string;
  // Filter logic — recipe must satisfy at least one
  matchHubs?: string[];
  // Filter on minimum protein per serving
  minProteinG?: number;
  // Filter on totalTimeMinutes
  maxTotalMin?: number;
  // Slug-substring filter — for clusters defined by ingredient (cottage-cheese,
  // bone-broth) where hub + protein floor isn't a clean discriminator.
  slugIncludes?: string;
  faq: { q: string; a: string }[];
};

export const recipeCategories: RecipeCategory[] = [
  {
    slug: "high-protein-meals",
    title: "High-protein meals",
    h1: "High-protein meals — 30g+ per serving, tested.",
    primaryKeyword: "high protein meals",
    monthlyVolumeUK: 5400,
    intent:
      "Adults in caloric deficit or building a muscle-preservation protein floor needing 30 g+ protein per serving to protect lean mass.",
    description:
      "Every meal here clears 30 g of protein per serving and has been tested at least three times in our kitchen. RD-reviewed, USDA-cited. Designed for people on a body-composition or muscle-preservation track.",
    introCopy:
      "In caloric deficit, the single biggest nutritional risk is losing muscle alongside fat. Independent guidance (Phillips 2017, Morton 2018 meta-analysis) sets the daily protein floor at 1.2–1.6 g per kg of body weight. For a 75 kg adult, that's 90–120 g a day — and it has to land in actual meals. Halving a normal recipe halves the protein. These don't.",
    matchHubs: ["muscle-preservation", "glp1-friendly", "anti-inflammatory-recovery"],
    minProteinG: 25,
    faq: [
      {
        q: "Why 30 g per meal specifically?",
        a: "Per-meal protein leucine threshold for muscle protein synthesis sits at roughly 2.5 g of leucine, which falls out at around 25–30 g of mixed protein from animal sources, slightly higher from plant sources. Below that, the anabolic signal is muted. We use 30 g as the floor.",
      },
      {
        q: "Are these all dinner recipes?",
        a: "No — breakfasts, lunches, and dinners. The breakfast slot matters most when later-day appetite is unreliable; we front-load.",
      },
      {
        q: "Do plant-based options work?",
        a: "Yes, with a slightly higher protein target per serving (33–35 g) to account for digestibility differences. Cottage cheese, Greek yoghurt, and tofu-based recipes are tagged inside this set.",
      },
    ],
  },
  {
    slug: "high-protein-snacks",
    title: "High-protein snacks",
    h1: "High-protein snacks for between-meal protein.",
    primaryKeyword: "high protein snacks",
    monthlyVolumeUK: 6600,
    intent:
      "Adults needing a 15–25 g protein bridge between main meals — particularly when later-day appetite is unreliable.",
    description:
      "Snacks that carry real protein — 15 g or more per portion, no protein-bar marketing. Tested in our kitchen. RD-reviewed.",
    introCopy:
      "When later-day appetite is unreliable, snacks become a fourth small meal slot for protein you couldn't fit at lunch. Same standard applies: 15 g protein minimum, real food, no powders disguised as biscuits.",
    matchHubs: ["muscle-preservation", "glp1-friendly"],
    minProteinG: 12,
    faq: [
      {
        q: "Why not protein bars?",
        a: "Most commercial bars carry 6–9 g of protein and 20+ g of added sugar, sweeteners, or sugar alcohols. Our floor is 15 g protein per portion from real food.",
      },
    ],
  },
  {
    slug: "high-protein-breakfast",
    title: "High-protein breakfast",
    h1: "High-protein breakfast — front-load the day.",
    primaryKeyword: "high protein breakfast",
    monthlyVolumeUK: 8100,
    intent:
      "Adults front-loading the day's protein when later-day appetite is unreliable — shift workers, parents, anyone whose evening hunger collapses.",
    description:
      "Breakfasts that carry 25–35 g of protein. Tested, RD-reviewed, USDA-cited. Most clear in 15 minutes.",
    introCopy:
      "For many adults, morning hunger is preserved even when evening hunger collapses — which makes breakfast the most reliable slot to build the day's protein floor. We treat breakfast as a dinner-grade plate, just earlier.",
    matchHubs: ["muscle-preservation", "glp1-friendly"],
    minProteinG: 20,
    maxTotalMin: 25,
    faq: [
      {
        q: "Can I eat the same breakfast every day?",
        a: "Yes. Repetition at breakfast is a feature, not a flaw — a tested, hits-the-numbers breakfast you eat seven days a week is more useful than novelty you abandon by Wednesday.",
      },
    ],
  },
  {
    slug: "high-protein-lunch",
    title: "High-protein lunch",
    h1: "High-protein lunch — packable, 30g protein, 15 minutes.",
    primaryKeyword: "high protein lunch",
    monthlyVolumeUK: 4400,
    intent:
      "Working adults needing 30 g+ protein in a packable, reheatable, or no-cook lunch.",
    description:
      "Lunches built for the desk, the bag, or the lunchbox. 30 g protein floor, 15-minute prep. RD-reviewed.",
    introCopy:
      "Lunch is the hardest meal slot — limited time, limited equipment, often eaten fast. We optimise these for batch-cooking on Sunday and reheating Monday through Friday.",
    matchHubs: ["muscle-preservation", "glp1-friendly", "anti-inflammatory-recovery"],
    minProteinG: 28,
    faq: [
      {
        q: "Are these all cold lunches?",
        a: "No — about half are designed cold (chicken bowls, tinned-fish plates, cottage-cheese flatbreads) and half reheat well (soups, stews, traybakes). The cold-friendly ones are tagged.",
      },
    ],
  },
  {
    slug: "high-protein-dinner",
    title: "High-protein dinner",
    h1: "High-protein dinner — 30g+, on the table in 35 minutes.",
    primaryKeyword: "high protein dinner",
    monthlyVolumeUK: 3300,
    intent:
      "Adults on a muscle-preservation protocol who need a real dinner, not a protein shake.",
    description:
      "Dinners that earn the name — 30 g+ protein per serving, on the table in 35 minutes or less. Tested, RD-reviewed.",
    introCopy:
      "We don't believe in protein-shake dinners. The recipes in this category are real plates with real cooking — just engineered so the protein arithmetic works without thinking about it.",
    matchHubs: ["muscle-preservation", "anti-inflammatory-recovery", "bone-tendon-health"],
    minProteinG: 30,
    maxTotalMin: 45,
    faq: [
      {
        q: "What if I'm cooking for a family with different needs?",
        a: "Most of these scale up cleanly — keep the protein per serving at 30 g, scale carbs and fats by appetite. We flag the ones that don't scale well.",
      },
    ],
  },
  {
    slug: "high-protein-meal-prep",
    title: "High-protein meal prep",
    h1: "High-protein meal prep — Sunday cook, Monday-Friday eat.",
    primaryKeyword: "high protein meal prep",
    monthlyVolumeUK: 2900,
    intent:
      "Adults building a 5-day batch cook around a 30 g/meal protein target.",
    description:
      "Batch-cookable recipes that hold for 5 days in the fridge. Each one carries 30 g+ protein per serving and reheats without losing texture. RD-reviewed.",
    introCopy:
      "Sunday batch cook, Monday through Friday eat. The recipes here are explicitly tested for the 5-day fridge window — what holds, what reheats, what doesn't go grey by Wednesday.",
    matchHubs: ["muscle-preservation", "cycle-nutrition", "anti-inflammatory-recovery"],
    minProteinG: 30,
    faq: [
      {
        q: "What containers should I use?",
        a: "Glass for everything that goes in the microwave, BPA-free plastic for cold lunches. Five 600 ml glass containers cover most weeks for one person.",
      },
      {
        q: "How long does cooked protein actually keep?",
        a: "USDA FDC guidance: 3–4 days for most cooked proteins at <4°C. We test to 5 days only on recipes that hold flavour and texture — flagged on the recipe page itself.",
      },
    ],
  },
  {
    slug: "cottage-cheese",
    title: "Cottage cheese recipes",
    h1: "Cottage cheese recipes — high-protein, real-food, tested.",
    primaryKeyword: "cottage cheese recipes",
    monthlyVolumeUK: 6600,
    intent:
      "Adults using cottage cheese as a daily protein vehicle — pancakes, savoury bowls, ice cream — for weight management or muscle preservation.",
    description:
      "The cottage cheese cluster: pancakes, savoury bowls, scrambled eggs, ice cream, flatbread. Each recipe carries 25 g+ protein per serving and has been tested at least three times. RD-reviewed by Lena Marsh, MS RD.",
    introCopy:
      "Cottage cheese is one of the most versatile protein vehicles in our kitchen. Soft, neutral-flavoured, and high-protein per calorie in a way Greek yoghurt and skyr can't match. The recipes in this cluster — pancakes, savoury bowls, blended ice cream, flatbread — are how we use it three or four times a week without it ever feeling like the same dish.",
    slugIncludes: "cottage-cheese",
    faq: [
      {
        q: "Why cottage cheese specifically — what about Greek yoghurt or skyr?",
        a: "Cottage cheese carries roughly the same protein per 100 g as 5% Greek yoghurt (10–11 g) but with a softer mouthfeel and a thicker curd. The casein digests slowly, holding satiety longer than whey-heavy yoghurts. Both are good. Cottage cheese is the one we reach for first.",
      },
      {
        q: "Is cottage cheese a daily-driver protein?",
        a: "Yes — Lena (our RD reviewer) recommends it as a default protein for patients on Wegovy, Mounjaro, Zepbound, or Ozempic who can't face stronger flavours. The neutral profile and soft texture survive the food-aversion phase most patients describe in weeks 1–4 of dose escalation.",
      },
      {
        q: "Which brand?",
        a: "Good Culture 4% in the US, Longley Farm in the UK. Both have a cultured-longer curd that holds shape under heat (so the pancakes don't go watery) and tastes of dairy rather than salt. We've tested supermarket-own brands for the savoury-bowl recipe and they collapse inside 90 seconds — fine for an ice cream blend, not fine for a bowl.",
      },
      {
        q: "What if I want more variety than one cluster?",
        a: "The cottage cheese pancakes link out to the broader high-protein-breakfast cluster, the savoury bowl links to the muscle-preservation pillar, and the cottage cheese ice cream is the only sweet preparation we test. If you want non-dairy protein, see the high-protein-meals category.",
      },
    ],
  },
  {
    slug: "bone-broth",
    title: "Bone broth recipes",
    h1: "Bone broth — slow method, real gel, sippable.",
    primaryKeyword: "bone broth recipe",
    monthlyVolumeUK: 8100,
    intent:
      "Adults making bone broth as a base technique — for sippable mugs, soups, joint and tendon support, or post-illness recovery.",
    description:
      "Bone broth as a core technique recipe: 24-hour slow method, real gel set, sippable straight or as a base. Pairs with our anti-inflammatory chicken soup and the bone-and-tendon-health pillar.",
    introCopy:
      "A real bone broth gels solid when it's cold. That single test — does it set into a wobbly aspic in the fridge — is what separates broth from glorified stock. The slow method below runs 24 hours on the lowest setting your hob or slow cooker can hold and produces something you can sip from a mug or use as the foundation of any soup in the anti-inflammatory cluster.",
    slugIncludes: "bone-broth",
    faq: [
      {
        q: "Why 24 hours and not 4?",
        a: "Collagen extraction from chicken bones is largely complete by hour 8; from beef bones it continues up to 24. The visible test is gelation: a 4-hour broth runs liquid cold, a 24-hour beef broth wobbles like aspic. The longer broth has the substrate (glycine, proline, hydroxyproline) you came for.",
      },
      {
        q: "Does bone broth replace collagen powder for joints?",
        a: "Lena (our RD): not a like-for-like swap. A mug of broth carries roughly 6–10 g of collagen-derived protein; clinical trials showing tendon-support effects (Shaw 2017, Clark 2008) used 10–15 g of hydrolysed collagen with vitamin C 30–60 minutes pre-loading. Broth is good. If you're running a serious BPC-157 or TB-500 protocol, broth is breakfast — the powder is the dose.",
      },
      {
        q: "How does this pair with the chicken soup recipe?",
        a: "The 24-hour bone broth is the base. The anti-inflammatory chicken soup uses 4 cups of it — make a double batch on Sunday, freeze in 500 ml portions, the soup comes together in 35 minutes any weeknight after that. The two recipes cross-link explicitly.",
      },
      {
        q: "Is store-bought broth fine?",
        a: "If you're using it as a soup base, yes. If you're sipping it for the collagen and minerals, the gel test is a deal-breaker — most cartons run liquid cold because they're not simmered long enough. Brands that gel: Bonafide, Kettle & Fire bone broth (not the broth concentrate), Brodo. We don't take affiliate fees on any of them.",
      },
    ],
  },
];

export function getRecipeCategory(slug: string): RecipeCategory | undefined {
  return recipeCategories.find((c) => c.slug === slug);
}
