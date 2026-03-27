import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { seasonalPests } from "@/data/residential-segments";
import { getIcon } from "@/lib/icons";
import { Calendar } from "lucide-react";

export function SeasonalPestSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Seasonal Pest Control"
          subtitle="Preparing your home for every season's pest challenges with year-round protection."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {seasonalPests.map((season) => {
            const IconComponent = getIcon(season.icon, Calendar);
            return (
              <Card
                key={season.season}
                className="group hover:shadow-md transition-all duration-300 border-border/50"
              >
                <CardHeader className="text-center pb-3">
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-forest-light">
                    <IconComponent className="h-7 w-7 text-forest" />
                  </div>
                  <CardTitle className="text-lg font-bold text-charcoal">
                    {season.season}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {season.pests.map((pest) => (
                      <Badge
                        key={pest}
                        variant="secondary"
                        className="text-xs"
                      >
                        {pest}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-slate-mid leading-relaxed text-center">
                    {season.tip}
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
