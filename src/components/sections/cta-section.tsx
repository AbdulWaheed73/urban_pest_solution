import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site-config";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = "Ready to Protect Your Space?",
  subtitle = "Choose Urban Pest Solution for comprehensive, technology-driven pest control. Our A.I.R approach makes us the ideal partner for a pest-free environment.",
}: CTASectionProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-off-white">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-12 lg:p-16 text-center" style={{
          background: "linear-gradient(135deg, #0e1240 0%, #1A1F71 30%, #2E3692 60%, #1e2470 100%)",
        }}>
          {/* Decorative */}
          <div className="absolute inset-0 dot-pattern opacity-[0.04]" />
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-amber/10 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-forest-light/10 blur-[80px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-white/80 mb-6">
              <Sparkles className="h-3 w-3 text-amber" />
              Free consultation available
            </div>

            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
              {subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                render={<Link href="/contact" />}
                size="lg"
                className="bg-amber hover:bg-amber-dark text-charcoal font-bold px-10 py-6 text-base rounded-xl shadow-lg shadow-amber/25 hover:shadow-amber/40 transition-all hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                render={<a href={`tel:${siteConfig.phone}`} />}
                size="lg"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-10 py-6 text-base rounded-xl"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
