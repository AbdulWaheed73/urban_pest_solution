import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { seasonalPests } from "@/data/residential-segments";
import { getIcon } from "@/lib/icons";
import { Calendar } from "lucide-react";

const seasonColors: Record<string, { gradient: string; shadow: string }> = {
  Spring: { gradient: "from-green-400 to-green-600", shadow: "shadow-green-400/20" },
  Summer: { gradient: "from-amber to-amber-dark", shadow: "shadow-amber/20" },
  Fall: { gradient: "from-orange-400 to-orange-600", shadow: "shadow-orange-400/20" },
  Winter: { gradient: "from-sky-400 to-sky-600", shadow: "shadow-sky-400/20" },
};

export function SeasonalPestSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Year-Round Protection"
          title="Seasonal Pest Control"
          subtitle="Preparing your home for every season's pest challenges with year-round protection."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {seasonalPests.map((season) => {
            const IconComponent = getIcon(season.icon, Calendar);
            const colors = seasonColors[season.season] || seasonColors.Spring;
            return (
              <div
                key={season.season}
                className="group hover-card-premium rounded-2xl bg-white p-6 text-center"
              >
                <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${colors.gradient} shadow-lg ${colors.shadow} group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-charcoal mb-3">
                  {season.season}
                </h4>
                <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                  {season.pests.map((pest) => (
                    <Badge
                      key={pest}
                      className="bg-forest-light text-forest border-0 text-xs"
                    >
                      {pest}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-slate-mid leading-relaxed">
                  {season.tip}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
