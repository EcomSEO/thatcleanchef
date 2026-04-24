import Link from "next/link";
import type { Metadata } from "next";
import { hubs, getHub } from "@/lib/content/hubs";
import { latestPosts } from "@/lib/content/posts";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule } from "@/components/editorial/DotRule";

export const metadata: Metadata = {
  title: "Off the menu — page not found",
  description:
    "We can't find that recipe. Try one of the five hubs or head back to the pass.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const nowCooking = latestPosts(3);
  return (
    <main>
      <section className="border-b border-olive/10">
        <div className="mx-auto max-w-3xl px-6 pt-16 md:pt-24 pb-12 md:pb-16">
          <Eyebrow tone="terracotta">404 &middot; Off the menu</Eyebrow>
          <h1 className="display-headline text-olive mt-5 text-[2.6rem] sm:text-5xl md:text-[3.75rem] leading-[1.02]">
            We can&apos;t find that{" "}
            <em className="not-italic text-terracotta">recipe</em>.
          </h1>

          <p className="font-serif italic text-olive/80 text-xl md:text-2xl mt-6 leading-[1.35] max-w-2xl">
            &mdash; but here&apos;s what the kitchen is cooking today.
          </p>

          <div className="prose mt-8">
            <p className="text-charcoal/85">
              The URL you tried doesn&apos;t match anything on the pass. Either
              the recipe moved during edits, the link is mistyped, or we
              haven&apos;t shot it yet &mdash; we don&apos;t publish a recipe
              until the photography is in.
            </p>
            <p className="text-charcoal/80">
              Start with a hub below, or head back to the home page and
              browse what&apos;s currently in service.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/" className="btn-primary">
              Back to the pass
              <span aria-hidden>&rarr;</span>
            </Link>
            <Link href="/guides/protein-forward" className="btn-secondary">
              High-Protein recipes
            </Link>
          </div>
        </div>
      </section>

      {/* Chef improvising — latest 3 from the pass */}
      {nowCooking.length > 0 && (
        <section className="border-b border-olive/10">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
              <div>
                <Eyebrow tone="terracotta">What the kitchen is cooking</Eyebrow>
                <h2 className="font-serif italic text-3xl md:text-[2.15rem] text-olive mt-3 leading-tight">
                  The last three plates off the pass.
                </h2>
              </div>
              <span className="caps-label text-stone">
                Chef&apos;s improvisation
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-0 border-t border-olive/10">
              {nowCooking.map((p) => {
                const hub = getHub(p.hub);
                return (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="group p-6 border-b md:border-b-0 md:border-r border-olive/10 last:border-r-0 hover:bg-cream-deep/40 transition"
                  >
                    <div className="photo-slot aspect-[4/3] rounded-sm mb-4 relative overflow-hidden border border-olive/10" />
                    <div className="caps-label text-stone">
                      {hub?.shortName}
                    </div>
                    <h3 className="font-serif text-lg text-olive leading-snug mt-2 group-hover:text-terracotta transition">
                      {p.title}
                    </h3>
                    {p.nutritionLedger && (
                      <div className="mt-3 flex gap-4 font-mono text-[12px] text-olive">
                        <span>
                          <b className="text-terracotta">
                            {p.nutritionLedger.calories}
                          </b>{" "}
                          kcal
                        </span>
                        <span>
                          <b className="text-terracotta">
                            {p.nutritionLedger.proteinG}g
                          </b>{" "}
                          P
                        </span>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="border-b border-olive/10">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <Eyebrow tone="sage">Try a hub</Eyebrow>
              <h2 className="font-serif text-3xl md:text-[2.15rem] text-olive mt-3 leading-tight">
                Five sections. A hundred and fifty recipes on the way.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-olive/10">
            {hubs.map((hub, i) => (
              <Link
                key={hub.slug}
                href={`/guides/${hub.slug}`}
                className="group relative flex flex-col p-6 border-b lg:border-b-0 lg:border-r border-olive/10 last:border-r-0 hover:bg-cream-deep/50 transition"
              >
                <span className="rank-numeral !text-4xl mb-3 !text-terracotta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl text-olive leading-tight mb-2">
                  {hub.name}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed flex-1">
                  {hub.oneLiner}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-terracotta group-hover:text-olive text-xs font-medium uppercase tracking-[0.14em]">
                  Open hub
                  <span aria-hidden>&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-10">
          <DotRule drawIn />
          <p className="text-center caps-label text-stone mt-6">
            404 &middot; Off the menu
          </p>
        </div>
      </section>
    </main>
  );
}
