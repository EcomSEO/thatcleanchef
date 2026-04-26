import type { Metadata } from "next";
import Link from "next/link";
import { ChapterDivider } from "@/components/editorial/ChapterDivider";
import { HerbMark } from "@/components/editorial/HerbMark";
import { Roman } from "@/components/editorial/Roman";

export const metadata: Metadata = {
  title: "Pipeline — recipes in test",
  description:
    "The recipes in test right now and the ones queued for the next four weeks. The cookbook, written in public.",
};

const onTheStove = [
  {
    title: "Lemon-roasted chickpeas with crumbled feta",
    chapter: "II. Vegetables",
    state: "Test 2 of 3",
    note:
      "The lemon balance is right; the feta is doing too much. Halving it next pass.",
  },
  {
    title: "Salmon, slow-cooked in olive oil with thyme",
    chapter: "IV. Proteins",
    state: "Test 1 of 3",
    note:
      "Forty minutes at 135°F looks like the spot. Tomorrow we test 130°F to see if it still flakes.",
  },
  {
    title: "Yogurt sauce that goes on everything",
    chapter: "V. Sauces",
    state: "Test 3 of 3",
    note:
      "Locked. Photo and method writeup this week. Will publish in chapter V.",
  },
];

const queued = [
  { title: "Anchovy butter for any vegetable", chapter: "V. Sauces", week: "Week of May 5" },
  { title: "Brown rice that doesn't gum up", chapter: "III. Grains", week: "Week of May 5" },
  { title: "Pickled red onion (the only recipe you need)", chapter: "VI. Preserving", week: "Week of May 12" },
  { title: "Quick-roast cauliflower steaks", chapter: "II. Vegetables", week: "Week of May 12" },
  { title: "Whole roast chicken, schmaltz reserved", chapter: "IV. Proteins", week: "Week of May 19" },
  { title: "Chickpea-yogurt soup with crispy garlic", chapter: "III. Grains", week: "Week of May 19" },
  { title: "Salt-cured Meyer lemons", chapter: "VI. Preserving", week: "Week of May 26" },
  { title: "Herb oil — basil, mint, tarragon, sage", chapter: "V. Sauces", week: "Week of May 26" },
];

export default function PipelinePage() {
  return (
    <main>
      <ChapterDivider
        number={102}
        name="The Pipeline"
        epigraph="On the test stove right now, and the next four weeks."
        mark="pepper"
        compact
      />

      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        {/* On the stove */}
        <section className="mb-16">
          <div className="flex items-baseline gap-4 mb-8">
            <Roman n={1} size="lg" />
            <h2 className="font-serif italic text-olive text-3xl">
              On the test stove
            </h2>
          </div>
          <ol className="space-y-8 list-none">
            {onTheStove.map((r, i) => (
              <li
                key={r.title}
                className="border-b border-olive/12 pb-7 last:border-b-0"
              >
                <div className="caps-label !tracking-[0.22em] text-terracotta mb-1.5">
                  {r.state} &middot; {r.chapter}
                </div>
                <h3 className="font-serif italic text-olive text-2xl leading-tight tracking-tight mb-2">
                  {r.title}
                </h3>
                <p className="font-serif italic text-charcoal/75 text-[15.5px] leading-snug">
                  {r.note}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <div className="my-10 flex items-center justify-center gap-4 text-sage/60">
          <span aria-hidden className="block h-px w-12 bg-current opacity-50" />
          <HerbMark kind="rosemary" size={20} />
          <span aria-hidden className="block h-px w-12 bg-current opacity-50" />
        </div>

        {/* Queued */}
        <section>
          <div className="flex items-baseline gap-4 mb-8">
            <Roman n={2} size="lg" />
            <h2 className="font-serif italic text-olive text-3xl">
              Queued for the next four weeks
            </h2>
          </div>
          <ol className="space-y-1 list-none">
            {queued.map((r, i) => (
              <li
                key={r.title}
                className="toc-row py-4 border-b border-olive/12 last:border-b-0"
              >
                <div className="flex items-baseline gap-5 flex-wrap">
                  <span className="font-serif italic text-terracotta/70 tnum text-base shrink-0 w-10">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="font-serif text-olive text-lg tracking-tight">
                    {r.title}
                  </span>
                  <span
                    aria-hidden
                    className="toc-leader flex-1 mx-3 border-b border-dotted border-olive/30 translate-y-[-4px] hidden sm:block"
                  />
                  <span className="caps-label text-stone shrink-0">
                    {r.week} &middot; {r.chapter}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <p className="mt-12 pt-8 border-t border-olive/15 font-serif italic text-charcoal/75 text-[15.5px] leading-relaxed text-center">
          See the rules in{" "}
          <Link
            href="/methodology"
            className="text-terracotta hover:text-terracotta-deep underline decoration-terracotta/40 underline-offset-4"
          >
            Our Approach
          </Link>{" "}
          and the in-flight revisions in{" "}
          <Link
            href="/methodology/v1-2"
            className="text-terracotta hover:text-terracotta-deep underline decoration-terracotta/40 underline-offset-4"
          >
            What We&apos;re Testing
          </Link>
          .
        </p>
      </article>
    </main>
  );
}
