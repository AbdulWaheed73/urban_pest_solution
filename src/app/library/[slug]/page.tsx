import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { pestLibrary } from "@/data/pest-library";
import { PestDetailHero } from "@/components/library/pest-detail-hero";
import { PestAirSection } from "@/components/library/pest-air-section";
import { PestFactsSection } from "@/components/library/pest-facts-section";
import { PestFaqSection } from "@/components/library/pest-faq-section";
import { RelatedPests } from "@/components/library/related-pests";
import { CTASection } from "@/components/sections/cta-section";
import { ChevronLeft } from "lucide-react";

export async function generateStaticParams() {
  return pestLibrary.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const pest = pestLibrary.find((p) => p.slug === slug);
  if (!pest) return { title: "Pest Not Found" };
  return {
    title: `${pest.name} — Urban Pest Solution Library`,
    description: pest.shortDescription,
    openGraph: {
      title: `${pest.name} (${pest.scientificName})`,
      description: pest.shortDescription,
    },
  };
}

export default async function PestDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pest = pestLibrary.find((p) => p.slug === slug);
  if (!pest) notFound();

  const related = pestLibrary
    .filter((p) => p.category === pest.category && p.slug !== pest.slug)
    .slice(0, 3);

  return (
    <>
      <PestDetailHero pest={pest} />

      {/* Breadcrumb / back nav */}
      <div className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/library"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-mid hover:text-forest transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Pest Library
          </Link>
        </div>
      </div>

      <PestFactsSection pest={pest} />
      <PestAirSection pest={pest} />
      <PestFaqSection pest={pest} />
      {related.length > 0 && <RelatedPests pests={related} category={pest.category} />}
      <CTASection />
    </>
  );
}
