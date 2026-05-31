"use client";

import { useState, useMemo } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { AcademyPillars } from "@/components/academy/academy-pillars";
import { TrainingCard } from "@/components/academy/training-card";
import { AtPlacesSection } from "@/components/academy/at-places-section";
import { CTASection } from "@/components/sections/cta-section";
import { trainingSessions, trainingCategories } from "@/data/academy";
import { cn } from "@/lib/utils";

export default function AcademyPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? trainingSessions
        : trainingSessions.filter((s) => s.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
      <HeroSection
        title="Urban Pest Academy"
        subtitle="Learn it. Prevent it. Protect what matters. Practical pest-management education that turns knowledge into a pest-free environment."
        compact
      />

      <AcademyPillars />

      {/* Training sessions */}
      <section className="py-24 relative bg-off-white">
        <div className="absolute inset-0 dot-pattern opacity-[0.025] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Training Sessions"
            title="Activity-Based Pest Trainings"
            subtitle="Hands-on IPM trainings and workshops delivered across Pakistan. Explore our sessions — tap any one to see what it covers."
          />

          {/* Category filter */}
          <div className="mb-14 flex flex-wrap justify-center gap-2">
            {trainingCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
                  activeCategory === cat.key
                    ? "bg-forest text-white shadow-md shadow-forest/20"
                    : "bg-white text-slate-mid border border-black/5 hover:text-forest hover:border-forest/20"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((session) => (
              <TrainingCard key={session.slug} session={session} />
            ))}
          </div>
        </div>
      </section>

      <AtPlacesSection />

      <CTASection
        title="Train With Urban Pest Academy"
        subtitle="Equip your team with the skills to keep pests out for good. Book a session at our academy or have our trainers come to your site."
      />
    </>
  );
}
