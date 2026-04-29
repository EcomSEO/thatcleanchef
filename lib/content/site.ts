export const SITE = {
  name: "ThatCleanChef",
  url: "https://thatcleanchef.com",
  tagline: "Clean-eating recipes that respect your time",
  taglineAlt: "Recipes tested three times, timed honestly, USDA-cited",
  description:
    "Chef-tested clean-eating recipes with a USDA-sourced Nutrition Ledger on every page. Honest prep times, original photography, and a registered-dietitian review on every recipe. Anti-inflammatory, Whole30, Mediterranean, high-protein, low-FODMAP — five hubs, no diet-scolding.",
  author: "The ThatCleanChef Kitchen",
  email: "hello@thatcleanchef.com",
  launched: true,
  /** Kitchen "pass" = the counter where plates go out. Our dateline treatment. */
  service: "Service I",
  issue: "Issue No. 01",
  /**
   * Mediavine display-ad gate. Flips to true only after the site clears 50k
   * sessions/mo and Mediavine onboarding completes. Recipe-site economics
   * make this material — see CLAUDE.md "Display ads — network exception".
   */
  displayAdsEnabled: false,
  /**
   * Recipe schema multi-aspect-image gate. Flips to true after the kie.ai
   * Nano Banana batch ships the 4:3 + 1:1 variants for every recipe (path
   * documented in docs/launch-blockers.md). Until then, RecipeJsonLd emits
   * a single-element image array (16:9 only) — still valid Recipe schema,
   * just less SERP-image-carousel coverage.
   */
  multiAspectComplete: false,
} as const;
