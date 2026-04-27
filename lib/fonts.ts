import { Source_Serif_4, Inter, IBM_Plex_Mono } from "next/font/google";

/**
 * Self-hosted Google Fonts via next/font.
 *
 * Medical-info register: Inter for body / nav / labels, Source Serif 4 for
 * editorial H1 accents (NOT italic, weight 600), IBM Plex Mono ONLY for
 * data points (per-serving values, total time, yield).
 *
 * The cookbook-era Cormorant Garamond + Fraunces are intentionally retired.
 * Legacy `cormorant` and `fraunces` exports kept as aliases pointing at
 * Source Serif so any straggler imports still compile during transition.
 */
export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-source-serif",
  preload: true,
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
  preload: false,
});

// ---------- Legacy aliases ---------------------------------------------------
// Anything still importing `cormorant` / `fraunces` will get Source Serif so
// the build stays green while the cookbook quarantine drains.
export const cormorant = sourceSerif;
export const fraunces = sourceSerif;
