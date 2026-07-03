import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/seo";
import { faqs } from "@/data/faqs";
import { PillarsSection } from "@/components/sections/pillars-section";
import { MethodologySection } from "@/components/sections/methodology-section";
import { ServiceCategoriesSection } from "@/components/sections/service-categories-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { FAQSection } from "@/components/sections/faq-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: { absolute: "Urban Pest Solution — Professional Pest Control Services" },
  description:
    "Science-driven, eco-friendly integrated pest management for homes and businesses across Pakistan — termite, rodent, cockroach and mosquito control.",
  keywords: [
    "pest control Pakistan",
    "integrated pest management",
    "termite treatment Lahore",
    "fumigation services",
    "rodent control",
    "commercial pest control",
    "residential pest control",
    "eco-friendly pest control",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Urban Pest Solution — Safeguarding Spaces, Sustaining Health",
    description:
      "Integrated pest management for commercial and residential properties across Pakistan — backed by science, driven by technology, and committed to your safety.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
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
      <TrustedBySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
