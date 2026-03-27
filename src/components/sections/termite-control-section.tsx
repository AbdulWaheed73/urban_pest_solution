import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { termiteServices } from "@/data/residential-segments";
import { getIcon } from "@/lib/icons";
import { Shield } from "lucide-react";

export function TermiteControlSection() {
  return (
    <section className="py-20 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Comprehensive Termite Control"
          subtitle="From pre-construction through post-construction phases, we provide complete termite protection solutions."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {termiteServices.map((service) => {
            const IconComponent = getIcon(service.icon, Shield);
            return (
              <Card
                key={service.id}
                className="group hover:shadow-md transition-all duration-300 border-border/50"
              >
                <CardHeader className="flex-row items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-forest-light">
                    <IconComponent className="h-6 w-6 text-forest" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-charcoal">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-mid leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
