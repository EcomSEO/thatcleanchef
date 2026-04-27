import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/content/posts";
import { RecipeTemplate } from "@/components/templates/RecipeTemplate";
import { ClusterTemplate } from "@/components/templates/ClusterTemplate";
import { PillarTemplate } from "@/components/templates/PillarTemplate";
import { ListicleTemplate } from "@/components/templates/ListicleTemplate";
import { ComparisonTemplate } from "@/components/templates/ComparisonTemplate";
import { TranslationPendingBanner } from "@/components/TranslationPendingBanner";
import { LOCALES, isLocale, HREFLANG, type Locale } from "@/lib/content/i18n";
import {
  localizedRecipeTitle,
  localizedRecipeDescription,
} from "@/lib/content/translations-data";
import { SITE } from "@/lib/content/site";

/**
 * Localized recipe page — URL pattern /{locale}/{recipe-slug}.
 * The chrome (header, footer, hero) is rendered in the local language
 * via t(), but the recipe BODY (items, FAQ answers, sources) stays in
 * English by editorial decision. A TranslationPendingBanner explains
 * this above the recipe body and links to the canonical English URL.
 */

const NON_EN_LOCALES = LOCALES.filter((l) => l !== "en");

export function generateStaticParams() {
  // Cartesian product: every non-English locale × every recipe slug.
  const params: Array<{ slug: string; child: string }> = [];
  for (const locale of NON_EN_LOCALES) {
    for (const post of posts) {
      params.push({ slug: locale, child: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; child: string }>;
}): Promise<Metadata> {
  const { slug: localeSlug, child } = await params;
  if (!isLocale(localeSlug) || localeSlug === "en") return {};
  const locale = localeSlug as Locale;
  const post = getPost(child);
  if (!post) return {};

  const localizedTitle = localizedRecipeTitle(post.slug, locale, post.title);
  const localizedDescription = localizedRecipeDescription(post.slug, locale, post.description);
  const url = `${SITE.url}/${locale}/${post.slug}`;

  // hreflang map — link this URL to its EN canonical and every other locale.
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[HREFLANG[l]] = l === "en" ? `${SITE.url}/${post.slug}` : `${SITE.url}/${l}/${post.slug}`;
  }
  languages["x-default"] = `${SITE.url}/${post.slug}`;

  return {
    title: localizedTitle,
    description: localizedDescription,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "article",
      url,
      title: localizedTitle,
      description: localizedDescription,
      siteName: SITE.name,
      locale: HREFLANG[locale],
    },
  };
}

export default async function LocalizedRecipePage({
  params,
}: {
  params: Promise<{ slug: string; child: string }>;
}) {
  const { slug: localeSlug, child } = await params;
  if (!isLocale(localeSlug) || localeSlug === "en") notFound();
  const locale = localeSlug as Locale;
  const post = getPost(child);
  if (!post) notFound();

  const isRecipe =
    post.postType === "recipe" || post.nutritionLedger != null;

  const banner = (
    <div className="mx-auto max-w-3xl px-6">
      <TranslationPendingBanner locale={locale} englishHref={`/${post.slug}`} />
    </div>
  );

  // Recipe body stays in English. We layer a banner above the existing
  // template so the reader sees the localized chrome + the canonical
  // English content beneath, with the safety note in their own language.
  if (isRecipe) {
    return (
      <>
        {banner}
        <RecipeTemplate post={post} />
      </>
    );
  }

  switch (post.postType) {
    case "pillar":
      return (
        <>
          {banner}
          <PillarTemplate post={post} />
        </>
      );
    case "comparison":
      return (
        <>
          {banner}
          <ComparisonTemplate post={post} />
        </>
      );
    case "listicle":
      return (
        <>
          {banner}
          <ListicleTemplate post={post} />
        </>
      );
    case "cluster":
    default:
      return (
        <>
          {banner}
          <ClusterTemplate post={post} />
        </>
      );
  }
}

