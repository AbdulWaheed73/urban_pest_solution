import { getIcon } from "@/lib/icons";
import { Shield } from "lucide-react";

interface PillarCardProps {
  title: string;
  description: string;
  icon: string;
}

export function PillarCard({ title, description, icon }: PillarCardProps) {
  const IconComponent = getIcon(icon, Shield);

  return (
    <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-forest-light">
        <IconComponent className="h-10 w-10 text-forest" />
      </div>
      <h3 className="text-xl font-bold text-charcoal mb-3">{title}</h3>
      <p className="text-slate-mid leading-relaxed">{description}</p>
    </div>
  );
}
