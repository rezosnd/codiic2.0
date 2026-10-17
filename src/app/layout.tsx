import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#00B879",
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://codiic2-0.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CODIIC — All your business. One connected platform.",
  description:
    "CODIIC helps businesses connect their website, customer relationships, sales pipeline, automated follow-ups, and business operations in one unified workspace.",
  keywords: [
    "CODIIC",
    "All-in-One Business Platform",
    "Connected Workspace",
    "CRM software",
    "Sales pipeline management",
    "Workflow automation",
    "Website and Store builder",
    "Business OS",
  ],
  authors: [{ name: "CODIIC Technologies" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/codiic-icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "CODIIC — All your business. One connected platform.",
    description:
      "Connect your website, leads, sales pipeline, and business operations in one intuitive workspace.",
    url: siteUrl,
    siteName: "CODIIC",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        secureUrl: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "CODIIC — All your business. One connected platform.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CODIIC — All your business. One connected platform.",
    description:
      "Website se customer tak — sab connected. Build, manage, and scale your business operations with CODIIC.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/codiic-icon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="image_src" href={`${siteUrl}/og-image.png`} />
        <meta property="og:image:secure_url" content={`${siteUrl}/og-image.png`} />
      </head>
      <body className="min-h-screen bg-[#F7F9F8] text-[#171923] antialiased selection:bg-[#00B879]/20 selection:text-[#008F60]">
        {children}
      </body>
    </html>
  );
}
