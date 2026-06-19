import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Marquee from "@/components/Marquee";
import StickyNav from "@/components/StickyNav";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

// Variable fonts — omit `weight` to expose the full axis range (per Next 16 font docs).
// Fraunces: premium editorial serif for headings. Inter: crisp, B2B-legible body.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--ff-head",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--ff-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PLATR — corporate food, sorted.",
  description:
    "PLATR is a structured corporate food platform. Select your requirement, browse curated packages, and send an inquiry — we handle everything.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "PLATR — corporate food, sorted.",
    description:
      "Select your requirement, browse curated packages, and send an inquiry — we handle everything.",
    url: "https://platr-2.vercel.app",
    siteName: "PLATR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PLATR — corporate food, sorted.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PLATR — corporate food, sorted.",
    description:
      "Select your requirement, browse curated packages, and send an inquiry — we handle everything.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Marquee />
        <StickyNav />
        {children}
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
