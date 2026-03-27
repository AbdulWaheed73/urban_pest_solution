import { SectionHeading } from "@/components/shared/section-heading";
import { commercialPests } from "@/data/commercial-sectors";
import { getIcon } from "@/lib/icons";
import { Bug } from "lucide-react";

export function CommonPestsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Know Your Enemy"
          title="Common Commercial Culprits"
          subtitle="Commercial food production and storage facilities face particular vulnerability to pests that can compromise product quality, safety, and regulatory compliance."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {commercialPests.map((pest) => {
            const IconComponent = getIcon(pest.icon, Bug);
            return (
              <div
                key={pest.id}
                className="group hover-card-premium rounded-2xl bg-white p-8"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-danger/80 to-danger shadow-lg shadow-danger/15 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-danger transition-colors">
                  {pest.name}
                </h3>
                <p className="text-sm text-slate-mid leading-relaxed">
                  {pest.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
