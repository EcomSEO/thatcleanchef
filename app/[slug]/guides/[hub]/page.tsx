import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getHub, hubs } from "@/lib/content/hubs";
import { postsByHub } from "@/lib/content/posts";
import { LOCALES, isLocale, HREFLANG, type Locale } from "@/lib/content/i18n";
import { t } from "@/lib/content/translations";
import {
  localizedHubName,
  localizedHubOneLiner,
  localizedRecipeTitle,
  localizedRecipeDescription,
} from "@/lib/content/translations-data";
import { TranslationPendingBanner } from "@/components/TranslationPendingBanner";
import { SITE } from "@/lib/content/site";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { KitchenRule } from "@/components/editorial/DotRule";

const NON_EN = LOCALES.filter((l) => l !== "en");

export function generateStaticParams() {
  const params: Array<{ slug: string; hub: string }> = [];
  for (const locale of NON_EN) {
    for (const hub of hubs) {
      params.push({ slug: locale, hub: hub.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; hub: string }>;
}): Promise<Metadata> {
  const { slug: localeSlug, hub: hubSlug } = await params;
  if (!isLocale(localeSlug) || localeSlug === "en") return {};
  const locale = localeSlug as Locale;
  const hub = getHub(hubSlug);
  if (!hub) return {};
  const name = localizedHubName(hub.slug, locale, hub.name);
  const oneLiner = localizedHubOneLiner(hub.slug, locale, hub.oneLiner);
  const url = `${SITE.url}/${locale}/guides/${hub.slug}`;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[HREFLANG[l]] = l === "en" ? `${SITE.url}/guides/${hub.slug}` : `${SITE.url}/${l}/guides/${hub.slug}`;
  }
  languages["x-default"] = `${SITE.url}/guides/${hub.slug}`;
  return {
    title: `${name} — ${SITE.name}`,
    description: oneLiner,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      url,
      title: name,
      description: oneLiner,
      siteName: SITE.name,
      locale: HREFLANG[locale],
    },
  };
}

export default async function LocalizedHubPage({
  params,
}: {
  params: Promise<{ slug: string; hub: string }>;
}) {
  const { slug: localeSlug, hub: hubSlug } = await params;
  if (!isLocale(localeSlug) || localeSlug === "en") notFound();
  const locale = localeSlug as Locale;
  const hub = getHub(hubSlug);
  if (!hub) notFound();
  const strings = t(locale);
  const name = localizedHubName(hub.slug, locale, hub.name);
  const oneLiner = localizedHubOneLiner(hub.slug, locale, hub.oneLiner);
  const hubPosts = postsByHub(hub.slug);
  const recipes = hubPosts.filter((p) => p.postType === "recipe" || p.nutritionLedger != null);

  return (
    <main>
      <section className="border-b border-olive/10">
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-14 md:pb-20">
          <Link href={`/${locale}`} className="caps-label text-stone hover:text-terracotta">
            &larr; {strings.navHome}
          </Link>
          <div className="mt-8">
            <Eyebrow tone="terracotta">{strings.sectionPillars}</Eyebrow>
            <h1 className="display-headline text-olive mt-3 text-[2.5rem] md:text-[3.6rem] leading-[1.02]">
              {name}
            </h1>
            <p className="mt-6 font-serif italic text-xl md:text-2xl text-charcoal/80 max-w-2xl leading-[1.4]">
              {oneLiner}
            </p>
          </div>
          <KitchenRule className="mt-14" drawIn />
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6">
        <TranslationPendingBanner locale={locale} englishHref={`/guides/${hub.slug}`} />
      </div>

      {recipes.length > 0 && (
        <section className="border-b border-olive/10">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <Eyebrow tone="terracotta">{strings.navRecipes}</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 mb-8 leading-tight">
              {strings.sectionFeatured}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-olive/10">
              {recipes.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${locale}/${p.slug}`}
                  className="card-lift group p-6 border-b md:border-b-0 md:border-r border-olive/10 last:border-r-0 hover:bg-cream-deep/40"
                >
                  <h3 className="font-serif text-xl text-olive leading-tight group-hover:text-terracotta transition">
                    {localizedRecipeTitle(p.slug, locale, p.title)}
                  </h3>
                  <p className="text-sm text-charcoal/75 mt-2 leading-relaxed line-clamp-3">
                    {localizedRecipeDescription(p.slug, locale, p.description)}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3 font-mono text-[12px] text-olive">
                    {p.totalTimeMinutes && (
                      <span><b className="text-terracotta">{p.totalTimeMinutes}m</b> {strings.labelTotalTime.toLowerCase()}</span>
                    )}
                    {p.nutritionLedger && (
                      <>
                        <span><b>{p.nutritionLedger.calories}</b> {strings.labelCalories.toLowerCase()}</span>
                        <span><b>{p.nutritionLedger.proteinG}g</b> {strings.labelProtein.toLowerCase()}</span>
                      </>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
