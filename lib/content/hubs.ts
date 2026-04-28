/**
 * The 5 ThatCleanChef hubs — recipe-site framing per `docs/topical-maps/
 * thatcleanchef.md`. This is Option A in the network strategic decision:
 * recipe site for Kate (busy professional), Mediavine display-ad thesis,
* NOT a peptide-therapy nutrition site (the brief peptide pivot was reverted under Option A).
 *
 * Hub slugs are deliberately stable URL keys — DO NOT rename without a 301
 * map. The legacy peptide hub slugs from the brief pivot (glp1-friendly, muscle-preservation,
 * anti-inflammatory-recovery, bone-tendon-health, cycle-nutrition) are
 * 301'd to the closest surviving recipe-site hub in `next.config.mjs`.
 */

export type Hub = {
  slug: string;
  name: string;
  shortName: string;
  oneLiner: string;
  thesis: string;
  /** 16:9 hero image path under /public. */
  imageUrl?: string;
};

export const hubs: Hub[] = [
  {
    slug: "diet-specific",
    imageUrl: "/images/hubs/diet-specific.jpg",
    name: "Diet-Specific Recipes",
    shortName: "Diet-Specific",
    oneLiner:
      "Anti-inflammatory, Whole30, Mediterranean, PCOS, low-FODMAP — chef-tested recipes that respect the diet without scolding the cook.",
    thesis:
      "Most diet-specific recipes online are either rigid plan-of-the-month content or watered-down imitations of the cuisine they claim to honor. We test the recipe against the diet's actual rules and against good cooking, in that order. The result is a recipe that holds up at the table whether or not the cook is following the diet that week.",
  },
  {
    slug: "meal-types",
    imageUrl: "/images/hubs/meal-types.jpg",
    name: "Meal Types",
    shortName: "Meal Types",
    oneLiner:
      "Breakfast, lunch, dinner, snack, dessert, drinks. The five-shelf weeknight library — all chef-tested, all timed honestly.",
    thesis:
      "What people actually search for is dinner. Then breakfast. Then a snack that isn't a protein bar. We organize by meal type because that's how the cooking week actually plays — the recipes inside cross diet and cuisine lines, but the slot they fill is fixed.",
  },
  {
    slug: "protein-forward",
    imageUrl: "/images/hubs/protein-forward.jpg",
    name: "Protein-Forward Recipes",
    shortName: "High-Protein",
    oneLiner:
      "30g+ protein per serving, real food only. Cottage cheese, eggs, salmon, chicken — the protein is the hero, not a powder.",
    thesis:
      "Protein-targeted recipes online are dominated by powders, bars, and supplement marketing. The protein-forward hub here is real-food only: cottage cheese, Greek yogurt, eggs, salmon, chicken, lentils. The arithmetic still hits the target — just with ingredients you'd cook anyway.",
  },
  {
    slug: "technique",
    imageUrl: "/images/hubs/technique.jpg",
    name: "Technique & Reference",
    shortName: "Technique",
    oneLiner:
      "How to roast a chicken, how to make bone broth, how to cook salmon four ways. The reference layer underneath the recipes.",
    thesis:
      "Recipes age out, technique doesn't. The technique hub is the layer of knowing-how-to-cook the rest of the site rests on — roasting a whole bird, building a sheet-pan dinner, cooking salmon to four different finishes, breaking down a Dutch-oven braise. We write these once, properly, and link to them from every recipe that uses the move.",
  },
  {
    slug: "seasonal-menus",
    imageUrl: "/images/hubs/seasonal-menus.jpg",
    name: "Seasonal Menus & Meal Plans",
    shortName: "Seasonal & Plans",
    oneLiner:
      "Quarterly clean-dinner menus and structured weekly meal plans (Anti-Inflammatory, Mediterranean, High-Protein) — RD-reviewed.",
    thesis:
      "A weekly meal plan is the single most-asked-for thing in the recipe-site search graph. We publish three plans seriously — Anti-Inflammatory 7-day, Mediterranean 7-day, High-Protein 7-day — and four seasonal menus that curate cross-hub recipes by what's at the market.",
  },
];

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}
