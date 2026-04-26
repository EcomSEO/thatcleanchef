import Link from "next/link";
import { CookbookCover } from "@/components/editorial/CookbookCover";
import { ChapterTOC } from "@/components/editorial/ChapterTOC";
import { ChapterDivider } from "@/components/editorial/ChapterDivider";
import { IngredientIndex } from "@/components/editorial/IngredientIndex";
import { HerbMark } from "@/components/editorial/HerbMark";
import { chapters, ingredientIndex } from "@/lib/content/cookbook";
import { getDict } from "@/lib/i18n/locales";
import { EmailCapture } from "@/components/EmailCapture";
import { Roman } from "@/components/editorial/Roman";

export default function HomePage() {
  const t = getDict("en");
  // The home page only previews the index — first 24 entries, with a
  // link out to the full /ingredients route for the full A-Z list.
  const indexPreview = ingredientIndex.slice(0, 24);

  return (
    <main>
      {/* === COVER ============================================================ */}
      <CookbookCover
        title={t.coverTitle}
        subtitle={t.coverSubtitle}
        edition={t.edition}
        byline={t.coverByline}
      />

      {/* === FRONT-MATTER NOTE FROM THE KITCHEN ============================== */}
      <section className="border-y border-olive/15 bg-cream-deep/20">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-24">
          <div className="caps-label !tracking-[0.32em] text-stone text-center mb-6">
            Foreword
          </div>
          <h2 className="font-serif italic text-olive text-3xl md:text-4xl text-center leading-tight tracking-tight">
            {t.introHeading}
          </h2>
          <div className="my-8 flex items-center justify-center gap-4 text-terracotta/60">
            <span aria-hidden className="block h-px w-12 bg-current opacity-50" />
            <HerbMark kind="garlic" size={22} />
            <span aria-hidden className="block h-px w-12 bg-current opacity-50" />
          </div>
          <p className="font-serif text-charcoal/85 text-[17.5px] leading-[1.85] drop-cap">
            {t.introBody}
          </p>
        </div>
      </section>

      {/* === TABLE OF CONTENTS — the dominant nav ============================= */}
      <div id="contents">
        <ChapterTOC chapters={chapters} heading={t.contents} />
      </div>

      {/* === CHAPTER I divider preview — the cookbook page-break feel ======== */}
      <ChapterDivider
        number={1}
        name="The Fundamentals"
        epigraph="Salt, fat, acid, heat — and the patience to let one thing finish before the next begins."
        mark="knife"
      />

      {/* === A SAMPLE FROM THE INGREDIENT INDEX ============================== */}
      <section className="border-t border-olive/15 bg-paper">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="text-center mb-10">
            <div className="caps-label !tracking-[0.32em] text-stone mb-3">
              Back Matter, abridged
            </div>
            <h2 className="font-serif italic text-olive text-3xl md:text-4xl leading-tight">
              The first twenty-four entries.
            </h2>
            <p className="mt-4 font-serif italic text-charcoal/70 max-w-lg mx-auto leading-snug">
              The full A-to-Z lives in the back of the book. This is the
              opening of the index — a way to find a recipe by what you
              already have on the counter.
            </p>
          </div>

          <div className="columns-1 md:columns-2 gap-12 mb-10">
            {indexPreview.map((e) => (
              <div key={e.name} className="flex items-baseline gap-2 mb-2 break-inside-avoid">
                <Link
                  href={e.href}
                  className="font-serif text-olive hover:text-terracotta transition text-[16px] tracking-tight"
                >
                  {e.name}
                </Link>
                <span
                  aria-hidden
                  className="flex-1 mx-1 border-b border-dotted border-olive/25 translate-y-[-4px]"
                />
                <span className="font-serif italic text-stone tnum text-sm">
                  {e.recipeCount}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/ingredients"
              className="inline-flex items-center gap-2 font-serif italic text-terracotta hover:text-terracotta-deep transition text-lg"
            >
              Open the full index
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === HOW THIS COOKBOOK IS WRITTEN — methodology + pipeline =========== */}
      <section className="border-t border-olive/15 bg-cream-deep/20">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
          <div className="text-center mb-10">
            <div className="caps-label !tracking-[0.32em] text-stone mb-4">
              Colophon
            </div>
            <h2 className="font-serif italic text-olive text-3xl md:text-4xl leading-tight">
              How this cookbook is written.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Roman n={1} size="lg" />
              <h3 className="mt-3 font-serif italic text-olive text-2xl mb-3">
                {t.approach}
              </h3>
              <p className="font-serif text-charcoal/80 text-[16px] leading-[1.8]">
                {t.approachBody}
              </p>
              <Link
                href="/methodology"
                className="mt-5 inline-flex items-center gap-1.5 font-serif italic text-terracotta hover:text-terracotta-deep transition text-[15px]"
              >
                Read the full method
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
            <div>
              <Roman n={2} size="lg" />
              <h3 className="mt-3 font-serif italic text-olive text-2xl mb-3">
                {t.whatWereTesting}
              </h3>
              <p className="font-serif text-charcoal/80 text-[16px] leading-[1.8]">
                A small test kitchen. Three takes per recipe before it earns
                a page. We publish what is working, what is not, and what we
                are still figuring out. The list is short on purpose.
              </p>
              <Link
                href="/methodology/v1-2"
                className="mt-5 inline-flex items-center gap-1.5 font-serif italic text-terracotta hover:text-terracotta-deep transition text-[15px]"
              >
                See the current revisions
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-olive/15 text-center">
            <Link
              href="/pipeline"
              className="font-serif italic text-olive hover:text-terracotta transition text-lg"
            >
              {t.pipeline}
              <span aria-hidden className="ml-2">&rarr;</span>
            </Link>
            <p className="mt-2 caps-label text-stone">
              The recipes due in the next four weeks.
            </p>
          </div>
        </div>
      </section>

      {/* === DISPATCH (newsletter) — kept, restyled as cookbook subscription = */}
      <section className="bg-paper border-t border-olive/15">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-24 text-center">
          <div className="caps-label !tracking-[0.32em] text-stone mb-4">
            Subscribers&apos; Plate
          </div>
          <h2 className="font-serif italic text-olive text-3xl md:text-4xl leading-tight">
            One recipe a week, in your inbox.
          </h2>
          <p className="mt-5 font-serif italic text-charcoal/75 leading-snug max-w-md mx-auto">
            A single recipe Tuesday morning, the way you would receive a
            handwritten card from a friend who happens to cook. Free
            14-day starter kit when you sign up.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <EmailCapture />
          </div>
        </div>
      </section>

      {/* === COLOPHON CLOSE ================================================== */}
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-6 py-12 text-center">
          <div className="flex items-center justify-center gap-4 text-sage/60 mb-4">
            <span aria-hidden className="block h-px w-16 bg-current opacity-50" />
            <HerbMark kind="leaf" size={18} />
            <span aria-hidden className="block h-px w-16 bg-current opacity-50" />
          </div>
          <p className="font-serif italic text-stone text-[14px] leading-snug">
            Set in Cormorant Garamond and Fraunces.<br />
            Printed in cream and cocoa. Sage on the title page.
          </p>
        </div>
      </section>
    </main>
  );
}
