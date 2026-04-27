import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/content/posts";
import { PillarTemplate } from "@/components/templates/PillarTemplate";
import { ComparisonTemplate } from "@/components/templates/ComparisonTemplate";
import { ClusterTemplate } from "@/components/templates/ClusterTemplate";
import { ListicleTemplate } from "@/components/templates/ListicleTemplate";
import { RecipeTemplate } from "@/components/templates/RecipeTemplate";
import { LocalizedHomeTemplate } from "@/components/templates/LocalizedHomeTemplate";
import { pageMetadata } from "@/lib/seo";
import { LOCALES, isLocale, HREFLANG, type Locale } from "@/lib/content/i18n";
import { t } from "@/lib/content/translations";
import { SITE } from "@/lib/content/site";

// Avoid colliding with /about, /contact, etc — static pages take precedence over this dynamic route.
const RESERVED = new Set([
  "about",
  "contact",
  "privacy",
  "terms",
  "affiliate-disclosure",
  "editorial-standards",
  "newsletter",
  "guides",
  "medications",
  "meal-plans",
  "recipes",
  "ingredients",
  "methodology",
  "pipeline",
  "team",
  "cookies",
  "impressum",
  "sitemap.xml",
  "robots.txt",
  "llms.txt",
]);

// Non-English locales handled by this dynamic route. The English canonical
// home is served by app/page.tsx — `en` is intentionally excluded.
const NON_EN_LOCALES = LOCALES.filter((l) => l !== "en");

export function generateStaticParams() {
  // Recipe slugs + non-English locale codes share the [slug] segment.
  return [
    ...posts.map((p) => ({ slug: p.slug })),
    ...NON_EN_LOCALES.map((locale) => ({ slug: locale })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (RESERVED.has(slug)) return {};

  // Localized home metadata.
  if (isLocale(slug) && slug !== "en") {
    const strings = t(slug);
    const url = `${SITE.url}/${slug}`;
    const languages: Record<string, string> = {};
    for (const l of LOCALES) {
      languages[HREFLANG[l]] = l === "en" ? SITE.url : `${SITE.url}/${l}`;
    }
    languages["x-default"] = SITE.url;
    return {
      title: `${SITE.name} — ${strings.heroEyebrow}`,
      description: strings.heroDek,
      alternates: { canonical: url, languages },
      openGraph: {
        type: "website",
        url,
        title: `${SITE.name} — ${strings.heroEyebrow}`,
        description: strings.heroDek,
        siteName: SITE.name,
        locale: HREFLANG[slug],
      },
    };
  }

  const post = getPost(slug);
  if (!post) return {};
  const isRecipeLike =
    post.postType === "recipe" || post.nutritionLedger != null;
  const suffix = isRecipeLike && post.totalTimeMinutes
    ? ` (${post.totalTimeMinutes}m${post.nutritionLedger ? `, ${post.nutritionLedger.proteinG}g protein` : ""})`
    : post.postType === "comparison"
      ? ` (Tested ${new Date(post.updatedAt).getFullYear()})`
      : "";
  return pageMetadata({
    title: `${post.title}${suffix}`,
    description: post.description,
    path: `/${post.slug}`,
    ogType: "article",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (RESERVED.has(slug)) notFound();

  // Locale dispatch — render the localized home variant for /de, /fr, etc.
  if (isLocale(slug) && slug !== "en") {
    return <LocalizedHomeTemplate locale={slug as Locale} />;
  }

  const post = getPost(slug);
  if (!post) notFound();

  // Route recipes (including cluster-tagged posts that carry a nutrition
  // ledger — posts.ts is READ ONLY, so we infer recipe-ness from data).
  const isRecipe =
    post.postType === "recipe" || post.nutritionLedger != null;

  if (isRecipe) return <RecipeTemplate post={post} />;

  switch (post.postType) {
    case "pillar":
      return <PillarTemplate post={post} />;
    case "comparison":
      return <ComparisonTemplate post={post} />;
    case "listicle":
      return <ListicleTemplate post={post} />;
    case "cluster":
    default:
      return <ClusterTemplate post={post} />;
  }
}
