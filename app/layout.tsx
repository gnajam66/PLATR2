import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import StickyNav from "@/components/StickyNav";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--ff-head",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--ff-body",
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body>
        <StickyNav />
        {children}
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
