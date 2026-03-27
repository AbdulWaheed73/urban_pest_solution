"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CommercialSector } from "@/types";
import { ChevronDown, ChevronUp, Search, Wrench, ClipboardCheck } from "lucide-react";
import { getIcon } from "@/lib/icons";
import { Building2 } from "lucide-react";

interface SectorCardProps {
  sector: CommercialSector;
}

export function SectorCard({ sector }: SectorCardProps) {
  const [expanded, setExpanded] = useState(false);
  const IconComponent = getIcon(sector.icon, Building2);

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50">
      <CardHeader>
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-forest-light">
          <IconComponent className="h-7 w-7 text-forest" />
        </div>
        <CardTitle className="text-xl font-bold text-charcoal">
          {sector.title}
        </CardTitle>
        <p className="text-sm font-medium text-forest">{sector.subtitle}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-slate-mid leading-relaxed">
          {sector.description}
        </p>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="text-forest hover:text-forest-dark p-0 h-auto font-medium"
        >
          {expanded ? "Hide" : "View"} A.I.R Approach
          {expanded ? (
            <ChevronUp className="ml-1 h-4 w-4" />
          ) : (
            <ChevronDown className="ml-1 h-4 w-4" />
          )}
        </Button>

        {expanded && (
          <div className="space-y-3 border-t pt-4">
            <div className="flex gap-3">
              <Search className="h-5 w-5 text-forest shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-charcoal">Assess</p>
                <p className="text-xs text-slate-mid">{sector.airBreakdown.assess}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Wrench className="h-5 w-5 text-amber shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-charcoal">Implement</p>
                <p className="text-xs text-slate-mid">
                  {sector.airBreakdown.implement}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <ClipboardCheck className="h-5 w-5 text-forest shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-charcoal">Review</p>
                <p className="text-xs text-slate-mid">{sector.airBreakdown.review}</p>
              </div>
            </div>
          </div>
        )}

        <Button
          variant="outline"
          size="sm"
          className="w-full border-forest text-forest hover:bg-forest hover:text-white"
        >
          Reach Us
        </Button>
      </CardContent>
    </Card>
  );
}
