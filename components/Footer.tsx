import Link from "next/link";
import { hubs } from "@/lib/content/hubs";
import { Wordmark } from "./editorial/Wordmark";
import { SITE } from "@/lib/content/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-cream-deep/50 border-t border-olive/12">
      {/* Masthead row */}
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-olive/15">
          <div>
            <Wordmark size="lg" asLink={false} />
            <p className="mt-3 font-serif text-lg text-olive italic max-w-md">
              {SITE.tagline}
            </p>
          </div>
          <div className="max-w-md text-sm text-stone leading-relaxed">
            A small kitchen testing recipes in home equipment, timing them
            honestly, and posting the Nutrition Ledger. No grandmother stories,
            no diet scolding, no ads between ingredients.
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 mt-10">
          <div className="md:col-span-5">
            <h4 className="eyebrow text-stone mb-4">The five hubs</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {hubs.map((hub, i) => (
                <li key={hub.slug}>
                  <Link
                    href={`/guides/${hub.slug}`}
                    className="group flex items-center gap-2 text-olive hover:text-terracotta transition"
                  >
                    <span className="rank-numeral !text-sm !text-terracotta/50 group-hover:!text-terracotta tnum">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px]">{hub.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow text-stone mb-4">The book</h4>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <Link href="/#contents" className="text-olive hover:text-terracotta transition">
                  Contents
                </Link>
              </li>
              <li>
                <Link href="/ingredients" className="text-olive hover:text-terracotta transition">
                  Ingredient Index
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-olive hover:text-terracotta transition">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-olive hover:text-terracotta transition">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/methodology/v1-2" className="text-olive hover:text-terracotta transition">
                  What We&apos;re Testing
                </Link>
              </li>
              <li>
                <Link href="/pipeline" className="text-olive hover:text-terracotta transition">
                  Pipeline
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-olive hover:text-terracotta transition">
                  About the kitchen
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-olive hover:text-terracotta transition">
                  Contact &amp; tips
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="eyebrow text-stone mb-4">Fine print</h4>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <Link href="/affiliate-disclosure" className="text-olive hover:text-terracotta transition">
                  Affiliate disclosure
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-olive hover:text-terracotta transition">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-olive hover:text-terracotta transition">
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Imprint strip */}
      <div className="border-t border-olive/10">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col md:flex-row justify-between gap-3 text-[11px] tracking-[0.14em] uppercase text-stone">
          <div className="flex items-center gap-3">
            <span>
              &copy;&nbsp;{new Date().getFullYear()} ThatCleanChef
            </span>
            <span aria-hidden className="text-terracotta/50">&middot;</span>
            <span>
              {SITE.service} &middot; {SITE.issue}
            </span>
          </div>
          <div className="normal-case tracking-normal text-stone/80 text-xs max-w-xl md:text-right leading-relaxed">
            A cookbook for cooking, not a clinic. Recipes here are food, not
            medical advice. Commissions on some links help pay for the
            groceries we burn in testing &mdash; they never change a recipe,
            never move a page up, and never affect the Nutrition Ledger.
          </div>
        </div>
      </div>
    </footer>
  );
}
