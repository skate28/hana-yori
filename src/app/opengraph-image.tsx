import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = site.seo.title.trim() || site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const p = site.palette;
  const detail = [site.address.full.trim(), site.phone.display.trim()].filter(Boolean).join("   ·   ");
  const rating = site.rating ? `Rated ${site.rating.value.toFixed(1)} on ${site.rating.source}` : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background: `radial-gradient(900px 420px at 50% 115%, ${p.accent}cc, ${p.brand}66 40%, ${p.ink} 75%)`,
          backgroundColor: p.ink,
          color: p.rice,
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 8, textTransform: "uppercase", color: p.accent }}>
          Sushi · Hibachi · Jacksonville
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 150, lineHeight: 0.9, fontWeight: 700 }}>{site.name}</div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 36, color: p.salmon }}>{site.tagline}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, opacity: 0.9 }}>
          <span>{detail}</span>
          <span>{rating}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
