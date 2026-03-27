import { SectionHeading } from "@/components/shared/section-heading";
import { PillarCard } from "@/components/shared/pillar-card";

const pillars = [
  {
    title: "Integrated Pest Management",
    description:
      "Science-driven pest control that prioritizes prevention, uses targeted treatments, and minimizes environmental impact for lasting results.",
    icon: "Shield",
  },
  {
    title: "Digital Monitoring & Reporting",
    description:
      "Real-time pest activity tracking with transparent reporting dashboards, so you always know the status of your property.",
    icon: "MonitorSmartphone",
  },
  {
    title: "Training & Compliance",
    description:
      "Empowering your team with pest awareness training and ensuring your facility meets all health and safety regulatory standards.",
    icon: "GraduationCap",
  },
];

export function PillarsSection() {
  return (
    <section className="py-20 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Core Approach"
          subtitle="Three pillars that drive everything we do — combining science, technology, and education for comprehensive pest management."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
