import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";
import { relatedPosts } from "@/lib/content/posts";
import { Breadcrumbs } from "../Breadcrumbs";
import { ReviewStamp } from "../ReviewStamp";
import { AuthorBio } from "../AuthorBio";
import { RelatedPosts } from "../RelatedPosts";
import { SourcesList } from "../SourcesList";
import { EmailCapture } from "../EmailCapture";
import { ArticleJsonLd } from "../schema/ArticleJsonLd";
import { BreadcrumbJsonLd } from "../schema/BreadcrumbJsonLd";
import { FaqJsonLd } from "../schema/FaqJsonLd";
import { ArticleShell } from "./PageShell";
import { Eyebrow } from "../editorial/Eyebrow";
import { DotRule, KitchenRule } from "../editorial/DotRule";
import { KeyTakeaway } from "../editorial/KeyTakeaway";
import { DietTags } from "../NutritionLedger";
import { WhyWeTestedThreeTimes } from "../editorial/WhyWeTestedThreeTimes";

export function ClusterTemplate({ post }: { post: Post }) {
  const hub = getHub(post.hub);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/#hubs" },
    hub ? { label: hub.name, href: `/guides/${hub.slug}` } : { label: "" },
    { label: post.title },
  ];
  const related = relatedPosts(post);

  return (
    <>
      <ArticleJsonLd
        path={`/${post.slug}`}
        headline={post.h1}
        description={post.description}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
      />
      <BreadcrumbJsonLd crumbs={crumbs} />
      {post.faq && <FaqJsonLd faq={post.faq} />}

      <ArticleShell>
        <Breadcrumbs crumbs={crumbs} />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Eyebrow tone="sage">The Explainer</Eyebrow>
          {hub && (
            <span className="caps-label text-stone">&middot; {hub.shortName}</span>
          )}
        </div>

        <h1 className="display-headline text-olive mt-4 text-[2.1rem] md:text-[2.75rem] leading-[1.07]">
          {post.h1}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <ReviewStamp
            updatedAt={post.updatedAt}
            readingTime={post.readingTime}
          />
        </div>

        <DietTags tags={post.dietTags} />

        <KitchenRule className="mt-7" />

        <p className="drop-cap mt-9 text-[1.08rem] leading-[1.75] text-charcoal/90">
          {post.description}
        </p>

        <KeyTakeaway variant="key-takeaway" title="The short answer">
          The TL;DR sits here for the reader who came for the answer and
          not the preamble. Scroll for the chef notes, the sources, and the
          questions people ask next.
        </KeyTakeaway>

        <WhyWeTestedThreeTimes
          notes={post.testNotes}
          recipeName={post.h1.toLowerCase().replace(/^(the |a |an )/, "")}
        />

        {post.faq && post.faq.length > 0 && (
          <section className="mt-12">
            <Eyebrow tone="terracotta">The FAQ</Eyebrow>
            <h2 className="font-serif text-2xl md:text-[1.75rem] text-olive mt-2 mb-5 leading-tight">
              What people ask us next.
            </h2>
            <dl className="divide-y divide-olive/10 border-y border-olive/10">
              {post.faq.map((f, i) => (
                <div key={i} className="py-5 first:pt-0 last:pb-0">
                  <dt className="font-serif text-lg text-olive leading-snug mb-2">
                    {f.q}
                  </dt>
                  <dd className="text-[15.5px] text-charcoal/85 leading-relaxed">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <DotRule className="my-12" />

        <SourcesList sources={post.sources ?? []} />
        <AuthorBio />
        <RelatedPosts posts={related} />

        <div className="mt-12">
          <EmailCapture variant="end-of-article" />
        </div>
      </ArticleShell>
    </>
  );
}
