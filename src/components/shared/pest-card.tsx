import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pest } from "@/types";
import { getIcon } from "@/lib/icons";
import { Bug } from "lucide-react";

interface PestCardProps {
  pest: Pest;
}

export function PestCard({ pest }: PestCardProps) {
  const IconComponent = getIcon(pest.icon, Bug);

  return (
    <Card className="group hover:-translate-y-1 transition-all duration-300 hover:shadow-lg border-border/50">
      <CardHeader className="pb-3">
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-danger/10">
          <IconComponent className="h-7 w-7 text-danger" />
        </div>
        <CardTitle className="text-lg font-bold text-charcoal">
          {pest.name}
        </CardTitle>
        <p className="text-sm font-medium text-forest italic">{pest.tagline}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-mid leading-relaxed">
          {pest.description}
        </p>
      </CardContent>
    </Card>
  );
}
