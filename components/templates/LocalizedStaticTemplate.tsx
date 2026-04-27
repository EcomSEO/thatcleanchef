import Link from "next/link";
import { type Locale } from "@/lib/content/i18n";
import { t } from "@/lib/content/translations";
import { TranslationPendingBanner } from "@/components/TranslationPendingBanner";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { KitchenRule } from "@/components/editorial/DotRule";

/**
 * Localized wrapper for editorial / static pages (about, team, terms,
 * privacy, cookies, impressum, affiliate-disclosure, editorial-standards).
 *
 * Renders the localized chrome (back-to-home, hero) + a TranslationPending
 * banner that links the canonical English page where the body content
 * lives. We intentionally do NOT translate the legal / editorial bodies —
 * those are jurisdiction-sensitive and demand a credentialed translator.
 */
export function LocalizedStaticTemplate({
  locale,
  englishHref,
  title,
  eyebrow,
  intro,
}: {
  locale: Locale;
  englishHref: string;
  title: string;
  eyebrow: string;
  intro: string;
}) {
  const strings = t(locale);
  return (
    <main>
      <section className="border-b border-olive/10">
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-14 md:pb-20">
          <Link href={`/${locale}`} className="caps-label text-stone hover:text-terracotta">
            &larr; {strings.navHome}
          </Link>
          <div className="mt-8">
            <Eyebrow tone="terracotta">{eyebrow}</Eyebrow>
            <h1 className="display-headline text-olive mt-3 text-[2.5rem] md:text-[3.6rem] leading-[1.02]">
              {title}
            </h1>
            <p className="mt-6 font-serif italic text-xl md:text-2xl text-charcoal/80 max-w-2xl leading-[1.4]">
              {intro}
            </p>
          </div>
          <KitchenRule className="mt-14" drawIn />
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-6">
        <TranslationPendingBanner locale={locale} englishHref={englishHref} />
      </div>
      <section className="border-b border-olive/10">
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
          <Link
            href={englishHref}
            className="inline-flex items-center gap-2 px-5 py-3 bg-olive text-cream rounded-sm hover:bg-terracotta transition text-[15px]"
          >
            {strings.labelSeeRecipe} &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
