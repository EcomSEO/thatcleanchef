/**
 * Bullet markers sage, Plex Mono qty column tabular, Inter ingredient name.
 */
export type Ingredient = { qty?: string; name: string; note?: string };

export function RecipeIngredientList({
  items,
  heading = "Ingredients",
  yieldLabel,
}: {
  items: Ingredient[];
  heading?: string;
  yieldLabel?: string;
}) {
  return (
    <section aria-label={heading}>
      <div className="flex items-baseline justify-between mb-3 gap-3">
        <h2 className="text-h2-mid font-semibold text-ink">{heading}</h2>
        {yieldLabel && <span className="caps-label !text-ink-2">{yieldLabel}</span>}
      </div>
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={i} className="grid grid-cols-[14px_72px_1fr] gap-3 items-baseline">
            <span aria-hidden className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-sage" />
            <span className="font-mono tnum text-body-sm text-ink-2">{it.qty || ""}</span>
            <span className="text-body-md text-ink leading-snug">
              {it.name}
              {it.note && <span className="text-ink-2"> · {it.note}</span>}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
