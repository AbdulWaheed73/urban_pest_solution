"use client";

import { productCategories } from "@/data/products";
import { getIcon } from "@/lib/icons";
import { LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  active: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {productCategories.map((cat) => {
        const IconComponent = getIcon(cat.icon, LayoutGrid);
        const isActive = active === cat.key;
        return (
          <button
            key={cat.key}
            onClick={() => onChange(cat.key)}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
              isActive
                ? "bg-forest text-white shadow-md shadow-forest/20"
                : "bg-white text-charcoal hover:bg-forest-light border border-black/5"
            )}
          >
            <IconComponent className="h-4 w-4" />
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
