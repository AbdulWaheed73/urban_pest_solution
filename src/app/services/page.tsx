import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { CTASection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { services, serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive management system consulting, training and auditing services across 21+ specialized domains including ISO standards, food safety, and sustainability.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Our Consulting Services"
        subtitle="We provide management system consulting, training and auditing services against best practices and international standards, focused on meeting our commitments with our clients."
        compact
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What We Offer"
            subtitle="Comprehensive solutions across management systems, food safety, information security, and sustainability standards."
          />

          {serviceCategories.map((category) => {
            const categoryServices = services.filter(
              (s) => s.category === category.key
            );
            if (categoryServices.length === 0) return null;

            return (
              <div key={category.key} className="mb-16 last:mb-0">
                <h3 className="text-2xl font-bold text-charcoal mb-6 border-l-4 border-forest pl-4">
                  {category.label}
                </h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {categoryServices.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Let Us Help You Grow Your Business"
        subtitle="Partner with us for world-class consulting, training, and auditing services that drive real results."
      />
    </>
  );
}
