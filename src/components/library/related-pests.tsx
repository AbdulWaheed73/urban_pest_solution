import { PestDetail } from "@/types";
import { PestLibraryCard } from "./pest-library-card";
import { SectionHeading } from "@/components/shared/section-heading";

const categoryName: Record<PestDetail["category"], string> = {
  flying: "Flying Insects",
  crawling: "Crawling Insects",
  rodents: "Rodents",
  reptiles: "Reptiles",
  vertebrates: "Vertebrates",
};

export function RelatedPests({
  pests,
  category,
}: {
  pests: PestDetail[];
  category: PestDetail["category"];
}) {
  return (
    <section className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Related Pests"
          title={`More ${categoryName[category]}`}
          subtitle="Identify and learn about pests that share habits, habitats, or treatment approaches."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pests.map((p) => (
            <PestLibraryCard key={p.slug} pest={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
