import { Badge } from "@/components/ui/badge";
import { Service } from "@/types";
import { getIcon } from "@/lib/icons";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = getIcon(service.icon);

  return (
    <div className="group hover-card-premium rounded-2xl bg-white p-6">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-forest to-forest-dark shadow-lg shadow-forest/15 group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="h-6 w-6 text-white" />
      </div>
      <h4 className="text-lg font-bold text-charcoal mb-1 group-hover:text-forest transition-colors">
        {service.title}
      </h4>
      {service.standard && (
        <Badge className="mb-3 bg-forest-light text-forest border-0 text-xs font-medium">
          {service.standard}
        </Badge>
      )}
      <p className="text-sm text-slate-mid leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
