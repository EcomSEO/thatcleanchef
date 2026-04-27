import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getMealPlan, mealPlans } from "@/lib/content/meal-plans";
import { getPost } from "@/lib/content/posts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { FaqJsonLd } from "@/components/schema/FaqJsonLd";
import { MedicalWebPageJsonLd } from "@/components/schema/MedicalWebPageJsonLd";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { KitchenRule, DotRule } from "@/components/editorial/DotRule";
import { EmailCapture } from "@/components/EmailCapture";
import { pageMetadata } from "@/lib/seo";
import { getTeamMember } from "@/lib/content/team";

export function generateStaticParams() {
  return mealPlans.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const plan = getMealPlan(slug);
  if (!plan) return {};
  return pageMetadata({
    title: plan.title,
    description: plan.description,
    path: `/meal-plans/${plan.slug}`,
    ogType: "article",
  });
}

export default async function MealPlanPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plan = getMealPlan(slug);
  if (!plan) notFound();

  const reviewer = getTeamMember("lena-marsh");

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Meal plans", href: "/#meal-plans" },
    { label: plan.title },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <FaqJsonLd faq={plan.faq} />
      <MedicalWebPageJsonLd
        path={`/meal-plans/${plan.slug}`}
        headline={plan.h1}
        description={plan.description}
        lastReviewed={plan.reviewedOn}
        reviewerName={plan.reviewer}
      />

      <main>
        {/* Masthead */}
        <section className="border-b border-olive/10 bg-cream-deep/30">
          <div className="mx-auto max-w-6xl px-6 pt-10 pb-14 md:pb-20">
            <Breadcrumbs crumbs={crumbs} />

            <div className="mt-8 grid md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-8">
                <Eyebrow tone="terracotta">Meal plan</Eyebrow>
                <h1 className="display-headline text-olive mt-3 text-[2.4rem] md:text-[3.4rem] leading-[1.04]">
                  {plan.h1}
                </h1>
                <p className="mt-6 font-serif italic text-xl md:text-2xl text-charcoal/80 max-w-2xl leading-[1.45]">
                  {plan.description}
                </p>
              </div>
              <div className="md:col-span-4 md:pl-6 md:border-l md:border-olive/10">
                <Eyebrow tone="stone">Reviewed</Eyebrow>
                <p className="mt-3 text-[14.5px] text-charcoal/85">
                  {reviewer ? (
                    <Link
                      href={`/team/${reviewer.slug}`}
                      className="text-olive underline decoration-terracotta/40 hover:decoration-terracotta"
                    >
                      {plan.reviewer}
                    </Link>
                  ) : (
                    plan.reviewer
                  )}
                </p>
                <p className="text-[13px] text-stone mt-1">
                  Last reviewed{" "}
                  {new Date(plan.reviewedOn).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <dl className="mt-5 pt-5 border-t border-olive/10 space-y-2 text-[13px]">
                  <div className="flex justify-between">
                    <dt className="text-stone">Duration</dt>
                    <dd className="text-olive">{plan.durationLabel}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-stone">Format</dt>
                    <dd className="text-olive">PDF + grocery list</dd>
                  </div>
                </dl>
              </div>
            </div>

            {plan.imageUrl && (
              <div className="mt-10 relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-olive/10 bg-cream-deep/40">
                <Image
                  src={plan.imageUrl}
                  alt={plan.title}
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

        {/* What you get */}
        <section className="border-b border-olive/10">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-5">
                <Eyebrow tone="sage">What you get</Eyebrow>
                <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 leading-tight">
                  {plan.audience}
                </h2>
              </div>
              <div className="md:col-span-7">
                <ul className="space-y-5">
                  {[
                    "Day-by-day meal schedule with portion sizes in grams and ounces",
                    "Grocery list organised by supermarket section (UK + US weights)",
                    "Sunday prep sequence — what to batch first, what to keep raw",
                    "Macros totalled per day, with the Nutrition Ledger formula on every recipe",
                    "Swap list for the most common dietary restrictions",
                  ].map((item, i) => (
                    <li key={i} className="grid grid-cols-[auto_1fr] gap-4">
                      <span className="rank-numeral !text-[1.6rem]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[15.5px] text-charcoal/85 leading-relaxed pt-1">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Daily targets */}
        <section className="border-b border-olive/10 bg-cream-deep/40">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <Eyebrow tone="terracotta">Daily targets</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 mb-8 leading-tight">
              The numbers the plan hits, every day.
            </h2>
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-olive/15">
              {[
                { k: "Calories", v: plan.dailyTargets.calories },
                { k: "Protein", v: plan.dailyTargets.proteinG },
                { k: "Fibre", v: plan.dailyTargets.fiberG },
                { k: "Sodium", v: plan.dailyTargets.sodiumMg },
              ].map((m, i) => (
                <div
                  key={i}
                  className="p-6 border-r last:border-r-0 border-olive/15 odd:bg-paper"
                >
                  <dt className="caps-label text-stone">{m.k}</dt>
                  <dd className="font-mono text-2xl text-olive mt-2">{m.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Preview days */}
        <section className="border-b border-olive/10">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <Eyebrow tone="sage">A look inside</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 mb-8 leading-tight">
              The first three days, in full.
            </h2>
            <ol className="space-y-0 border-y border-olive/15 divide-y divide-olive/15">
              {plan.previewDays.map((d) => {
                const linked = d.recipeSlug ? getPost(d.recipeSlug) : null;
                return (
                  <li key={d.day} className="grid md:grid-cols-12 gap-6 py-8">
                    <div className="md:col-span-3">
                      <span className="rank-numeral !text-[2.6rem]">
                        {String(d.day).padStart(2, "0")}
                      </span>
                      <p className="caps-label text-stone mt-1">{d.label}</p>
                      <dl className="mt-4 space-y-1 text-[13px] font-mono text-olive">
                        <div className="flex justify-between">
                          <dt className="text-stone">kcal</dt>
                          <dd>{d.totals.calories}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-stone">P</dt>
                          <dd>{d.totals.proteinG}g</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-stone">Fibre</dt>
                          <dd>{d.totals.fiberG}g</dd>
                        </div>
                      </dl>
                    </div>
                    <div className="md:col-span-9 grid md:grid-cols-3 gap-6">
                      <div>
                        <p className="caps-label text-terracotta">Breakfast</p>
                        <p className="mt-2 text-[15px] text-charcoal/85 leading-relaxed">
                          {d.breakfast}
                        </p>
                      </div>
                      <div>
                        <p className="caps-label text-terracotta">Lunch</p>
                        <p className="mt-2 text-[15px] text-charcoal/85 leading-relaxed">
                          {d.lunch}
                        </p>
                      </div>
                      <div>
                        <p className="caps-label text-terracotta">Dinner</p>
                        <p className="mt-2 text-[15px] text-charcoal/85 leading-relaxed">
                          {d.dinner}
                        </p>
                        {d.snack && (
                          <p className="mt-3 text-[14px] text-charcoal/70 italic">
                            + Snack: {d.snack}
                          </p>
                        )}
                        {linked && (
                          <Link
                            href={`/${linked.slug}`}
                            className="mt-3 inline-flex items-center gap-1.5 text-terracotta hover:text-olive text-sm"
                          >
                            See the recipe &rarr;
                          </Link>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
            <p className="mt-8 text-[14px] text-stone italic">
              Days 4 through {plan.slug.includes("14") ? "14" : "7"} continue
              the same pattern, with the full grocery list and prep sequence in
              the PDF.
            </p>
          </div>
        </section>

        {/* Get the PDF */}
        <section className="bg-cream-deep/50 border-b border-olive/10">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <EmailCapture
              variant="end-of-article"
              headline={`Get the ${plan.title} PDF.`}
              subhead={`${plan.durationLabel}. Grocery list by section, macros per day, RD-reviewed. Free.`}
            />
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-olive/10">
          <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
            <Eyebrow tone="sage">Frequently asked</Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 mb-8 leading-tight">
              The questions readers send.
            </h2>
            <dl className="divide-y divide-olive/15 border-y border-olive/15">
              {plan.faq.map((f, i) => (
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
