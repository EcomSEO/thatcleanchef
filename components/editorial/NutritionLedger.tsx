import type { Post } from "@/lib/content/posts";
import Link from "next/link";

/**
 * NutritionLedger — clean medical-info card. Right-rail width 240–280px.
 * Top: serving size + yield. Middle: per-serving values (cal/protein/carbs/
 * fat/fiber/sodium) with USDA-cited badge. Bottom: "Sourcing methodology →"
 * link. Mono numerics, sage accents.
 *
 * NO weight-loss numbers, NO calorie-fearmongering, NO "guilt-free" copy.
 */
export function NutritionLedger({
  post,
  variant = "rail",
}: {
  post: Post;
  variant?: "rail" | "inline";
}) {
  const n = post.nutritionLedger;
  const servings = post.servings;
  const total = post.totalTimeMinutes;
  if (!n && !servings && !total) return null;

  const dash = "—";

  type Cell = { label: string; value: string; hero?: boolean };
  const cells: Cell[] = [
    { label: "Calories", value: n ? String(n.calories) : dash, hero: true },
    { label: "Protein", value: n ? `${n.proteinG}g` : dash, hero: true },
    { label: "Fiber", value: n ? `${n.fiberG}g` : dash },
    { label: "Sat. fat", value: n ? `${n.satFatG}g` : dash },
    { label: "Sodium", value: n ? `${n.sodiumMg}mg` : dash },
    { label: "Added sugar", value: n ? `${n.addedSugarG}g` : dash },
  ];

  return (
    <section
      aria-label="Nutrition Ledger — per serving"
      className={`nutrition-dl ${variant === "rail" ? "max-w-[280px]" : ""}`}
    >
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="caps-label">Nutrition Ledger</span>
        <span className="text-label-sm text-ink-3">Per serving</span>
      </div>
      <div className="flex items-baseline gap-3 mb-3 pb-3 border-b border-hairline text-body-sm text-ink-2">
        {servings != null && (
          <span>
            <span className="caps-label !text-ink-3 mr-1">Yield</span>
            <span className="font-mono tnum text-ink">{servings}</span>
          </span>
        )}
        {total != null && (
          <span>
            <span className="caps-label !text-ink-3 mr-1">Total</span>
            <span className="font-mono tnum text-ink">{formatTime(total)}</span>
          </span>
        )}
      </div>
      <dl className="nutrition-dl__row">
        {cells.map((cell) => (
          <div key={cell.label} className="nutrition-dl__cell">
            <dt className="nutrition-dl__label">{cell.label}</dt>
            <dd className={"nutrition-dl__value tnum" + (cell.hero ? " nutrition-dl__value--hero" : "")}>
              {cell.value}
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-3 pt-3 border-t border-hairline flex items-center justify-between gap-3">
        <span className="reviewed-pill !text-[11.5px] !py-1 !px-2">
          <span className="reviewed-pill__dot" />
          USDA FDC-cited
        </span>
        <Link
          href="/methodology"
          className="text-[12.5px] text-sage-700 hover:text-sage-700/80 underline decoration-sage-100 underline-offset-2"
        >
          Sourcing methodology →
        </Link>
      </div>
    </section>
  );
}

function formatTime(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins === 0 ? `${hours}h` : `${hours}h ${mins}m`;
}
