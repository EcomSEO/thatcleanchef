import Image from "next/image";
import Link from "next/link";
import { DietitianReviewedBadge } from "./editorial/DietitianReviewedBadge";
import { TestKitchenStamp } from "./editorial/TestKitchenStamp";

/**
 * Home hero — re-skinned 2026-04-29 against Stitch design.
 *
 * Two-column cream-on-cream split: serif italic display headline + dek
 * + trust pills + trending links on the left; organic 4:3 food-photo
 * card with a soft outer shadow on the right. The cream paper extends
 * full-bleed; only a hairline rule separates from the next section.
 */
export function Hero({
  eyebrow = "Issue No. 01 · Spring service",
  h1 = "Clean-eating recipes that respect your time.",
  dek = "Chef-tested, USDA-cited, time-honest. Anti-inflammatory, Mediterranean, high-protein, low-FODMAP — five hubs, no diet-scolding, original photography on every recipe.",
  featured = {
    eyebrow: "Anti-inflammatory · 55 min",
    title: "Anti-inflammatory golden chicken soup",
    dek: "Bone broth, turmeric bloomed in fat, 32g protein per bowl — the bowl we cook most weeks in winter.",
    href: "/anti-inflammatory-golden-chicken-soup",
    author: "The ThatCleanChef Kitchen",
    minutes: 55,
    imageUrl: "/images/recipes/anti-inflammatory-golden-chicken-soup.jpg",
  },
  trending = [
    { label: "High-protein recipes", href: "/guides/protein-forward" },
    { label: "Anti-inflammatory plates", href: "/guides/diet-specific" },
    { label: "Sheet-pan meal prep", href: "/guides/technique" },
  ],
}: {
  eyebrow?: string;
  h1?: string;
  dek?: string;
  featured?: {
    eyebrow: string;
    title: string;
    dek: string;
    href: string;
    author: string;
    minutes: number;
    imageUrl?: string;
  };
  trending?: Array<{ label: string; href: string }>;
}) {
  return (
    <section className="bg-cream border-b border-hairline">
      <div className="mx-auto max-w-7xl px-5 pt-12 pb-16 md:pt-20 md:pb-24 grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left: editorial headline column */}
        <div className="md:col-span-7">
          <div className="caps-label text-terracotta mb-5 tracking-[0.16em]">
            {eyebrow}
          </div>
          <h1 className="font-serif italic text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.02] text-charcoal tracking-[-0.01em]">
            {h1}
          </h1>
          <p className="mt-7 text-[17px] md:text-[18px] text-ink-2 max-w-xl leading-[1.6]">
            {dek}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <DietitianReviewedBadge />
            <TestKitchenStamp testCount={3} />
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-body-sm">
            <span className="caps-label text-stone tracking-[0.14em]">Trending</span>
            <span className="text-ink-3">·</span>
            {trending.map((t, i) => (
              <span key={t.href + t.label} className="flex items-center gap-x-5">
                <Link
                  href={t.href}
                  className="text-charcoal hover:text-terracotta underline decoration-hairline decoration-1 underline-offset-4 hover:decoration-terracotta italic"
                >
                  {t.label}
                </Link>
                {i < trending.length - 1 && (
                  <span className="text-ink-3" aria-hidden>
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Right: organic food-photo card */}
        <div className="md:col-span-5">
          <Link
            href={featured.href}
            className="block group relative"
            aria-label={`Featured recipe: ${featured.title}`}
          >
            <div className="relative aspect-[4/5] md:aspect-[4/4.5] w-full overflow-hidden rounded-[28px] bg-cream-deep shadow-plate ring-1 ring-hairline">
              {featured.imageUrl ? (
                <Image
                  src={featured.imageUrl}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              ) : (
                <div
                  className="photo-slot absolute inset-0"
                  role="img"
                  aria-label="Featured recipe photo placeholder"
                />
              )}
              {/* Soft cream vignette at bottom for the title overlay */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/45 via-charcoal/10 to-transparent"
                aria-hidden
              />
              {/* Title overlay card */}
              <div className="absolute inset-x-5 bottom-5 md:inset-x-7 md:bottom-7">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/90 backdrop-blur-sm px-2.5 py-1 text-[10.5px] font-mono uppercase tracking-[0.12em] text-sage-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                    RD reviewed
                  </span>
                  <span className="text-[10.5px] font-mono uppercase tracking-[0.12em] text-cream">
                    {featured.eyebrow}
                  </span>
                </div>
                <h3 className="font-serif text-[22px] md:text-[26px] text-cream leading-[1.15] max-w-[20ch]">
                  {featured.title}
                </h3>
                <div className="mt-3 flex items-center gap-3 text-[11.5px] font-mono tracking-wider text-cream/85">
                  <span>{featured.minutes} MIN</span>
                  <span aria-hidden>·</span>
                  <span>BY {featured.author.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
