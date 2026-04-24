import type { Post } from "@/lib/content/posts";
import { CountUp } from "./CountUp";

/**
 * NutritionLedger — the site's signature artifact.
 * Horizontal dl at the top of every recipe: Servings · Total time ·
 * Calories · Protein · Carbs · Fat · Fiber.
 *
 * Monospace numerics, terracotta accent on the "hero" values (Calories &
 * Protein). Missing values render "—" gracefully (see brand rule). Numeric
 * values count up from 0 → target on first scroll into view ("the kitchen
 * weighed this" moment). Reduced-motion users see final values instantly.
 */
export function NutritionLedger({ post }: { post: Post }) {
  const n = post.nutritionLedger;
  const servings = post.servings;
  const total = post.totalTimeMinutes;

  // Render nothing only if this post has no nutrition signal at all.
  if (!n && !servings && !total) return null;

  const dash = "—";
  const sodium = n ? `${n.sodiumMg}mg` : dash;

  type Cell = {
    label: string;
    hero?: boolean;
  } & (
    | { kind: "text"; text: string }
    | { kind: "num"; value: number; unit?: string }
    | { kind: "time"; minutes: number }
  );

  const cells: Cell[] = [
    {
      label: "Servings",
      kind: servings != null ? "num" : "text",
      ...(servings != null
        ? { value: servings }
        : { text: dash }),
    } as Cell,
    {
      label: "Total time",
      kind: total != null ? "time" : "text",
      ...(total != null ? { minutes: total } : { text: dash }),
    } as Cell,
    {
      label: "Calories",
      hero: true,
      kind: n ? "num" : "text",
      ...(n ? { value: n.calories } : { text: dash }),
    } as Cell,
    {
      label: "Protein",
      hero: true,
      kind: n ? "num" : "text",
      ...(n ? { value: n.proteinG, unit: "g" } : { text: dash }),
    } as Cell,
    // Carbs isn't in the schema; keep the cell but render dash gracefully.
    { label: "Carbs", kind: "text", text: dash } as Cell,
    {
      label: "Fat (sat.)",
      kind: n ? "num" : "text",
      ...(n ? { value: n.satFatG, unit: "g" } : { text: dash }),
    } as Cell,
    {
      label: "Fiber",
      kind: n ? "num" : "text",
      ...(n ? { value: n.fiberG, unit: "g" } : { text: dash }),
    } as Cell,
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
                "nutrition-dl__value tnum" +
                (cell.hero ? " nutrition-dl__value--hero" : "")
              }
            >
              {cell.kind === "num" ? (
                <CountUp value={cell.value} unit={cell.unit ?? ""} />
              ) : cell.kind === "time" ? (
                <CountUp value={cell.minutes} kind="time" />
              ) : (
                cell.text
              )}
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
