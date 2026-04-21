import type { Post } from "@/lib/content/posts";

/**
 * Nutrition Ledger — the site's signature artifact.
 * Renders per-serving macros from USDA FDC-style data.
 * Visible above the fold on every recipe.
 */
export function NutritionLedger({ post }: { post: Post }) {
  if (!post.nutritionLedger) return null;
  const n = post.nutritionLedger;

  const rows: Array<{ label: string; value: string; emphasis?: boolean }> = [
    { label: "Calories", value: `${n.calories}`, emphasis: true },
    { label: "Protein", value: `${n.proteinG}g`, emphasis: true },
    { label: "Fiber", value: `${n.fiberG}g` },
    { label: "Sodium", value: `${n.sodiumMg}mg` },
    { label: "Saturated fat", value: `${n.satFatG}g` },
    { label: "Added sugar", value: `${n.addedSugarG}g` },
  ];

  return (
    <aside
      className="my-8 border-2 border-olive/15 bg-white/60 rounded-lg overflow-hidden"
      aria-label="Nutrition Ledger — per serving"
    >
      <div className="px-6 py-3 bg-olive text-cream">
        <p className="font-serif text-sm uppercase tracking-widest">Nutrition Ledger</p>
        <p className="text-xs text-cream/70 mt-0.5">
          Per serving · USDA FDC-sourced macros
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 divide-x divide-olive/10">
        {rows.map((row) => (
          <div
            key={row.label}
            className={`px-4 py-4 text-center ${row.emphasis ? "bg-terracotta/5" : ""}`}
          >
            <div className="font-mono text-xs uppercase tracking-wider text-olive/60 mb-1">
              {row.label}
            </div>
            <div
              className={`font-mono ${row.emphasis ? "text-xl md:text-2xl text-olive font-semibold" : "text-base text-charcoal/90"}`}
            >
              {row.value}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export function RecipeMeta({ post }: { post: Post }) {
  const total = post.totalTimeMinutes ?? 0;
  const prep = post.prepTimeMinutes ?? 0;
  const cook = post.cookTimeMinutes ?? 0;
  const servings = post.servings ?? 0;
  if (!total && !servings) return null;

  return (
    <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-4 text-sm text-charcoal/80">
      {total > 0 && (
        <div>
          <span className="font-mono text-olive font-semibold">{formatTime(total)}</span>
          <span className="ml-1 text-charcoal/60">total</span>
        </div>
      )}
      {prep > 0 && (
        <div>
          <span className="font-mono">{formatTime(prep)}</span>
          <span className="ml-1 text-charcoal/60">prep</span>
        </div>
      )}
      {cook > 0 && (
        <div>
          <span className="font-mono">{formatTime(cook)}</span>
          <span className="ml-1 text-charcoal/60">cook</span>
        </div>
      )}
      {servings > 0 && (
        <div>
          <span className="font-mono">{servings}</span>
          <span className="ml-1 text-charcoal/60">serving{servings === 1 ? "" : "s"}</span>
        </div>
      )}
    </div>
  );
}

export function DietTags({ tags }: { tags?: string[] }) {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block px-3 py-1 text-xs uppercase tracking-wider font-mono bg-sage/15 text-olive border border-sage/30 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function formatTime(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins === 0 ? `${hours}h` : `${hours}h ${mins}m`;
}
