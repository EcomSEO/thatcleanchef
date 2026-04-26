"use client";

import Link from "next/link";
import { useState } from "react";
import { LOCALES, type LocaleCode, DEFAULT_LOCALE } from "@/lib/i18n/locales";

/**
 * The cookbook header. Cream bar, italic serif wordmark on the left, a
 * thin all-caps serif nav (CHAPTERS · RECIPES · INGREDIENTS · TECHNIQUES
 * · METHODOLOGY · PIPELINE) on the right, a small italic edition tag, and
 * a locale switcher styled as a printed-edition selector. Intentionally
 * undersized so the home page Cover does the heavy lifting.
 */
export function Header() {
  const [locale, setLocale] = useState<LocaleCode>(DEFAULT_LOCALE);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-paper border-b border-olive/15 sticky top-0 z-40 backdrop-blur-[2px]">
      <div className="mx-auto max-w-6xl px-6 py-4 md:py-5 flex items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="thatcleanchef — cookbook home"
          className="group inline-flex items-baseline gap-2"
        >
          <span className="font-serif italic text-olive text-2xl md:text-[1.8rem] tracking-tight leading-none">
            thatcleanchef
          </span>
          <span
            aria-hidden
            className="hidden md:inline font-serif italic text-terracotta text-xs leading-none mb-1"
          >
            &mdash; a cookbook
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-[13px]">
          <Link
            href="/#contents"
            className="cookbook-nav-link"
          >
            Chapters
          </Link>
          <Link href="/recipes" className="cookbook-nav-link">
            Recipes
          </Link>
          <Link href="/ingredients" className="cookbook-nav-link">
            Ingredients
          </Link>
          <Link href="/guides/technique" className="cookbook-nav-link">
            Techniques
          </Link>
          <Link href="/methodology" className="cookbook-nav-link">
            Methodology
          </Link>
          <Link href="/pipeline" className="cookbook-nav-link">
            Pipeline
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <span className="font-serif italic text-stone text-[12px] tracking-wide">
            2026 ed.
          </span>
          <span aria-hidden className="text-terracotta/50">&middot;</span>
          <label className="inline-flex items-center gap-1.5">
            <span className="sr-only">Choose edition</span>
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as LocaleCode)}
              className="bg-transparent font-serif italic text-olive text-[12px] tracking-wide focus:outline-none cursor-pointer hover:text-terracotta transition pr-1"
            >
              {LOCALES.map((l) => (
                <option key={l.code} value={l.code} dir={l.dir ?? "ltr"}>
                  {l.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-olive"
          aria-label="Open menu"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <line x1="3" y1="8" x2="21" y2="8" />
            <line x1="3" y1="16" x2="21" y2="16" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-paper md:hidden overflow-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b border-olive/15">
            <span className="font-serif italic text-olive text-2xl">
              thatcleanchef
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="text-olive"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-1">
            <div className="caps-label !tracking-[0.28em] text-stone mb-3">
              Front Matter
            </div>
            <Link href="/#contents" onClick={() => setMobileOpen(false)} className="py-3 font-serif italic text-olive text-2xl">
              Contents
            </Link>
            <Link href="/recipes" onClick={() => setMobileOpen(false)} className="py-3 font-serif italic text-olive text-2xl">
              Recipes
            </Link>
            <Link href="/ingredients" onClick={() => setMobileOpen(false)} className="py-3 font-serif italic text-olive text-2xl">
              Ingredient Index
            </Link>
            <Link href="/guides/technique" onClick={() => setMobileOpen(false)} className="py-3 font-serif italic text-olive text-2xl">
              Techniques
            </Link>
            <div className="caps-label !tracking-[0.28em] text-stone mt-6 mb-3">
              Back Matter
            </div>
            <Link href="/methodology" onClick={() => setMobileOpen(false)} className="py-2 font-serif italic text-olive text-lg">
              Our Approach
            </Link>
            <Link href="/methodology/v1-2" onClick={() => setMobileOpen(false)} className="py-2 font-serif italic text-olive text-lg">
              What We&apos;re Testing
            </Link>
            <Link href="/pipeline" onClick={() => setMobileOpen(false)} className="py-2 font-serif italic text-olive text-lg">
              Pipeline
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="py-2 font-serif italic text-olive text-lg">
              About
            </Link>
            <Link href="/editorial-standards" onClick={() => setMobileOpen(false)} className="py-2 font-serif italic text-olive text-lg">
              Kitchen Standards
            </Link>
            <div className="mt-6 border-t border-olive/15 pt-4">
              <span className="caps-label text-stone block mb-2">Edition</span>
              <select
                value={locale}
                onChange={(e) => setLocale(e.target.value as LocaleCode)}
                className="bg-paper border border-olive/20 px-3 py-2 font-serif italic text-olive text-base w-full"
              >
                {LOCALES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label} &mdash; {l.edition}
                  </option>
                ))}
              </select>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
