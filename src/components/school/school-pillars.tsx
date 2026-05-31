import { SectionHeading } from "@/components/shared/section-heading";
import {
  FlaskConical,
  Globe2,
  Mic,
  BookOpen,
  Leaf,
  GraduationCap,
  CalendarClock,
  Lightbulb,
} from "lucide-react";

const pillars = [
  {
    title: "IAL",
    description:
      "The School of IPM strengthens our Integrated Automated Learning by advancing research projects, internships, and educational programs — all aimed at a healthier, more resilient ecosystem.",
    icon: FlaskConical,
    number: "01",
  },
  {
    title: "Collaborations",
    description:
      "We maintain top-tier learning quality through strategic global collaborations and strong partnerships with leading national institutes.",
    icon: Globe2,
    number: "02",
  },
  {
    title: "IPM Studio",
    description:
      "The IPM Studio delivers impactful webinars and podcasts, driving thought leadership and innovation across the pest-management industry.",
    icon: Mic,
    number: "03",
  },
  {
    title: "Pest Library",
    description:
      "An expert-curated database on pests serving as a key educational tool — enabling professionals and clients alike to make informed decisions.",
    icon: BookOpen,
    number: "04",
  },
];

const featuring = [
  {
    title: "Green Solutions",
    description:
      "Our R&D drives sustainability by advancing organic, low-impact pest-management tactics.",
    icon: Leaf,
  },
  {
    title: "eSchool",
    description:
      "An accessible digital platform where every member can learn and earn badges effortlessly.",
    icon: GraduationCap,
  },
  {
    title: "Pest Alert",
    description:
      "The Annual Pakistan Pest Activity Calendar keeps you ahead in managing seasonal pest challenges.",
    icon: CalendarClock,
  },
  {
    title: "Info Bytes",
    description:
      "Short, engaging snippets of knowledge to boost awareness on the topics that matter.",
    icon: Lightbulb,
  },
];

export function SchoolPillars() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest-light/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber/5 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Four Pillars"
          title="What the School of IPM Stands On"
          subtitle="Research, partnership, media, and a living knowledge base — the four pillars that keep our education world-class and our community informed."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative hover-card-premium rounded-2xl bg-white p-8"
            >
              <span className="absolute top-5 right-6 text-6xl font-black text-forest/[0.04] select-none">
                {pillar.number}
              </span>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest shadow-lg shadow-forest/20">
                <pillar.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-forest transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-mid leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featuring */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-forest-light text-forest">
              Acquire Expertise
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
              Featuring Our Programs
            </h3>
            <p className="mt-4 max-w-2xl mx-auto text-slate-mid leading-relaxed">
              Established in 2018, the School of IPM at Urban Pest Solution offers
              top-tier, activity-based trainings and workshops led by highly
              qualified professionals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuring.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-black/5 bg-off-white p-7 text-center hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-forest to-forest-dark shadow-md shadow-forest/20">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-base font-bold text-charcoal mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-mid leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
