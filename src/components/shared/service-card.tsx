import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Service } from "@/types";
import { getIcon } from "@/lib/icons";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = getIcon(service.icon);

  return (
    <Card className="group hover:-translate-y-1 transition-all duration-300 hover:shadow-lg border-border/50">
      <CardHeader className="pb-3">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-forest-light">
          <IconComponent className="h-6 w-6 text-forest" />
        </div>
        <CardTitle className="text-lg font-semibold text-charcoal">
          {service.title}
        </CardTitle>
        {service.standard && (
          <Badge variant="secondary" className="w-fit text-xs">
            {service.standard}
          </Badge>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-mid leading-relaxed">
          {service.description}
        </p>
      </CardContent>
    </Card>
  );
}
