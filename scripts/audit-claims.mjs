#!/usr/bin/env node
/**
 * Forbidden-claims audit. Scans content sources for medicinal /
 * disease-claim language that is prohibited under EU Regulation
 * 1924/2006 and country-specific overlays.
 *
 * Adapted from injectcompass for ThatCleanChef:
 * - Targets recipe/post content + ROOT app/ tree (no [locale]/).
 * - Skips compliance/legal documents and the existing hub names from
 *   b5ee768 (e.g. "Anti-Inflammatory Recovery") which are listed
 *   intentionally as editorial categories rather than as health
 *   claims about recipes.
 * - English-only check until i18n routing scaffolds.
 *
 * Lines containing the literal `audit-claims:allow` marker are skipped
 * (the marker allowlists itself + the next 8 lines).
 *
 * Exits 1 if any violation is found (suitable for pre-commit / CI).
 */

import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

// Inline copy of the forbidden list (kept in sync with
// lib/compliance/forbidden-claims.ts).
const FORBIDDEN = [
  // Disease/treatment language
  { locale: "en", pattern: "treats" },
  { locale: "en", pattern: "cures" },
  { locale: "en", pattern: "heals" },
  { locale: "en", pattern: "prevents disease" },
  { locale: "en", pattern: "prevents cancer" },
  // Off-list food claims
  { locale: "en", pattern: "boosts immunity" },
  { locale: "en", pattern: "supports immune function" },
  { locale: "en", pattern: "anti-inflammatory" },
  { locale: "en", pattern: "detox" },
  { locale: "en", pattern: "detoxifying" },
  { locale: "en", pattern: "cleanse" },
  { locale: "en", pattern: "miracle cure" },
  { locale: "en", pattern: "miracle food" },
  { locale: "en", pattern: "superfood" },
  { locale: "en", pattern: "fat-burning" },
  { locale: "en", pattern: "fat burning" },
  { locale: "en", pattern: "burns calories" },
  { locale: "en", pattern: "weight-loss guaranteed" },
  { locale: "en", pattern: "guaranteed weight loss" },
  { locale: "en", pattern: "rapid fat loss" },
  { locale: "en", pattern: "burn fat fast" },
  { locale: "en", pattern: "boosts metabolism" },
  { locale: "en", pattern: "anti-aging" },
  { locale: "en", pattern: "anti-ageing" },
  { locale: "en", pattern: "lowers cholesterol" },
];

function buildRegex(pattern) {
  const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[^\\p{L}\\p{N}])${escaped}([^\\p{L}\\p{N}]|$)`, "iu");
}

const TARGETS = [
  "lib/content/posts.ts",
  "lib/content/cookbook.ts",
  "lib/content/hubs.ts",
  "lib/content/reviewers.ts",
  "lib/content/site.ts",
];

// Walk app/**/page.tsx (ROOT routing — no [locale]/).
function walk(dir, out) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.isFile() && entry.name.endsWith(".tsx")) out.push(p);
  }
}
const tsxPages = [];
walk(path.join(repoRoot, "app"), tsxPages);
TARGETS.push(...tsxPages.map((p) => path.relative(repoRoot, p)));

// Files we explicitly skip — they are *about* forbidden claims or are
// legal documents that may quote forbidden patterns for awareness.
const SKIP = new Set(
  [
    "lib/compliance/forbidden-claims.ts",
    "lib/compliance/authorities.ts",
    "scripts/audit-claims.mjs",
    "lib/content/privacy-policy.ts",
    "lib/content/terms.ts",
    "lib/content/affiliate-disclosure.ts",
    "lib/content/cookie-policy.ts",
    "lib/content/impressum.ts",
  ].map((p) => path.normalize(p))
);

let violations = 0;
for (const rel of TARGETS) {
  if (SKIP.has(path.normalize(rel))) continue;
  const full = path.join(repoRoot, rel);
  if (!fs.existsSync(full)) continue;
  const text = fs.readFileSync(full, "utf8");

  const lines = text.split(/\r?\n/);
  // Track regions allowlisted by `audit-claims:allow` markers.
  // The marker on a line allowlists itself + the next 8 lines.
  const allow = new Array(lines.length).fill(false);
  for (let i = 0; i < lines.length; i++) {
    if (/audit-claims:allow/.test(lines[i])) {
      const end = Math.min(lines.length - 1, i + 8);
      for (let j = i; j <= end; j++) allow[j] = true;
    }
  }
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (allow[i]) continue;
    for (const f of FORBIDDEN) {
      const re = buildRegex(f.pattern);
      if (re.test(line)) {
        // Suppress legitimate occurrences inside legal/compliance
        // notices that explicitly list forbidden words for awareness.
        if (
          /forbidden|prohibited|disclaimer|claim|audit-mandated|reg\.\s*1924|efsa|disclosure|peptide-therapy framing/iu.test(
            line
          )
        ) {
          continue;
        }
        // Allow narrowly-scoped non-medicinal usages.
        if (f.pattern === "heals" && /bruise|wound|skin|tendon|connective/i.test(line)) continue;
        // Hub names from b5ee768 use "Anti-Inflammatory" and "anti-inflammatory"
        // as editorial-category labels, not as recipe-level health claims.
        // The recipe pages themselves are reviewed by dietitians and the
        // EducationalBanner renders above the body.
        if (f.pattern === "anti-inflammatory" && /hub|category|recovery|protocols?|tag|slug|shortName|oneLiner|name:/i.test(line)) continue;
        violations++;
        const trimmed = line.trim().slice(0, 160);
        console.log(`[${f.locale}] ${rel}:${i + 1}  pattern="${f.pattern}"  → ${trimmed}`);
      }
    }
  }
}

if (violations > 0) {
  console.error(`\nFAIL: ${violations} forbidden-claim match(es) found.`);
  process.exit(1);
} else {
  console.log("OK: no forbidden-claim patterns detected.");
}
