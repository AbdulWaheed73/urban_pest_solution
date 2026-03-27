import { SectionHeading } from "@/components/shared/section-heading";
import { Leaf, Award, Clock, BadgeCheck, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface WhyChooseUsItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const defaultItems: WhyChooseUsItem[] = [
  {
    icon: Award,
    title: "Proven Expertise",
    description:
      "A proven track record with multinational clients across diverse industries and thousands of residential projects throughout Pakistan.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description:
      "A wide array of environmentally responsible pest control products and equipment, with a regularly updated portfolio ensuring industry compliance.",
  },
  {
    icon: TrendingUp,
    title: "Innovative Technology",
    description:
      "Harnessing digital monitoring systems powered by modern technologies to deliver precise and automated pest control with real-time reporting.",
  },
  {
    icon: BadgeCheck,
    title: "Trained Professionals",
    description:
      "Our team undergoes continuous training through integrated programs, earning certifications and staying at the forefront of pest management advancements.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    description:
      "Round-the-clock availability for emergency pest situations, ensuring rapid response when you need it most.",
  },
];

interface WhyChooseUsSectionProps {
  items?: WhyChooseUsItem[];
}

export function WhyChooseUsSection({ items = defaultItems }: WhyChooseUsSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-off-white to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Us"
          title="Why Choose Urban Pest Solution?"
          subtitle="We combine experience, innovation, and commitment to deliver results you can trust."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="group hover-card-premium rounded-2xl bg-white p-7"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-forest to-forest-dark shadow-lg shadow-forest/15 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal mb-1.5 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-mid leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
