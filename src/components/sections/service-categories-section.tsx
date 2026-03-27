import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Building2, Home, Bug, ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Commercial Services",
    description:
      "Customized pest control solutions leveraging extensive expertise, innovative products, and cutting-edge monitoring systems. The trusted partner for businesses across all sectors.",
    icon: Building2,
    href: "/commercial",
    color: "bg-forest-light",
    iconColor: "text-forest",
  },
  {
    title: "Residential Services",
    description:
      "Your trusted partner for residential pest control. Our comprehensive approach combines advanced technology with expert knowledge to safeguard your home from pests.",
    icon: Home,
    href: "/residential",
    color: "bg-amber/10",
    iconColor: "text-amber-dark",
  },
  {
    title: "Services by Pest Type",
    description:
      "We excel by identifying pests and their life cycles, analyzing behavior, and locating harborage sites. We apply targeted, effective solutions to manage and prevent infestations.",
    icon: Bug,
    href: "/services",
    color: "bg-danger/10",
    iconColor: "text-danger",
  },
];

export function ServiceCategoriesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How We Serve You"
          subtitle="Whether you're protecting a business, your home, or need specialized pest control — we have you covered."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat) => (
            <Card
              key={cat.title}
              className="group hover:shadow-xl transition-all duration-300 border-border/50"
            >
              <CardHeader>
                <div
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-xl ${cat.color}`}
                >
                  <cat.icon className={`h-8 w-8 ${cat.iconColor}`} />
                </div>
                <CardTitle className="text-xl font-bold text-charcoal">
                  {cat.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-mid leading-relaxed">
                  {cat.description}
                </p>
                <Button
                  render={<Link href={cat.href} />}
                  variant="outline"
                  className="border-forest text-forest hover:bg-forest hover:text-white"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
