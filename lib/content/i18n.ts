/**
 * i18n configuration for thatcleanchef.com.
 *
 * Twelve locales are exposed at `/[locale]/...` routes. The default locale
 * is `en` (United Kingdom-first, but locale code `en` because we don't yet
 * differentiate `en-GB` and `en-US` content). Recipe bodies remain in
 * English by deliberate editorial choice — translated cooking instructions
 * are easy to introduce errors into, and our recipes are tested in English.
 * We translate the parts of the site that index for navigation and
 * discovery (chrome, hub names, meal-plan and recipe metadata) so the site
 * is findable in twelve markets, and link readers to the English recipe
 * page with a clear note about the translation status.
 *
 * Adding a new locale: append to LOCALES, add the locale block to the
 * translation tables in `translations.ts` + `translations-data.ts`, and add
 * hreflang to the localized layout. No other wiring required.
 */

export const LOCALES = [
  "en",
  "de",
  "fr",
  "it",
  "es",
  "nl",
  "pl",
  "sv",
  "pt",
  "ro",
  "cs",
  "no",
] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, { native: string; english: string }> = {
  en: { native: "English", english: "English" },
  de: { native: "Deutsch", english: "German" },
  fr: { native: "Français", english: "French" },
  it: { native: "Italiano", english: "Italian" },
  es: { native: "Español", english: "Spanish" },
  nl: { native: "Nederlands", english: "Dutch" },
  pl: { native: "Polski", english: "Polish" },
  sv: { native: "Svenska", english: "Swedish" },
  pt: { native: "Português", english: "Portuguese" },
  ro: { native: "Română", english: "Romanian" },
  cs: { native: "Čeština", english: "Czech" },
  no: { native: "Norsk", english: "Norwegian" },
};

/**
 * BCP-47 codes for hreflang tags. We use the broad subtag because none of
 * our content is region-specific (UK content is canonical English).
 */
export const HREFLANG: Record<Locale, string> = {
  en: "en",
  de: "de",
  fr: "fr",
  it: "it",
  es: "es",
  nl: "nl",
  pl: "pl",
  sv: "sv",
  pt: "pt",
  ro: "ro",
  cs: "cs",
  no: "nb", // Bokmål, the writing form used on the site
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

// =====================================================================
// Note: dead blocks removed in the Option-A revert.
//
// The legacy CHROME / HUB_L10N / MED_LINES / MEAL_PLAN_L10N maps
// that previously lived here were dead code — never imported by any
// component. Live translations are served from `lib/content/translations.ts`
// (chrome) and `lib/content/translations-data.ts` (hub / meal-plan / recipe
// metadata).
// =====================================================================
