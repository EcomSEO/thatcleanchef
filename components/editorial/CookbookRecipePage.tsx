import { HerbMark } from "./HerbMark";
import { toRoman } from "./Roman";

export type RecipeIngredient = { qty?: string; item: string };
export type RecipeStep = string;

/**
 * The cookbook recipe page. Method-first layout — ingredients in a left
 * sidebar list, numbered method as prose on the right. Yield/time/difficulty
 * in small caps under the title. Notes & variations in italic at the bottom.
 *
 * This is the signature template. Distinct from the magazine RecipeCard
 * (which is a chip-laden printable block) — this is a *page*, the way it
 * would set in a printed cookbook.
 */
export function CookbookRecipePage({
  number,
  title,
  intro,
  yield: y,
  time,
  difficulty,
  ingredients,
  steps,
  notes,
  variations,
  mark = "rosemary",
}: {
  number: number;
  title: string;
  intro?: string;
  yield?: string;
  time?: string;
  difficulty?: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  notes?: string[];
  variations?: string[];
  mark?: "rosemary" | "garlic" | "pepper" | "lemon" | "knife" | "mortar" | "spoon" | "leaf" | "wheat" | "fish";
}) {
  return (
    <article className="recipe-page mx-auto max-w-4xl px-6 py-16 md:py-24">
      {/* Recipe number + title block — centered, like a printed page */}
      <header className="text-center mb-10">
        <div className="caps-label !tracking-[0.32em] text-stone mb-4">
          Recipe N&#176; {toRoman(number)}
        </div>
        <h1 className="font-serif italic text-olive text-4xl md:text-[3.2rem] leading-tight tracking-tight max-w-3xl mx-auto">
          {title}
        </h1>
        <div className="my-7 flex items-center justify-center gap-4 text-sage">
          <span aria-hidden className="block h-px w-10 bg-current opacity-60" />
          <HerbMark kind={mark} size={24} />
          <span aria-hidden className="block h-px w-10 bg-current opacity-60" />
        </div>
        <dl className="inline-flex flex-wrap items-baseline justify-center gap-x-8 gap-y-2 caps-label !tracking-[0.22em] text-stone">
          {y && (
            <div>
              <dt className="inline text-stone/70 mr-2">Yield</dt>
              <dd className="inline font-serif italic text-olive normal-case tracking-normal text-base">
                {y}
              </dd>
            </div>
          )}
          {time && (
            <div>
              <dt className="inline text-stone/70 mr-2">Time</dt>
              <dd className="inline font-serif italic text-olive normal-case tracking-normal text-base">
                {time}
              </dd>
            </div>
          )}
          {difficulty && (
            <div>
              <dt className="inline text-stone/70 mr-2">Difficulty</dt>
              <dd className="inline font-serif italic text-olive normal-case tracking-normal text-base">
                {difficulty}
              </dd>
            </div>
          )}
        </dl>
      </header>

      {intro && (
        <p className="recipe-intro font-serif text-charcoal/85 text-[17px] leading-[1.75] max-w-2xl mx-auto mb-12 drop-cap">
          {intro}
        </p>
      )}

      {/* Two-column page: ingredients sidebar | numbered method */}
      <div className="grid md:grid-cols-12 gap-10 md:gap-14">
        <aside className="md:col-span-4">
          <div className="md:sticky md:top-24">
            <h2 className="font-serif italic text-olive text-2xl mb-4">
              Ingredients
            </h2>
            <ul className="space-y-2 border-t border-olive/20 pt-4">
              {ingredients.map((ing, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-3 text-[15px] text-charcoal/85 border-b border-olive/10 pb-2"
                >
                  {ing.qty && (
                    <span className="font-mono tnum text-terracotta text-[13px] shrink-0 w-16">
                      {ing.qty}
                    </span>
                  )}
                  <span className="font-serif">{ing.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="md:col-span-8">
          <h2 className="font-serif italic text-olive text-2xl mb-4">Method</h2>
          <ol className="space-y-5 list-none counter-reset-method">
            {steps.map((step, i) => (
              <li
                key={i}
                className="flex items-baseline gap-5 text-charcoal/85 leading-[1.7] text-[16.5px]"
              >
                <span
                  aria-hidden
                  className="font-serif italic text-terracotta text-2xl shrink-0 w-8 tnum tabular-nums"
                >
                  {i + 1}.
                </span>
                <span className="font-serif">{step}</span>
              </li>
            ))}
          </ol>

          {(notes?.length || variations?.length) && (
            <div className="mt-10 pt-6 border-t border-olive/15 flex items-center gap-4 text-terracotta/60">
              <span aria-hidden className="block h-px flex-1 bg-current opacity-40" />
              <HerbMark kind="leaf" size={20} />
              <span aria-hidden className="block h-px flex-1 bg-current opacity-40" />
            </div>
          )}

          {notes?.length ? (
            <div className="mt-6">
              <h3 className="caps-label !tracking-[0.22em] text-terracotta mb-2">
                Notes
              </h3>
              <ul className="space-y-3">
                {notes.map((n, i) => (
                  <li
                    key={i}
                    className="font-serif italic text-charcoal/75 text-[15.5px] leading-snug"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {variations?.length ? (
            <div className="mt-6">
              <h3 className="caps-label !tracking-[0.22em] text-terracotta mb-2">
                Variations
              </h3>
              <ul className="space-y-3">
                {variations.map((v, i) => (
                  <li
                    key={i}
                    className="font-serif italic text-charcoal/75 text-[15.5px] leading-snug"
                  >
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
