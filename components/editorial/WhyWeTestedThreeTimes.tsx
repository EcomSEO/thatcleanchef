import { Eyebrow } from "./Eyebrow";

/**
 * "Why we tested this three times" — the editorial module that anchors the
 * E-E-A-T (experience) signal on flagship recipes.
 *
 * Every flagship recipe in `lib/content/posts.ts` carries a `testNotes` field
 * that lists what changed between tests. This component renders those changes
 * as a numbered diff: Test 1 → Test 2 → Test 3.
 *
 * If a recipe doesn't have testNotes, the component renders nothing — never
 * fake the experience signal.
 */
export type TestNote = {
  test: 1 | 2 | 3 | 4;
  /** What we tried in this test — the variable. */
  triedThis: string;
  /** What happened — observed result. */
  whatHappened: string;
  /** What we changed for the next test. */
  changedThis: string;
};

export function WhyWeTestedThreeTimes({
  notes,
  recipeName,
}: {
  notes?: TestNote[];
  recipeName?: string;
}) {
  if (!notes || notes.length === 0) return null;
  return (
    <section
      id="why-we-tested-three-times"
      className="my-14 ledger-card p-8 md:p-10 relative bg-paper border border-olive/15 rounded-sm"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-terracotta" />
      <Eyebrow tone="terracotta">Behind the recipe</Eyebrow>
      <h2 className="font-serif text-[1.8rem] md:text-[2.1rem] text-olive leading-tight mt-3">
        Why we tested {recipeName ? `this ${recipeName}` : "this recipe"}{" "}
        {notes.length} times.
      </h2>
      <p className="mt-4 max-w-[62ch] text-[15.5px] text-charcoal/85 leading-relaxed">
        Every flagship recipe on this site goes through at least three rounds
        of kitchen testing before publication. We log what changed between
        tests so you can see the recipe&apos;s evolution &mdash; and so we
        can&apos;t quietly drop the failures.
      </p>
      <ol className="mt-8 space-y-8">
        {notes.map((n) => (
          <li key={n.test} className="grid md:grid-cols-[auto_1fr] gap-6">
            <span className="rank-numeral !text-[2.4rem] leading-none">
              {String(n.test).padStart(2, "0")}
            </span>
            <div>
              <p className="caps-label text-terracotta">Test {n.test}</p>
              <dl className="mt-3 space-y-3 text-[15px] leading-relaxed">
                <div>
                  <dt className="text-stone caps-label text-[11px]">
                    What we tried
                  </dt>
                  <dd className="text-charcoal/90 mt-1">{n.triedThis}</dd>
                </div>
                <div>
                  <dt className="text-stone caps-label text-[11px]">
                    What happened
                  </dt>
                  <dd className="text-charcoal/90 mt-1">{n.whatHappened}</dd>
                </div>
                <div>
                  <dt className="text-stone caps-label text-[11px]">
                    What we changed
                  </dt>
                  <dd className="text-olive mt-1 italic">{n.changedThis}</dd>
                </div>
              </dl>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
