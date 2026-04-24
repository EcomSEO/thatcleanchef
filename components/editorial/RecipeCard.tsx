"use client";

import { useMemo, useState } from "react";
import type { Post } from "@/lib/content/posts";
import { ScaleButton } from "./ScaleButton";

/**
 * RecipeCard — bordered recipe block with hero photo slot, Nutrition Ledger
 * at the top, ingredient list, numbered steps, chef technique notes, and
 * source attribution.
 *
 * Designed to degrade gracefully: when the underlying Post doesn't carry
 * explicit ingredient arrays, we treat `items[]` as chef technique notes
 * (matching the data model in posts.ts) and surface them as the card's
 * numbered "Why this works" sequence.
 */
export function RecipeCard({ post }: { post: Post }) {
  const baseServings = post.servings ?? 1;
  const [scale, setScale] = useState<number>(1);

  const numberedItems = post.items ?? [];

  // Derive a light ingredient line from `ourPick` when present
  // (we never fabricate ingredient data — we just surface what the post has).
  const pickLine = post.ourPick
    ? {
        name: post.ourPick.name,
        tier: post.ourPick.tier,
        reason: post.ourPick.reason,
      }
    : null;

  const scaleLabel = useMemo(
    () => (scale === 1 ? "original" : `${scale}× scaled`),
    [scale]
  );

  return (
    <article
      id="recipe-card"
      className="card-lift my-10 relative border border-olive/15 rounded-sm bg-paper shadow-plate overflow-hidden"
      aria-label={`${post.h1} — recipe card`}
    >
      {/* Hero image slot */}
      <div className="photo-slot aspect-[16/9] relative">
        <div className="absolute inset-0 flex items-end p-6 md:p-8">
          <div>
            <div className="caps-label text-olive bg-paper/85 backdrop-blur px-2 py-1 rounded-sm inline-block">
              Hero photo &middot; ships with real photography
            </div>
          </div>
        </div>
      </div>

      {/* Card header: title + meta */}
      <header className="px-6 md:px-10 pt-8 pb-4 border-b border-olive/10">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
          <span className="caps-label text-terracotta">The Recipe Card</span>
        </div>
        <h2 className="font-serif text-2xl md:text-[1.8rem] text-olive leading-tight">
          {post.h1}
        </h2>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[13px] text-olive">
          {post.totalTimeMinutes != null && (
            <span>
              <b className="text-terracotta">{formatTime(post.totalTimeMinutes)}</b>
              <span className="ml-1 text-stone">total</span>
            </span>
          )}
          {post.prepTimeMinutes != null && (
            <span>
              <b>{formatTime(post.prepTimeMinutes)}</b>
              <span className="ml-1 text-stone">prep</span>
            </span>
          )}
          {post.cookTimeMinutes != null && (
            <span>
              <b>{formatTime(post.cookTimeMinutes)}</b>
              <span className="ml-1 text-stone">cook</span>
            </span>
          )}
          {post.servings != null && (
            <span>
              <b>{baseServings * scale}</b>
              <span className="ml-1 text-stone">
                serving{baseServings * scale === 1 ? "" : "s"}
              </span>
            </span>
          )}
        </div>
      </header>

      {/* Body grid: ingredients / steps on desktop */}
      <div className="grid md:grid-cols-[minmax(0,_1fr)_minmax(0,_1.5fr)] gap-0">
        {/* Ingredients / "In the pot" */}
        <aside className="px-6 md:px-10 py-8 bg-cream-deep/40 border-b md:border-b-0 md:border-r border-olive/10">
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="caps-label text-olive">In the pot</span>
            <ScaleButton baseServings={baseServings} onChange={(s) => setScale(s)} />
          </div>

          {pickLine ? (
            <div className="mb-5 p-3 border border-terracotta/30 bg-terracotta/5 rounded-sm">
              <div className="caps-label text-terracotta mb-1">
                Chef&apos;s pick &middot; {pickLine.tier}
              </div>
              <div className="font-serif text-[1.05rem] text-olive leading-snug">
                {pickLine.name}
              </div>
              <p className="mt-1.5 text-[13.5px] text-charcoal/80 leading-snug">
                {pickLine.reason}
              </p>
            </div>
          ) : null}

          <p className="text-[13.5px] text-stone leading-relaxed">
            Full ingredient list ships with photography and the printable card.
            For this preview, the chef technique decisions that make the recipe
            are on the right &mdash; they&apos;re the reason the recipe works.
          </p>

          <div className="mt-6 pt-5 border-t border-olive/10 text-[12px] text-stone">
            <span className="caps-label">Source</span>{" "}
            <span className="ml-2">
              {new Date(post.updatedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}{" "}
              &middot; {scaleLabel}
            </span>
          </div>
        </aside>

        {/* Steps / numbered chef technique decisions */}
        <section className="px-6 md:px-10 py-8">
          <div className="flex items-center gap-2 mb-5">
            <span className="caps-label text-olive">On the stove</span>
          </div>
          {numberedItems.length > 0 ? (
            <ol className="space-y-5">
              {numberedItems.map((step) => (
                <li key={step.rank} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="rank-numeral !text-[1.75rem] !text-terracotta tnum pt-1">
                    {String(step.rank).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.15rem] text-olive leading-snug">
                      {step.name}
                    </h3>
                    {step.summary && (
                      <p className="mt-1 text-[14.5px] text-charcoal/85 leading-relaxed">
                        {step.summary}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-[14px] text-stone">
              Technique notes land with the photography shoot. The Nutrition
              Ledger, time honesty, and source list are already in place.
            </p>
          )}
        </section>
      </div>
    </article>
  );
}

function formatTime(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins === 0 ? `${hours}h` : `${hours}h ${mins}m`;
}
