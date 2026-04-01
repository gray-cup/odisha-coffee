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
    default: "Odisha Coffee | OCGA — Koraput Coffee Growers & Exporters",
    template: "%s | Odisha Coffee — OCGA",
  },
  description:
    "Odisha Coffee Growers Association (OCGA) — traceable, single-origin coffee from the Eastern Ghats of Koraput, Odisha. Wholesale, export, and specialty lots from 24 verified member farms.",
  keywords: [
    "Odisha coffee",
    "Odisha coffee wholesale",
    "Odisha coffee export",
    "Koraput coffee",
    "Indian specialty coffee",
    "OCGA coffee",
    "coffee growers Odisha",
    "Eastern Ghats coffee",
    "Odisha coffee farms",
    "buy Odisha coffee",
    "Indian single origin coffee",
    "Koraput Arabica",
    "Koraput Robusta",
  ],
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  openGraph: {
    title: "Odisha Coffee | OCGA — Koraput Coffee Growers & Exporters",
    description:
      "Traceable, single-origin coffee from the Eastern Ghats of Koraput, Odisha. 24 member farms. Wholesale and export available.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Odisha Coffee — OCGA",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odisha Coffee | OCGA — Koraput Coffee Growers & Exporters",
    description:
      "Traceable, single-origin coffee from the Eastern Ghats of Koraput, Odisha.",
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
