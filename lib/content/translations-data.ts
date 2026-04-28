/**
 * Localised metadata for hubs, medications, meal plans, and recipes.
 * Recipe BODIES (items, FAQ answers, sources) remain in English by
 * editorial decision. Only titles, names, oneLiners, and short descriptions
 * are translated — these are the strings that index for navigation in each
 * locale's SERP and that show up on cards / hub pages / nav.
 *
 * Lookup pattern: `localizedHub("glp1-friendly", "de")` returns the German
 * hub name + oneLiner if available, falling back to English.
 *
 * To add a new translation: extend the locale block in HUB_T / MED_T /
 * MEAL_PLAN_T / RECIPE_T. Missing entries fall back to `en`.
 */

import type { Locale } from "./i18n";

type LocalizedText = Partial<Record<Locale, string>>;

type LocalizedHub = {
  name: LocalizedText;
  shortName: LocalizedText;
  oneLiner: LocalizedText;
};

type LocalizedMedication = {
  oneLiner: LocalizedText;
};

type LocalizedMealPlan = {
  title: LocalizedText;
  h1: LocalizedText;
  description: LocalizedText;
};

type LocalizedRecipe = {
  title: LocalizedText;
  description: LocalizedText;
};

// =============================================================================
// HUBS — 5 pillars
//
// Empty after the Option-A revert from peptide-therapy positioning. The 5
// recipe-site hubs (diet-specific / meal-types / protein-forward / technique
// / seasonal-menus) display in English on localized homepages while we
// commission professional translations. The locale-page chrome already
// carries the translation-pending banner; hub display strings fall back to
// the English `fallback` argument that every helper accepts.
// =============================================================================

export const HUB_T: Record<string, LocalizedHub> = {};

// =============================================================================
// MEDICATIONS — removed in the Option-A revert.
// thatcleanchef is a recipe site, not a peptide-therapy site. The /medications
// route + lib/content/medications.ts have been deleted; this translation block
// follows them.
// =============================================================================

export const MED_T: Record<string, LocalizedMedication> = {};

// =============================================================================
// MEAL PLANS
// =============================================================================

export const MEAL_PLAN_T: Record<string, LocalizedMealPlan> = {
  "14-day-anti-inflammatory": {
    title: {
      en: "14-Day Anti-Inflammatory Meal Plan",
      de: "14-Tage entzündungshemmender Ernährungsplan",
      fr: "Plan de repas anti-inflammatoire de 14 jours",
      it: "Piano alimentare antinfiammatorio da 14 giorni",
      es: "Plan de comidas antiinflamatorio de 14 días",
      nl: "Ontstekingsremmend eetschema van 14 dagen",
      pl: "14-dniowy przeciwzapalny plan posiłków",
      sv: "14-dagars antiinflammatorisk måltidsplan",
      pt: "Plano alimentar anti-inflamatório de 14 dias",
      ro: "Plan de mese antiinflamator pe 14 zile",
      cs: "14denní protizánětlivý jídelníček",
      no: "14-dagers antiinflammatorisk måltidsplan",
    },
    h1: {
      en: "A 14-day anti-inflammatory meal plan, RD-reviewed.",
      de: "Ein 14-Tage entzündungshemmender Ernährungsplan, von einer Ernährungsberaterin geprüft.",
      fr: "Un plan anti-inflammatoire de 14 jours, validé par une diététicienne.",
      it: "Un piano alimentare antinfiammatorio da 14 giorni, revisionato da una dietista.",
      es: "Un plan antiinflamatorio de 14 días, revisado por una dietista.",
      nl: "Een ontstekingsremmend eetschema van 14 dagen, beoordeeld door een diëtiste.",
      pl: "14-dniowy plan przeciwzapalny zaakceptowany przez dietetyka.",
      sv: "En 14-dagars antiinflammatorisk måltidsplan, granskad av dietist.",
      pt: "Um plano alimentar anti-inflamatório de 14 dias, revisto por nutricionista.",
      ro: "Un plan antiinflamator pe 14 zile, verificat de o dieteticiană.",
      cs: "14denní protizánětlivý jídelníček zkontrolovaný nutričním terapeutem.",
      no: "En 14-dagers antiinflammatorisk måltidsplan, vurdert av ernæringsfysiolog.",
    },
    description: {
      en: "Two weeks of anti-inflammatory eating built around turmeric, omega-3 fish, dark leafy greens, and bone-broth-based dishes. Grocery list by section, macros totalled per day, Sunday prep sequence. Free PDF.",
      de: "Zwei Wochen entzündungshemmende Ernährung mit Kurkuma, Omega-3-Fisch, dunklem Blattgemüse und Gerichten auf Knochenbrühe-Basis. Einkaufsliste nach Abteilungen, Makros pro Tag aufsummiert, Sonntags-Vorbereitung. Kostenloses PDF.",
      fr: "Deux semaines d'alimentation anti-inflammatoire autour du curcuma, des poissons riches en oméga-3, des légumes-feuilles foncés et de plats à base de bouillon d'os. Liste de courses par rayon, macros cumulés par jour, préparation du dimanche. PDF gratuit.",
      it: "Due settimane di alimentazione antinfiammatoria attorno a curcuma, pesci ricchi di omega-3, verdure a foglia scura e piatti a base di brodo di ossa. Lista della spesa per reparto, macro sommati per giorno, preparazione della domenica. PDF gratuito.",
      es: "Dos semanas de alimentación antiinflamatoria en torno a cúrcuma, pescados ricos en omega-3, verduras de hoja oscura y platos a base de caldo de huesos. Lista de la compra por sección, macros totalizados por día, preparación del domingo. PDF gratuito.",
      nl: "Twee weken ontstekingsremmend eten rond kurkuma, omega-3-vis, donkere bladgroenten en gerechten op basis van botbouillon. Boodschappenlijst per afdeling, macro's per dag opgeteld, zondagvoorbereiding. Gratis pdf.",
      pl: "Dwa tygodnie żywienia przeciwzapalnego oparte na kurkumie, rybach bogatych w omega-3, ciemnych warzywach liściastych i daniach na bulionie kostnym. Lista zakupów według działów, makra na dzień, niedzielna sekwencja przygotowań. Bezpłatny PDF.",
      sv: "Två veckor antiinflammatoriskt ätande byggt kring gurkmeja, omega-3-fisk, mörka bladgrönsaker och rätter på benbuljong. Inköpslista per avdelning, makron summerade per dag, söndagsförberedelse. Gratis PDF.",
      pt: "Duas semanas de alimentação anti-inflamatória centrada em curcuma, peixes ricos em ómega-3, vegetais de folha escura e pratos à base de caldo de ossos. Lista de compras por secção, macros somados por dia, preparação ao domingo. PDF gratuito.",
      ro: "Două săptămâni de alimentație antiinflamatoare construite în jurul turmericului, peștelui bogat în omega-3, verdețurilor cu frunze închise și preparatelor pe bază de supă de oase. Listă de cumpărături pe raioane, macro însumate pe zi, pregătire de duminică. PDF gratuit.",
      cs: "Dva týdny protizánětlivého stravování postavené kolem kurkumy, omega-3 ryb, tmavé listové zeleniny a jídel na kostním vývaru. Nákupní seznam po odděleních, makra za den, nedělní příprava. PDF zdarma.",
      no: "To uker antiinflammatorisk kosthold bygget rundt gurkemeie, omega-3-fisk, mørke bladgrønnsaker og retter basert på beinkraft. Handleliste etter avdeling, makroer summert per dag, søndagsforberedelse. Gratis PDF.",
    },
  },
};

// =============================================================================
// RECIPES — title + description only (the body stays in English)
// Translations cover the 23 published recipes by slug.
// =============================================================================

export const RECIPE_T: Record<string, LocalizedRecipe> = {
  "anti-inflammatory-golden-chicken-soup": {
    title: {
      en: "Anti-Inflammatory Golden Chicken Soup",
      de: "Entzündungshemmende goldene Hühnersuppe",
      fr: "Soupe de poulet dorée anti-inflammatoire",
      it: "Zuppa di pollo dorata antinfiammatoria",
      es: "Sopa dorada de pollo antiinflamatoria",
      nl: "Ontstekingsremmende gouden kippensoep",
      pl: "Przeciwzapalna złota zupa drobiowa",
      sv: "Antiinflammatorisk gyllene kycklingsoppa",
      pt: "Sopa dourada de frango anti-inflamatória",
      ro: "Supă aurie de pui antiinflamatoare",
      cs: "Protizánětlivá zlatá kuřecí polévka",
      no: "Antiinflammatorisk gyllen kyllingsuppe",
    },
    description: {
      en: "Chef-tested anti-inflammatory chicken soup with turmeric, ginger, and bone broth. 55 min, 32g protein, Nutrition Ledger below.",
      de: "Vom Koch getestete entzündungshemmende Hühnersuppe mit Kurkuma, Ingwer und Knochenbrühe. 55 Min, 32 g Eiweiß, Nährwertkarte unten.",
      fr: "Soupe de poulet anti-inflammatoire testée en cuisine, au curcuma, gingembre et bouillon d'os. 55 min, 32 g de protéines, tableau nutritionnel ci-dessous.",
      it: "Zuppa di pollo antinfiammatoria testata in cucina, con curcuma, zenzero e brodo di ossa. 55 min, 32 g di proteine, scheda nutrizionale sotto.",
      es: "Sopa de pollo antiinflamatoria probada en cocina, con cúrcuma, jengibre y caldo de huesos. 55 min, 32 g de proteína, panel nutricional abajo.",
      nl: "In de testkeuken bewezen ontstekingsremmende kippensoep met kurkuma, gember en botbouillon. 55 min, 32 g eiwit, voedingstabel hieronder.",
      pl: "Zupa drobiowa przeciwzapalna sprawdzona w kuchni, z kurkumą, imbirem i bulionem kostnym. 55 min, 32 g białka, tabela wartości odżywczych poniżej.",
      sv: "Köksprovad antiinflammatorisk kycklingsoppa med gurkmeja, ingefära och benbuljong. 55 min, 32 g protein, näringstabell nedan.",
      pt: "Sopa de frango anti-inflamatória testada em cozinha, com curcuma, gengibre e caldo de ossos. 55 min, 32 g de proteína, tabela nutricional abaixo.",
      ro: "Supă de pui antiinflamatoare testată în bucătărie, cu turmeric, ghimbir și supă de oase. 55 min, 32 g proteină, tabel nutrițional mai jos.",
      cs: "Kuchyní vyzkoušená protizánětlivá kuřecí polévka s kurkumou, zázvorem a kostním vývarem. 55 min, 32 g bílkovin, výživová tabulka níže.",
      no: "Kjøkkenprøvd antiinflammatorisk kyllingsuppe med gurkemeie, ingefær og beinkraft. 55 min, 32 g protein, næringstabell nedenfor.",
    },
  },
};

// =============================================================================
// LOOKUP HELPERS
// =============================================================================

function pick(text: LocalizedText, locale: Locale, fallback: string): string {
  return text[locale] ?? text.en ?? fallback;
}

export function localizedHubName(slug: string, locale: Locale, fallback: string): string {
  const h = HUB_T[slug];
  return h ? pick(h.name, locale, fallback) : fallback;
}

export function localizedHubShortName(slug: string, locale: Locale, fallback: string): string {
  const h = HUB_T[slug];
  return h ? pick(h.shortName, locale, fallback) : fallback;
}

export function localizedHubOneLiner(slug: string, locale: Locale, fallback: string): string {
  const h = HUB_T[slug];
  return h ? pick(h.oneLiner, locale, fallback) : fallback;
}

export function localizedMealPlanTitle(slug: string, locale: Locale, fallback: string): string {
  const p = MEAL_PLAN_T[slug];
  return p ? pick(p.title, locale, fallback) : fallback;
}

export function localizedMealPlanH1(slug: string, locale: Locale, fallback: string): string {
  const p = MEAL_PLAN_T[slug];
  return p ? pick(p.h1, locale, fallback) : fallback;
}

export function localizedMealPlanDescription(slug: string, locale: Locale, fallback: string): string {
  const p = MEAL_PLAN_T[slug];
  return p ? pick(p.description, locale, fallback) : fallback;
}

export function localizedRecipeTitle(slug: string, locale: Locale, fallback: string): string {
  const r = RECIPE_T[slug];
  return r ? pick(r.title, locale, fallback) : fallback;
}

export function localizedRecipeDescription(slug: string, locale: Locale, fallback: string): string {
  const r = RECIPE_T[slug];
  return r ? pick(r.description, locale, fallback) : fallback;
}
