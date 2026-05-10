import Link from "next/link";
import { PestDetail } from "@/types";
import { getIcon } from "@/lib/icons";
import { Bug, ArrowUpRight } from "lucide-react";

const accentMap: Record<PestDetail["accentColor"], { from: string; to: string; ring: string; text: string; bg: string; }> = {
  danger:  { from: "from-rose-500",   to: "to-red-600",      ring: "shadow-rose-500/25",   text: "text-rose-600",   bg: "bg-rose-50" },
  forest:  { from: "from-forest",     to: "to-forest-dark",  ring: "shadow-forest/25",     text: "text-forest",     bg: "bg-forest-light" },
  amber:   { from: "from-amber",      to: "to-amber-dark",   ring: "shadow-amber/25",      text: "text-amber-dark", bg: "bg-emerald-50" },
  indigo:  { from: "from-indigo-500", to: "to-indigo-700",   ring: "shadow-indigo-500/25", text: "text-indigo-600", bg: "bg-indigo-50" },
  rose:    { from: "from-rose-600",   to: "to-pink-700",     ring: "shadow-rose-500/25",   text: "text-rose-700",   bg: "bg-rose-50" },
};

const categoryLabel: Record<PestDetail["category"], string> = {
  flying: "Flying",
  crawling: "Crawling",
  rodents: "Rodent",
  reptiles: "Reptile",
  vertebrates: "Vertebrate",
};

export function PestLibraryCard({ pest }: { pest: PestDetail }) {
  const Icon = getIcon(pest.icon, Bug);
  const a = accentMap[pest.accentColor];

  return (
    <Link
      href={`/library/${pest.slug}`}
      className="group hover-card-premium relative block rounded-2xl bg-white p-6 border border-black/5"
    >
      <div className="flex items-start justify-between mb-5">
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${a.from} ${a.to} shadow-lg ${a.ring} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
          <Icon className="h-7 w-7 text-white" />
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${a.bg} ${a.text}`}>
          {categoryLabel[pest.category]}
        </span>
      </div>

      <h3 className="text-xl font-extrabold text-charcoal mb-1.5 group-hover:text-forest transition-colors">
        {pest.name}
      </h3>
      <p className={`text-xs font-semibold italic ${a.text} mb-3`}>
        {pest.tagline}
      </p>
      <p className="text-sm text-slate-mid leading-relaxed line-clamp-3 mb-5">
        {pest.shortDescription}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-black/5">
        <span className="text-xs font-medium text-slate-mid italic">
          {pest.scientificName}
        </span>
        <span className={`inline-flex items-center gap-1 text-xs font-bold ${a.text} group-hover:gap-2 transition-all`}>
          Read More
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
