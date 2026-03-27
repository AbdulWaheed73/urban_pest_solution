import { SectionHeading } from "@/components/shared/section-heading";
import { Shield, MonitorSmartphone, GraduationCap, ArrowRight } from "lucide-react";

const pillars = [
  {
    title: "Integrated Pest Management",
    description:
      "Science-driven pest control that prioritizes prevention, uses targeted treatments, and minimizes environmental impact for lasting results.",
    icon: Shield,
    gradient: "from-forest/10 to-forest/5",
    iconBg: "bg-forest",
    number: "01",
  },
  {
    title: "Digital Monitoring & Reporting",
    description:
      "Real-time pest activity tracking with transparent reporting dashboards, so you always know the status of your property.",
    icon: MonitorSmartphone,
    gradient: "from-amber/10 to-amber/5",
    iconBg: "bg-amber",
    number: "02",
  },
  {
    title: "Training & Compliance",
    description:
      "Empowering your team with pest awareness training and ensuring your facility meets all health and safety regulatory standards.",
    icon: GraduationCap,
    gradient: "from-forest-dark/10 to-forest-dark/5",
    iconBg: "bg-forest-dark",
    number: "03",
  },
];

export function PillarsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-light/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber/5 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Core Approach"
          title="Three Pillars of Excellence"
          subtitle="Combining science, technology, and education for comprehensive pest management that delivers real results."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative hover-card-premium rounded-2xl bg-white p-8 lg:p-10"
            >
              {/* Number watermark */}
              <span className="absolute top-6 right-8 text-7xl font-black text-forest/[0.04] select-none">
                {pillar.number}
              </span>

              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${pillar.iconBg} shadow-lg`}>
                <pillar.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-forest transition-colors">
                {pillar.title}
              </h3>
              <p className="text-slate-mid leading-relaxed mb-6">
                {pillar.description}
              </p>

              <div className="flex items-center text-sm font-semibold text-forest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                Learn more <ArrowRight className="ml-1.5 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
