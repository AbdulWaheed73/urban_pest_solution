import { SectionHeading } from "@/components/shared/section-heading";
import { PestCard } from "@/components/shared/pest-card";
import { residentialPests } from "@/data/pests";

export function PestLibrarySection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Who Is Bugging You at Home?"
          subtitle="Struggling with persistent pests? Our expert solutions target the specific pests invading your space."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {residentialPests.map((pest) => (
            <PestCard key={pest.id} pest={pest} />
          ))}
        </div>
      </div>
    </section>
  );
}
