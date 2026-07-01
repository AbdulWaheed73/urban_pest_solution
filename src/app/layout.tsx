import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { QueryProvider } from "@/providers/query-provider";
import { CartProvider } from "@/providers/cart-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://urbanpestsolution.com"),
  title: {
    default: "Urban Pest Solution — Professional Pest Control Services",
    template: "%s | Urban Pest Solution",
  },
  description:
    "Professional pest management services for commercial and residential properties. Science-driven, eco-friendly pest control across Pakistan.",
  keywords: [
    "pest control",
    "fumigation",
    "termite treatment",
    "IPM",
    "Pakistan",
    "Lahore",
    "commercial pest control",
    "residential pest control",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Urban Pest Solution",
    description: "Professional Pest Control Services — Where Science Meets Safety",
    type: "website",
    siteName: "Urban Pest Solution",
    locale: "en_US",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Urban Pest Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Pest Solution",
    description: "Professional Pest Control Services — Where Science Meets Safety",
    images: ["/images/logo.png"],
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </QueryProvider>
        {/* Cloudflare Web Analytics */}
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "755bd1917e2b412496939e0123e1a83f"}'
        />
        {/* End Cloudflare Web Analytics */}
      </body>
    </html>
  );
}
