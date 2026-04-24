"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { DotRule } from "@/components/editorial/DotRule";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface the error to the browser console for developer visibility.
    // In production, the Next.js runtime also reports this.
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <main>
      <section className="border-b border-olive/10">
        <div className="mx-auto max-w-3xl px-6 pt-16 md:pt-24 pb-14 md:pb-20">
          <Eyebrow tone="terracotta">Error &middot; Back of house</Eyebrow>
          <h1 className="display-headline text-olive mt-5 text-[2.6rem] sm:text-5xl md:text-[3.75rem] leading-[1.02]">
            Something broke on{" "}
            <em className="not-italic text-terracotta">our</em> side.
          </h1>

          <div className="prose mt-8">
            <p className="text-charcoal/85">
              A burner blew out between the kitchen and the pass. The page
              itself exists &mdash; we just couldn&apos;t plate it this time.
              It&apos;s on us, not you.
            </p>
            <p className="text-charcoal/80">
              Hit retry first. If the same thing fails twice, head back to
              the home page and try a different route &mdash; we&apos;ll get
              the line going again.
            </p>
          </div>

          {error?.digest && (
            <p className="mt-6 caps-label text-stone font-mono">
              Ticket &middot; {error.digest}
            </p>
          )}

          <div className="mt-9 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="btn-primary"
            >
              Try again
              <span aria-hidden>&rarr;</span>
            </button>
            <Link href="/" className="btn-secondary">
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-10">
          <DotRule />
          <p className="text-center caps-label text-stone mt-6">
            Error &middot; Back of house
          </p>
        </div>
      </section>
    </main>
  );
}
