import type { Post } from "@/lib/content/posts";

/**
 * NutritionLedger — the site's signature artifact.
 * Horizontal dl at the top of every recipe: Servings · Total time ·
 * Calories · Protein · Carbs · Fat · Fiber.
 *
 * Monospace numerics, terracotta accent on the "hero" values (Calories &
 * Protein). Missing values render "—" gracefully (see brand rule).
 */
export function NutritionLedger({ post }: { post: Post }) {
  const n = post.nutritionLedger;
  const servings = post.servings;
  const total = post.totalTimeMinutes;

  // Render nothing only if this post has no nutrition signal at all.
  // (We still want the ledger scaffolding on recipes with partial data.)
  if (!n && !servings && !total) return null;

  const dash = "—";
  const calories = n ? String(n.calories) : dash;
  const protein = n ? `${n.proteinG}g` : dash;
  // The brand-book doesn't separate carbs in the type; derive from sugar + fiber when absent
  // to keep the ledger complete without inventing numbers (dash if missing).
  const carbs = dash;
  const fat = n ? `${n.satFatG}g` : dash;
  const fiber = n ? `${n.fiberG}g` : dash;
  const sodium = n ? `${n.sodiumMg}mg` : dash;

  const cells: Array<{ label: string; value: string; hero?: boolean }> = [
    { label: "Servings", value: servings ? String(servings) : dash },
    {
      label: "Total time",
      value: total ? formatTime(total) : dash,
    },
    { label: "Calories", value: calories, hero: true },
    { label: "Protein", value: protein, hero: true },
    { label: "Carbs", value: carbs },
    { label: "Fat (sat.)", value: fat },
    { label: "Fiber", value: fiber },
  ];

  return (
    <section
      aria-label="Nutrition Ledger — per serving"
      className="nutrition-dl my-8"
      data-sodium={sodium}
    >
      <div className="flex items-center justify-between gap-3 px-1 mb-3">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
          <span className="caps-label text-olive">Nutrition Ledger</span>
        </div>
        <span className="caps-label text-stone">
          Per serving &middot; USDA FDC
        </span>
      </div>
      <dl className="nutrition-dl__row">
        {cells.map((cell) => (
          <div key={cell.label} className="nutrition-dl__cell">
            <dt className="nutrition-dl__label">{cell.label}</dt>
            <dd
              className={
                "nutrition-dl__value" +
                (cell.hero ? " nutrition-dl__value--hero" : "")
              }
            >
              {cell.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-2 px-1 text-[11px] text-stone/80 max-w-prose">
        Sodium {sodium}. All numbers per serving from USDA FoodData Central
        calculations, not packaging labels.
      </p>
    </section>
  );
}

function formatTime(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins === 0 ? `${hours}h` : `${hours}h ${mins}m`;
}
