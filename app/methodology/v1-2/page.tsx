import type { Metadata } from "next";
import Link from "next/link";
import { ChapterDivider } from "@/components/editorial/ChapterDivider";
import { HerbMark } from "@/components/editorial/HerbMark";

export const metadata: Metadata = {
  title: "What We're Testing — Methodology Revision 1.2",
  description:
    "A working list of revisions to our recipe method, our Nutrition Ledger, and our process. Updated as the cookbook is written.",
};

const revisions = [
  {
    n: 1,
    title: "Switching to weight-first ingredient lists.",
    body:
      "Volumes are convenient; weights are accurate. Starting with the next batch of recipes, every dry ingredient over a tablespoon is listed in grams first, with the cup-and-spoon equivalent noted in parens. Liquids stay in cups for now.",
  },
  {
    n: 2,
    title: "Honest prep time = clock time, dishes included.",
    body:
      "If the broth reduces unattended for twenty minutes while you do other things, that twenty minutes counts. We do not subtract it. The number on the page is the number on your stove.",
  },
  {
    n: 3,
    title: "Sodium ranges instead of fixed numbers.",
    body:
      "Salt is the most variable ingredient in any kitchen. We are testing publishing a sodium range (low end: only seasoned at the start; high end: finished at the table) instead of a single number, and showing the working out.",
  },
  {
    n: 4,
    title: "Pinterest-tall image deferred to v2.",
    body:
      "We are not shipping Pinterest-tall photography until the cover photography is right. The 1000\u00D71500 slot is reserved on every recipe page; the photo follows.",
  },
  {
    n: 5,
    title: "Margin notes as a body convention.",
    body:
      "Tested across five recipes: a small italic aside in the right margin reads as a chef talking, not a footnote. Keeping it. Three to four per recipe maximum, never more.",
  },
];

export const dynamic = "force-static";

export default function MethodologyV12Page() {
  return (
    <main>
      <ChapterDivider
        number={101}
        name="What We're Testing"
        epigraph="Revisions in flight. The page is open."
        mark="pepper"
        compact
      />

      <article className="mx-auto max-w-2xl px-6 py-16 md:py-20">
        <div className="caps-label !tracking-[0.32em] text-stone text-center mb-3">
          Revision 1.2
        </div>
        <p className="font-serif italic text-charcoal/80 text-center text-lg max-w-md mx-auto leading-snug mb-12">
          A printed cookbook locks at the moment of printing. A working
          cookbook does not. These are the live revisions.
        </p>

        <ol className="space-y-12 list-none">
          {revisions.map((r) => (
            <li key={r.n} className="grid grid-cols-[3rem_1fr] gap-5 items-start">
              <span className="font-serif italic text-terracotta text-3xl tnum leading-none">
                {r.n}.
              </span>
              <div>
                <h3 className="font-serif italic text-olive text-2xl mb-2 leading-tight">
                  {r.title}
                </h3>
                <p className="font-serif text-charcoal/85 text-[16px] leading-[1.75]">
                  {r.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="my-12 flex items-center justify-center gap-4 text-sage/60">
          <span aria-hidden className="block h-px w-16 bg-current opacity-50" />
          <HerbMark kind="wheat" size={20} />
          <span aria-hidden className="block h-px w-16 bg-current opacity-50" />
        </div>

        <p className="font-serif italic text-charcoal/75 text-[15.5px] leading-relaxed text-center">
          See also{" "}
          <Link
            href="/methodology"
            className="text-terracotta hover:text-terracotta-deep underline decoration-terracotta/40 underline-offset-4"
          >
            Our Approach
          </Link>{" "}
          for the founding rules, or{" "}
          <Link
            href="/pipeline"
            className="text-terracotta hover:text-terracotta-deep underline decoration-terracotta/40 underline-offset-4"
          >
            the Pipeline
          </Link>{" "}
          for what is on the test stove right now.
        </p>
      </article>
    </main>
  );
}
