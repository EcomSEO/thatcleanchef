import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { medications } from "@/lib/content/medications";
import { LOCALES, isLocale, HREFLANG, type Locale } from "@/lib/content/i18n";
import { t } from "@/lib/content/translations";
import { localizedMedicationOneLiner } from "@/lib/content/translations-data";
import { TranslationPendingBanner } from "@/components/TranslationPendingBanner";
import { SITE } from "@/lib/content/site";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { KitchenRule } from "@/components/editorial/DotRule";

const NON_EN = LOCALES.filter((l) => l !== "en");

export function generateStaticParams() {
  const params: Array<{ slug: string; brand: string }> = [];
  for (const locale of NON_EN) {
    for (const m of medications) {
      params.push({ slug: locale, brand: m.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; brand: string }>;
}): Promise<Metadata> {
  const { slug: localeSlug, brand } = await params;
  if (!isLocale(localeSlug) || localeSlug === "en") return {};
  const locale = localeSlug as Locale;
  const med = medications.find((m) => m.slug === brand);
  if (!med) return {};
  const oneLiner = localizedMedicationOneLiner(med.slug, locale, med.oneLiner);
  const url = `${SITE.url}/${locale}/medications/${med.slug}`;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[HREFLANG[l]] = l === "en" ? `${SITE.url}/medications/${med.slug}` : `${SITE.url}/${l}/medications/${med.slug}`;
  }
  languages["x-default"] = `${SITE.url}/medications/${med.slug}`;
  return {
    title: `${med.brand} (${med.generic}) — ${SITE.name}`,
    description: oneLiner,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "article",
      url,
      title: `${med.brand} (${med.generic})`,
      description: oneLiner,
      siteName: SITE.name,
      locale: HREFLANG[locale],
    },
  };
}

export default async function LocalizedMedicationPage({
  params,
}: {
  params: Promise<{ slug: string; brand: string }>;
}) {
  const { slug: localeSlug, brand } = await params;
  if (!isLocale(localeSlug) || localeSlug === "en") notFound();
  const locale = localeSlug as Locale;
  const med = medications.find((m) => m.slug === brand);
  if (!med) notFound();
  const strings = t(locale);
  const oneLiner = localizedMedicationOneLiner(med.slug, locale, med.oneLiner);

  return (
    <main>
      <section className="border-b border-olive/10">
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-14 md:pb-20">
          <Link href={`/${locale}`} className="caps-label text-stone hover:text-terracotta">
            &larr; {strings.navHome}
          </Link>
          <div className="mt-8">
            <Eyebrow tone="terracotta">{strings.navMedications}</Eyebrow>
            <h1 className="display-headline text-olive mt-3 text-[2.5rem] md:text-[3.6rem] leading-[1.02]">
              {med.brand}
            </h1>
            <p className="caps-label text-stone mt-3 tnum">{med.generic} &middot; {med.drugClass}</p>
            <p className="mt-6 font-serif italic text-xl md:text-2xl text-charcoal/80 max-w-2xl leading-[1.4]">
              {oneLiner}
            </p>
          </div>
          <KitchenRule className="mt-14" drawIn />
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6">
        <TranslationPendingBanner locale={locale} englishHref={`/medications/${med.slug}`} />
      </div>

      <section className="border-b border-olive/10">
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
          <Eyebrow tone="sage">{strings.medicationsHeading}</Eyebrow>
          <p className="mt-4 text-[15px] text-charcoal/85 leading-relaxed">
            {strings.medicationsDek}
          </p>
          <Link
            href={`/${locale}`}
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 bg-olive text-cream rounded-sm hover:bg-terracotta transition text-[15px]"
          >
            {strings.ctaBrowseRecipes} &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
