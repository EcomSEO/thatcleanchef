import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { recipeCategories } from "@/lib/content/recipe-categories";
import { LOCALES, isLocale, HREFLANG, type Locale } from "@/lib/content/i18n";
import { t } from "@/lib/content/translations";
import { TranslationPendingBanner } from "@/components/TranslationPendingBanner";
import { SITE } from "@/lib/content/site";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { KitchenRule } from "@/components/editorial/DotRule";

const NON_EN = LOCALES.filter((l) => l !== "en");

export function generateStaticParams() {
  const params: Array<{ slug: string; category: string }> = [];
  for (const locale of NON_EN) {
    for (const c of recipeCategories) {
      params.push({ slug: locale, category: c.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; category: string }>;
}): Promise<Metadata> {
  const { slug: localeSlug, category } = await params;
  if (!isLocale(localeSlug) || localeSlug === "en") return {};
  const locale = localeSlug as Locale;
  const cat = recipeCategories.find((c) => c.slug === category);
  if (!cat) return {};
  const url = `${SITE.url}/${locale}/recipes/${cat.slug}`;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[HREFLANG[l]] = l === "en" ? `${SITE.url}/recipes/${cat.slug}` : `${SITE.url}/${l}/recipes/${cat.slug}`;
  }
  languages["x-default"] = `${SITE.url}/recipes/${cat.slug}`;
  return {
    title: `${cat.title} — ${SITE.name}`,
    description: cat.description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      url,
      title: cat.title,
      description: cat.description,
      siteName: SITE.name,
      locale: HREFLANG[locale],
    },
  };
}

export default async function LocalizedRecipeCategoryPage({
  params,
}: {
  params: Promise<{ slug: string; category: string }>;
}) {
  const { slug: localeSlug, category } = await params;
  if (!isLocale(localeSlug) || localeSlug === "en") notFound();
  const locale = localeSlug as Locale;
  const cat = recipeCategories.find((c) => c.slug === category);
  if (!cat) notFound();
  const strings = t(locale);

  return (
    <main>
      <section className="border-b border-olive/10">
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-14 md:pb-20">
          <Link href={`/${locale}`} className="caps-label text-stone hover:text-terracotta">
            &larr; {strings.navHome}
          </Link>
          <div className="mt-8">
            <Eyebrow tone="terracotta">{strings.navRecipes}</Eyebrow>
            <h1 className="display-headline text-olive mt-3 text-[2.5rem] md:text-[3.6rem] leading-[1.02]">
              {cat.h1}
            </h1>
            <p className="mt-6 font-serif italic text-xl md:text-2xl text-charcoal/80 max-w-2xl leading-[1.4]">
              {cat.description}
            </p>
          </div>
          <KitchenRule className="mt-14" drawIn />
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-6">
        <TranslationPendingBanner locale={locale} englishHref={`/recipes/${cat.slug}`} />
      </div>
      <section className="border-b border-olive/10">
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
          <Link
            href={`/recipes/${cat.slug}`}
            className="inline-flex items-center gap-2 px-5 py-3 bg-olive text-cream rounded-sm hover:bg-terracotta transition text-[15px]"
          >
            {strings.ctaBrowseRecipes} &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
