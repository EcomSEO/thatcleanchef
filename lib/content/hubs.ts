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
    slug: "glp1-friendly",
    imageUrl: "/images/hubs/glp1-friendly.jpg",
    name: "GLP-1 Friendly Recipes",
    shortName: "GLP-1 Friendly",
    oneLiner:
      "Small portions, nutrient-dense, easier digestion — for reduced appetite on semaglutide, tirzepatide, or liraglutide.",
    thesis:
      "GLP-1 medications shrink appetite. The food has to do more in less volume. Every recipe in this hub is built for nutrient density per smaller portion, gentle on a slow-emptying stomach, and easy to finish on a low-appetite day.",
  },
  {
    slug: "muscle-preservation",
    imageUrl: "/images/hubs/muscle-preservation.jpg",
    name: "High-Protein for Muscle Preservation",
    shortName: "Muscle Preservation",
    oneLiner:
      "30g+ protein per serving. Designed to prevent lean-mass loss during GLP-1 therapy and caloric deficit.",
    thesis:
      "The single biggest nutritional risk on GLP-1 therapy is losing muscle alongside fat. Hitting a 1.2-1.6g/kg/day protein target on reduced calories is non-negotiable. These recipes do the math for you — 30 grams or more per serving, and the protein is the hero.",
  },
  {
    slug: "anti-inflammatory-recovery",
    imageUrl: "/images/hubs/anti-inflammatory-recovery.jpg",
    name: "Anti-Inflammatory Recovery",
    shortName: "Anti-Inflammatory",
    oneLiner:
      "Anti-inflammatory ingredients that support BPC-157, TB-500 protocols and joint/tendon recovery work.",
    thesis:
      "Peptide-cycle users running BPC-157, TB-500, or similar recovery protocols benefit from a low-inflammation food backdrop — turmeric, ginger, omega-3 fats, dark leafy greens. These recipes are built around those ingredients without turning into supplement marketing.",
  },
  {
    slug: "bone-tendon-health",
    imageUrl: "/images/hubs/bone-tendon-health.jpg",
    name: "Bone & Tendon Health",
    shortName: "Bone & Tendon",
    oneLiner:
      "Collagen-supporting recipes — bone broth, gelatin, vitamin C — that pair with peptide therapy for connective tissue.",
    thesis:
      "Connective tissue rebuilds slowly and needs the substrate to do it. Bone broth, slow-cooked collagen sources, and vitamin-C-rich pairings give the body the raw material that peptide protocols try to put to work.",
  },
  {
    slug: "cycle-nutrition",
    imageUrl: "/images/hubs/cycle-nutrition.jpg",
    name: "Pre/Post-Cycle Nutrition",
    shortName: "Cycle Nutrition",
    oneLiner:
      "Meal patterns built around the structure of a peptide cycle — pre-cycle priming, post-cycle recovery windows.",
    thesis:
      "A peptide cycle has a shape. Nutrition can match it: pre-cycle, you front-load protein and micronutrients; post-cycle, you eat to support what the cycle was working on. These recipes are organized around those windows rather than a generic weekly plan.",
  },
];

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}
