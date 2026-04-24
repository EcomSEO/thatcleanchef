import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Brand tokens (exact hex from tailwind.config.ts)
const CREAM = "#F6F1E8";
const TERRACOTTA = "#C4663D";
const OLIVE = "#4A5530";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: CREAM,
          position: "relative",
        }}
      >
        <div
          style={{
            fontFamily: "serif",
            fontStyle: "italic",
            fontSize: 26,
            fontWeight: 600,
            color: OLIVE,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginTop: -1,
            display: "flex",
          }}
        >
          C
        </div>
        {/* Terracotta accent dot — the wordmark's sage-dot moved into the corner as an accent */}
        <div
          style={{
            position: "absolute",
            right: 5,
            bottom: 6,
            width: 5,
            height: 5,
            borderRadius: 999,
            background: TERRACOTTA,
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
