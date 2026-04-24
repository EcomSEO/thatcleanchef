import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getHub, hubs } from "@/lib/content/hubs";
import { postsByHub } from "@/lib/content/posts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { EmailCapture } from "@/components/EmailCapture";
import { pageMetadata } from "@/lib/seo";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { KitchenRule, DotRule } from "@/components/editorial/DotRule";
import { RankNumeral } from "@/components/editorial/RankNumeral";

const typeLabel: Record<string, string> = {
  pillar: "The Guide",
  comparison: "The Comparison",
  cluster: "The Recipe",
  recipe: "The Recipe",
  listicle: "The Roundup",
};

function isRecipeLike(p: { postType: string; nutritionLedger?: unknown }) {
  return p.postType === "recipe" || p.nutritionLedger != null;
}

export function generateStaticParams() {
  return hubs.map((h) => ({ hub: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hub: string }>;
}): Promise<Metadata> {
  const { hub: hubSlug } = await params;
  const hub = getHub(hubSlug);
  if (!hub) return {};
  return pageMetadata({
    title: hub.name,
    description: hub.oneLiner,
    path: `/guides/${hub.slug}`,
  });
}

export default async function HubPage({
  params,
}: {
  params: Promise<{ hub: string }>;
}) {
  const { hub: hubSlug } = await params;
  const hub = getHub(hubSlug);
  if (!hub) notFound();

  const hubIndex = hubs.findIndex((h) => h.slug === hub.slug);
  const hubPosts = postsByHub(hub.slug);
  const pillar = hubPosts.find((p) => p.postType === "pillar");
  const recipes = hubPosts.filter((p) => isRecipeLike(p));
  const explainers = hubPosts.filter(
    (p) => !isRecipeLike(p) && p.postType !== "pillar"
  );

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/#hubs" },
    { label: hub.name },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main>
        {/* Hub masthead */}
        <section className="border-b border-olive/10">
          <div className="mx-auto max-w-6xl px-6 pt-10 pb-14 md:pb-20">
            <Breadcrumbs crumbs={crumbs} />

            <div className="mt-8 grid md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-8">
                <div className="flex items-center gap-4">
                  <span className="rank-numeral !text-[3.5rem]">
                    {String(hubIndex + 1).padStart(2, "0")}
                  </span>
                  <Eyebrow tone="terracotta">
                    Hub {hubIndex + 1} of {hubs.length}
                  </Eyebrow>
                </div>
                <h1 className="display-headline text-olive mt-3 text-[2.5rem] md:text-[3.6rem] leading-[1.02]">
                  {hub.name}
                </h1>
                <p className="mt-6 font-serif italic text-xl md:text-2xl text-charcoal/80 max-w-2xl leading-[1.4]">
                  {hub.oneLiner}
                </p>
              </div>
              <div className="md:col-span-4 md:pl-6 md:border-l md:border-olive/10">
                <Eyebrow tone="stone">Our thesis</Eyebrow>
                <p className="mt-3 text-[14.5px] text-charcoal/85 leading-relaxed">
                  {hub.thesis}
                </p>
                <dl className="mt-5 pt-5 border-t border-olive/10 space-y-2 text-[13px]">
                  <div className="flex justify-between">
                    <dt className="text-stone">Recipes live</dt>
                    <dd className="text-olive tnum font-mono">
                      {recipes.length}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-stone">Planned</dt>
                    <dd className="text-olive tnum font-mono">30</dd>
                  </div>
                </dl>
              </div>
            </div>

            <KitchenRule className="mt-14" drawIn />
          </div>
        </section>

        {/* Start here — pillar */}
        {pillar && (
          <section className="border-b border-olive/10">
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
              <Eyebrow tone="sage">Start here</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 mb-8 leading-tight">
                The complete guide.
              </h2>
              <Link
                href={`/${pillar.slug}`}
                className="group block bg-paper border border-olive/15 rounded-sm p-8 md:p-10 shadow-soft hover:shadow-card hover:border-terracotta/50 transition"
              >
                <Eyebrow tone="terracotta">The Guide</Eyebrow>
                <h3 className="font-serif text-[1.8rem] md:text-[2.2rem] text-olive leading-[1.08] mt-3">
                  {pillar.title}
                </h3>
                <p className="mt-5 text-charcoal/85 text-[15.5px] leading-relaxed max-w-[62ch]">
                  {pillar.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-terracotta group-hover:text-olive transition text-sm font-medium">
                  Read the pillar
                  <span aria-hidden>&rarr;</span>
                </span>
              </Link>
            </div>
          </section>
        )}

        {/* Recipes */}
        {recipes.length > 0 && (
          <section className="border-b border-olive/10">
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
              <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
                <div>
                  <Eyebrow tone="terracotta">The recipes</Eyebrow>
                  <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 leading-tight">
                    Tested, timed honestly, ledger above the fold.
                  </h2>
                </div>
                <div className="caps-label text-stone">
                  {recipes.length} recipe{recipes.length === 1 ? "" : "s"} live
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-olive/10">
                {recipes.map((p, i) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}`}
                    className="card-lift group p-6 border-b md:border-b-0 md:border-r border-olive/10 last:border-r-0 hover:bg-cream-deep/40"
                  >
                    {/* Small photo slot — decorative placeholder */}
                    <div
                      className="photo-slot aspect-[4/3] rounded-sm mb-4 relative overflow-hidden border border-olive/10"
                      aria-hidden="true"
                    />
                    <RankNumeral n={i + 1} />
                    <h3 className="font-serif text-xl text-olive leading-tight mt-3 group-hover:text-terracotta transition">
                      {p.title}
                    </h3>
                    <p className="text-sm text-charcoal/75 mt-2 leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3 font-mono text-[12px] text-olive">
                      {p.totalTimeMinutes && (
                        <span>
                          <b className="text-terracotta">{p.totalTimeMinutes}m</b>
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
                      {p.servings && (
                        <span>
                          <b>{p.servings}</b> serv
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Explainers / everything else */}
        {explainers.length > 0 && (
          <section className="border-b border-olive/10">
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
              <Eyebrow tone="sage">The Explainers</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 mb-8 leading-tight">
                Technique and background &mdash; plain English.
              </h2>
              <ul className="divide-y divide-olive/10 border-y border-olive/10">
                {explainers.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${p.slug}`}
                      className="group grid md:grid-cols-[auto_1fr_auto] gap-5 py-5 items-baseline hover:bg-cream-deep/30 px-2 transition"
                    >
                      <span className="caps-label text-stone">
                        {typeLabel[p.postType]}
                      </span>
                      <div>
                        <h3 className="font-serif text-lg text-olive group-hover:text-terracotta transition leading-snug">
                          {p.title}
                        </h3>
                        <p className="text-sm text-charcoal/70 mt-1 line-clamp-1">
                          {p.description}
                        </p>
                      </div>
                      <span className="caps-label text-stone tnum whitespace-nowrap">
                        {p.readingTime} min
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {hubPosts.length === 0 && (
          <section className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-charcoal/70 text-lg">
              Recipes land here as they clear editorial review. See the{" "}
              <Link href="/" className="text-terracotta underline">
                home page
              </Link>{" "}
              for what&apos;s live today.
            </p>
          </section>
        )}

        <section className="bg-cream-deep/50">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <EmailCapture />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <DotRule drawIn />
        </section>
      </main>
    </>
  );
}
