"use client";

import Link from "next/link";
import { useState } from "react";
import { MegaMenu } from "./MegaMenu";
import { LocaleSwitcher } from "./LocaleSwitcher";

/**
 * Clean white sticky header — medical-info shell. h-16, 1px hairline border-bottom,
 * sage-700 wordmark left (Source Serif 600, NOT italic), inline nav center,
 * 320px rounded sage-bordered search center-right, locale switcher, sage-pill
 * "Newsletter" button right.
 */
type NavKind = "Recipes" | "Techniques" | "Ingredients" | "Nutrition" | "Test kitchen";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<null | NavKind>(null);

  const navItems: Array<{ label: NavKind; href: string }> = [
    { label: "Recipes", href: "/recipes" },
    { label: "Techniques", href: "/guides/technique" },
    { label: "Ingredients", href: "/ingredients" },
    { label: "Nutrition", href: "/methodology" },
    { label: "Test kitchen", href: "/pipeline" },
  ];

  return (
    <header className="bg-surface border-b border-hairline sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="thatcleanchef — home"
          className="inline-flex items-center gap-2 shrink-0"
        >
          <span
            aria-hidden
            className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sage-50 text-sage-700"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M12 2 C7 6, 4 10, 4 14 a8 8 0 0 0 16 0 C20 10, 17 6, 12 2z" />
              <path d="M12 2 v20" opacity="0.6" />
            </svg>
          </span>
          <span className="font-serif font-semibold text-sage-700 text-[18px] tracking-tight leading-none">
            thatcleanchef
          </span>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-6 text-[14px] relative"
          onMouseLeave={() => setMegaOpen(null)}
        >
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setMegaOpen(item.label)}
            >
              <Link
                href={item.href}
                className="nav-link py-2 inline-flex items-center gap-1"
              >
                {item.label}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="opacity-60"
                  aria-hidden
                >
                  <path d="M2 4 L6 8 L10 4" />
                </svg>
              </Link>
            </div>
          ))}
          {megaOpen && <MegaMenu kind={megaOpen} onClose={() => setMegaOpen(null)} />}
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <label className="relative">
            <span className="sr-only">Search recipes</span>
            <input
              type="search"
              placeholder="Search recipes, techniques…"
              className="medical-input w-[220px] lg:w-[280px] pl-9 border-sage-100"
              aria-label="Search recipes"
            />
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-sage-700"
              aria-hidden
            >
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="M20 20 L15.5 15.5" />
            </svg>
          </label>

          <LocaleSwitcher />

          <Link href="/newsletter" className="btn-primary">
            Newsletter
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden text-ink p-2 -mr-2"
          aria-label="Open menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-surface lg:hidden overflow-auto">
          <div className="flex items-center justify-between px-5 h-16 border-b border-hairline">
            <span className="font-serif font-semibold text-sage-700 text-[18px]">
              thatcleanchef
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="text-ink p-2 -mr-2"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col px-5 py-6 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-ink text-[18px] font-medium border-b border-hairline"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/newsletter"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-6 self-start"
            >
              Newsletter
            </Link>
            <div className="mt-6">
              <span className="caps-label block mb-2">Language</span>
              <LocaleSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
