import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse professional-grade pest control products and supplies from Urban Pest Solution — curated tools and treatments for effective, science-driven pest management.",
  keywords: [
    "pest control products",
    "pest control supplies Pakistan",
    "buy pest control equipment",
    "professional pest control tools",
  ],
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Shop | Urban Pest Solution",
    description:
      "Professional-grade pest control products and supplies for effective, science-driven pest management.",
    url: "/shop",
    type: "website",
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
