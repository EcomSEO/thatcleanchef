/**
 * Meal-plan landing pages — gated PDF lead magnets, each one a distinct
 * SEO target with its own keyword cluster. These pages are designed to:
 *
 *   1. Capture a high-intent download with a single email
 *   2. Index for the high-volume meal-plan search terms (April 2026 DataForSEO)
 *   3. Internal-link into the recipe set so the visitor lands somewhere
 *      after the download confirmation
 *
 * Schema target: ItemList (the days), Article (the framing), MedicalWebPage
 * (RD-reviewed). Keep `pdfUrl` `null` until artwork lands; the page still
 * indexes and the email-capture still fires.
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
    title: "14-Day Anti-Inflammatory Meal Plan",
    h1: "A 14-day anti-inflammatory meal plan, RD-reviewed.",
    description:
      "Two weeks of anti-inflammatory eating built around turmeric, omega-3 fish, dark leafy greens, and bone-broth-based dishes. Grocery list by section, macros totalled per day, Sunday prep sequence. Free PDF.",
    primaryKeyword: "anti inflammatory meal plan",
    monthlyVolumeUK: 390,
    audience:
      "Adults running a peptide recovery protocol (BPC-157, TB-500), or anyone managing chronic low-grade inflammation alongside training.",
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
        q: "Can I follow this on Mounjaro / Ozempic / Wegovy?",
        a: "Most days clear 30 g protein per meal, which is the floor for muscle preservation on GLP-1 therapy. If your appetite is severely reduced, halve the lunch and dinner portions and add a third smaller meal — the protein density per bite is what matters.",
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
    slug: "glp1-7-day",
    title: "7-Day GLP-1 Meal Plan",
    h1: "A 7-day GLP-1 meal plan, built for small appetites and big protein needs.",
    description:
      "A practical week of meals for patients on Mounjaro, Ozempic, Wegovy, or Zepbound. Small dense plates, 30g+ protein per serving, hydration built into the food. RD-reviewed. Free PDF.",
    primaryKeyword: "glp 1 meal plan",
    monthlyVolumeUK: 110,
    audience:
      "Patients on GLP-1 or GIP/GLP-1 therapy navigating reduced appetite, smell sensitivity, and the muscle-preservation protein floor.",
    durationLabel: "7 days · 3 small meals + 1 snack",
    dailyTargets: {
      calories: "1,400–1,600 kcal",
      proteinG: "100–120 g",
      fiberG: "25–30 g",
      sodiumMg: "<1,800 mg",
    },
    previewDays: [
      {
        day: 1,
        label: "Day 1 — Monday",
        breakfast: "High-protein breakfast bowl: cottage cheese, berries, seeds",
        lunch: "Cottage cheese flatbread with smoked salmon and cucumber",
        dinner: "Soft-baked ginger-turmeric salmon, courgette ribbons",
        snack: "Bone broth mug",
        totals: { calories: 1480, proteinG: 118, fiberG: 26 },
        recipeSlug: "high-protein-breakfast-bowl",
      },
      {
        day: 2,
        label: "Day 2 — Tuesday",
        breakfast: "Greek yoghurt, kefir, ground flaxseed, raspberries",
        lunch: "Cold poached chicken with avocado, cucumber, lemon",
        dinner: "Soft-set egg custard with smoked haddock, peas",
        totals: { calories: 1440, proteinG: 112, fiberG: 24 },
      },
      {
        day: 3,
        label: "Day 3 — Wednesday",
        breakfast: "Cottage-cheese pancakes with blueberries (small stack)",
        lunch: "Chicken-and-bone-broth consommé with shredded thigh",
        dinner: "Greek lemon chicken (half portion) with herbed quinoa",
        snack: "Cucumber sticks with tzatziki",
        totals: { calories: 1380, proteinG: 110, fiberG: 22 },
        recipeSlug: "greek-lemon-chicken",
      },
    ],
    faq: [
      {
        q: "What if I can't finish a meal?",
        a: "Eat the protein first. The plates are designed so the densest protein is in the first three or four bites — if your appetite collapses mid-meal, you've still hit the muscle-preservation target. Cling-film the rest for a 90-minute snack.",
      },
      {
        q: "Will I be hungry on this plan?",
        a: "Most patients on GLP-1 therapy report the opposite — needing to remind themselves to eat. The plan is built around that reality. If you do feel hungry, the snack slot has flexibility.",
      },
      {
        q: "Does this work for both Mounjaro and Ozempic?",
        a: "Yes. The two drugs have different appetite-suppression intensities but the kitchen brief — small, dense, soft, mild-aroma, high-protein — overlaps. The medication hub pages flag the small differences.",
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
