import { ImageResponse } from "next/og";

export const alt = "Country of Origin — Australian Seafood Guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(160deg, #0a2540 0%, #163558 50%, #0d4a5f 100%)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#2ec4a0",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              background: "#2ec4a0",
              borderRadius: 999,
            }}
          />
          Australian Seafood Authority
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            Country of Origin
          </div>
          <div
            style={{
              fontSize: 36,
              fontStyle: "italic",
              color: "#2ec4a0",
              marginTop: 10,
            }}
          >
            Know where your fish comes from.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "rgba(255,255,255,0.7)",
            fontSize: 22,
          }}
        >
          <div>24 species · 25 comparisons · 86 cited sources</div>
          <div style={{ color: "#2ec4a0" }}>countryoforigin.com.au</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
