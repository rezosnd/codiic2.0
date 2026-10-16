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

export const metadata: Metadata = {
  metadataBase: new URL("https://codiic.com"),
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
    icon: "/logo_withot text.png",
    apple: "/logo_withot text.png",
  },
  openGraph: {
    title: "CODIIC — All your business. One connected platform.",
    description:
      "Connect your website, leads, sales pipeline, and business operations in one intuitive workspace.",
    url: "https://codiic.com",
    siteName: "CODIIC",
    images: [
      {
        url: "/logo_with_text.png",
        width: 1200,
        height: 360,
        alt: "CODIIC Logo",
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
    images: ["/logo_with_text.png"],
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
        <link rel="icon" href="/logo_withot text.png" type="image/png" />
      </head>
      <body className="min-h-screen bg-[#F7F9F8] text-[#171923] antialiased selection:bg-[#00B879]/20 selection:text-[#008F60]">
        {children}
      </body>
    </html>
  );
}
