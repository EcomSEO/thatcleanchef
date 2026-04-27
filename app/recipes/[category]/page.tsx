import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getRecipeCategory,
  recipeCategories,
} from "@/lib/content/recipe-categories";
import { posts, type Post } from "@/lib/content/posts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/schema/FaqJsonLd";
import { ItemListJsonLd } from "@/components/schema/ItemListJsonLd";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { KitchenRule, DotRule } from "@/components/editorial/DotRule";
import { EmailCapture } from "@/components/EmailCapture";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return recipeCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getRecipeCategory(category);
  if (!cat) return {};
  return pageMetadata({
    title: cat.title,
    description: cat.description,
    path: `/recipes/${cat.slug}`,
  });
}

function matchesCategory(p: Post, cat: ReturnType<typeof getRecipeCategory>) {
  if (!cat) return false;
  if (!(p.postType === "recipe" || p.nutritionLedger != null)) return false;
  const hubOk = !cat.matchHubs || cat.matchHubs.includes(p.hub);
  const proteinOk =
    cat.minProteinG == null ||
    (p.nutritionLedger?.proteinG ?? 0) >= cat.minProteinG;
  const timeOk =
    cat.maxTotalMin == null ||
    (p.totalTimeMinutes ?? 999) <= cat.maxTotalMin;
  return hubOk && proteinOk && timeOk;
}

export default async function RecipeCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getRecipeCategory(category);
  if (!cat) notFound();

  const matched = posts.filter((p) => matchesCategory(p, cat));

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Recipes", href: "/recipes" },
    { label: cat.title },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <FaqJsonLd faq={cat.faq} />
      <ItemListJsonLd
        items={matched.map((p, i) => ({
          rank: i + 1,
          name: p.title,
        }))}
      />

      <main>
        <section className="border-b border-olive/10 bg-cream-deep/30">
          <div className="mx-auto max-w-6xl px-6 pt-10 pb-14 md:pb-20">
            <Breadcrumbs crumbs={crumbs} />
            <div className="mt-8 grid md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-8">
                <Eyebrow tone="terracotta">Recipes</Eyebrow>
                <h1 className="display-headline text-olive mt-3 text-[2.4rem] md:text-[3.4rem] leading-[1.04]">
                  {cat.h1}
                </h1>
                <p className="mt-6 font-serif italic text-xl md:text-2xl text-charcoal/80 max-w-2xl leading-[1.45]">
                  {cat.intent}
                </p>
              </div>
              <div className="md:col-span-4 md:pl-6 md:border-l md:border-olive/10">
                <Eyebrow tone="stone">In this category</Eyebrow>
                <dl className="mt-4 space-y-2 text-[13.5px]">
                  <div className="flex justify-between">
                    <dt className="text-stone">Recipes live</dt>
                    <dd className="text-olive tnum font-mono">
                      {matched.length}
                    </dd>
                  </div>
                  {cat.minProteinG && (
                    <div className="flex justify-between">
                      <dt className="text-stone">Protein floor</dt>
                      <dd className="text-olive tnum font-mono">
                        {cat.minProteinG}g
                      </dd>
                    </div>
                  )}
                  {cat.maxTotalMin && (
                    <div className="flex justify-between">
                      <dt className="text-stone">Max prep+cook</dt>
                      <dd className="text-olive tnum font-mono">
                        {cat.maxTotalMin}m
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
            <KitchenRule className="mt-14" drawIn />
          </div>
        </section>

        <section className="border-b border-olive/10">
          <div className="mx-auto max-w-3xl px-6 py-14">
            <p className="font-serif text-charcoal/85 leading-[1.78] text-[16px]">
              {cat.introCopy}
            </p>
          </div>
        </section>

        {matched.length > 0 ? (
          <section className="border-b border-olive/10">
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-olive/10">
                {matched.map((p, i) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="card-lift group p-6 border-b md:border-b-0 md:border-r border-olive/10 last:border-r-0 hover:bg-cream-deep/40"
                  >
                    <div
                      className="photo-slot aspect-[4/3] rounded-sm mb-4 relative overflow-hidden border border-olive/10"
                      aria-hidden="true"
                    />
                    <span className="rank-numeral">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-xl text-olive leading-tight mt-3 group-hover:text-terracotta transition">
                      {p.title}
                    </h3>
                    <p className="text-sm text-charcoal/75 mt-2 leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3 font-mono text-[12px] text-olive">
                      {p.totalTimeMinutes && (
                        <span>
                          <b className="text-terracotta">
                            {p.totalTimeMinutes}m
                          </b>
                        </span>
                      )}
                      {p.nutritionLedger && (
                        <>
                          <span>
                            <b>{p.nutritionLedger.calories}</b> kcal
                          </span>
                          <span>
                            <b>{p.nutritionLedger.proteinG}g</b> P
                          </span>
                        </>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="border-b border-olive/10">
            <div className="mx-auto max-w-3xl px-6 py-14">
              <p className="text-charcoal/70">
                Recipes land in this category as they clear editorial review.
                See the{" "}
                <Link href="/recipes" className="text-terracotta underline">
                  full recipe index
                </Link>{" "}
                for what&apos;s live today.
              </p>
            </div>
          </section>
        )}

        <section className="bg-cream-deep/50">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <EmailCapture />
          </div>
        </section>

        <section className="border-b border-olive/10">
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
            <Eyebrow tone="sage">Frequently asked</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 mb-8 leading-tight">
              Questions readers send.
            </h2>
            <dl className="divide-y divide-olive/15 border-y border-olive/15">
              {cat.faq.map((f, i) => (
                <div key={i} className="py-6 first:pt-6 last:pb-6">
                  <dt className="font-serif text-lg text-olive italic leading-snug">
                    {f.q}
                  </dt>
                  <dd className="mt-3 text-[15px] text-charcoal/85 leading-[1.75] max-w-[68ch]">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <DotRule drawIn />
        </section>
      </main>
    </>
  );
}
