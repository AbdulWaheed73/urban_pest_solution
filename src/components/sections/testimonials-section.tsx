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
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Trusted by leading organizations across Pakistan."
        />
        <Carousel
          opts={{ align: "start", loop: true }}
          className="mx-auto max-w-5xl"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t) => (
              <CarouselItem key={t.id} className="pl-4 md:basis-1/2">
                <Card className="h-full border-border/50">
                  <CardContent className="flex flex-col justify-between h-full p-6">
                    <div>
                      <Quote className="h-8 w-8 text-forest/20 mb-4" />
                      <p className="text-sm text-slate-mid leading-relaxed italic">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <p className="font-semibold text-charcoal">{t.name}</p>
                      <p className="text-xs text-slate-mid">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
