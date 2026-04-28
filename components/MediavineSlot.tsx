import { SITE } from "@/lib/content/site";

/**
 * <MediavineSlot /> — placeholder where a Mediavine ad will render.
 *
 * Returns null while `SITE.displayAdsEnabled === false`. When live, Mediavine
 * replaces the inner `<div data-ad-slot="X">` with its own creative based on
 * the slot id. We use Mediavine's documented slot ids:
 *
 *   - `mv-content-recipe` — between H2 sections inside a recipe body
 *   - `mv-content-article` — between H2 sections in editorial / pillar pages
 *   - `mv-rail-sticky` — the sidebar sticky unit
 *   - `mv-below-fold-leaderboard` — between the recipe card and the FAQ
 *
 * Placement rules (NEVER VIOLATE — see SKILL.md §5):
 *   - NEVER between recipe ingredients
 *   - NEVER between recipe steps
 *   - NEVER inside the Nutrition Ledger
 *   - NEVER inside the Chef Notes / "Why we tested" block
 *   - NEVER above the H1
 *   - NEVER inside the FAQ block
 */
export function MediavineSlot({
  slot,
  className = "",
}: {
  slot:
    | "mv-content-recipe"
    | "mv-content-article"
    | "mv-rail-sticky"
    | "mv-below-fold-leaderboard";
  className?: string;
}) {
  if (!SITE.displayAdsEnabled) return null;

  // Honest CLS budget: reserve a min-height that matches Mediavine's most
  // common ad sizes per slot type so the layout doesn't shift when the ad
  // loads. These values match Mediavine's publisher-style guide.
  const reservedHeight: Record<typeof slot, string> = {
    "mv-content-recipe": "min-h-[280px]",
    "mv-content-article": "min-h-[280px]",
    "mv-rail-sticky": "min-h-[600px]",
    "mv-below-fold-leaderboard": "min-h-[90px] md:min-h-[250px]",
  };

  return (
    <div
      className={`my-8 flex justify-center items-center text-stone caps-label ${reservedHeight[slot]} ${className}`}
      aria-label="Advertisement"
      role="complementary"
    >
      <div data-ad-slot={slot} className="w-full text-center">
        {/* Mediavine injects creative here */}
        <span className="opacity-40">Advertisement</span>
      </div>
    </div>
  );
}
