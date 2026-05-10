import { PestDetail } from "@/types";
import { Search, Wrench, ClipboardCheck } from "lucide-react";

export function PestAirSection({ pest }: { pest: PestDetail }) {
  const steps = [
    {
      title: "Assess",
      description: pest.airTreatment.assess,
      icon: Search,
      color: "from-amber to-amber-dark",
    },
    {
      title: "Implement",
      description: pest.airTreatment.implement,
      icon: Wrench,
      color: "from-forest to-forest-dark",
    },
    {
      title: "Review",
      description: pest.airTreatment.review,
      icon: ClipboardCheck,
      color: "from-amber to-forest",
    },
  ];

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0e1240 0%, #1A1F71 40%, #1e2470 100%)",
      }}
    >
      <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-white/10 text-amber">
            Our Treatment Approach
          </span>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight">
            A.I.R. Framework for {pest.name}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/50">
            Every {pest.name.toLowerCase()} engagement follows our proven three-step methodology — tailored precisely to this pest.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-amber to-forest" />
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[48px] left-[16%] right-[16%] h-[2px]">
            <div className="h-full bg-gradient-to-r from-amber/40 via-white/20 to-forest/40 rounded-full" />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="relative flex flex-col items-center text-center group">
                <div className="relative mb-8">
                  <div className={`flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${step.color} shadow-2xl shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <span className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal border-4 border-forest-dark text-white text-sm font-bold shadow-lg">
                    {i + 1}
                  </span>
                </div>

                <div className="glass rounded-2xl p-6 w-full group-hover:bg-white/[0.12] transition-colors duration-500">
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
