import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Bug, Leaf } from "lucide-react";

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
      className={`relative overflow-hidden ${
        compact ? "py-24 lg:py-32" : "py-32 lg:py-44"
      }`}
      style={{
        background: "linear-gradient(135deg, #0a2e24 0%, #155C4A 30%, #1F7A63 60%, #1a5c4d 100%)",
      }}
    >
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 opacity-30 animate-gradient" style={{
        background: "radial-gradient(ellipse at 20% 50%, rgba(245, 158, 11, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(42, 174, 135, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(21, 92, 74, 0.5) 0%, transparent 50%)",
        backgroundSize: "200% 200%",
      }} />

      {/* Floating decorative icons */}
      {!compact && (
        <>
          <div className="absolute top-20 left-[10%] animate-float opacity-10">
            <Shield className="h-24 w-24 text-white" />
          </div>
          <div className="absolute bottom-20 right-[15%] animate-float-slow opacity-10">
            <Bug className="h-20 w-20 text-amber" />
          </div>
          <div className="absolute top-1/3 right-[8%] animate-float opacity-[0.07]">
            <Leaf className="h-32 w-32 text-white" />
          </div>
        </>
      )}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-[0.04]" />

      {/* Glowing orbs */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber/10 blur-[100px] animate-pulse-glow" />
      <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-forest-light/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Pill badge */}
        {!compact && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-white/90 mb-8">
            <span className="h-2 w-2 rounded-full bg-amber animate-pulse" />
            Trusted by leading organizations across Pakistan
          </div>
        )}

        <h1
          className={`font-extrabold text-white tracking-tight leading-[1.1] ${
            compact
              ? "text-4xl sm:text-5xl lg:text-6xl"
              : "text-5xl sm:text-6xl lg:text-7xl"
          }`}
        >
          {title}
        </h1>

        <p className={`mx-auto mt-8 max-w-2xl text-white/70 leading-relaxed ${compact ? "text-lg" : "text-lg sm:text-xl"}`}>
          {subtitle}
        </p>

        {ctaText && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              render={<Link href={ctaHref} />}
              size="lg"
              className="bg-amber hover:bg-amber-dark text-charcoal font-bold px-10 py-6 text-base rounded-xl shadow-lg shadow-amber/25 hover:shadow-amber/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button
                render={<Link href={secondaryCtaHref} />}
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-10 py-6 text-base rounded-xl"
              >
                {secondaryCtaText}
              </Button>
            )}
          </div>
        )}

        {/* Stats bar */}
        {!compact && (
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "18+", label: "Years Experience" },
              { value: "500+", label: "Clients Served" },
              { value: "24/7", label: "Support Available" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl px-4 py-4">
                <p className="text-2xl sm:text-3xl font-extrabold text-amber">{stat.value}</p>
                <p className="text-xs sm:text-sm text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 40C1248 36.7 1344 33.3 1392 31.7L1440 30V60H0Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  );
}
