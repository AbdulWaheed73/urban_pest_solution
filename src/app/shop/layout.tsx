import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { productListSchema, breadcrumbSchema, OG_IMAGE } from "@/lib/seo";
import { products } from "@/data/products";

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
    images: [OG_IMAGE],
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          productListSchema(products),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Shop", path: "/shop" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
