import { ImageResponse } from "next/og";
export const dynamic = "force-static";
const size = { width: 1200, height: 630 };
export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 76px",
        background: "#f6f5f0",
        color: "#232822",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 46 }}>yuka.</span>
        <span style={{ fontSize: 18, color: "#234ce3" }}>
          PEOPLE, DATA & STORIES
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 94,
          lineHeight: 1.02,
          letterSpacing: -5,
        }}
      >
        <span>Different perspectives.</span>
        <span style={{ color: "#234ce3" }}>New possibilities.</span>
      </div>
      <div style={{ fontSize: 21, display: "flex" }}>
        Retail / Digital analysis / Influencer marketing
      </div>
    </div>,
    size,
  );
}
