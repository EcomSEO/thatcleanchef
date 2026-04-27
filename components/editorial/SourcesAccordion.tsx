"use client";

import { useState } from "react";

export type SourceRef = {
  n: number;
  title: string;
  publisher?: string;
  url: string;
  tag?: "USDA" | "Peer-reviewed" | "Cookbook" | "Government" | "RD-curated";
  year?: number;
};

/**
 * Collapsible numbered references. USDA / peer-reviewed / RD-curated tags.
 */
export function SourcesAccordion({
  sources,
  heading = "Sources",
}: {
  sources: SourceRef[];
  heading?: string;
}) {
  const [open, setOpen] = useState(false);
  if (!sources?.length) return null;

  return (
    <section
      id="sources"
      className="mt-14 scroll-mt-24 border-t border-hairline pt-6"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="sources-list"
        className="group flex items-center gap-3 w-full text-left"
      >
        <span className="caps-label">{heading}</span>
        <span aria-hidden className="flex-1 border-b border-dotted border-hairline" />
        <span className="font-mono tnum text-body-sm text-ink-2">
          {sources.length} ref{sources.length === 1 ? "" : "s"}
        </span>
        <span aria-hidden className={`text-sage-700 transition-transform ${open ? "rotate-180" : ""}`}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4 6 L8 10 L12 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {open && (
        <ol id="sources-list" className="mt-5 space-y-3 list-none">
          {sources.map((s) => (
            <li key={s.n} className="flex gap-3 text-body-sm leading-relaxed">
              <span className="font-mono tnum text-sage-700 shrink-0 w-6">{s.n}.</span>
              <div className="min-w-0">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-sage-700 underline decoration-sage-100 underline-offset-2"
                >
                  {s.title}
                </a>
                <div className="mt-0.5 flex flex-wrap items-baseline gap-x-2 text-label-sm text-ink-2">
                  {s.publisher && <span>{s.publisher}</span>}
                  {s.year && <span className="font-mono tnum">{s.year}</span>}
                  {s.tag && (
                    <span className="diet-chip !py-0 !px-1.5 !text-[10px]">
                      {s.tag}
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
