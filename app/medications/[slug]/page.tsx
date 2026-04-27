import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getMedication, medications } from "@/lib/content/medications";
import { getHub } from "@/lib/content/hubs";
import { posts } from "@/lib/content/posts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/schema/FaqJsonLd";
import { MedicalWebPageJsonLd } from "@/components/schema/MedicalWebPageJsonLd";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { KitchenRule, DotRule } from "@/components/editorial/DotRule";
import { EmailCapture } from "@/components/EmailCapture";
import { pageMetadata } from "@/lib/seo";
import { PRIMARY_REVIEWER } from "@/lib/content/team";

const REVIEWED_ON = "2026-04-22";
const REVIEWER = `${PRIMARY_REVIEWER.name}, ${PRIMARY_REVIEWER.credentials}`;

export function generateStaticParams() {
  return medications.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const med = getMedication(slug);
  if (!med) return {};
  return pageMetadata({
    title: `${med.brand} (${med.generic}) — clean-eating recipes for ${med.brand} patients`,
    description: med.oneLiner,
    path: `/medications/${med.slug}`,
    ogType: "article",
  });
}

export default async function MedicationHubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const med = getMedication(slug);
  if (!med) notFound();

  const hub = getHub(med.primaryHub);
  // Recipes drawn from the primary hub OR explicitly tagged for GLP-1 friendly
  // contexts. We keep the surface tight — 6 strongest matches.
  const matchedRecipes = posts
    .filter(
      (p) =>
        (p.hub === med.primaryHub ||
          p.peptideContext === "glp1-friendly" ||
          p.peptideContext === "muscle-preservation") &&
        (p.postType === "recipe" || p.nutritionLedger != null)
    )
    .slice(0, 6);

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Medications", href: "/#medications" },
    { label: med.brand },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <FaqJsonLd faq={med.faq} />
      <MedicalWebPageJsonLd
        path={`/medications/${med.slug}`}
        headline={`${med.brand} (${med.generic}) — recipes and patient context`}
        description={med.oneLiner}
        lastReviewed={REVIEWED_ON}
        reviewerName={REVIEWER}
      />

      <main>
        {/* Masthead */}
        <section className="border-b border-olive/10 bg-cream-deep/30">
          <div className="mx-auto max-w-6xl px-6 pt-10 pb-14 md:pb-20">
            <Breadcrumbs crumbs={crumbs} />

            <div className="mt-8 grid md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-8">
                <Eyebrow tone="terracotta">Medication hub</Eyebrow>
                <h1 className="display-headline text-olive mt-3 text-[2.4rem] md:text-[3.4rem] leading-[1.04]">
                  Eating well on {med.brand}
                </h1>
                <p className="mt-2 caps-label text-stone">
                  {med.generic} · {med.drugClass} · {med.manufacturer}
                </p>
                <p className="mt-6 font-serif italic text-xl md:text-2xl text-charcoal/80 max-w-2xl leading-[1.45]">
                  {med.oneLiner}
                </p>
              </div>
              <div className="md:col-span-4 md:pl-6 md:border-l md:border-olive/10">
                <Eyebrow tone="stone">Reviewed</Eyebrow>
                <p className="mt-3 text-[14.5px] text-charcoal/85">
                  <Link
                    href={`/team/${PRIMARY_REVIEWER.slug}`}
                    className="text-olive underline decoration-terracotta/40 hover:decoration-terracotta"
                  >
                    {REVIEWER}
                  </Link>
                </p>
                <p className="text-[13px] text-stone mt-1">
                  Last reviewed{" "}
                  {new Date(REVIEWED_ON).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <dl className="mt-5 pt-5 border-t border-olive/10 space-y-2 text-[13px]">
                  <div className="flex justify-between">
                    <dt className="text-stone">Recipes matched</dt>
                    <dd className="text-olive tnum font-mono">
                      {matchedRecipes.length}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-stone">Search trend</dt>
                    <dd className="text-olive tnum font-mono">
                      {med.searchTrendYoY}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {med.imageUrl && (
              <div className="mt-10 relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-olive/10 bg-cream-deep/40">
                <Image
                  src={med.imageUrl}
                  alt={`Eating well on ${med.brand}`}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <KitchenRule className="mt-14" drawIn />
          </div>
        </section>

        {/* Editorial framing — disclaimer */}
        <section className="border-b border-olive/10">
          <div className="mx-auto max-w-3xl px-6 py-10">
            <p className="font-serif italic text-charcoal/85 leading-relaxed text-[15.5px]">
              <strong className="text-olive not-italic">
                This is a food page, not a medical page.
              </strong>{" "}
              We don&apos;t prescribe, dose, or advise on starting or stopping{" "}
              {med.brand}. We do select, scale, and annotate recipes around the
              cooking constraints {med.brand} patients consistently report —
              smaller portions, smell sensitivity, the protein floor needed to
              protect muscle during weight loss. Talk to your prescribing
              clinician for medical advice.
            </p>
          </div>
        </section>

        {/* What patients commonly report */}
        <section className="border-b border-olive/10">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <Eyebrow tone="terracotta">From the patient forums</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 mb-8 leading-tight">
              What people on {med.brand} consistently report.
            </h2>
            <ul className="grid md:grid-cols-3 gap-0 border-y border-olive/10">
              {med.patientReports.map((r, i) => (
                <li
                  key={i}
                  className="p-6 border-b md:border-b-0 md:border-r border-olive/10 last:border-r-0"
                >
                  <span className="rank-numeral !text-[2.2rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-[15px] text-charcoal/85 leading-relaxed">
                    {r}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cooking constraints */}
        <section className="border-b border-olive/10 bg-cream-deep/40">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-4">
                <Eyebrow tone="sage">How we cook for it</Eyebrow>
                <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 leading-tight">
                  The kitchen brief.
                </h2>
                <p className="mt-5 text-charcoal/80 text-[15px] leading-relaxed">
                  Every recipe tagged for {med.brand} is selected against this
                  brief before it goes on the page.
                </p>
              </div>
              <div className="md:col-span-8">
                <ol className="space-y-6">
                  {med.cookingConstraints.map((c, i) => (
                    <li key={i} className="grid grid-cols-[auto_1fr] gap-5">
                      <span className="rank-numeral !text-[2rem]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[15.5px] text-charcoal/85 leading-relaxed pt-1">
                        {c}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Tolerated vs poorly tolerated */}
        <section className="border-b border-olive/10">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="grid md:grid-cols-2 gap-0 border border-olive/15">
              <div className="p-8 border-b md:border-b-0 md:border-r border-olive/15">
                <Eyebrow tone="sage">Goes down well</Eyebrow>
                <h3 className="font-serif text-2xl text-olive mt-3 mb-4 leading-tight">
                  What tends to land on the plate.
                </h3>
                <ul className="space-y-2 text-[15px] text-charcoal/85 leading-relaxed">
                  {med.toleratedWell.map((t, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-sage mt-2" aria-hidden>
                        ●
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8">
                <Eyebrow tone="terracotta">Often pushed away</Eyebrow>
                <h3 className="font-serif text-2xl text-olive mt-3 mb-4 leading-tight">
                  What tends to stay on the fork.
                </h3>
                <ul className="space-y-2 text-[15px] text-charcoal/85 leading-relaxed">
                  {med.oftenPoorlyTolerated.map((t, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-terracotta mt-2" aria-hidden>
                        ●
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Recipes matched */}
        {matchedRecipes.length > 0 && (
          <section className="border-b border-olive/10">
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
              <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
                <div>
                  <Eyebrow tone="terracotta">Recipes for {med.brand}</Eyebrow>
                  <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 leading-tight">
                    Tested against the brief above.
                  </h2>
                </div>
                {hub && (
                  <Link
                    href={`/guides/${hub.slug}`}
                    className="caps-label text-terracotta hover:text-olive"
                  >
                    See all {hub.shortName} recipes &rarr;
                  </Link>
                )}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-olive/10">
                {matchedRecipes.map((p, i) => (
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
        )}

        {/* FAQ */}
        <section className="border-b border-olive/10">
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
            <Eyebrow tone="sage">Frequently asked</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 mb-8 leading-tight">
              The questions readers send us about {med.brand}.
            </h2>
            <dl className="divide-y divide-olive/15 border-y border-olive/15">
              {med.faq.map((f, i) => (
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

        <section className="bg-cream-deep/50">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <EmailCapture
              headline={`The ${med.brand} kitchen brief.`}
              subhead="A 12-page PDF: portion sizes, the protein floor, batch-cook templates, and the tolerated/not-tolerated list, RD-reviewed. Free."
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <DotRule drawIn />
        </section>
      </main>
    </>
  );
}
