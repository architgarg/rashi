import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rashis.netlify.app"),
  title: "Rashi Agrawal | Customer Operations Professional | Remote Operations Specialist",
  description:
    "Customer-focused operations professional with 5+ years experience in enterprise consulting and services-driven startups. Specializing in customer operations, quality review, and remote team collaboration.",
  keywords: [
    "Customer Operations",
    "Quality Assurance",
    "Remote Work",
    "Operations Management",
    "Process Optimization",
    "Customer Support",
    "Content Quality Review",
    "Remote Operations",
  ],
  authors: [{ name: "Rashi Agrawal" }],
  creator: "Rashi Agrawal",
  openGraph: {
    title: "Rashi Agrawal | Customer Operations Professional",
    description:
      "Customer-focused operations professional with 5+ years experience in enterprise consulting and services-driven startups.",
    url: "https://rashis.netlify.app",
    siteName: "Rashi Agrawal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rashi Agrawal - Customer Operations Professional",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rashi Agrawal | Customer Operations Professional",
    description:
      "Customer-focused operations professional with 5+ years experience in enterprise consulting and services-driven startups.",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: [
      { url: "/assets/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/assets/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/assets/favicon_io/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/assets/favicon_io/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/assets/favicon_io/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
