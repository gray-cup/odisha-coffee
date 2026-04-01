import React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display, Public_Sans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import RootProviders from "@/components/providers";
import { Analytics } from "@vercel/analytics/next";
import { WhatsappWidget } from "@/components/whatsapp-widget";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontPlayfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fontPublicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gray Cup — Odisha Coffee Export & Wholesale",
    template: "%s | Gray Cup",
  },
  description:
    "Gray Cup Enterprises sources and exports single-origin coffee from the Eastern Ghats of Koraput, Odisha. Wholesale green beans, traceable lots, and export supply from verified Odisha coffee farms.",
  keywords: [
    "Odisha coffee wholesale",
    "Odisha coffee export",
    "Koraput coffee",
    "Indian specialty coffee export",
    "Gray Cup coffee",
    "Odisha coffee farms",
    "buy Odisha coffee",
    "Indian single origin coffee",
    "Koraput Arabica export",
    "Koraput Robusta wholesale",
    "coffee sourcing India",
  ],
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  openGraph: {
    title: "Gray Cup — Odisha Coffee Export & Wholesale",
    description:
      "Sourcing and exporting single-origin coffee from the Eastern Ghats of Koraput, Odisha. Traceable lots, wholesale green beans, and direct farm connections.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Gray Cup — Odisha Coffee" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gray Cup — Odisha Coffee Export & Wholesale",
    description:
      "Sourcing and exporting single-origin coffee from the Eastern Ghats of Koraput, Odisha.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-odisha-offwhite font-sans antialiased",
          fontSans.variable,
          fontPlayfair.variable,
          fontPublicSans.variable,
        )}
      >
        <Analytics />
        <RootProviders>{children}</RootProviders>
        <WhatsappWidget />
      </body>
    </html>
  );
}
