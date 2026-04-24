import { ImageResponse } from "next/og";
import { SITE } from "@/lib/content/site";

export const runtime = "edge";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Brand tokens (exact hex from tailwind.config.ts / globals.css)
const CREAM = "#F6F1E8";
const CREAM_DEEP = "#EEE5D1";
const PAPER = "#FBF7EE";
const TERRACOTTA = "#C4663D";
const OLIVE = "#4A5530";
const SAGE = "#7A8F6B";
const STONE = "#6B6762";
const CHARCOAL = "#2B2B2B";

export default function OpenGraphImage() {
  const host = SITE.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background: `linear-gradient(135deg, ${CREAM_DEEP} 0%, ${PAPER} 55%, ${CREAM} 100%)`,
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Subtle terracotta left rule — plate-edge accent */}
        <div
          style={{
            position: "absolute",
            top: 72,
            bottom: 72,
            left: 58,
            width: 2,
            background: TERRACOTTA,
            opacity: 0.55,
            display: "flex",
          }}
        />

        {/* Top: eyebrow + numeric chip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                background: TERRACOTTA,
                borderRadius: 999,
                display: "flex",
              }}
            />
            <div
              style={{
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: 3.4,
                textTransform: "uppercase",
                color: TERRACOTTA,
                display: "flex",
              }}
            >
              On the pass
            </div>
          </div>

          {/* Mono numeric chip — Nutrition Ledger wedge */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 8,
              padding: "10px 16px",
              border: `1px solid ${OLIVE}33`,
              background: `${PAPER}`,
              borderRadius: 3,
              fontFamily: "monospace",
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: TERRACOTTA,
                display: "flex",
                letterSpacing: -0.4,
              }}
            >
              38g
            </div>
            <div
              style={{
                fontSize: 15,
                color: OLIVE,
                letterSpacing: 1.4,
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              protein
            </div>
          </div>
        </div>

        {/* Middle: wordmark + headline + sub-line */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 26,
          }}
        >
          {/* Wordmark */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontFamily: "serif",
              fontSize: 108,
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: -2.8,
            }}
          >
            <span style={{ color: OLIVE, display: "flex" }}>ThatClean</span>
            <span
              style={{
                color: TERRACOTTA,
                fontStyle: "italic",
                display: "flex",
              }}
            >
              Chef
            </span>
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 999,
                background: SAGE,
                marginLeft: 12,
                marginBottom: 14,
                display: "flex",
                alignSelf: "flex-end",
              }}
            />
          </div>

          {/* Terracotta hairline rule */}
          <div
            style={{
              width: 96,
              height: 2,
              background: TERRACOTTA,
              display: "flex",
            }}
          />

          {/* Italic tagline */}
          <div
            style={{
              fontFamily: "serif",
              fontStyle: "italic",
              fontSize: 44,
              fontWeight: 500,
              color: CHARCOAL,
              lineHeight: 1.15,
              letterSpacing: -0.8,
              maxWidth: 900,
              display: "flex",
            }}
          >
            {SITE.tagline}
          </div>

          {/* Mono sub-line */}
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 22,
              color: OLIVE,
              letterSpacing: 0.6,
              display: "flex",
            }}
          >
            45 min. &middot; 4 servings. &middot; Real macros.
          </div>
        </div>

        {/* Bottom dateline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: 22,
            borderTop: `1px solid ${OLIVE}22`,
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: 3.6,
              textTransform: "uppercase",
              color: STONE,
              display: "flex",
              gap: 14,
            }}
          >
            <span style={{ display: "flex" }}>{SITE.service}</span>
            <span style={{ color: TERRACOTTA, opacity: 0.6, display: "flex" }}>
              &middot;
            </span>
            <span style={{ display: "flex" }}>{SITE.issue}</span>
            <span style={{ color: TERRACOTTA, opacity: 0.6, display: "flex" }}>
              &middot;
            </span>
            <span style={{ display: "flex" }}>{host}</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
