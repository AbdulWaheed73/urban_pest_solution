import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { QueryProvider } from "@/providers/query-provider";
import { CartProvider } from "@/providers/cart-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo";
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
    locale: "en_PK",
  },
  // Only the card type here — title/description/image fall back per-page
  // (to each page's metadata and the generated opengraph-image), so Twitter
  // and Open Graph previews stay consistent.
  twitter: {
    card: "summary_large_image",
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
    <html lang="en-PK" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-forest focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
        >
          Skip to content
        </a>
        <QueryProvider>
          <CartProvider>
            <Navbar />
            <main id="main" className="flex-1">{children}</main>
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
