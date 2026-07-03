import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pest Library",
  description:
    "Identify pests and learn how to control them. Our pest library covers flying insects, crawling insects, rodents, reptiles and vertebrates — with biology, signs, health risks and treatment guidance.",
  keywords: [
    "pest library",
    "pest identification",
    "pest control guide",
    "insect identification Pakistan",
    "rodent identification",
  ],
  alternates: { canonical: "/library" },
  openGraph: {
    title: "Pest Library | Urban Pest Solution",
    description:
      "Identify pests and learn how to control them — biology, signs, health risks and treatment guidance for common pests.",
    url: "/library",
    type: "website",
    images: [OG_IMAGE],
  },
};

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
