import Link from "next/link";
import { hubs } from "@/lib/content/hubs";
import { Wordmark } from "./editorial/Wordmark";
import { SITE } from "@/lib/content/site";
import { MedicalDisclaimerFooter } from "./MedicalDisclaimerFooter";
import { CookiePreferencesLink } from "./CookiePreferencesLink";
import { RegulatoryAuthoritiesStrip } from "./RegulatoryAuthoritiesStrip";
import { OwnedShopWaitlist } from "./OwnedShopWaitlist";

/**
 * Footer — re-skinned 2026-04-29 against Stitch design.
 *
 * Forest-green block (deep, warm green) with cream type. Owned-shop
 * pre-launch waitlist as the band above the link grid; 4-column link
 * grid; regulatory + medical disclaimer; copyright bar.
 *
 * Sister-site links remain forbidden under the 2026-04-29 operator-isolation
 * lock — replaced years ago with the owned-shop waitlist.
 */
export function Footer() {
  return (
    <footer className="mt-24 bg-forest text-cream">
      {/* Owned-shop waitlist band (forest tint, before the link grid) */}
      <div className="border-b border-cream/10">
        <div className="mx-auto max-w-7xl px-6 pt-14 pb-12">
          <OwnedShopWaitlist variant="footer" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-14 pb-10">
        {/* Top row: wordmark + tagline + trust line */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-cream/10">
          <div>
            <div className="text-cream">
              <Wordmark size="lg" asLink={false} />
            </div>
            <p className="mt-3 font-serif italic text-[18px] text-cream/85 max-w-md leading-relaxed">
              {SITE.tagline}
            </p>
          </div>
          <div className="max-w-md text-body-sm text-cream/70 leading-relaxed">
            Independent test kitchen. Recipes tested 3+ times in our kitchen,
            reviewed by a registered dietitian, USDA-cited Nutrition Ledger on
            every recipe.
          </div>
        </div>

        {/* 4-column link grid */}
        <div className="grid md:grid-cols-12 gap-10 mt-12">
          <FooterCol heading="Recipes">
            {hubs.map((hub) => (
              <FooterLink key={hub.slug} href={`/guides/${hub.slug}`}>
                {hub.shortName}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol heading="Meal plans">
            <FooterLink href="/meal-plans/14-day-anti-inflammatory">
              Anti-inflammatory · 14 days
            </FooterLink>
            <FooterLink href="/meal-plans/7-day-mediterranean">
              Mediterranean · 7 days
            </FooterLink>
            <FooterLink href="/meal-plans/7-day-high-protein">
              High-protein · 7 days
            </FooterLink>
            <FooterLink href="/recipes">Full recipe index</FooterLink>
          </FooterCol>

          <FooterCol heading="Ingredients">
            <FooterLink href="/ingredients">Vegetables</FooterLink>
            <FooterLink href="/ingredients">Proteins</FooterLink>
            <FooterLink href="/ingredients">Pantry &amp; oils</FooterLink>
            <FooterLink href="/ingredients">A–Z index</FooterLink>
          </FooterCol>

          <FooterCol heading="Company">
            <FooterLink href="/about">About the kitchen</FooterLink>
            <FooterLink href="/team">The team</FooterLink>
            <FooterLink href="/methodology">Methodology</FooterLink>
            <FooterLink href="/editorial-standards">Editorial standards</FooterLink>
            <FooterLink href="/pipeline">Test kitchen</FooterLink>
            <FooterLink href="/newsletter">Newsletter</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/affiliate-disclosure">Affiliate disclosure</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
            <FooterLink href="/cookies">Cookies</FooterLink>
            <FooterLink href="/impressum">Impressum</FooterLink>
            <li>
              <CookiePreferencesLink />
            </li>
          </FooterCol>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 [&_*]:!text-cream/70">
          <RegulatoryAuthoritiesStrip />
        </div>

        <div className="mt-2 [&_*]:!text-cream/65 [&_a]:!underline [&_a]:!decoration-cream/30 [&_a:hover]:!decoration-cream">
          <MedicalDisclaimerFooter />
        </div>
      </div>

      <div className="border-t border-cream/10 bg-forest-deep">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row justify-between gap-3 text-[12px] text-cream/65 font-mono tracking-wider">
          <div>
            ©&nbsp;{new Date().getFullYear()} ThatCleanChef · Independent test
            kitchen · No brand sponsorships.
          </div>
          <div className="uppercase">
            {SITE.service} · {SITE.issue}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="md:col-span-3">
      <h4 className="text-[11px] font-mono uppercase tracking-[0.18em] text-cream/55 mb-5">
        {heading}
      </h4>
      <ul className="space-y-2.5 text-body-sm">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-cream/85 hover:text-cream hover:underline decoration-cream/40 underline-offset-4 transition"
      >
        {children}
      </Link>
    </li>
  );
}
