import type { Metadata, Viewport } from "next";
import { Manrope, Shippori_Mincho } from "next/font/google";
import type { CSSProperties, ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { MobileBar } from "@/components/mobile-bar";
import { focusRing } from "@/components/styles";
import { site } from "@/content/site";
import type { Palette } from "@/content/types";
import { cn } from "@/lib/cn";
import { allowIndexing } from "@/lib/indexing";
import { primaryNav } from "@/lib/nav";
import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";

const display = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display-face",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-face",
  display: "swap",
});

function paletteStyle(palette: Palette): CSSProperties {
  return {
    "--hy-ink": palette.ink,
    "--hy-brand": palette.brand,
    "--hy-brand-deep": palette.brandDeep,
    "--hy-accent": palette.accent,
    "--hy-salmon": palette.salmon,
    "--hy-nori": palette.nori,
    "--hy-rice": palette.rice,
    "--hy-paper": palette.paper,
  } as CSSProperties;
}

const title = site.seo.title.trim() || site.name;
const description = site.seo.description.trim() || site.description;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: title, template: `%s · ${site.name}` },
  description,
  applicationName: site.name,
  keywords: ["sushi", "hibachi", "teppanyaki", "Japanese restaurant", "Jacksonville", "Beach Blvd"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title,
    description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: "/" },
  robots: allowIndexing()
    ? { index: true, follow: true }
    : { index: false, follow: false, googleBot: { index: false, follow: false } },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: site.palette.ink,
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn(display.variable, sans.variable, "h-full")} style={paletteStyle(site.palette)}>
      <body className="min-h-full bg-ink font-sans text-rice antialiased">
        <a
          href="#content"
          className={cn(
            "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-rice focus:px-4 focus:py-3 focus:text-ink",
            focusRing,
          )}
        >
          Skip to content
        </a>
        <Header links={primaryNav()} />
        {children}
        <Footer />
        <MobileBar />
        <JsonLd />
      </body>
    </html>
  );
}
