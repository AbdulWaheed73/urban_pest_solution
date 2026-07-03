import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { CTASection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { services, serviceCategories } from "@/data/services";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, SITE_URL, OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pest Control Services",
  description:
    "Our full range of pest control services — general pest control, anti-termite treatment, rodent and bed bug management, fumigation, mosquito & dengue control, and commercial IPM programs across Pakistan.",
  keywords: [
    "pest control services",
    "anti-termite treatment",
    "rodent control",
    "bed bug treatment",
    "fumigation services Pakistan",
    "mosquito dengue control",
    "commercial IPM",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Pest Control Services | Urban Pest Solution",
    description:
      "General pest control, anti-termite treatment, rodent & bed bug management, fumigation, mosquito control and commercial IPM programs across Pakistan.",
    url: "/services",
    type: "website",
    images: [OG_IMAGE],
  },
};

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.description,
      serviceType: s.title,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Pakistan" },
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceListSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <HeroSection
        title="Our Pest Control Services"
        subtitle="From everyday pest prevention to specialized termite, rodent and fumigation treatments — science-driven, eco-friendly solutions for homes, businesses and facilities across Pakistan."
        compact
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What We Offer"
            title="Comprehensive Pest Solutions"
            subtitle="Spanning general pest control, specialized treatments, commercial IPM programs and public-health services."
          />

          {serviceCategories.map((category) => {
            const categoryServices = services.filter(
              (s) => s.category === category.key
            );
            if (categoryServices.length === 0) return null;

            return (
              <div key={category.key} className="mb-20 last:mb-0">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-8 w-1 rounded-full bg-gradient-to-b from-forest to-amber" />
                  <h3 className="text-2xl font-extrabold text-charcoal">
                    {category.label}
                  </h3>
                </div>
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
        title="Not Sure Which Service You Need?"
        subtitle="Book a free inspection and our team will identify the problem and recommend the right treatment for your home or facility."
      />
    </>
  );
}
