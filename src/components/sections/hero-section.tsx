import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  compact?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref,
  compact = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br from-forest-dark via-forest to-forest-dark ${
        compact ? "py-20" : "py-28 lg:py-36"
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-amber blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`font-bold text-white tracking-tight ${
            compact
              ? "text-3xl sm:text-4xl lg:text-5xl"
              : "text-4xl sm:text-5xl lg:text-6xl"
          }`}
        >
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed sm:text-xl">
          {subtitle}
        </p>
        {ctaText && (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              render={<Link href={ctaHref} />}
              size="lg"
              className="bg-amber hover:bg-amber-dark text-charcoal font-semibold px-8"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button
                render={<Link href={secondaryCtaHref} />}
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                {secondaryCtaText}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
