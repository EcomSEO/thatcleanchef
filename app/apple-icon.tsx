import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Brand tokens (exact hex from tailwind.config.ts)
const CREAM = "#F6F1E8";
const TERRACOTTA = "#C4663D";
const OLIVE = "#4A5530";
const SAGE = "#7A8F6B";
const STONE = "#6B6762";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: CREAM,
          position: "relative",
          padding: 18,
        }}
      >
        {/* Eyebrow caps-label */}
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 2.2,
            textTransform: "uppercase",
            color: STONE,
            display: "flex",
            marginBottom: 6,
          }}
        >
          Est. 2026
        </div>

        {/* tcc wordmark — terracotta italic middle c */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontFamily: "serif",
            fontSize: 96,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          <span style={{ color: OLIVE, display: "flex" }}>t</span>
          <span
            style={{
              color: TERRACOTTA,
              fontStyle: "italic",
              display: "flex",
            }}
          >
            c
          </span>
          <span style={{ color: OLIVE, display: "flex" }}>c</span>
          {/* sage dot */}
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: SAGE,
              marginLeft: 6,
              marginBottom: 10,
              display: "flex",
              alignSelf: "flex-end",
            }}
          />
        </div>

        {/* Terracotta hairline */}
        <div
          style={{
            width: 46,
            height: 2,
            background: TERRACOTTA,
            marginTop: 14,
            display: "flex",
          }}
        />

        {/* Full brand name */}
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: 1.6,
            textTransform: "uppercase",
            color: OLIVE,
            display: "flex",
            marginTop: 10,
          }}
        >
          ThatCleanChef
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
