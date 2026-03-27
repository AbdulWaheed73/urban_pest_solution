import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TermiteControlSection } from "@/components/sections/termite-control-section";
import { PestLibrarySection } from "@/components/sections/pest-library-section";
import { SeasonalPestSection } from "@/components/sections/seasonal-pest-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { CTASection } from "@/components/sections/cta-section";
import { residentialSegments } from "@/data/residential-segments";
import { Shield, Calendar } from "lucide-react";
import { getIcon } from "@/lib/icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Residential Pest Control",
  description:
    "Professional residential pest control services across Pakistan. Protecting homes, apartments, and families from termites, rodents, cockroaches, and more.",
};

export default function ResidentialPage() {
  return (
    <>
      <HeroSection
        title="Protecting Your Home, Inside and Out"
        subtitle="Services designed to protect your home with professional solutions ensuring pest-free environments and family safety, backed by extensive experience and cutting-edge methods."
        ctaText="Free Consultation"
        ctaHref="/contact"
        compact
      />

      {/* Residential Segments */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Residential Services"
            subtitle="Comprehensive pest protection tailored to your living space."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {residentialSegments.map((segment) => {
              const IconComponent = getIcon(segment.icon);
              return (
                <Card
                  key={segment.id}
                  className="group text-center hover:shadow-lg transition-all duration-300 border-border/50"
                >
                  <CardHeader>
                    <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-forest-light">
                      <IconComponent className="h-8 w-8 text-forest" />
                    </div>
                    <CardTitle className="text-xl font-bold text-charcoal">
                      {segment.title}
                    </CardTitle>
                    <p className="text-sm font-medium text-forest">
                      {segment.subtitle}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-mid leading-relaxed">
                      {segment.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 border-forest text-forest hover:bg-forest hover:text-white"
                      render={<Link href="/contact" />}
                    >
                      Reach Us
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <TermiteControlSection />
      <PestLibrarySection />
      <WhyChooseUsSection />
      <SeasonalPestSection />

      {/* Pest Inspection */}
      <section className="py-20 bg-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-border/50">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-forest-light">
                  <Shield className="h-6 w-6 text-forest" />
                </div>
                <CardTitle className="text-xl font-bold text-charcoal">
                  Pest Inspection & Prevention
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-slate-mid leading-relaxed">
                  Detecting and preventing pest problems before they start. Our
                  proactive inspections identify vulnerabilities and provide
                  actionable recommendations to keep your home pest-free.
                </p>
                <Button
                  render={<Link href="/contact" />}
                  className="bg-forest hover:bg-forest-dark text-white"
                >
                  Book Inspection
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-amber/10">
                  <Calendar className="h-6 w-6 text-amber-dark" />
                </div>
                <CardTitle className="text-xl font-bold text-charcoal">
                  Ongoing Maintenance Plans
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-slate-mid leading-relaxed">
                  Year-round protection with scheduled treatments and regular
                  monitoring. Our maintenance plans ensure continuous defense
                  against seasonal pest threats.
                </p>
                <Button
                  render={<Link href="/contact" />}
                  variant="outline"
                  className="border-forest text-forest hover:bg-forest hover:text-white"
                >
                  Get in Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Protect Your Home?"
        subtitle="Choose Urban Pest Solution for comprehensive residential pest control. Our technology-driven approach ensures your home stays safe and pest-free."
      />
    </>
  );
}
