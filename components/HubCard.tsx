import Image from "next/image";
import Link from "next/link";
import type { Hub } from "@/lib/content/hubs";

export function HubCard({ hub }: { hub: Hub }) {
  return (
    <Link
      href={`/guides/${hub.slug}`}
      className="block bg-paper border border-olive/10 rounded-sm hover:border-terracotta/40 transition h-full overflow-hidden"
    >
      {hub.imageUrl && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-cream-deep/40">
          <Image
            src={hub.imageUrl}
            alt={hub.name}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-serif text-xl text-olive mb-2">{hub.name}</h3>
        <p className="text-sm text-charcoal/70 leading-relaxed">{hub.oneLiner}</p>
        <span className="mt-4 inline-block text-terracotta text-sm font-medium">
          Browse &rarr;
        </span>
      </div>
    </Link>
  );
}
