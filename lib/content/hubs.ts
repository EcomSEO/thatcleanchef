export type Hub = {
  slug: string;
  name: string;
  shortName: string;
  oneLiner: string;
  thesis: string;
};

export const hubs: Hub[] = [
  {
    slug: "diet-specific",
    name: "Diet-Specific Recipes",
    shortName: "Diets",
    oneLiner: "Anti-Inflammatory, Whole30, Mediterranean, PCOS, Low-FODMAP — chef-tested recipes that fit the frame.",
    thesis: "Diet-inclusive, not diet-mandated. Recipes tagged by diet compatibility. No scolding, just good food that happens to fit a pattern.",
  },
  {
    slug: "meal-types",
    name: "Meal Types",
    shortName: "Meal Types",
    oneLiner: "Breakfast, lunch, dinner, snacks, desserts, drinks — cross-tagged by diet.",
    thesis: "Meal-type organization for readers who shop by meal. Cross-cuts with diets to maximize discoverability.",
  },
  {
    slug: "protein-forward",
    name: "Protein-Forward",
    shortName: "High-Protein",
    oneLiner: "High-protein breakfasts, dinners, snacks, smoothies — with the cottage cheese collection.",
    thesis: "The highest-volume search hub. Cottage cheese recipes trending +240% YoY; protein-forward formulas that hit 30g+ per meal.",
  },
  {
    slug: "technique",
    name: "Technique & Technique-Recipes",
    shortName: "Technique",
    oneLiner: "How to roast a whole chicken, cook salmon 4 ways, make bone broth, meal prep.",
    thesis: "Chef-technique posts with the recipe as the application. The editorial differentiator vs AllRecipes-tier content.",
  },
  {
    slug: "seasonal",
    name: "Seasonal & Weekly Menus",
    shortName: "Seasonal",
    oneLiner: "Fall clean dinners, winter comfort, summer grill, plus 7-day meal plans.",
    thesis: "Seasonal pillars + weekly meal plans. Primary lead magnet content — the Clean Chef Starter Kit 14-day anti-inflammatory plan.",
  },
];

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}
