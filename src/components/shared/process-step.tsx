import { getIcon } from "@/lib/icons";
import { CircleDot } from "lucide-react";

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: string;
}

export function ProcessStep({
  stepNumber,
  title,
  description,
  icon,
}: ProcessStepProps) {
  const IconComponent = getIcon(icon, CircleDot);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 border-2 border-white/30">
          <IconComponent className="h-9 w-9 text-amber" />
        </div>
        <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-amber text-charcoal text-sm font-bold">
          {stepNumber}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/80 leading-relaxed max-w-xs">{description}</p>
    </div>
  );
}
