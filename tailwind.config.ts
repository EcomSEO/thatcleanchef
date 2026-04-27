import type { Config } from "tailwindcss";

/**
 * Locked design tokens — clean medical-info shell, sage primary, rust
 * accent. Mirrors injectcompass execution at `064dda7` adapted for
 * recipe / clean-eating content.
 *
 * Cookbook-era warm-cream + Cormorant italic is retired. Legacy keys
 * (sage-light, cream, paper, terracotta, olive, charcoal, stone, forest)
 * are preserved as aliases so the `_legacy/cookbook/` quarantine still
 * compiles.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ------- Medical-info surface -----------------------------------
        ink: "#1A1F1A",
        "ink-2": "#5A6358",
        "ink-3": "#8A9388",
        surface: "#FFFFFF",
        "surface-tint": "#F7F9F5",
        "surface-raised": "#FFFFFF",
        hairline: "#E5E9E1",

        // ------- Sage primary (thatcleanchef brand) ---------------------
        sage: {
          DEFAULT: "#7C8C6C",
          50: "#EEF2E8",
          100: "#DCE4D2",
          200: "#BFCDB0",
          300: "#A0B38E",
          400: "#8C9E7A",
          500: "#7C8C6C",
          600: "#6B7A5C",
          700: "#5A6B4D",
          800: "#48563E",
          900: "#384430",
        },

        // ------- Rust secondary accent (vs larderlab tomato) ------------
        rust: {
          DEFAULT: "#B85431",
          50: "#FBEEE8",
          100: "#F4D8C9",
          500: "#B85431",
          600: "#9E4523",
          700: "#7E3719",
        },

        // ------- Status -------------------------------------------------
        success: "#10A26A",

        // ------- Reviewed badge -----------------------------------------
        "reviewed-bg": "#EEF2E8",
        "reviewed-text": "#5A6B4D",

        // ------- Legacy aliases (cookbook quarantine compat) -----------
        "sage-light": "#A0B38E",
        "sage-deep": "#5A6B4D",
        cream: "#F7F9F5",
        "cream-deep": "#EEF2E8",
        paper: "#FFFFFF",
        terracotta: "#B85431",
        "terracotta-deep": "#9E4523",
        "terracotta-soft": "#F4D8C9",
        olive: "#5A6B4D",
        "olive-deep": "#384430",
        charcoal: "#1A1F1A",
        stone: "#5A6358",
        forest: "#5A6B4D",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
        // legacy aliases — keep so _legacy/cookbook/ compiles
        cookbook: ["var(--font-source-serif)", "Georgia", "serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
        reading: "42rem",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26, 31, 26, 0.04), 0 4px 12px rgba(26, 31, 26, 0.04)",
        card: "0 1px 1px rgba(26, 31, 26, 0.03), 0 6px 24px rgba(26, 31, 26, 0.06)",
        plate: "0 2px 3px rgba(26, 31, 26, 0.05), 0 12px 30px rgba(26, 31, 26, 0.08)",
      },
      fontSize: {
        // px / lh aligned to the locked scale
        "label-sm": ["12px", "16px"],
        "body-sm": ["14px", "20px"],
        "body": ["16px", "24px"],
        "body-md": ["18px", "28px"],
        "body-lg": ["20px", "30px"],
        "h3": ["22px", "30px"],
        "h2-mid": ["24px", "32px"],
        "h2": ["28px", "36px"],
        "h1-sm": ["32px", "40px"],
        "h1": ["40px", "48px"],
        "hero": ["48px", "56px"],
      },
    },
  },
  plugins: [],
};

export default config;
