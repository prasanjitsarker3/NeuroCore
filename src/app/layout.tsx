import type { Metadata } from "next";
import { Geist, Roboto } from "next/font/google";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import { Archivo } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const roboto_Mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const archivoFont = Archivo({
  variable: "--font-archivo",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wevloper – Software for Innovation",
  description:
    "Wevloper is a software company dedicated to building innovative digital products that empower people in a tech-driven world.",
  keywords: [
    "Wevloper",
    "Code Punk",
    "software company",
    "product development",
    "digital innovation",
    "web apps",
    "startups",
    "technology solutions",
  ],
  authors: [{ name: "Wevloper", url: "https://www.wevloper.com" }],
  creator: "Wevloper Team",
  publisher: "Wevloper",
  metadataBase: new URL("https://www.wevloper.com"),
  icons: {
    icon: "/Wevlover.webp",
    shortcut: "/Wevlover.webp",
    apple: "/Wevlover.webp",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    title: "Wevloper – Software for Innovation",
    description: "Building innovative products for a better tomorrow.",
    url: "https://www.wevloper.com",
    siteName: "Wevloper",
    images: [
      {
        url: "/CodingStation.avif",
        width: 1200,
        height: 630,
        alt: "Wevloper – Innovative Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Wevloper – Software for Innovation",
    description: "Innovative digital products built by Wevloper.",
    site: "@Wevloper",
    images: ["/WorkStationWB.avif"],
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
        className={`${geistSans.variable} ${roboto_Mono.variable} ${roboto.variable} ${archivoFont.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
