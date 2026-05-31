import { SectionHeading } from "@/components/shared/section-heading";
import { atPlaces } from "@/data/academy";
import { MapPin } from "lucide-react";

export function AtPlacesSection() {
  return (
    <section className="py-24 bg-off-white relative">
      <div className="absolute inset-0 dot-pattern opacity-[0.025] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="At Places"
          title="Where Our Training Makes a Difference"
          subtitle="From global food brands to community institutions — a look at our teams on the ground, training, auditing, and raising standards across Pakistan."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {atPlaces.map((place) => (
            <div
              key={place.id}
              className="group hover-card-premium flex flex-col overflow-hidden rounded-2xl bg-white border border-black/5 sm:flex-row"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 sm:aspect-auto sm:w-2/5">
                <img
                  src={place.image}
                  alt={place.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest mb-2">
                  <MapPin className="h-3.5 w-3.5" />
                  {place.client}
                </span>
                <h3 className="text-lg font-extrabold text-charcoal mb-2 group-hover:text-forest transition-colors">
                  {place.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-mid">
                  {place.description}
                </p>
                <span className="mt-auto pt-4 text-xs font-medium italic text-slate-mid">
                  {place.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
