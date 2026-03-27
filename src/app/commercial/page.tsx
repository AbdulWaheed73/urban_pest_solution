import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectorCard } from "@/components/shared/sector-card";
import { CommonPestsSection } from "@/components/sections/common-pests-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { commercialSectors } from "@/data/commercial-sectors";

export const metadata: Metadata = {
  title: "Commercial Pest Control",
  description:
    "Tailored commercial pest management for food & beverage, retail, hospitality, healthcare, education, and more. Trusted by 30+ multinational clients.",
};

export default function CommercialPage() {
  return (
    <>
      <HeroSection
        title="Crafting Your IPM Success Story"
        subtitle="Transform pest control with cutting-edge solutions and advanced monitoring capabilities to enhance brand success and ensure peak pest management efficiency."
        ctaText="Free Consultation"
        ctaHref="/contact"
        compact
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Protecting Reputation — For Any Business, Anywhere"
            subtitle="Over 18 years of industry experience with multinational clients. We deliver tailored pest control solutions across every sector."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {commercialSectors.map((sector) => (
              <SectorCard key={sector.id} sector={sector} />
            ))}
          </div>
        </div>
      </section>

      <CommonPestsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection
        title="Ready to Partner with Us?"
        subtitle="Choose Urban Pest Solution for a comprehensive, technology-driven approach to commercial pest control. Our A.I.R approach makes us the ideal partner for your business."
      />
    </>
  );
}
