import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { ContactForm } from "@/components/shared/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Urban Pest Solution. Request a free consultation, schedule a pest inspection, or ask us anything about our services.",
  keywords: [
    "contact pest control",
    "free pest inspection Lahore",
    "pest control consultation Pakistan",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Urban Pest Solution",
    description:
      "Request a free consultation, schedule a pest inspection, or ask us anything about our services.",
    url: "/contact",
    type: "website",
    images: [OG_IMAGE],
  },
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Get in Touch"
        subtitle="We're here to help protect your space. Reach out for a free consultation or to schedule a pest inspection."
        compact
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-charcoal mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-charcoal mb-6">
                Contact Information
              </h2>

              <Card className="border-border/50">
                <CardContent className="p-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest-light">
                      <MapPin className="h-5 w-5 text-forest" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal text-sm">Address</p>
                      <p className="text-sm text-slate-mid">{siteConfig.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest-light">
                      <Phone className="h-5 w-5 text-forest" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal text-sm">Phone</p>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-sm text-forest hover:text-forest-dark"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest-light">
                      <Mail className="h-5 w-5 text-forest" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal text-sm">Email</p>
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-forest hover:text-forest-dark"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-forest" />
                    <CardTitle className="text-base font-semibold text-charcoal">
                      Business Hours
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {siteConfig.businessHours.map((item) => (
                      <li
                        key={item.day}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-charcoal font-medium">
                          {item.day}
                        </span>
                        <span className="text-slate-mid">{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border border-border/50 h-48 bg-muted flex items-center justify-center">
                <p className="text-sm text-slate-mid">
                  Map — Lahore, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
