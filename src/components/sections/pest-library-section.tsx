import Link from "next/link";
import { SectionHeading } from "@/components/shared/section-heading";
import { PestLibraryCard } from "@/components/library/pest-library-card";
import { featuredResidentialPests } from "@/data/pest-library";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export function PestLibrarySection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Pest Library"
          title="Who Is Bugging You at Home?"
          subtitle="Struggling with persistent pests? Identify what you're dealing with and learn our targeted A.I.R. approach."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredResidentialPests.map((pest) => (
            <PestLibraryCard key={pest.slug} pest={pest} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button
            render={<Link href="/library" />}
            size="lg"
            className="bg-forest hover:bg-forest-dark text-white font-semibold rounded-xl px-8 py-6 shadow-md shadow-forest/20 hover:shadow-forest/30 transition-all hover:-translate-y-0.5"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Explore Full Pest Library (24+)
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
