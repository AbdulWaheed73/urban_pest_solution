import { HeroSection } from "@/components/sections/hero-section";
import { PillarsSection } from "@/components/sections/pillars-section";
import { MethodologySection } from "@/components/sections/methodology-section";
import { ServiceCategoriesSection } from "@/components/sections/service-categories-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { FAQSection } from "@/components/sections/faq-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Safeguarding Spaces, Sustaining Health"
        subtitle="Integrated pest management solutions for commercial and residential properties — backed by science, driven by technology, and committed to your safety."
        ctaText="Get a Free Quote"
        ctaHref="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaHref="/services"
      />
      <PillarsSection />
      <MethodologySection />
      <ServiceCategoriesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
