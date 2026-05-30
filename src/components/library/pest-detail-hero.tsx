import Link from "next/link";
import { PestDetail } from "@/types";
import { PestGlyph } from "@/components/icons/pest-glyphs";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

const categoryLabel: Record<PestDetail["category"], string> = {
  flying: "Flying Insect",
  crawling: "Crawling Insect",
  rodents: "Rodent",
  reptiles: "Reptile",
  vertebrates: "Vertebrate",
};

export function PestDetailHero({ pest }: { pest: PestDetail }) {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: "linear-gradient(135deg, #0e1240 0%, #1A1F71 30%, #2E3692 60%, #1e2470 100%)",
      }}
    >
      {/* Animated mesh */}
      <div
        className="absolute inset-0 opacity-30 animate-gradient"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(45, 139, 78, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(74, 82, 196, 0.4) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />
      <div className="absolute inset-0 dot-pattern opacity-[0.04]" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber/10 blur-[100px] animate-pulse-glow" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-forest-light/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            {/* Category badge */}
            <Link
              href="/library"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold tracking-wider uppercase text-amber mb-6 hover:bg-white/15 transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
              {categoryLabel[pest.category]}
            </Link>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
              {pest.name}
            </h1>
            <p className="mt-3 text-lg italic text-amber/90 font-medium">
              {pest.scientificName}
            </p>
            <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">
              {pest.shortDescription}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                render={<Link href="/contact" />}
                size="lg"
                className="bg-amber hover:bg-amber-dark text-charcoal font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-amber/25 hover:shadow-amber/40 transition-all hover:-translate-y-0.5"
              >
                Get a Free Inspection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                render={<a href={`tel:${siteConfig.phone}`} />}
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-6 text-base rounded-xl"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Pest icon visual */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber/30 to-forest-light/20 blur-3xl rounded-full" />
              <div className="relative h-64 w-64 rounded-3xl glass flex items-center justify-center group hover:scale-105 transition-transform duration-700">
                <PestGlyph pest={pest} className="h-32 w-32 text-white/90 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-amber text-charcoal text-xs font-bold shadow-lg">
                  IMG PLACEHOLDER
                </div>
              </div>
            </div>
          </div>
        </div>
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
