import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { mealPlans } from "@/lib/content/meal-plans";
import { LOCALES, isLocale, HREFLANG, type Locale } from "@/lib/content/i18n";
import { t } from "@/lib/content/translations";
import {
  localizedMealPlanTitle,
  localizedMealPlanDescription,
} from "@/lib/content/translations-data";
import { TranslationPendingBanner } from "@/components/TranslationPendingBanner";
import { SITE } from "@/lib/content/site";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { KitchenRule } from "@/components/editorial/DotRule";

const NON_EN = LOCALES.filter((l) => l !== "en");

export function generateStaticParams() {
  const params: Array<{ slug: string; plan: string }> = [];
  for (const locale of NON_EN) {
    for (const p of mealPlans) {
      params.push({ slug: locale, plan: p.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; plan: string }>;
}): Promise<Metadata> {
  const { slug: localeSlug, plan } = await params;
  if (!isLocale(localeSlug) || localeSlug === "en") return {};
  const locale = localeSlug as Locale;
  const mp = mealPlans.find((p) => p.slug === plan);
  if (!mp) return {};
  const title = localizedMealPlanTitle(mp.slug, locale, mp.title);
  const description = localizedMealPlanDescription(mp.slug, locale, mp.description);
  const url = `${SITE.url}/${locale}/meal-plans/${mp.slug}`;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[HREFLANG[l]] = l === "en" ? `${SITE.url}/meal-plans/${mp.slug}` : `${SITE.url}/${l}/meal-plans/${mp.slug}`;
  }
  languages["x-default"] = `${SITE.url}/meal-plans/${mp.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: SITE.name,
      locale: HREFLANG[locale],
    },
  };
}

export default async function LocalizedMealPlanPage({
  params,
}: {
  params: Promise<{ slug: string; plan: string }>;
}) {
  const { slug: localeSlug, plan } = await params;
  if (!isLocale(localeSlug) || localeSlug === "en") notFound();
  const locale = localeSlug as Locale;
  const mp = mealPlans.find((p) => p.slug === plan);
  if (!mp) notFound();
  const strings = t(locale);
  const title = localizedMealPlanTitle(mp.slug, locale, mp.title);
  const description = localizedMealPlanDescription(mp.slug, locale, mp.description);

  return (
    <main>
      <section className="border-b border-olive/10">
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-14 md:pb-20">
          <Link href={`/${locale}`} className="caps-label text-stone hover:text-terracotta">
            &larr; {strings.navHome}
          </Link>
          <div className="mt-8">
            <Eyebrow tone="terracotta">{strings.navMealPlans}</Eyebrow>
            <h1 className="display-headline text-olive mt-3 text-[2.5rem] md:text-[3.6rem] leading-[1.02]">
              {title}
            </h1>
            <p className="caps-label text-stone mt-3">{mp.durationLabel}</p>
            <p className="mt-6 font-serif italic text-xl md:text-2xl text-charcoal/80 max-w-2xl leading-[1.4]">
              {description}
            </p>
          </div>
          <KitchenRule className="mt-14" drawIn />
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-6">
        <TranslationPendingBanner locale={locale} englishHref={`/meal-plans/${mp.slug}`} />
      </div>
      <section className="border-b border-olive/10">
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
          <Link
            href={`/meal-plans/${mp.slug}`}
            className="inline-flex items-center gap-2 px-5 py-3 bg-olive text-cream rounded-sm hover:bg-terracotta transition text-[15px]"
          >
            {strings.labelGetThePdf} &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
