import type { Metadata } from "next";
import { BreadcrumbNav } from "@/components/editorial/BreadcrumbNav";

export const metadata: Metadata = {
  title: "What we're testing — methodology rev. 1.2",
  description:
    "A working list of revisions to our recipe method, our Nutrition Ledger, and our process. Updated as the kitchen learns.",
};

const revisions = [
  {
    n: 1,
    title: "Switching to weight-first ingredient lists.",
    body: "Volumes are convenient; weights are accurate. Starting with the next batch of recipes, every dry ingredient over a tablespoon is listed in grams first, with the cup-and-spoon equivalent in parens. Liquids stay in cups for now.",
  },
  {
    n: 2,
    title: "Honest prep time = clock time, dishes included.",
    body: "If the broth reduces unattended for twenty minutes while you do other things, that twenty minutes counts. We do not subtract it. The number on the page is the number on your stove.",
  },
  {
    n: 3,
    title: "Sodium ranges instead of fixed numbers.",
    body: "Salt is the most variable ingredient in any kitchen. We are testing publishing a sodium range (low end: only seasoned at the start; high end: finished at the table) instead of a single number, and showing the working out.",
  },
];

export default function RevisionsPage() {
  return (
    <main>
      <section className="bg-surface border-b border-hairline">
        <div className="mx-auto max-w-7xl px-5 py-10 md:py-14">
          <BreadcrumbNav crumbs={[{ label: "Home", href: "/" }, { label: "Methodology", href: "/methodology" }, { label: "Rev. 1.2" }]} />
          <div className="mt-5 max-w-3xl">
            <span className="caps-label">Methodology · Rev 1.2</span>
            <h1 className="h1-editorial mt-2 text-[36px] md:text-[44px] leading-[1.1] text-ink">
              What we're testing.
            </h1>
            <p className="mt-3 text-body-md text-ink-2 leading-relaxed">
              A working list of revisions to our method. Updated as the kitchen learns.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-12">
        <ol className="space-y-8">
          {revisions.map((r) => (
            <li key={r.n} className="grid grid-cols-[36px_1fr] gap-4">
              <span aria-hidden className="grid place-items-center w-8 h-8 rounded-full bg-sage-50 text-sage-700 font-mono tnum text-[14px] font-semibold border border-sage-100">
                {r.n}
              </span>
              <div>
                <h2 className="text-h3 font-semibold text-ink leading-snug">{r.title}</h2>
                <p className="mt-2 text-body-md text-ink-2 leading-relaxed">{r.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
