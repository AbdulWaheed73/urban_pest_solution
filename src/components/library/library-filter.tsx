"use client";

import { pestCategories } from "@/data/pest-library";
import { getIcon } from "@/lib/icons";
import { LayoutGrid, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface LibraryFilterProps {
  active: string;
  onCategoryChange: (key: string) => void;
  query: string;
  onQueryChange: (q: string) => void;
  resultCount: number;
}

export function LibraryFilter({
  active,
  onCategoryChange,
  query,
  onQueryChange,
  resultCount,
}: LibraryFilterProps) {
  return (
    <div className="space-y-6">
      {/* Search bar */}
      <div className="relative max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-mid pointer-events-none" />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search pests by name..."
          className="w-full h-12 pl-11 pr-11 rounded-2xl bg-white border border-black/10 text-sm text-charcoal placeholder:text-slate-mid/70 shadow-sm focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all"
        />
        {query && (
          <button
            onClick={() => onQueryChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 inline-flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            aria-label="Clear search"
          >
            <X className="h-3.5 w-3.5 text-slate-mid" />
          </button>
        )}
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap justify-center gap-2">
        {pestCategories.map((cat) => {
          const Icon = getIcon(cat.icon, LayoutGrid);
          const isActive = active === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => onCategoryChange(cat.key)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-gradient-to-br from-forest to-forest-dark text-white shadow-md shadow-forest/30"
                  : "bg-white text-charcoal hover:bg-forest-light border border-black/5"
              )}
            >
              <Icon className="h-4 w-4" />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Result count */}
      <p className="text-center text-sm text-slate-mid">
        Showing <span className="font-semibold text-charcoal">{resultCount}</span> {resultCount === 1 ? "pest" : "pests"}
      </p>
    </div>
  );
}
