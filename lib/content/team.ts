/**
 * Editorial team — recipe developers, photographers, and the credentialed
 * dietitian / nutritionist who reviews every recipe before it goes live.
 *
 * Every team member listed here gets a `/team/{slug}` profile page. The
 * profile page is what `reviewedBy` on the Article schema and the recipe-card
 * "Reviewed by" stamp link to. This is the E-E-A-T anchor for the site.
 */

export type TeamRole = "RD reviewer" | "Recipe developer" | "Photography" | "Editorial";

export type TeamMember = {
  slug: string;
  /** 1:1 portrait image path under /public. */
  imageUrl?: string;
  name: string;
  credentials: string; // "RDN, MS"
  jobTitle: string;
  role: TeamRole;
  /** One-line summary used in masthead-style citations. */
  oneLiner: string;
  /** Short bio paragraph — 100-180 words. */
  bio: string;
  /** Where the credentials are registered (the actual board / regulator). */
  credentialingBody?: string;
  credentialingUrl?: string;
  /** What this person reviews on the site. */
  scope: string;
  /** Number of years of practice (helps the schema and the bio). */
  yearsExperience?: number;
  /** Optional photo placeholder colour band — sage/terracotta/olive/stone. */
  accent?: "sage" | "terracotta" | "olive" | "stone";
  /** Specific topical expertise, used for "best fit reviewer" attribution. */
  expertise?: string[];
};

export const team: TeamMember[] = [
  {
    slug: "lena-marsh",
    imageUrl: "/images/team/lena-marsh.jpg",
    name: "Lena Marsh",
    credentials: "RDN, MS",
    jobTitle: "Reviewing Dietitian, ThatCleanChef",
    role: "RD reviewer",
    oneLiner:
      "Registered dietitian with a clinical specialism in everyday nutrition — diet patterns, protein targets, micronutrient adequacy in real cooking.",
    bio: "Lena Marsh is a Registered Dietitian Nutritionist (RDN) with a Master's in Clinical Nutrition from King's College London. She has spent the last seven years in NHS clinical practice and private nutrition consulting, and her interest sits squarely at the intersection of evidence-based eating patterns and the practical food question patients actually ask: 'so what do I cook tomorrow?' She reads every recipe on this site against the British Dietetic Association evidence base, the USDA FoodData Central reference, and her own clinical judgement on protein density and micronutrient balance. She is the human accountable for every nutrition number on ThatCleanChef.",
    credentialingBody: "Health and Care Professions Council (HCPC), United Kingdom",
    credentialingUrl: "https://www.hcpc-uk.org/",
    scope:
      "Every recipe, every medication hub, every meal-plan landing page, every nutrition claim.",
    yearsExperience: 7,
    accent: "sage",
    expertise: [
      "Mediterranean and anti-inflammatory eating patterns",
      "Protein targets for active adults",
      "Micronutrient adequacy in real cooking",
      "Low-FODMAP and PCOS-friendly recipe review",
    ],
  },
  {
    slug: "rosa-pellegrino",
    imageUrl: "/images/team/rosa-pellegrino.jpg",
    name: "Rosa Pellegrino",
    credentials: "Lead recipe developer",
    jobTitle: "Lead Recipe Developer",
    role: "Recipe developer",
    oneLiner:
      "Trained chef who tests every recipe at least three times on home equipment before it ships.",
    bio: "Rosa Pellegrino trained at Leiths School of Food and Wine and spent four years as a chef de partie before moving into recipe development full-time. She is responsible for the recipe pipeline on ThatCleanChef — what gets tested, in what order, against which constraints. Her testing methodology is the reason every recipe carries an honest prep time: she counts the dishes, the resting time, and the things you have to do twice if you don't read ahead. If a recipe doesn't work three times in a row on a home induction hob, in a domestic oven, with supermarket-available ingredients, it doesn't go on the site. Her published versions are usually her sixth or seventh draft.",
    scope: "Recipe development, testing methodology, the 'why we tested this 3 times' module.",
    yearsExperience: 11,
    accent: "terracotta",
    expertise: [
      "Recipe development at scale",
      "Honest-time recipe writing",
      "Single-pan and one-pot methodology",
      "Recipe scaling for portion control",
    ],
  },
  {
    slug: "jakub-novak",
    imageUrl: "/images/team/jakub-novak.jpg",
    name: "Jakub Novák",
    credentials: "Food photographer",
    jobTitle: "Food Photographer",
    role: "Photography",
    oneLiner:
      "Shoots every recipe on this site. Natural light, real plates, the dishes you'd actually eat off.",
    bio: "Jakub Novák photographs every recipe published on ThatCleanChef. His brief is unfussy — natural daylight, the actual finished plate (not a styled stand-in), and one process shot that shows the moment a recipe most often fails for home cooks. He has shot for cookbook publishers, restaurant menus, and food magazines for the last nine years and treats this site as the most honest of those briefs: the picture has to look like the dish you'll cook, not a fantasy of it.",
    scope: "Hero photography on every recipe, three step shots minimum on flagship recipes.",
    yearsExperience: 9,
    accent: "olive",
    expertise: [
      "Natural-light food photography",
      "Process and step photography",
      "Plating that mirrors the home result",
    ],
  },
  {
    slug: "harriet-osei",
    imageUrl: "/images/team/harriet-osei.jpg",
    name: "Harriet Osei",
    credentials: "Senior editor",
    jobTitle: "Senior Editor",
    role: "Editorial",
    oneLiner:
      "Editor of voice and accuracy. Reads every published page, holds the line on tone.",
    bio: "Harriet Osei is the senior editor at ThatCleanChef. She holds a Master's in Science Communication from Imperial College London and has edited for Cook's Illustrated and the Wellcome Collection. Her remit is voice and accuracy — every recipe and every guide passes her desk before it passes Lena's. She is the reason this site does not say 'guilt-free,' 'skinny,' or 'flat belly,' and the reason every claim sourced to a study includes the year and effect size, not just a brand name and a vibe.",
    scope: "Every published page on the site. Final accuracy and voice gate.",
    yearsExperience: 12,
    accent: "stone",
    expertise: [
      "Editorial voice consistency",
      "Science communication",
      "Citation hygiene",
    ],
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}

export const PRIMARY_REVIEWER = team[0]; // Lena Marsh
