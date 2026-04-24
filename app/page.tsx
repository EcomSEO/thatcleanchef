import Link from "next/link";
import { hubs } from "@/lib/content/hubs";
import { featuredPost, latestPosts, posts } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule, KitchenRule } from "@/components/editorial/DotRule";
import { RankNumeral } from "@/components/editorial/RankNumeral";
import { EmailCapture } from "@/components/EmailCapture";
import { Reveal } from "@/components/editorial/Reveal";

const DIET_PATTERNS: Array<{
  key: string;
  name: string;
  tagline: string;
  matchTags: string[];
}> = [
  {
    key: "anti-inflammatory",
    name: "Anti-Inflammatory",
    tagline: "Turmeric, omega-3s, real color on the plate.",
    matchTags: ["Anti-Inflammatory"],
  },
  {
    key: "high-protein",
    name: "High-Protein",
    tagline: "30g+ per plate. Cottage cheese allowed.",
    matchTags: ["High-Protein"],
  },
  {
    key: "mediterranean",
    name: "Mediterranean",
    tagline: "Olive oil, fish, lemon, almost-weeknight.",
    matchTags: ["Mediterranean"],
  },
  {
    key: "whole30",
    name: "Whole30",
    tagline: "Thirty days. Real food. No apologies.",
    matchTags: ["Whole30"],
  },
  {
    key: "low-fodmap",
    name: "Low-FODMAP",
    tagline: "Gut-quiet dinners without the research paper.",
    matchTags: ["Low-FODMAP", "FODMAP"],
  },
];

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

export default function HomePage() {
  const featured = featuredPost() ?? latestPosts(1)[0];
  const recent = latestPosts(6);
  const recipes = posts.filter((p) => isRecipeLike(p)).slice(0, 6);
  const explainers = posts.filter((p) => !isRecipeLike(p)).slice(0, 3);

  return (
    <main>
      {/* === HERO: kitchen masthead — warm radial gradient, morning-kitchen light === */}
      <section
        className="border-b border-olive/10 relative overflow-hidden"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse at 14% 18%, rgba(196, 102, 61, 0.10), transparent 55%)",
            "radial-gradient(ellipse at 86% 8%, rgba(122, 143, 107, 0.12), transparent 55%)",
            "radial-gradient(ellipse at 92% 88%, rgba(227, 167, 130, 0.18), transparent 60%)",
            "radial-gradient(ellipse at 6% 92%, rgba(74, 85, 48, 0.06), transparent 55%)",
          ].join(","),
        }}
      >
        <div className="mx-auto max-w-6xl px-6 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-8">
              <div className="stage stage-0">
                <Eyebrow tone="terracotta">
                  Service I &nbsp;&middot;&nbsp; The Launch Menu
                </Eyebrow>
              </div>
              <h1 className="stage stage-2 display-headline text-olive mt-5 text-[2.75rem] sm:text-5xl md:text-[4.25rem] leading-[1.02]">
                Recipes that <em className="not-italic text-terracotta">respect</em>{" "}
                your time.
              </h1>
              <p className="stage stage-3 mt-7 text-lg md:text-xl text-charcoal/85 max-w-2xl leading-[1.55]">
                Tested recipes. A Nutrition Ledger on every plate. Times that
                include the dishes. Short chef notes at the bottom covering the
                three or four decisions that actually matter. Anti-Inflammatory,
                Mediterranean, Whole30, High-Protein.
              </p>
              <div className="stage stage-4 mt-9 flex flex-wrap gap-3">
                <Link href="#patterns" className="btn-primary">
                  Start a pattern
                  <span aria-hidden>&rarr;</span>
                </Link>
                <Link href="#recipes" className="btn-secondary">
                  Browse recipes
                </Link>
              </div>
            </div>

            {/* "On the pass tonight" sidebar */}
            <aside className="stage stage-3 md:col-span-4 md:pl-8 md:border-l md:border-olive/10">
              <div className="eyebrow text-stone mb-4">On the pass tonight</div>
              <ul className="space-y-4">
                {[featured, ...recipes.filter((r) => r.slug !== featured?.slug)]
                  .slice(0, 4)
                  .filter((p): p is NonNullable<typeof p> => Boolean(p))
                  .map((p, i) => {
                    const hub = getHub(p.hub);
                    return (
                      <li key={p.slug} className="flex gap-3">
                        <span className="rank-numeral !text-xl !text-terracotta/60 tnum shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <Link
                            href={`/${p.slug}`}
                            className="font-serif text-[17px] leading-snug text-olive hover:text-terracotta transition block"
                          >
                            {p.title}
                          </Link>
                          <div className="text-[11px] uppercase tracking-[0.14em] text-stone mt-1 font-mono">
                            {hub?.shortName} &middot;{" "}
                            {p.totalTimeMinutes
                              ? `${p.totalTimeMinutes}m`
                              : `${p.readingTime} min`}
                            {p.nutritionLedger
                              ? ` \u00B7 ${p.nutritionLedger.proteinG}g P`
                              : ""}
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* === FEATURED RECIPE — terracotta-accented === */}
      {featured && (
        <section className="border-b border-olive/10 bg-cream-deep/30">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-5">
                <Eyebrow tone="terracotta">This week&apos;s feature</Eyebrow>
                <h2 className="font-serif text-3xl md:text-4xl text-olive mt-4 leading-[1.1]">
                  The one we&apos;re cooking this week.
                </h2>
                <p className="mt-5 text-charcoal/75 text-[15px] leading-relaxed">
                  One recipe a week gets this slot. It&apos;s the one we cooked
                  three times last week, agreed on, and would serve at our own
                  tables on Friday.
                </p>
              </div>

              <article className="md:col-span-7">
                <Link
                  href={`/${featured.slug}`}
                  className="card-lift group block bg-paper border border-terracotta/40 rounded-sm shadow-plate overflow-hidden"
                >
                  {/* Photo slot */}
                  <div className="photo-slot aspect-[16/9] relative">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-terracotta" />
                    <span className="absolute bottom-4 left-4 caps-label text-olive bg-paper/90 backdrop-blur px-2 py-1 rounded-sm">
                      Hero photo
                    </span>
                  </div>

                  <div className="p-7 md:p-9">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="diet-chip">Chef&apos;s pick</span>
                      <span className="caps-label text-stone font-mono">
                        {getHub(featured.hub)?.shortName} &middot;{" "}
                        {featured.totalTimeMinutes
                          ? `${featured.totalTimeMinutes}m`
                          : `${featured.readingTime} min`}
                      </span>
                    </div>
                    <h3 className="font-serif text-[1.9rem] md:text-[2.3rem] leading-[1.08] text-olive">
                      {featured.title}
                    </h3>
                    <p className="mt-4 text-charcoal/80 text-[15.5px] leading-relaxed">
                      {featured.description}
                    </p>

                    {featured.nutritionLedger && (
                      <dl className="mt-6 pt-5 border-t border-olive/10 grid grid-cols-4 gap-3 text-[13px]">
                        <div>
                          <dt className="caps-label text-stone">Calories</dt>
                          <dd className="font-mono text-terracotta text-lg tnum">
                            {featured.nutritionLedger.calories}
                          </dd>
                        </div>
                        <div>
                          <dt className="caps-label text-stone">Protein</dt>
                          <dd className="font-mono text-terracotta text-lg tnum">
                            {featured.nutritionLedger.proteinG}g
                          </dd>
                        </div>
                        <div>
                          <dt className="caps-label text-stone">Fiber</dt>
                          <dd className="font-mono text-olive text-lg tnum">
                            {featured.nutritionLedger.fiberG}g
                          </dd>
                        </div>
                        <div>
                          <dt className="caps-label text-stone">Servings</dt>
                          <dd className="font-mono text-olive text-lg tnum">
                            {featured.servings ?? "\u2014"}
                          </dd>
                        </div>
                      </dl>
                    )}

                    <span className="mt-6 inline-flex items-center gap-1.5 text-terracotta group-hover:text-terracotta-deep transition text-sm font-medium">
                      Open the recipe card
                      <span aria-hidden>&rarr;</span>
                    </span>
                  </div>
                </Link>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* === START A PATTERN — diet-inclusive block === */}
      <section id="patterns" className="border-b border-olive/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Reveal className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <Eyebrow tone="sage">Start a pattern</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 leading-tight">
                Not a diet. A pattern of recipes that happens to fit.
              </h2>
            </div>
            <Link
              href="/guides/diet-specific"
              className="text-terracotta hover:text-terracotta-deep text-sm font-medium"
            >
              Why pattern, not diet &rarr;
            </Link>
          </Reveal>

          <Reveal className="grid md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-olive/10">
            {DIET_PATTERNS.map((pattern, i) => (
              <Link
                key={pattern.key}
                href="/guides/diet-specific"
                className="group relative flex flex-col p-6 border-b lg:border-b-0 lg:border-r border-olive/10 last:border-r-0 hover:bg-cream-deep/50 transition"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="rank-numeral !text-4xl mb-3 !text-terracotta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mb-3">
                  <span
                    className="diet-chip diet-chip--shimmer"
                    style={{ animationDelay: `${0.25 + i * 0.12}s` }}
                  >
                    {pattern.name}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-olive leading-tight mb-2">
                  {pattern.name}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed flex-1">
                  {pattern.tagline}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-terracotta group-hover:text-olive text-xs font-medium uppercase tracking-[0.14em]">
                  Recipes
                  <span aria-hidden>&rarr;</span>
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* === HUBS === */}
      <section id="hubs" className="border-b border-olive/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Reveal className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <Eyebrow tone="terracotta">The menu sections</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 leading-tight">
                Five hubs. A hundred and fifty recipes on the way.
              </h2>
            </div>
            <Link
              href="/about"
              className="text-terracotta hover:text-olive text-sm font-medium"
            >
              How we built it &rarr;
            </Link>
          </Reveal>

          <Reveal className="grid md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-olive/10">
            {hubs.map((hub, i) => (
              <Link
                key={hub.slug}
                href={`/guides/${hub.slug}`}
                className="group relative flex flex-col p-6 border-b lg:border-b-0 lg:border-r border-olive/10 last:border-r-0 hover:bg-cream-deep/40 transition"
              >
                <span className="rank-numeral !text-4xl mb-3 !text-olive/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl text-olive leading-tight mb-2">
                  {hub.name}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed flex-1">
                  {hub.oneLiner}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-terracotta group-hover:text-olive text-xs font-medium uppercase tracking-[0.14em]">
                  Open hub
                  <span aria-hidden>&rarr;</span>
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* === LATEST recipes grid === */}
      <section id="recipes" className="border-b border-olive/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Reveal className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <Eyebrow tone="terracotta">Freshly tested</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 leading-tight">
                The latest on the pass.
              </h2>
            </div>
          </Reveal>

          <Reveal className="grid md:grid-cols-12 gap-10">
            {/* Big feature — first recent */}
            {recent[0] && (
              <article className="md:col-span-7">
                <Link href={`/${recent[0].slug}`} className="card-lift group block rounded-sm p-2 -m-2">
                  <div className="photo-slot aspect-[16/9] rounded-sm mb-5 relative overflow-hidden border border-olive/10">
                    <div className="absolute bottom-5 left-5">
                      <span className="caps-label text-olive bg-paper/85 backdrop-blur px-2 py-1 rounded-sm">
                        {typeLabel[recent[0].postType]}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-olive leading-[1.12] group-hover:text-terracotta transition">
                    {recent[0].title}
                  </h3>
                  <p className="mt-3 text-charcoal/80 text-[15.5px] leading-relaxed line-clamp-3">
                    {recent[0].description}
                  </p>
                  <div className="mt-4 caps-label text-stone font-mono">
                    {getHub(recent[0].hub)?.shortName} &middot;{" "}
                    {recent[0].totalTimeMinutes
                      ? `${recent[0].totalTimeMinutes}m`
                      : `${recent[0].readingTime} min`}
                    {recent[0].nutritionLedger
                      ? ` · ${recent[0].nutritionLedger.proteinG}g protein`
                      : ""}
                  </div>
                </Link>
              </article>
            )}

            {/* Stack of 4 recent headlines */}
            <div className="md:col-span-5 space-y-0">
              {recent.slice(1, 5).map((p) => (
                <article
                  key={p.slug}
                  className="py-5 border-b border-olive/10 first:border-t first:pt-0 first:mt-0 last:border-b-0"
                >
                  <Link href={`/${p.slug}`} className="group block">
                    <div className="caps-label text-stone mb-1.5">
                      {typeLabel[p.postType]} &middot; {getHub(p.hub)?.shortName}
                    </div>
                    <h3 className="font-serif text-lg text-olive leading-snug group-hover:text-terracotta transition">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] text-charcoal/70 leading-snug line-clamp-2">
                      {p.description}
                    </p>
                    {p.nutritionLedger && (
                      <div className="mt-2 flex gap-4 font-mono text-[12px] text-olive">
                        <span>
                          <b className="text-terracotta">
                            {p.nutritionLedger.calories}
                          </b>{" "}
                          kcal
                        </span>
                        <span>
                          <b className="text-terracotta">
                            {p.nutritionLedger.proteinG}g
                          </b>{" "}
                          protein
                        </span>
                        {p.totalTimeMinutes && (
                          <span>
                            <b>{p.totalTimeMinutes}m</b> total
                          </span>
                        )}
                      </div>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* === "HOW WE TEST" CREDO === */}
      <section className="border-b border-olive/10 bg-olive text-cream relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28 relative">
          <div className="absolute top-8 left-6 right-6">
            <KitchenRule className="text-sage-light" />
          </div>
          <Reveal>
            <Eyebrow tone="terracotta" className="!text-terracotta">
              How we cook
            </Eyebrow>
            <h2 className="font-serif text-3xl md:text-4xl mt-4 leading-[1.15] text-cream">
              <span className="text-sage-light">Here&apos;s the deal:</span>{" "}
              every nutrition number is real, every time is honest, and every
              technique on the page has a reason we can point to.
            </h2>
          </Reveal>
          <Reveal className="grid md:grid-cols-3 gap-10 mt-12">
            <div>
              <div className="rank-numeral !text-terracotta-soft mb-2">01</div>
              <h3 className="font-serif text-xl text-cream mb-2">
                Every recipe tested.
              </h3>
              <p className="text-cream/80 text-[14.5px] leading-relaxed">
                In home kitchens, on home equipment, at least three times
                before it publishes. We note what failed and what we adjusted.
              </p>
            </div>
            <div>
              <div className="rank-numeral !text-terracotta-soft mb-2">02</div>
              <h3 className="font-serif text-xl text-cream mb-2">
                Every number real.
              </h3>
              <p className="text-cream/80 text-[14.5px] leading-relaxed">
                Nutrition Ledger calculated per serving from USDA FoodData
                Central. Not AI, not the packaging lies, not a vibe.
              </p>
            </div>
            <div>
              <div className="rank-numeral !text-terracotta-soft mb-2">03</div>
              <h3 className="font-serif text-xl text-cream mb-2">
                Every time honest.
              </h3>
              <p className="text-cream/80 text-[14.5px] leading-relaxed">
                Forty-five minutes means forty-five including dishes. If the
                stock reduces for twenty minutes while you stand there, that&apos;s
                twenty minutes.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 pt-8 border-t border-sage-light/30">
            <Link
              href="/editorial-standards"
              className="inline-flex items-center gap-1.5 text-sage-light hover:text-terracotta-soft text-sm font-medium"
            >
              Read the kitchen standards
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === EXPLAINERS === */}
      {explainers.length > 0 && (
        <section className="border-b border-olive/10">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <Reveal className="flex items-end justify-between mb-8 flex-wrap gap-3">
              <div>
                <Eyebrow tone="sage">The Explainers</Eyebrow>
                <h2 className="font-serif text-3xl text-olive mt-3 leading-tight">
                  The terms and techniques you keep seeing, in plain English.
                </h2>
              </div>
            </Reveal>
            <Reveal className="grid md:grid-cols-3 gap-0 border-t border-olive/10">
              {explainers.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="group p-6 border-b md:border-b-0 md:border-r border-olive/10 last:border-r-0 hover:bg-cream-deep/40 transition"
                >
                  <RankNumeral n={i + 1} />
                  <h3 className="font-serif text-xl text-olive leading-tight mt-3 group-hover:text-terracotta transition">
                    {p.title}
                  </h3>
                  <p className="text-sm text-charcoal/75 mt-2 leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* === DISPATCH (newsletter) === */}
      <section className="bg-cream-deep/60 border-b border-olive/10">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <Reveal className="text-center mb-8">
            <Eyebrow tone="terracotta">The Dispatch</Eyebrow>
            <h2 className="font-serif text-3xl md:text-[2.5rem] text-olive mt-3 leading-[1.1] max-w-2xl mx-auto">
              One weekly recipe worth cooking.
            </h2>
            <p className="mt-5 text-charcoal/80 text-[15.5px] max-w-xl mx-auto leading-relaxed">
              No daily fire-hose. One new recipe we&apos;ve tested, one seasonal
              note, Tuesday morning. Free 14-day Anti-Inflammatory Starter
              Kit when you subscribe.
            </p>
          </Reveal>
          <EmailCapture />
        </div>
      </section>

      {/* === CLOSING === */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-10">
          <DotRule drawIn />
          <p className="text-center caps-label text-stone mt-6">
            Last service &middot;{" "}
            {new Date().toLocaleString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </section>
    </main>
  );
}
