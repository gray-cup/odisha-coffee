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
    default: "Odisha Coffee — Wholesale, Export & Farm Sourcing | Odissi Coffee",
    template: "%s | Odisha Coffee",
  },
  description:
    "Odisha Coffee (also known as Odissi Coffee) — single-origin coffee from the Eastern Ghats of Koraput, Odisha. Wholesale green beans, export lots, and direct farm sourcing by Gray Cup Enterprises. Traceable Arabica & Robusta from 24 verified Odisha coffee farms.",
  keywords: [
    "Odisha coffee",
    "Odissi coffee",
    "Odisha coffee wholesale",
    "Odisha coffee export",
    "buy Odisha coffee",
    "Koraput coffee",
    "Koraput Arabica",
    "Koraput Robusta",
    "Odisha coffee farms",
    "Indian single origin coffee",
    "Indian specialty coffee export",
    "Eastern Ghats coffee",
    "coffee wholesale India",
    "coffee export India",
  ],
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  openGraph: {
    title: "Odisha Coffee — Wholesale, Export & Farm Sourcing | Odissi Coffee",
    description:
      "Odisha Coffee (Odissi Coffee) — single-origin coffee from Koraput's Eastern Ghats. Wholesale green beans, traceable export lots, 24 verified partner farms. Sourced by Gray Cup Enterprises.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Odisha Coffee — Koraput, Eastern Ghats" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odisha Coffee — Wholesale, Export & Farm Sourcing | Odissi Coffee",
    description:
      "Odisha Coffee (Odissi Coffee) — single-origin coffee from the Eastern Ghats of Koraput. Wholesale, export, and direct farm sourcing.",
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
