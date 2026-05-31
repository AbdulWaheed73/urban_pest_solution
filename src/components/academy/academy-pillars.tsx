import { SectionHeading } from "@/components/shared/section-heading";
import {
  GraduationCap,
  Handshake,
  Radio,
  BookOpen,
  Leaf,
  MonitorPlay,
  CalendarRange,
  Lightbulb,
} from "lucide-react";

type Accent = "blue" | "green";

const accents: Record<
  Accent,
  { grad: string; glow: string; text: string; soft: string }
> = {
  blue: {
    grad: "linear-gradient(135deg, #2E3692 0%, #1A1F71 100%)",
    glow: "rgba(46, 54, 146, 0.45)",
    text: "text-forest",
    soft: "rgba(46, 54, 146, 0.10)",
  },
  green: {
    grad: "linear-gradient(135deg, #2D8B4E 0%, #1E6B3A 100%)",
    glow: "rgba(45, 139, 78, 0.45)",
    text: "text-amber-dark",
    soft: "rgba(45, 139, 78, 0.10)",
  },
};

const pillars: {
  title: string;
  description: string;
  icon: typeof GraduationCap;
  number: string;
  accent: Accent;
}[] = [
  {
    title: "Hands-On Training",
    description:
      "Activity-based workshops and field sessions that turn pest-management theory into practical, on-the-job skills for your team.",
    icon: GraduationCap,
    number: "01",
    accent: "green",
  },
  {
    title: "Industry Partnerships",
    description:
      "Strong ties with universities, food brands, and institutions keep our curriculum current and rooted in real-world practice.",
    icon: Handshake,
    number: "02",
    accent: "blue",
  },
  {
    title: "Knowledge Studio",
    description:
      "Webinars, talks, and shareable content that spread practical pest-management know-how across the industry and the public.",
    icon: Radio,
    number: "03",
    accent: "green",
  },
  {
    title: "Pest Library",
    description:
      "Our expert-curated database of pests — a living reference that helps teams and clients identify problems and act with confidence.",
    icon: BookOpen,
    number: "04",
    accent: "blue",
  },
];

const offerings: {
  title: string;
  description: string;
  icon: typeof Leaf;
  accent: Accent;
}[] = [
  {
    title: "Eco-First Methods",
    description:
      "Research-driven, low-impact techniques that control pests while protecting people and the environment.",
    icon: Leaf,
    accent: "green",
  },
  {
    title: "Online Learning",
    description:
      "Self-paced modules and resources your team can work through anytime, from anywhere.",
    icon: MonitorPlay,
    accent: "blue",
  },
  {
    title: "Seasonal Pest Calendar",
    description:
      "A year-round guide to Pakistan's pest activity, so you stay one step ahead of every season.",
    icon: CalendarRange,
    accent: "green",
  },
  {
    title: "Quick Tips",
    description:
      "Short, practical knowledge bites that build everyday pest awareness for staff and clients.",
    icon: Lightbulb,
    accent: "blue",
  },
];

export function AcademyPillars() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-off-white to-white" />
      <div className="absolute top-10 right-0 w-[480px] h-[480px] bg-forest-light/40 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber/[0.06] rounded-full blur-[110px]" />
      <div className="absolute inset-0 dot-pattern opacity-[0.02]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How We Teach"
          title="Built on Four Pillars"
          subtitle="Practical training, real partnerships, shared knowledge, and a living pest reference — the four foundations of the Urban Pest Academy."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const c = accents[pillar.accent];
            return (
              <div key={pillar.title} className="group relative h-full">
                <div className="relative h-full overflow-hidden rounded-3xl bg-white p-7 border border-black/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl">
                  {/* Top accent bar */}
                  <span
                    className="absolute top-0 left-0 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-full"
                    style={{ background: c.grad }}
                  />
                  {/* Big number */}
                  <span
                    className="absolute -top-2 right-3 text-7xl font-black select-none leading-none"
                    style={{ color: c.soft }}
                  >
                    {pillar.number}
                  </span>

                  {/* Icon with glow halo */}
                  <div className="relative mb-6 mt-2 w-fit">
                    <span
                      className="absolute inset-0 rounded-2xl blur-xl opacity-50 transition-opacity duration-300 group-hover:opacity-90"
                      style={{ background: c.glow }}
                    />
                    <div
                      className="relative flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                      style={{ background: c.grad, boxShadow: `0 10px 24px -8px ${c.glow}` }}
                    >
                      <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/25 to-transparent" />
                      <pillar.icon className="relative h-8 w-8 text-white" strokeWidth={1.75} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-charcoal mb-3">{pillar.title}</h3>
                  <p className="text-sm text-slate-mid leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Offerings */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-forest-light text-forest">
              What We Offer
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
              Programs &amp; Resources
            </h3>
            <p className="mt-4 max-w-2xl mx-auto text-slate-mid leading-relaxed">
              The Urban Pest Academy delivers top-tier, activity-based trainings,
              workshops, and resources led by experienced pest-management
              professionals.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-forest to-amber" />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((item) => {
              const c = accents[item.accent];
              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-7 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  {/* hover tint wash */}
                  <span
                    className="absolute inset-x-0 top-0 h-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: `linear-gradient(to bottom, ${c.soft}, transparent)` }}
                  />
                  <div className="relative mx-auto mb-5 w-fit">
                    <span
                      className="absolute inset-0 rounded-2xl blur-lg opacity-40 transition-opacity duration-300 group-hover:opacity-80"
                      style={{ background: c.glow }}
                    />
                    <div
                      className="relative flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
                      style={{ background: c.grad, boxShadow: `0 10px 24px -8px ${c.glow}` }}
                    >
                      <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/25 to-transparent" />
                      <item.icon className="relative h-7 w-7 text-white" strokeWidth={1.75} />
                    </div>
                  </div>
                  <h4 className="relative text-base font-bold text-charcoal mb-2">{item.title}</h4>
                  <p className="relative text-sm text-slate-mid leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}