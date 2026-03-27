import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { QueryProvider } from "@/providers/query-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
  openGraph: {
    title: "Urban Pest Solution",
    description: "Professional Pest Control Services — Where Science Meets Safety",
    type: "website",
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
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
