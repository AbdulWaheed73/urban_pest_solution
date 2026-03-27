import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { commercialPests } from "@/data/commercial-sectors";
import { getIcon } from "@/lib/icons";
import { Bug } from "lucide-react";

export function CommonPestsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Common Commercial Culprits"
          subtitle="Commercial food production and storage facilities face particular vulnerability to pests that can compromise product quality, safety, and regulatory compliance."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {commercialPests.map((pest) => {
            const IconComponent = getIcon(pest.icon, Bug);
            return (
              <Card
                key={pest.id}
                className="group hover:shadow-lg transition-all duration-300 border-border/50"
              >
                <CardHeader>
                  <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-danger/10">
                    <IconComponent className="h-8 w-8 text-danger" />
                  </div>
                  <CardTitle className="text-xl font-bold text-charcoal">
                    {pest.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-mid leading-relaxed">
                    {pest.description}
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
