import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Urban Pest Academy",
  description:
    "Training sessions and workshops on Integrated Pest Management — from IPM fundamentals and food safety to public-health and academic collaboration. Build a science-driven pest management culture.",
  keywords: [
    "IPM training",
    "pest management courses",
    "Urban Pest Academy",
    "food safety training",
    "pest control workshops Pakistan",
  ],
  alternates: { canonical: "/academy" },
  openGraph: {
    title: "Urban Pest Academy | Urban Pest Solution",
    description:
      "Training sessions and workshops on Integrated Pest Management — fundamentals, food safety, public health and more.",
    url: "/academy",
    type: "website",
    images: [OG_IMAGE],
  },
};

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
