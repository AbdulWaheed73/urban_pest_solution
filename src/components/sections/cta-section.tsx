import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = "Ready to Protect Your Space?",
  subtitle = "Choose Urban Pest Solution for comprehensive, technology-driven pest control. Our commitment to excellence and structured A.I.R approach make us the ideal partner for a pest-free environment.",
}: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-forest-dark to-forest">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl tracking-tight">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            render={<Link href="/contact" />}
            size="lg"
            className="bg-amber hover:bg-amber-dark text-charcoal font-semibold px-8"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            render={<a href={`tel:${siteConfig.phone}`} />}
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}
