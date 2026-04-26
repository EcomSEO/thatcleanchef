import Link from "next/link";

export type IndexEntry = {
  name: string;
  href: string;
  recipeCount?: number;
};

/**
 * The back-of-book ingredient index. A-Z navigation, two-column reflow,
 * with recipe counts in italic numerals. This is the cookbook's secondary
 * (and arguably most useful) navigation: "I have a head of cauliflower —
 * what do I cook?". Linked prominently from the header.
 */
export function IngredientIndex({
  entries,
  heading = "Ingredient Index",
  intro,
  compact = false,
}: {
  entries: IndexEntry[];
  heading?: string;
  intro?: string;
  compact?: boolean;
}) {
  // Group A-Z, drop empty letters.
  const groups = new Map<string, IndexEntry[]>();
  for (const e of entries) {
    const letter = (e.name[0] || "?").toUpperCase();
    const arr = groups.get(letter) ?? [];
    arr.push(e);
    groups.set(letter, arr);
  }
  const letters = Array.from(groups.keys()).sort();

  return (
    <section className="border-t border-olive/15">
      <div className={`mx-auto max-w-5xl px-6 ${compact ? "py-12" : "py-20 md:py-24"}`}>
        <div className="text-center mb-12">
          <div className="caps-label !tracking-[0.32em] text-stone mb-4">
            Back Matter
          </div>
          <h2 className="font-serif italic text-olive text-4xl md:text-5xl leading-tight">
            {heading}
          </h2>
          {intro && (
            <p className="mt-5 font-serif italic text-charcoal/75 max-w-xl mx-auto leading-snug">
              {intro}
            </p>
          )}
        </div>

        {/* A-Z jump bar */}
        <nav
          aria-label="Jump to letter"
          className="mb-12 flex flex-wrap justify-center gap-x-3 gap-y-2 border-y border-olive/12 py-3"
        >
          {letters.map((L) => (
            <a
              key={L}
              href={`#letter-${L}`}
              className="font-serif italic text-terracotta/80 hover:text-terracotta text-base"
            >
              {L}
            </a>
          ))}
        </nav>

        <div className="columns-1 md:columns-2 gap-12">
          {letters.map((L) => {
            const items = groups.get(L)!;
            return (
              <div
                key={L}
                id={`letter-${L}`}
                className="break-inside-avoid mb-8 scroll-mt-24"
              >
                <div className="flex items-baseline gap-3 mb-3 border-b border-olive/15 pb-1.5">
                  <span className="font-serif italic text-terracotta text-3xl leading-none">
                    {L}
                  </span>
                  <span className="caps-label text-stone">
                    {items.length} entr{items.length === 1 ? "y" : "ies"}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {items.map((e) => (
                    <li key={e.name} className="flex items-baseline gap-2">
                      <Link
                        href={e.href}
                        className="font-serif text-olive hover:text-terracotta transition text-[16px] tracking-tight"
                      >
                        {e.name}
                      </Link>
                      {e.recipeCount != null && (
                        <span
                          aria-hidden
                          className="flex-1 mx-1 border-b border-dotted border-olive/25 translate-y-[-4px]"
                        />
                      )}
                      {e.recipeCount != null && (
                        <span className="font-serif italic text-stone tnum text-sm">
                          {e.recipeCount}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
