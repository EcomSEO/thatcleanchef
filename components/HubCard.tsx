import Link from "next/link";
import type { Hub } from "@/lib/content/hubs";

export function HubCard({ hub }: { hub: Hub }) {
  return (
    <Link
      href={`/guides/${hub.slug}`}
      className="block p-6 bg-paper border border-olive/10 rounded-sm hover:border-terracotta/40 transition h-full"
    >
      <h3 className="font-serif text-xl text-olive mb-2">{hub.name}</h3>
      <p className="text-sm text-charcoal/70 leading-relaxed">{hub.oneLiner}</p>
      <span className="mt-4 inline-block text-terracotta text-sm font-medium">
        Browse &rarr;
      </span>
    </Link>
  );
}
