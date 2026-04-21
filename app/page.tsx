import { hubs } from "@/lib/content/hubs";
import { featuredPost, latestPosts } from "@/lib/content/posts";
import { HubCard } from "@/components/HubCard";
import { PostCard } from "@/components/PostCard";
import { EmailCapture } from "@/components/EmailCapture";
import Link from "next/link";

export default function HomePage() {
  const featured = featuredPost();
  const recent = latestPosts(6);

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.08] text-olive">
            Clean plates, sharp recipes.
          </h1>
          <p className="mt-6 text-xl text-charcoal/80 max-w-2xl leading-relaxed">
            Chef-tested recipes with real Nutrition Ledgers, honest prep times,
            and original photography. Anti-Inflammatory, Mediterranean, Whole30,
            High-Protein.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#hubs"
              className="inline-flex items-center rounded-md bg-olive px-6 py-3 text-cream hover:bg-terracotta transition"
            >
              Browse recipes →
            </Link>
            <Link
              href="#email-capture"
              className="inline-flex items-center rounded-md border border-olive/30 px-6 py-3 text-olive hover:border-olive transition"
            >
              Get the Clean Chef Starter Kit
            </Link>
          </div>
        </div>
      </section>

      {featured && (
        <section className="mx-auto max-w-6xl px-6 py-14 border-t border-olive/10">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-wide text-terracotta">
              This week&apos;s featured recipe
            </span>
          </div>
          <PostCard post={featured} variant="feature" />
        </section>
      )}

      <section id="hubs" className="mx-auto max-w-6xl px-6 py-16 border-t border-olive/10">
        <h2 className="font-serif text-3xl text-olive mb-8">Recipe hubs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {hubs.map((hub) => (<HubCard key={hub.slug} hub={hub} />))}
        </div>
      </section>

      {recent.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16 border-t border-olive/10">
          <h2 className="font-serif text-3xl text-olive mb-8">Latest recipes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recent.map((p) => (<PostCard key={p.slug} post={p} />))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-olive/10">
        <EmailCapture />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-olive/10">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-serif text-lg text-olive mb-2">Every recipe tested.</h3>
            <p className="text-sm text-charcoal/70">In home kitchens, on home equipment.</p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-olive mb-2">Every nutrition number real.</h3>
            <p className="text-sm text-charcoal/70">USDA FDC-sourced, per serving.</p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-olive mb-2">Every photo original.</h3>
            <p className="text-sm text-charcoal/70">No stock.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
