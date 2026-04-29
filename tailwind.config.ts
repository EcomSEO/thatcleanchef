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
        // ============================================================
        // Stitch design tokens (2026-04-29) — warmer paper, deeper
        // charcoal, vivid terracotta hero accent, forest-green footer.
        // Palette extracted from /tmp/stitch-extracted/ mockups.
        // ============================================================

        // ------- Editorial surface (warmer than the old cool-white) -----
        ink: "#2A2520",          // primary text — deep brown-black
        "ink-2": "#5A4F45",      // secondary — warm taupe
        "ink-3": "#8A7E70",      // tertiary — soft taupe
        surface: "#F7F2E9",      // base cream paper
        "surface-tint": "#EFE8DA", // subtle elevation cream
        "surface-raised": "#FFFFFF", // genuine card whites
        hairline: "rgba(74, 66, 52, 0.12)", // warm-olive @ 12%

        // ------- Sage (softer, more muted than the old #7C8C6C) ---------
        sage: {
          DEFAULT: "#8FA083",
          50: "#F0F3EC",
          100: "#E0E7D9",
          200: "#C7D3BC",
          300: "#ADBE9F",
          400: "#9FB191",
          500: "#8FA083",
          600: "#73876A",
          700: "#5A6E54",
          800: "#445340",
          900: "#2E3A2C",
        },

        // ------- Terracotta (vivid hero accent, the Stitch lead) --------
        terracotta: {
          DEFAULT: "#C77554",
          50: "#FBEEE7",
          100: "#F4D5C5",
          200: "#EBB69E",
          300: "#DD9270",
          500: "#C77554",
          600: "#A85F40",
          700: "#874B31",
          800: "#623725",
          900: "#3E2218",
        },

        // ------- Forest (footer block, deep green) ----------------------
        forest: {
          DEFAULT: "#2E3A2C",
          deep: "#1F2A1E",
          soft: "#3F4D3D",
        },

        // ------- Rust alias (some legacy components reference rust-*) ---
        rust: {
          DEFAULT: "#C77554",
          50: "#FBEEE7",
          100: "#F4D5C5",
          500: "#C77554",
          600: "#A85F40",
          700: "#874B31",
        },

        // ------- Status -------------------------------------------------
        success: "#3F7E5C",

        // ------- Reviewed badge -----------------------------------------
        "reviewed-bg": "#E0E7D9",
        "reviewed-text": "#5A6E54",

        // ------- Legacy aliases (kept; values updated to Stitch) --------
        "sage-light": "#ADBE9F",
        "sage-deep": "#5A6E54",
        cream: "#F7F2E9",
        "cream-deep": "#EFE8DA",
        paper: "#FFFFFF",
        "terracotta-deep": "#A85F40",
        "terracotta-soft": "#F4D5C5",
        olive: "#4A4234",
        "olive-deep": "#2A2520",
        charcoal: "#2A2520",
        stone: "#8A7E70",
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
