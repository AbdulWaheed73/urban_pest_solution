"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CommercialSector } from "@/types";
import { ChevronDown, ChevronUp, Search, Wrench, ClipboardCheck } from "lucide-react";
import { getIcon } from "@/lib/icons";
import { Building2 } from "lucide-react";
import Link from "next/link";

interface SectorCardProps {
  sector: CommercialSector;
}

export function SectorCard({ sector }: SectorCardProps) {
  const [expanded, setExpanded] = useState(false);
  const IconComponent = getIcon(sector.icon, Building2);

  return (
    <div className="group hover-card-premium rounded-2xl bg-white p-7">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-forest to-forest-dark shadow-lg shadow-forest/15 group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="h-7 w-7 text-white" />
      </div>

      <h3 className="text-xl font-bold text-charcoal mb-1 group-hover:text-forest transition-colors">
        {sector.title}
      </h3>
      <p className="text-sm font-medium text-forest/80 mb-3">{sector.subtitle}</p>
      <p className="text-sm text-slate-mid leading-relaxed mb-5">
        {sector.description}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center text-sm font-semibold text-forest hover:text-forest-dark transition-colors mb-4"
      >
        {expanded ? "Hide" : "View"} A.I.R Approach
        {expanded ? (
          <ChevronUp className="ml-1.5 h-4 w-4" />
        ) : (
          <ChevronDown className="ml-1.5 h-4 w-4" />
        )}
      </button>

      {expanded && (
        <div className="space-y-3 border-t border-forest/10 pt-4 mb-5 animate-slide-up" style={{ animationDuration: "0.3s" }}>
          {[
            { icon: Search, label: "Assess", text: sector.airBreakdown.assess, color: "text-amber" },
            { icon: Wrench, label: "Implement", text: sector.airBreakdown.implement, color: "text-forest" },
            { icon: ClipboardCheck, label: "Review", text: sector.airBreakdown.review, color: "text-forest-dark" },
          ].map((step) => (
            <div key={step.label} className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-forest-light">
                <step.icon className={`h-4 w-4 ${step.color}`} />
              </div>
              <div>
                <p className="text-xs font-bold text-charcoal uppercase tracking-wider">{step.label}</p>
                <p className="text-xs text-slate-mid leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <Button
        render={<Link href="/contact" />}
        className="w-full bg-forest hover:bg-forest-dark text-white font-semibold rounded-xl py-5 shadow-lg shadow-forest/15 transition-all"
      >
        Reach Us
      </Button>
    </div>
  );
}
