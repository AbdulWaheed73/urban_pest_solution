import { Pest } from "@/types";
import { getIcon } from "@/lib/icons";
import { Bug } from "lucide-react";

interface PestCardProps {
  pest: Pest;
}

export function PestCard({ pest }: PestCardProps) {
  const IconComponent = getIcon(pest.icon, Bug);

  return (
    <div className="group hover-card-premium rounded-2xl bg-white p-6">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-danger/80 to-danger shadow-lg shadow-danger/15 group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="h-7 w-7 text-white" />
      </div>
      <h4 className="text-lg font-bold text-charcoal mb-1 group-hover:text-danger transition-colors">
        {pest.name}
      </h4>
      <p className="text-sm font-medium text-danger/70 italic mb-3">{pest.tagline}</p>
      <p className="text-sm text-slate-mid leading-relaxed">
        {pest.description}
      </p>
    </div>
  );
}
