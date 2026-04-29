import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getTeamMember, team } from "@/lib/content/team";
import { posts } from "@/lib/content/posts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/schema/BreadcrumbJsonLd";
import { JsonLd } from "@/components/schema/JsonLd";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { KitchenRule, DotRule } from "@/components/editorial/DotRule";
import { InitialsAvatar, initialsOf } from "@/components/InitialsAvatar";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/content/site";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getTeamMember(slug);
  if (!m) return {};
  return pageMetadata({
    title: `${m.name}, ${m.credentials}`,
    description: m.oneLiner,
    path: `/team/${m.slug}`,
    ogType: "article",
  });
}

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

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = getTeamMember(slug);
  if (!m) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Team", href: "/team" },
    { label: m.name },
  ];

  // Posts this person reviewed (right now: every recipe is reviewed by Lena)
  const isPrimaryReviewer = m.slug === "lena-marsh";
  const reviewed = isPrimaryReviewer
    ? posts.filter((p) => p.nutritionLedger || p.postType === "recipe")
    : [];

  const accent = m.accent ?? "sage";

  // schema.org/Person + ProfilePage with credential and reviewed scope
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/team/${m.slug}#person`,
    name: m.name,
    jobTitle: m.jobTitle,
    description: m.oneLiner,
    url: `${SITE.url}/team/${m.slug}`,
    ...(m.credentialingBody && {
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: m.credentials,
        credentialCategory: m.role,
        recognizedBy: {
          "@type": "Organization",
          name: m.credentialingBody,
          ...(m.credentialingUrl && { url: m.credentialingUrl }),
        },
      },
    }),
    knowsAbout: m.expertise,
    worksFor: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <JsonLd data={personLd} />

      <main>
        <section className="border-b border-olive/10 bg-cream-deep/30">
          <div className="mx-auto max-w-6xl px-6 pt-10 pb-14 md:pb-20">
            <Breadcrumbs crumbs={crumbs} />

            <div className="mt-10 grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-4">
                {m.useInitials ? (
                  <InitialsAvatar
                    initials={initialsOf(m.name)}
                    accent={accent}
                    size="xl"
                    ariaLabel={`${m.name} avatar`}
                  />
                ) : m.imageUrl ? (
                  <div className="relative aspect-square rounded-sm overflow-hidden border border-olive/15 bg-cream-deep/40">
                    <Image
                      src={m.imageUrl}
                      alt={m.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                      priority
                    />
                    <div
                      className={`absolute top-0 left-0 w-1 h-full ${accentBar[accent]}`}
                    />
                  </div>
                ) : (
                  <div
                    className={`aspect-[4/5] rounded-sm border border-olive/15 ${accentBg[accent]} relative overflow-hidden`}
                    aria-hidden="true"
                  >
                    <div
                      className={`absolute top-0 left-0 w-1 h-full ${accentBar[accent]}`}
                    />
                  </div>
                )}
              </div>
              <div className="md:col-span-8">
                <Eyebrow tone={accent === "stone" ? "stone" : "terracotta"}>
                  {m.role}
                </Eyebrow>
                <h1 className="display-headline text-olive mt-3 text-[2.4rem] md:text-[3.2rem] leading-[1.04]">
                  {m.name}
                </h1>
                <p className="mt-2 caps-label text-stone">{m.credentials}</p>
                <p className="mt-6 font-serif italic text-xl md:text-2xl text-charcoal/80 max-w-2xl leading-[1.45]">
                  {m.oneLiner}
                </p>
                <KitchenRule className="mt-10" drawIn />
              </div>
            </div>
          </div>
        </section>

        {/* Bio + scope */}
        <section className="border-b border-olive/10">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <Eyebrow tone="sage">Biography</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 mb-6 leading-tight">
                Who reviews the work.
              </h2>
              <p className="font-serif text-charcoal/85 leading-[1.78] text-[16px] max-w-[64ch]">
                {m.bio}
              </p>
            </div>
            <aside className="md:col-span-5 md:pl-6 md:border-l md:border-olive/10">
              {m.verifiedCredential === false && m.credentialingNote && (
                <div className="mb-7 p-4 rounded-sm border border-terracotta/30 bg-terracotta/5">
                  <p className="caps-label text-terracotta">
                    Credential verification pending
                  </p>
                  <p className="mt-2 text-[13.5px] text-charcoal/85 leading-relaxed">
                    {m.credentialingNote}
                  </p>
                </div>
              )}

              <Eyebrow tone="stone">Scope on this site</Eyebrow>
              <p className="mt-3 text-[15px] text-charcoal/85 leading-relaxed">
                {m.scope}
              </p>

              <dl className="mt-6 pt-6 border-t border-olive/10 space-y-3 text-[13.5px]">
                <div className="flex justify-between gap-4">
                  <dt className="text-stone">Role</dt>
                  <dd className="text-olive">{m.role}</dd>
                </div>
                {m.yearsExperience && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-stone">Years of practice</dt>
                    <dd className="text-olive tnum font-mono">
                      {m.yearsExperience}
                    </dd>
                  </div>
                )}
                {m.credentialingBody && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-stone">Registered with</dt>
                    <dd className="text-olive text-right">
                      {m.credentialingUrl ? (
                        <a
                          href={m.credentialingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-terracotta/50 hover:text-terracotta"
                        >
                          {m.credentialingBody}
                        </a>
                      ) : (
                        m.credentialingBody
                      )}
                    </dd>
                  </div>
                )}
              </dl>

              {m.expertise && m.expertise.length > 0 && (
                <div className="mt-6 pt-6 border-t border-olive/10">
                  <Eyebrow tone="sage">Areas of expertise</Eyebrow>
                  <ul className="mt-3 space-y-2 text-[14px] text-charcoal/85">
                    {m.expertise.map((e, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-terracotta mt-2" aria-hidden>
                          ●
                        </span>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </section>

        {/* Reviewed work */}
        {reviewed.length > 0 && (
          <section className="border-b border-olive/10 bg-paper">
            <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
              <Eyebrow tone="terracotta">Reviewed by {m.name.split(" ")[0]}</Eyebrow>
              <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 mb-8 leading-tight">
                Recipes and guides on this site.
              </h2>
              <ul className="divide-y divide-olive/10 border-y border-olive/10">
                {reviewed.slice(0, 12).map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${p.slug}`}
                      className="group grid md:grid-cols-[1fr_auto] gap-5 py-5 items-baseline hover:bg-cream-deep/30 px-2 transition"
                    >
                      <div>
                        <h3 className="font-serif text-lg text-olive group-hover:text-terracotta transition leading-snug">
                          {p.title}
                        </h3>
                        <p className="text-sm text-charcoal/70 mt-1 line-clamp-1">
                          {p.description}
                        </p>
                      </div>
                      <span className="caps-label text-stone tnum whitespace-nowrap">
                        Reviewed{" "}
                        {new Date(p.updatedAt).toLocaleDateString("en-GB", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              {reviewed.length > 12 && (
                <p className="mt-6 text-[13.5px] text-stone italic">
                  Plus {reviewed.length - 12} more — see the recipe index.
                </p>
              )}
            </div>
          </section>
        )}

        <section className="mx-auto max-w-6xl px-6 py-10">
          <DotRule drawIn />
        </section>
      </main>
    </>
  );
}
