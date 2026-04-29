import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { team } from "@/lib/content/team";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { KitchenRule, DotRule } from "@/components/editorial/DotRule";
import { InitialsAvatar, initialsOf } from "@/components/InitialsAvatar";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "The Team",
  description:
    "The recipe developers, photographers, and registered dietitian behind ThatCleanChef. Every recipe is reviewed by a credentialed RDN before it goes live.",
  path: "/team",
});

const accentBg: Record<string, string> = {
  sage: "bg-sage/10",
  terracotta: "bg-terracotta/10",
  olive: "bg-olive/10",
  stone: "bg-stone/10",
};
const accentBar: Record<string, string> = {
  sage: "bg-sage",
  terracotta: "bg-terracotta",
  olive: "bg-olive",
  stone: "bg-stone",
};

export default function TeamIndexPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Team" }];
  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <main>
        <section className="border-b border-olive/10 bg-cream-deep/30">
          <div className="mx-auto max-w-6xl px-6 pt-10 pb-14 md:pb-20">
            <Breadcrumbs crumbs={crumbs} />
            <div className="mt-8 max-w-2xl">
              <Eyebrow tone="terracotta">The team</Eyebrow>
              <h1 className="display-headline text-olive mt-3 text-[2.4rem] md:text-[3.4rem] leading-[1.04]">
                The people behind every plate.
              </h1>
              <p className="mt-6 font-serif italic text-xl md:text-2xl text-charcoal/80 leading-[1.45]">
                A registered dietitian, a trained chef, a working photographer,
                and an editor who holds the line on tone. Every page on this
                site has all four of their fingerprints on it.
              </p>
            </div>
            <KitchenRule className="mt-12" drawIn />
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <ul className="grid md:grid-cols-2 gap-0 border-t border-olive/10">
              {team.map((m) => {
                const accent = m.accent ?? "sage";
                return (
                  <li
                    key={m.slug}
                    className="border-b md:[&:nth-child(odd)]:border-r border-olive/10"
                  >
                    <Link
                      href={`/team/${m.slug}`}
                      className="group block p-7 md:p-10 hover:bg-cream-deep/40 transition"
                    >
                      <div className="grid grid-cols-[1fr_auto] gap-6 items-start">
                        <div>
                          <Eyebrow tone={accent === "stone" ? "stone" : "terracotta"}>
                            {m.role}
                          </Eyebrow>
                          <h2 className="font-serif text-2xl md:text-[1.8rem] text-olive leading-tight mt-3 group-hover:text-terracotta transition">
                            {m.name}
                          </h2>
                          <p className="caps-label text-stone mt-1">
                            {m.credentials}
                          </p>
                          <p className="mt-4 text-[15px] text-charcoal/85 leading-relaxed max-w-md">
                            {m.oneLiner}
                          </p>
                        </div>
                        {m.useInitials ? (
                          <div className="hidden sm:block">
                            <InitialsAvatar
                              initials={initialsOf(m.name)}
                              accent={accent}
                              size="md"
                              ariaLabel={`${m.name} avatar`}
                            />
                          </div>
                        ) : m.imageUrl ? (
                          <div className="hidden sm:block relative w-24 aspect-square rounded-sm overflow-hidden border border-olive/15 bg-cream-deep/40">
                            <Image
                              src={m.imageUrl}
                              alt={m.name}
                              fill
                              sizes="96px"
                              className="object-cover"
                            />
                            <div
                              className={`absolute top-0 left-0 w-1 h-full ${accentBar[accent]}`}
                            />
                          </div>
                        ) : (
                          <div
                            className={`hidden sm:block w-20 aspect-[4/5] rounded-sm border border-olive/15 ${accentBg[accent]} relative overflow-hidden`}
                            aria-hidden="true"
                          >
                            <div
                              className={`absolute top-0 left-0 w-1 h-full ${accentBar[accent]}`}
                            />
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <DotRule drawIn />
        </section>
      </main>
    </>
  );
}
