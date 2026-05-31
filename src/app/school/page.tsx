"use client";

import { useState, useMemo } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { SchoolPillars } from "@/components/school/school-pillars";
import { TrainingCard } from "@/components/school/training-card";
import { AtPlacesSection } from "@/components/school/at-places-section";
import { CTASection } from "@/components/sections/cta-section";
import { trainingSessions, trainingCategories } from "@/data/school";
import { cn } from "@/lib/utils";

export default function SchoolPage() {
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
        title="School of IPM"
        subtitle="Innovate, Protect, Sustain — empowering you to build a greener future through advanced pest-management education."
        compact
      />

      <SchoolPillars />

      {/* Training sessions */}
      <section className="py-24 relative bg-off-white">
        <div className="absolute inset-0 dot-pattern opacity-[0.025] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Training Sessions"
            title="Activity-Based IPM Trainings"
            subtitle="The first School of IPM dedicated to urban pest-management training in Pakistan. Explore our hands-on sessions — tap any session to see what it covers."
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
        title="Join Us in Collaboration"
        subtitle="Together we can empower professionals, educate the public, and set new standards for excellence in pest management. Partner with the School of IPM."
      />
    </>
  );
}
