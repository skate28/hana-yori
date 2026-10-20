import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Generated favicon: vermilion disc with a sakura-white initial. No logo file yet. */
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
          borderRadius: 32,
          background: `linear-gradient(135deg, ${site.palette.brandDeep}, ${site.palette.brand} 55%, ${site.palette.accent})`,
          color: site.palette.paper,
          fontSize: 40,
          fontWeight: 700,
        }}
      >
        {site.name.trim().charAt(0) || "H"}
      </div>
    ),
    { ...size },
  );
}
