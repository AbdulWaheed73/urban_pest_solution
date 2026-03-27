import { SectionHeading } from "@/components/shared/section-heading";
import { termiteServices } from "@/data/residential-segments";
import { getIcon } from "@/lib/icons";
import { Shield } from "lucide-react";

export function TermiteControlSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-off-white to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Termite Solutions"
          title="Comprehensive Termite Control"
          subtitle="From pre-construction through post-construction phases, we provide complete termite protection solutions."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {termiteServices.map((service) => {
            const IconComponent = getIcon(service.icon, Shield);
            return (
              <div
                key={service.id}
                className="group hover-card-premium rounded-2xl bg-white p-7"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-forest to-forest-dark shadow-lg shadow-forest/15 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-charcoal mb-2 group-hover:text-forest transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-sm text-slate-mid leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
