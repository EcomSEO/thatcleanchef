import Link from "next/link";
import { hubs } from "@/lib/content/hubs";
import { Wordmark } from "./editorial/Wordmark";
import { SITE } from "@/lib/content/site";
import { MedicalDisclaimerFooter } from "./MedicalDisclaimerFooter";

/**
 * Comprehensive footer — clean medical-info shell. 4-col link grid + medical/
 * dietetic disclaimer + sister-site links + copyright.
 */
export function Footer() {
  return (
    <footer className="mt-24 bg-surface-tint border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-hairline">
          <div>
            <Wordmark size="lg" asLink={false} />
            <p className="mt-2 text-body-md text-ink-2 max-w-md">
              {SITE.tagline}
            </p>
          </div>
          <div className="max-w-md text-body-sm text-ink-2 leading-relaxed">
            Independent test kitchen. Recipes tested 3+ times in our kitchen,
            reviewed by registered dietitians with peptide-therapy expertise,
            USDA-cited Nutrition Ledger on every recipe.
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 mt-10">
          <div className="md:col-span-3">
            <h4 className="caps-label mb-4">Recipes</h4>
            <ul className="space-y-2 text-body-sm">
              {hubs.map((hub) => (
                <li key={hub.slug}>
                  <Link
                    href={`/guides/${hub.slug}`}
                    className="text-ink hover:text-sage-700 transition"
                  >
                    {hub.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="caps-label mb-4">Peptide context</h4>
            <ul className="space-y-2 text-body-sm">
              <li><Link href="/guides/glp1-friendly" className="text-ink hover:text-sage-700">GLP-1 friendly</Link></li>
              <li><Link href="/guides/muscle-preservation" className="text-ink hover:text-sage-700">Muscle preservation</Link></li>
              <li><Link href="/guides/anti-inflammatory-recovery" className="text-ink hover:text-sage-700">Anti-inflammatory recovery</Link></li>
              <li><Link href="/guides/cycle-nutrition" className="text-ink hover:text-sage-700">Cycle nutrition</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="caps-label mb-4">Ingredients</h4>
            <ul className="space-y-2 text-body-sm">
              <li><Link href="/ingredients" className="text-ink hover:text-sage-700">Vegetables</Link></li>
              <li><Link href="/ingredients" className="text-ink hover:text-sage-700">Proteins</Link></li>
              <li><Link href="/ingredients" className="text-ink hover:text-sage-700">Pantry & oils</Link></li>
              <li><Link href="/ingredients" className="text-ink hover:text-sage-700">A-Z index</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="caps-label mb-4">Company</h4>
            <ul className="space-y-2 text-body-sm">
              <li><Link href="/about" className="text-ink hover:text-sage-700">About the kitchen</Link></li>
              <li><Link href="/methodology" className="text-ink hover:text-sage-700">Methodology</Link></li>
              <li><Link href="/editorial-standards" className="text-ink hover:text-sage-700">Editorial standards</Link></li>
              <li><Link href="/pipeline" className="text-ink hover:text-sage-700">Pipeline</Link></li>
              <li><Link href="/newsletter" className="text-ink hover:text-sage-700">Newsletter</Link></li>
              <li><Link href="/contact" className="text-ink hover:text-sage-700">Contact</Link></li>
              <li><Link href="/affiliate-disclosure" className="text-ink hover:text-sage-700">Affiliate disclosure</Link></li>
              <li><Link href="/privacy" className="text-ink hover:text-sage-700">Privacy</Link></li>
              <li><Link href="/terms" className="text-ink hover:text-sage-700">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-hairline">
          <h4 className="caps-label mb-3">Sister sites</h4>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-body-sm">
            <li>
              <a href="https://larderlab-ecom-seo.vercel.app/" className="text-ink hover:text-sage-700" rel="noopener">
                larderlab — pantry & nutrition ledgers
              </a>
            </li>
            <li>
              <a href="https://injectcompass-ecom-seo.vercel.app/" className="text-ink hover:text-sage-700" rel="noopener">
                injectcompass — clinical health
              </a>
            </li>
          </ul>
        </div>

        <MedicalDisclaimerFooter />
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row justify-between gap-3 text-label-sm text-ink-2">
          <div>
            &copy;&nbsp;{new Date().getFullYear()} ThatCleanChef ·
            Independent test kitchen · No brand sponsorships.
          </div>
          <div>
            {SITE.service} · {SITE.issue}
          </div>
        </div>
      </div>
    </footer>
  );
}
