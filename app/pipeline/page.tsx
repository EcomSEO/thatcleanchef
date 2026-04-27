import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbNav } from "@/components/editorial/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Pipeline — recipes in test",
  description:
    "What's on the stove right now and the recipes queued for the next four weeks. Public test kitchen.",
};

const onTheStove = [
  {
    title: "Lemon-roasted chickpeas with crumbled feta",
    chapter: "Vegetables",
    state: "Test 2 of 3",
    note: "The lemon balance is right; the feta is doing too much. Halving it next pass.",
  },
  {
    title: "Salmon, slow-cooked in olive oil with thyme",
    chapter: "Proteins",
    state: "Test 1 of 3",
    note: "Forty minutes at 135°F looks like the spot. Tomorrow we test 130°F to see if it still flakes.",
  },
  {
    title: "Yogurt sauce that goes on everything",
    chapter: "Sauces",
    state: "Test 3 of 3",
    note: "Final pass next week. Garlic balance was off; this round is salted overnight.",
  },
];

const queued = [
  { title: "Sheet-pan harissa cauliflower with tahini", chapter: "Vegetables", week: "Wk 18" },
  { title: "Brown-butter farro with mushrooms", chapter: "Grains & beans", week: "Wk 18" },
  { title: "Whole roast chicken, dry-brined", chapter: "Proteins", week: "Wk 19" },
  { title: "Anti-inflammatory smoothie pack", chapter: "Breakfast", week: "Wk 19" },
];

export default function PipelinePage() {
  return (
    <main>
      <section className="bg-surface border-b border-hairline">
        <div className="mx-auto max-w-7xl px-5 py-10 md:py-14">
          <BreadcrumbNav crumbs={[{ label: "Home", href: "/" }, { label: "Tools" }, { label: "Pipeline" }]} />
          <div className="mt-5 max-w-3xl">
            <span className="caps-label">Pipeline</span>
            <h1 className="h1-editorial mt-2 text-[36px] md:text-[44px] leading-[1.1] text-ink">
              What's in test right now.
            </h1>
            <p className="mt-3 text-body-md text-ink-2 leading-relaxed">
              We publish what we're working on, what's not working, and what's
              queued. Test kitchen in public.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-12 grid md:grid-cols-2 gap-10">
          <div>
            <span className="caps-label !text-rust">On the stove</span>
            <h2 className="mt-1 text-h2 font-semibold text-ink">In test this week</h2>
            <ul className="mt-5 space-y-5">
              {onTheStove.map((r) => (
                <li key={r.title} className="card p-5">
                  <div className="flex items-baseline justify-between gap-3 mb-1">
                    <span className="caps-label">{r.chapter}</span>
                    <span className="font-mono tnum text-body-sm text-rust">{r.state}</span>
                  </div>
                  <h3 className="text-h3 font-semibold text-ink leading-snug">{r.title}</h3>
                  <p className="mt-2 text-body-md text-ink-2 leading-relaxed">{r.note}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="caps-label">Queued</span>
            <h2 className="mt-1 text-h2 font-semibold text-ink">Next four weeks</h2>
            <ul className="mt-5 space-y-3">
              {queued.map((r) => (
                <li key={r.title} className="flex items-baseline gap-3 py-2 border-b border-hairline">
                  <span className="font-mono tnum text-body-sm text-ink-3 shrink-0">{r.week}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-body-md text-ink">{r.title}</h3>
                    <span className="text-body-sm text-ink-2">{r.chapter}</span>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/methodology" className="mt-6 inline-block text-body-sm text-sage-700 underline decoration-sage-100 underline-offset-2">
              How we test →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
