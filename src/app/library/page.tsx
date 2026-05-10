"use client";

import { useState, useMemo } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { PestLibraryCard } from "@/components/library/pest-library-card";
import { LibraryFilter } from "@/components/library/library-filter";
import { pestLibrary } from "@/data/pest-library";
import { CTASection } from "@/components/sections/cta-section";
import { SearchX } from "lucide-react";

export default function LibraryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return pestLibrary.filter((p) => {
      const matchCat = activeCategory === "all" || p.category === activeCategory;
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.scientificName.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [activeCategory, query]);

  return (
    <>
      <HeroSection
        title="Tap the Pest Bugging You"
        subtitle="A complete guide to pests you may encounter in your home, office, or facility — biology, behavior, and our A.I.R. treatment approach for each."
        compact
      />

      <section className="py-24 relative">
        {/* Subtle decorative background */}
        <div className="absolute inset-0 dot-pattern opacity-[0.025] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Pest Library"
            title="Know Your Pest, Solve Your Problem"
            subtitle="Identify, understand, and control 24+ common pests across Pakistan with science-backed insights and our proven treatment methodology."
          />

          {/* Filter */}
          <div className="mb-14">
            <LibraryFilter
              active={activeCategory}
              onCategoryChange={setActiveCategory}
              query={query}
              onQueryChange={setQuery}
              resultCount={filtered.length}
            />
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((pest) => (
                <PestLibraryCard key={pest.slug} pest={pest} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-forest-light mb-4">
                <SearchX className="h-8 w-8 text-forest" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2">No pests match your search</h3>
              <p className="text-slate-mid">Try a different keyword or category.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
