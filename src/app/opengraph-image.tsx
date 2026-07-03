import { ImageResponse } from "next/og";

export const alt = "Urban Pest Solution — Professional Pest Control Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated at build time — a real 1200×630 landscape social card, replacing
// the portrait logo that could never fill an OG frame.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0e2e1a 0%, #14532d 45%, #1f6f3f 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8ee6a8",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9999,
              background: "#8ee6a8",
            }}
          />
          Integrated Pest Management
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 84,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Urban Pest Solution
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 36,
            fontWeight: 400,
            color: "rgba(255,255,255,0.82)",
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          Science-driven, eco-friendly pest control for commercial and
          residential properties across Pakistan.
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 28,
            fontWeight: 600,
            color: "#facc7a",
          }}
        >
          urbanpestsolution.com
        </div>
      </div>
    ),
    { ...size }
  );
}
