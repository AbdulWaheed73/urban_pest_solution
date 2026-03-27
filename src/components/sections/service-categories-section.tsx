import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import { Building2, Home, Bug, ArrowRight, ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Commercial Services",
    description:
      "Customized pest control solutions leveraging extensive expertise, innovative products, and cutting-edge monitoring systems. The trusted partner for businesses across all sectors.",
    icon: Building2,
    href: "/commercial",
    accent: "forest",
    stats: "30+ multinational clients",
  },
  {
    title: "Residential Services",
    description:
      "Your trusted partner for residential pest control. Our comprehensive approach combines advanced technology with expert knowledge to safeguard your home from pests.",
    icon: Home,
    href: "/residential",
    accent: "amber",
    stats: "10,000+ homes protected",
  },
  {
    title: "Specialized Pest Control",
    description:
      "We excel by identifying pests and their life cycles, analyzing behavior, and locating harborage sites. We apply targeted, effective solutions to manage and prevent infestations.",
    icon: Bug,
    href: "/services",
    accent: "danger",
    stats: "20+ pest types handled",
  },
];

export function ServiceCategoriesSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-forest-light/20 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="How We Serve You"
          subtitle="Whether you're protecting a business, your home, or need specialized pest control — we have you covered."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {categories.map((cat) => {
            const accentColors = {
              forest: { bg: "bg-forest", light: "bg-forest-light", text: "text-forest", border: "border-forest/20", shadow: "shadow-forest/10" },
              amber: { bg: "bg-amber", light: "bg-amber/10", text: "text-amber-dark", border: "border-amber/20", shadow: "shadow-amber/10" },
              danger: { bg: "bg-danger", light: "bg-danger/10", text: "text-danger", border: "border-danger/20", shadow: "shadow-danger/10" },
            }[cat.accent]!;

            return (
              <div
                key={cat.title}
                className={`group relative rounded-2xl bg-white border ${accentColors.border} p-8 hover-card-premium`}
              >
                {/* Icon */}
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${accentColors.bg} shadow-lg ${accentColors.shadow}`}>
                  <cat.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-charcoal mb-2">
                  {cat.title}
                </h3>

                {/* Stats pill */}
                <span className={`inline-flex items-center text-xs font-medium ${accentColors.text} ${accentColors.light} px-3 py-1 rounded-full mb-4`}>
                  {cat.stats}
                </span>

                <p className="text-slate-mid leading-relaxed mb-8">
                  {cat.description}
                </p>

                <Button
                  render={<Link href={cat.href} />}
                  className={`w-full ${accentColors.bg} hover:opacity-90 text-white font-semibold rounded-xl py-5 shadow-lg ${accentColors.shadow} transition-all`}
                >
                  Explore
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
