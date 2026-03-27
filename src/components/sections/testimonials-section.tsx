"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/data/testimonials";
import { Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{
      background: "linear-gradient(135deg, #0a2e24 0%, #155C4A 40%, #1a5c4d 100%)",
    }}>
      <div className="absolute inset-0 dot-pattern opacity-[0.03]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Trusted by leading organizations across Pakistan."
          light
        />
        <Carousel
          opts={{ align: "start", loop: true }}
          className="mx-auto max-w-5xl"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t) => (
              <CarouselItem key={t.id} className="pl-4 md:basis-1/2">
                <div className="h-full glass rounded-2xl p-8 flex flex-col justify-between hover:bg-white/[0.12] transition-colors duration-500">
                  <div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber text-amber" />
                      ))}
                    </div>
                    <p className="text-white/80 leading-relaxed text-[15px]">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-forest to-amber text-white font-bold text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-white/40">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-10">
            <CarouselPrevious className="static translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="static translate-y-0 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
