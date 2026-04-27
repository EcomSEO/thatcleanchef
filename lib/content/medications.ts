/**
 * Medication hubs — the four GLP-1 / GIP-GLP-1 agonists driving the search wave
 * thatcleanchef serves. Each hub frames recipes around the patient experience
 * of that specific medication: side-effect profile, appetite trajectory, common
 * tolerance issues. NOT prescriptive medical advice — context for selecting
 * recipes from the existing pillar grid.
 *
 * Data sources for clinical context: FDA prescribing labels, NEJM SURMOUNT-1
 * (Jastreboff 2022), STEP-1 (Wilding 2021), SUSTAIN trials (UK NICE summaries).
 * Updated 2026-Q2.
 */

export type Medication = {
  slug: string;
  /** 16:9 hero image path under /public. */
  imageUrl?: string;
  brand: string;
  generic: string;
  drugClass: "GLP-1 agonist" | "GIP/GLP-1 dual agonist";
  manufacturer: string;
  // patient-facing summary in <40 words
  oneLiner: string;
  // 3 things people on this drug commonly say about food
  patientReports: string[];
  // 4 cooking constraints we design recipes around
  cookingConstraints: string[];
  // ingredients that commonly go down well / commonly don't
  toleratedWell: string[];
  oftenPoorlyTolerated: string[];
  // primary linked pillar
  primaryHub: string;
  // FAQ shown on the medication hub page
  faq: { q: string; a: string }[];
  // YoY search trend, captured 2026-04
  searchTrendYoY: string;
};

export const medications: Medication[] = [
  {
    slug: "mounjaro",
    imageUrl: "/images/medications/mounjaro.jpg",
    brand: "Mounjaro",
    generic: "tirzepatide",
    drugClass: "GIP/GLP-1 dual agonist",
    manufacturer: "Eli Lilly",
    oneLiner:
      "Tirzepatide acts on both GIP and GLP-1 receptors. Patients commonly report the steepest appetite reduction of any approved drug in this class, with food often described as 'flat' or 'unappealing' rather than craved.",
    patientReports: [
      "Hunger is gone, not just reduced — meals feel like a chore",
      "Strong smells (frying oil, sauces, onions sweating) trigger nausea more than flavors",
      "Protein is the hardest macro to hit; sweet things go down easier than savoury, briefly",
    ],
    cookingConstraints: [
      "Portions need to be small but dense — 250-350 kcal, 25-35 g protein per serving",
      "Fat is helpful for satiety but high-fat fried food sits heavy — bake, poach, or steam",
      "Cook with the window open: smell sensitivity is real and underdocumented",
      "Soft textures + cooler temperatures often outperform hot, fragrant dishes",
    ],
    toleratedWell: [
      "Cottage cheese, Greek yoghurt, soft scrambled eggs",
      "Poached or baked white fish, prawns",
      "Bone broth, miso, chicken consommé",
      "Cucumber, melon, berries — high water, mild scent",
    ],
    oftenPoorlyTolerated: [
      "Fried foods, takeaway pizza, oily curries",
      "Red meat (especially fattier cuts) on titration weeks",
      "Strong alliums sweating in oil",
      "Carbonated drinks, alcohol",
    ],
    primaryHub: "glp1-friendly",
    searchTrendYoY: "+540% (2025 → 2026)",
    faq: [
      {
        q: "How much protein do I actually need on Mounjaro?",
        a: "Independent clinical guidance (UK NICE, Phillips 2017) puts the protein target on a GLP-1 at 1.2–1.6 g per kg of body weight per day to protect lean mass during weight loss. For a 75 kg adult that's 90–120 g per day, spread across smaller meals. The Muscle Preservation pillar has 30+ recipes built around this.",
      },
      {
        q: "Why does food smell so much stronger?",
        a: "Tirzepatide's effect on gastric emptying changes how flavour and aroma reach the palate. Cooking with a window open, eating dishes slightly cooler, and avoiding heavy fried oils all reduce the trigger. We test every Mounjaro-tagged recipe against this profile.",
      },
      {
        q: "Can I follow a normal recipe and just eat half?",
        a: "Halving a recipe halves the protein and the micronutrients. The portion needs to shrink without dropping the protein — the recipes in the GLP-1 Friendly hub keep 25–35 g of protein in a 300 kcal portion specifically because halving doesn't.",
      },
    ],
  },
  {
    slug: "ozempic",
    imageUrl: "/images/medications/ozempic.jpg",
    brand: "Ozempic",
    generic: "semaglutide",
    drugClass: "GLP-1 agonist",
    manufacturer: "Novo Nordisk",
    oneLiner:
      "Semaglutide weekly injection — first widely-prescribed GLP-1 in this wave. Appetite reduction is meaningful but typically less abrupt than tirzepatide; patients often describe a 'small-stomach' feeling rather than total disinterest in food.",
    patientReports: [
      "Full quickly, hungry slowly — meals end after 3–4 bites on titration weeks",
      "Sugary foods feel less rewarding; some patients lose interest in alcohol",
      "Constipation more common than nausea after the first month",
    ],
    cookingConstraints: [
      "Small dense plates, 300–400 kcal, 25–30 g protein",
      "Fibre needs to be in every recipe — semaglutide users routinely under-fibre",
      "Slow flavour build; avoid first-bite-must-be-perfect cooking — appetite peaks late",
      "Hydration recipes (broths, slow-sipping soups) hit better than dry plates",
    ],
    toleratedWell: [
      "Lentils, chickpeas, beans (fibre + protein)",
      "Salmon, tuna, sardines",
      "Greek yoghurt with seeds",
      "Slow-cooked stews, casseroles",
    ],
    oftenPoorlyTolerated: [
      "Very sweet desserts (taste flattening is common)",
      "Heavy cream-based sauces",
      "Large pasta or rice plates",
      "Carbonated drinks",
    ],
    primaryHub: "glp1-friendly",
    searchTrendYoY: "+820% (2025 → 2026)",
    faq: [
      {
        q: "Does Ozempic affect what I crave?",
        a: "Patient reports and a small body of literature (Hayes 2023 review) describe a 'flattening' of food reward — sweet things feel less rewarding, and some patients report reduced interest in alcohol. Recipes in this hub lean savoury-umami because that profile holds up best.",
      },
      {
        q: "I'm constipated — what should I cook?",
        a: "Constipation is more common than nausea on Ozempic past the first month. Recipes with 8 g+ of fibre per serving (lentil one-pots, oat-based breakfasts, the bone-broth-and-greens family) help. The Anti-Inflammatory Recovery pillar has the highest fibre-density.",
      },
      {
        q: "Can I drink alcohol on Ozempic?",
        a: "We don't give medical advice. Many patients independently report reduced alcohol cravings and slower tolerance. Talk to your prescribing clinician.",
      },
    ],
  },
  {
    slug: "wegovy",
    imageUrl: "/images/medications/wegovy.jpg",
    brand: "Wegovy",
    generic: "semaglutide (weight-management dose)",
    drugClass: "GLP-1 agonist",
    manufacturer: "Novo Nordisk",
    oneLiner:
      "Semaglutide at the weight-management licensed dose (up to 2.4 mg/week). Same molecule as Ozempic, higher target dose, same patient profile — slightly more pronounced appetite suppression at the top of the titration ladder.",
    patientReports: [
      "Plateau experience around month 3–6 is common — recipes need to keep working when motivation dips",
      "Smaller dinner-time appetite than morning appetite",
      "Lean-mass loss is the most-asked-about concern in patient forums",
    ],
    cookingConstraints: [
      "Front-load the day's protein — breakfast and lunch carry the load when dinner appetite is gone",
      "Batch-cook prep matters more than novelty — a tired patient reaches for what's already in the fridge",
      "30 g+ protein per serving, every serving",
      "Sodium <600 mg per serving — Wegovy patients are commonly co-managed for blood pressure",
    ],
    toleratedWell: [
      "High-protein breakfast bowls",
      "Cottage-cheese-based lunches",
      "Egg-based dinners (frittata, shakshuka)",
      "Bone broth with shredded chicken",
    ],
    oftenPoorlyTolerated: [
      "Late, heavy dinners",
      "High-fat breakfast pastries",
      "Sweet smoothies (taste flattening)",
      "Large salads with oily dressings",
    ],
    primaryHub: "muscle-preservation",
    searchTrendYoY: "+1,180% (2025 → 2026)",
    faq: [
      {
        q: "How do I avoid losing muscle on Wegovy?",
        a: "The combination of caloric deficit + reduced food reward makes hitting protein hard. Independent guidance (Phillips 2017, Morton 2018 meta-analysis) sets the target at 1.2–1.6 g/kg/day. Resistance training plus this protein floor is the standard recommendation. Every recipe tagged 'Wegovy' here clears 30 g protein per serving.",
      },
      {
        q: "Why does my appetite drop more in the evening?",
        a: "Diurnal appetite patterns on semaglutide are well-documented anecdotally — morning hunger is often preserved while evening appetite collapses. The recipes here front-load protein so you're not chasing a 30 g target at 8pm with no appetite.",
      },
      {
        q: "What's a realistic weeknight dinner on Wegovy?",
        a: "Soft-protein, low-volume, warm-but-not-fragrant. The cottage-cheese flatbread, the ginger-turmeric salmon, the Greek lemon chicken (smaller portion) all test well in this slot.",
      },
    ],
  },
  {
    slug: "zepbound",
    imageUrl: "/images/medications/zepbound.jpg",
    brand: "Zepbound",
    generic: "tirzepatide (weight-management dose)",
    drugClass: "GIP/GLP-1 dual agonist",
    manufacturer: "Eli Lilly",
    oneLiner:
      "Tirzepatide at the weight-management licensed dose. Same molecule as Mounjaro, licensed for chronic weight management. Patient experience tracks Mounjaro closely, with the steepest appetite suppression of any approved drug in this class.",
    patientReports: [
      "Eating becomes mechanical — food has to be planned, not craved",
      "Strong taste preferences swing week-to-week with titration",
      "Hydration drops because thirst cues blur — recipes carry water, not the bottle",
    ],
    cookingConstraints: [
      "Plan, don't improvise — weekly batch cook outperforms daily decisions",
      "Hydrating ingredients: cucumber, courgette, tomato, watermelon, broth",
      "Soft, lukewarm, mild-aroma plates outperform hot fragrant ones",
      "Iron and B12 monitoring matters — recipes carry red-meat-free protein options",
    ],
    toleratedWell: [
      "Cold poached salmon, prawn cocktail",
      "Cucumber-yoghurt soups, gazpacho",
      "Soft-set custards, cottage cheese",
      "Bone broth, miso",
    ],
    oftenPoorlyTolerated: [
      "Heavy fried meals",
      "Strong-smelling cooked alliums",
      "Coffee on titration weeks",
      "Carbonated drinks",
    ],
    primaryHub: "glp1-friendly",
    searchTrendYoY: "+2,300% (2025 → 2026)",
    faq: [
      {
        q: "Is Zepbound the same as Mounjaro?",
        a: "Same molecule (tirzepatide), same manufacturer (Eli Lilly), licensed under different brand names — Mounjaro for type 2 diabetes, Zepbound for chronic weight management. The cooking implications are identical. We surface the same recipe set under both hubs.",
      },
      {
        q: "How do I stay hydrated when I don't feel thirsty?",
        a: "Build water into the food. Cucumber-yoghurt soups, broths, prawn cocktail, melon-and-mint salads carry 70%+ water by weight. The GLP-1 Friendly pillar leans into this format on purpose.",
      },
      {
        q: "What if I can only eat 4 bites at dinner?",
        a: "Then those 4 bites need to be 25 g protein. The cottage-cheese flatbread, soft-set egg custards with smoked fish, and slow-cooked salmon plates are designed exactly for this scenario.",
      },
    ],
  },
];

export function getMedication(slug: string): Medication | undefined {
  return medications.find((m) => m.slug === slug);
}
