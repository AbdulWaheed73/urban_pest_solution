import { SectionHeading } from "@/components/shared/section-heading";
import { Leaf, Award, Clock, BadgeCheck, TrendingUp } from "lucide-react";

interface WhyChooseUsItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const defaultItems: WhyChooseUsItem[] = [
  {
    icon: <Award className="h-7 w-7 text-forest" />,
    title: "Proven Expertise",
    description:
      "A proven track record with multinational clients across diverse industries and thousands of residential projects throughout Pakistan.",
  },
  {
    icon: <Leaf className="h-7 w-7 text-forest" />,
    title: "Eco-Friendly Solutions",
    description:
      "A wide array of environmentally responsible pest control products and equipment, with a regularly updated portfolio ensuring industry compliance.",
  },
  {
    icon: <TrendingUp className="h-7 w-7 text-forest" />,
    title: "Innovative Technology",
    description:
      "Harnessing digital monitoring systems powered by modern technologies to deliver precise and automated pest control with real-time reporting.",
  },
  {
    icon: <BadgeCheck className="h-7 w-7 text-forest" />,
    title: "Trained Professionals",
    description:
      "Our team undergoes continuous training through integrated programs, earning certifications and staying at the forefront of pest management advancements.",
  },
  {
    icon: <Clock className="h-7 w-7 text-forest" />,
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
    <section className="py-20 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose Urban Pest Solution?"
          subtitle="We combine experience, innovation, and commitment to deliver results you can trust."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-forest-light">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-mid leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
