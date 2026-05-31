import Link from "next/link";
import { TrainingSession } from "@/types";
import { ArrowUpRight, MapPin } from "lucide-react";

const accentMap: Record<TrainingSession["accentColor"], { text: string; bg: string }> = {
  danger: { text: "text-rose-600", bg: "bg-rose-50" },
  forest: { text: "text-forest", bg: "bg-forest-light" },
  amber: { text: "text-amber-dark", bg: "bg-emerald-50" },
  indigo: { text: "text-indigo-600", bg: "bg-indigo-50" },
  rose: { text: "text-rose-700", bg: "bg-rose-50" },
};

const categoryLabel: Record<TrainingSession["category"], string> = {
  fundamentals: "Fundamentals",
  "food-safety": "Food Safety",
  restaurants: "Restaurants",
  "public-health": "Public Health",
  academic: "Academic",
  collaboration: "Collaboration",
};

export function TrainingCard({ session }: { session: TrainingSession }) {
  const a = accentMap[session.accentColor];

  return (
    <Link
      href={`/school/${session.slug}`}
      className="group hover-card-premium flex flex-col overflow-hidden rounded-2xl bg-white border border-black/5"
    >
      {/* Photo banner */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <img
          src={session.image}
          alt={session.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span
          className={`absolute top-3 right-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm ${a.bg} ${a.text}`}
        >
          {categoryLabel[session.category]}
        </span>
        <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 text-xs font-semibold text-white/90">
          <MapPin className="h-3.5 w-3.5" />
          {session.location}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-extrabold text-charcoal mb-1.5 transition-colors group-hover:text-forest">
          {session.title}
        </h3>
        <p className={`text-xs font-semibold italic ${a.text} mb-3`}>
          {session.tagline}
        </p>
        <p className="mb-5 text-sm leading-relaxed text-slate-mid line-clamp-2">
          {session.summary}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-black/5 pt-4">
          <span className="text-xs font-medium text-slate-mid">
            {session.host}
          </span>
          <span
            className={`inline-flex items-center gap-1 text-xs font-bold ${a.text} transition-all group-hover:gap-2`}
          >
            View Session
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
