/**
 * Meal-plan landing pages — three structured weekly meal plans, RD-reviewed.
 * Per `docs/topical-maps/thatcleanchef.md` Hub 5 (Seasonal & Weekly Menus,
 * entries 148-150):
 *
 *   1. 14-Day Anti-Inflammatory Meal Plan
 *   2. 7-Day Mediterranean Meal Plan
 *   3. 7-Day High-Protein Meal Plan
 *
 * Each is a gated PDF lead magnet that also indexes for the meal-plan SERP.
 * Schema target: ItemList (the days), Article (the framing). Recipe-site
 * framing — recipe-site meal plans, RD-reviewed.
 */

export type MealPlanDay = {
  day: number;
  label: string; // "Day 1 — Monday"
  breakfast: string;
  lunch: string;
  dinner: string;
  snack?: string;
  totals: { calories: number; proteinG: number; fiberG: number };
  /** Slug of an existing on-site recipe used in this day, if any. */
  recipeSlug?: string;
};

export type MealPlan = {
  slug: string;
  /** 16:9 hero image path under /public. */
  imageUrl?: string;
  title: string;
  h1: string;
  description: string;
  // SERP intent target
  primaryKeyword: string;
  monthlyVolumeUK: number;
  // Editorial framing
  audience: string;
  durationLabel: string;
  /** Days previewed on the public page; full plan is in the PDF. */
  previewDays: MealPlanDay[];
  /** Static-marketing daily target, used for the "what to expect" panel. */
  dailyTargets: {
    calories: string;
    proteinG: string;
    fiberG: string;
    sodiumMg: string;
  };
  faq: { q: string; a: string }[];
  pdfUrl: string | null;
  publishedAt: string;
  reviewedOn: string;
  reviewer: string;
};

export const mealPlans: MealPlan[] = [
  {
    slug: "14-day-anti-inflammatory",
    imageUrl: "/images/meal-plans/14-day-anti-inflammatory.jpg",
    title: "14-Day Anti-Inflammatory Meal Plan",
    h1: "A 14-day anti-inflammatory meal plan, RD-reviewed.",
    description:
      "Two weeks of anti-inflammatory eating built around turmeric, omega-3 fish, dark leafy greens, and bone-broth-based dishes. Grocery list by section, macros totalled per day, Sunday prep sequence. Free PDF.",
    primaryKeyword: "anti inflammatory meal plan",
    monthlyVolumeUK: 390,
    audience:
      "Adults managing chronic low-grade inflammation alongside training, recovering from illness, or building a long-term anti-inflammatory eating pattern.",
    durationLabel: "14 days · 3 meals + 1 snack",
    dailyTargets: {
      calories: "1,800–2,000 kcal",
      proteinG: "120–140 g",
      fiberG: "30–35 g",
      sodiumMg: "<2,000 mg",
    },
    previewDays: [
      {
        day: 1,
        label: "Day 1 — Monday",
        breakfast: "Greek yoghurt, blueberries, walnuts, ground flaxseed",
        lunch:
          "Anti-inflammatory golden chicken soup with bone broth and turmeric",
        dinner: "Ginger-turmeric salmon with steamed broccoli and quinoa",
        snack: "Apple with almond butter",
        totals: { calories: 1880, proteinG: 128, fiberG: 32 },
        recipeSlug: "anti-inflammatory-golden-chicken-soup",
      },
      {
        day: 2,
        label: "Day 2 — Tuesday",
        breakfast: "Overnight oats with chia, raspberries, walnut crumble",
        lunch:
          "Roast salmon flake bowl with brown rice, avocado, sesame greens",
        dinner: "Slow-cooked lamb shoulder with roast carrots and rosemary",
        totals: { calories: 1920, proteinG: 132, fiberG: 30 },
        recipeSlug: "ginger-turmeric-salmon",
      },
      {
        day: 3,
        label: "Day 3 — Wednesday",
        breakfast: "Soft-boiled eggs, smoked salmon, sourdough toast soldier",
        lunch: "Chickpea-and-spinach stew with lemon and harissa",
        dinner: "Greek lemon chicken with herbed quinoa and tomato salad",
        snack: "Bone broth mug, lemon and parsley",
        totals: { calories: 1940, proteinG: 138, fiberG: 33 },
        recipeSlug: "greek-lemon-chicken",
      },
    ],
    faq: [
      {
        q: "Is this plan medically prescribed?",
        a: "No. It's a structured eating pattern reviewed by a registered dietitian, built around foods with the strongest anti-inflammatory evidence base (omega-3 fish, turmeric with black pepper, dark leafy greens, bone broth, fermented dairy). It is not a substitute for medical care.",
      },
      {
        q: "Does the plan work for vegetarians?",
        a: "Mostly. The salmon and chicken days carry the omega-3 load; the vegetarian swap notes in the PDF replace fish with walnuts, hemp, and ground flaxseed and replace chicken with lentils or tempeh. Protein totals stay within range; the omega-3 EPA/DHA does drop on the vegetarian variant — that's biology, not a recipe failure.",
      },
      {
        q: "What's the grocery list?",
        a: "The PDF carries the full 14-day grocery list by supermarket section, with UK and US weights. The Sunday prep sequence batches 4 components in 90 minutes.",
      },
    ],
    pdfUrl: null,
    publishedAt: "2026-04-22",
    reviewedOn: "2026-04-22",
    reviewer: "Lena Marsh, RDN, MS",
  },
  {
    slug: "7-day-mediterranean",
    imageUrl: "/images/meal-plans/7-day-mediterranean.jpg",
    title: "7-Day Mediterranean Meal Plan",
    h1: "A 7-day Mediterranean meal plan, the cook's version.",
    description:
      "A practical week of Mediterranean cooking — olive oil, fish, legumes, vegetables, grains. RD-reviewed, USDA-cited, batch-cookable on Sunday. Free PDF.",
    primaryKeyword: "mediterranean diet meal plan",
    monthlyVolumeUK: 1300,
    audience:
      "Anyone building a long-term Mediterranean eating pattern — the most consistently evidence-supported diet for cardiovascular and metabolic health (PREDIMED, Estruch 2018).",
    durationLabel: "7 days · 3 meals + 1 snack",
    dailyTargets: {
      calories: "1,800–2,100 kcal",
      proteinG: "100–120 g",
      fiberG: "30–35 g",
      sodiumMg: "<2,000 mg",
    },
    previewDays: [
      {
        day: 1,
        label: "Day 1 — Monday",
        breakfast: "Greek yoghurt with honey, walnuts, fresh figs",
        lunch: "Mediterranean grain bowl: farro, white beans, tomato, feta, olive oil",
        dinner: "Sheet-pan Greek cod with lemon potatoes and oregano",
        snack: "Hummus, cucumber, and toasted pita",
        totals: { calories: 1980, proteinG: 108, fiberG: 32 },
        recipeSlug: "mediterranean-meal-prep-week-1",
      },
      {
        day: 2,
        label: "Day 2 — Tuesday",
        breakfast: "Soft-boiled eggs, olive oil, sourdough, tomato salad",
        lunch: "White bean and kale soup with parmesan rind",
        dinner: "Greek lemon chicken with herbed quinoa and tomato salad",
        totals: { calories: 1860, proteinG: 116, fiberG: 30 },
        recipeSlug: "greek-lemon-chicken",
      },
      {
        day: 3,
        label: "Day 3 — Wednesday",
        breakfast: "Mediterranean breakfast plate (olives, feta, cucumber, hard-boiled egg, sourdough)",
        lunch: "Tuna and white-bean salad, lemon and red onion",
        dinner: "Za'atar roasted chicken with bulgur pilaf and yoghurt sauce",
        snack: "Apple, almonds, a wedge of pecorino",
        totals: { calories: 2020, proteinG: 122, fiberG: 31 },
      },
    ],
    faq: [
      {
        q: "Why the Mediterranean diet specifically?",
        a: "It's the most consistently evidence-supported eating pattern in the cardiometabolic literature — PREDIMED (Estruch 2013, re-analysed 2018) and a long line of cohort studies show meaningful reductions in cardiovascular events. It's also the easiest to cook deliciously, which matters for adherence over years.",
      },
      {
        q: "Do I need to use Greek olive oil specifically?",
        a: "No. A good extra-virgin olive oil from Greece, Italy, Spain, or Portugal is functionally equivalent. The single biggest mistake is buying cheap supermarket EVOO that's been blended or oxidised; spend a bit more, store it dark and cool, finish a bottle within 6 months of opening.",
      },
      {
        q: "Is this low-carb?",
        a: "Moderate-carb. The Mediterranean pattern includes whole grains (farro, bulgur, sourdough), legumes (white beans, chickpeas, lentils), and starchy vegetables. If you're managing carbs tightly, swap to the High-Protein 7-day plan — same chef voice, different macro profile.",
      },
    ],
    pdfUrl: null,
    publishedAt: "2026-04-22",
    reviewedOn: "2026-04-22",
    reviewer: "Lena Marsh, RDN, MS",
  },
  {
    slug: "7-day-high-protein",
    imageUrl: "/images/meal-plans/7-day-high-protein.jpg",
    title: "7-Day High-Protein Meal Plan",
    h1: "A 7-day high-protein meal plan, real-food only.",
    description:
      "A week of recipes hitting 30g+ protein per meal, no powders, no bars. Cottage cheese, eggs, salmon, chicken, lentils. RD-reviewed, batch-cookable, Sunday-prep sequence in the PDF.",
    primaryKeyword: "high protein meal plan",
    monthlyVolumeUK: 2900,
    audience:
      "Adults building a 1.2–1.6 g/kg/day protein floor for muscle preservation in caloric deficit, post-resistance-training recovery, or general body-composition goals.",
    durationLabel: "7 days · 3 meals + 1 snack",
    dailyTargets: {
      calories: "1,700–2,000 kcal",
      proteinG: "140–160 g",
      fiberG: "28–32 g",
      sodiumMg: "<2,000 mg",
    },
    previewDays: [
      {
        day: 1,
        label: "Day 1 — Monday",
        breakfast: "High-protein breakfast bowl (eggs, quinoa, salsa, avocado)",
        lunch: "Cottage cheese flatbread with smoked salmon and cucumber",
        dinner: "Greek lemon chicken with herbed quinoa and tomato salad",
        snack: "Greek yoghurt with hemp seeds",
        totals: { calories: 1880, proteinG: 152, fiberG: 28 },
        recipeSlug: "high-protein-breakfast-bowl",
      },
      {
        day: 2,
        label: "Day 2 — Tuesday",
        breakfast: "Cottage cheese pancakes with blueberry compote",
        lunch: "Chicken-and-quinoa power bowl with tahini-yoghurt drizzle",
        dinner: "Salmon quinoa power bowl, charred broccoli",
        totals: { calories: 1920, proteinG: 156, fiberG: 30 },
        recipeSlug: "cottage-cheese-pancakes",
      },
      {
        day: 3,
        label: "Day 3 — Wednesday",
        breakfast: "Greek yoghurt protein bowl, frozen cherries, walnuts, lemon zest",
        lunch: "Spinach-and-feta egg bites (3) with side salad",
        dinner: "Sheet-pan chicken thighs with white beans and lemon",
        snack: "Cottage cheese with za'atar and cucumber",
        totals: { calories: 1850, proteinG: 158, fiberG: 26 },
        recipeSlug: "greek-yogurt-protein-bowl",
      },
    ],
    faq: [
      {
        q: "Do I need protein powder for this plan?",
        a: "No. The plan is real-food only. Cottage cheese, Greek yoghurt, eggs, salmon, chicken, and lentils carry the protein. Powders work — they're just unnecessary for a recipe-driven plan and they always lose on texture and food enjoyment.",
      },
      {
        q: "Why 1.2–1.6 g/kg/day?",
        a: "Independent guidance for adults seeking to preserve lean mass during weight loss or training adaptation (Phillips 2017, Morton 2018 meta-analysis) puts the daily target in this range. For a 75 kg adult, that's 90–120 g per day, spread across meals.",
      },
      {
        q: "Will this work for vegetarians?",
        a: "Yes, with substitutions in the PDF. Cottage cheese, Greek yoghurt, eggs, hemp seeds, lentils, tofu, and tempeh all carry the load. Protein digestibility is slightly lower from plant sources, so the vegetarian variant aims for 1.4–1.8 g/kg/day to land at the same usable protein.",
      },
    ],
    pdfUrl: null,
    publishedAt: "2026-04-22",
    reviewedOn: "2026-04-22",
    reviewer: "Lena Marsh, RDN, MS",
  },
];

export function getMealPlan(slug: string): MealPlan | undefined {
  return mealPlans.find((p) => p.slug === slug);
}
