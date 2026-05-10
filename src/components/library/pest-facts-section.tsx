import { PestDetail } from "@/types";
import { Ruler, Eye, Utensils, Activity, Home, AlertTriangle, ShieldAlert, Wind } from "lucide-react";

export function PestFactsSection({ pest }: { pest: PestDetail }) {
  const facts = [
    { icon: Ruler, label: "Size", value: pest.size },
    { icon: Eye, label: "Appearance", value: pest.appearance },
    ...(pest.wings ? [{ icon: Wind, label: "Wings", value: pest.wings }] : []),
    { icon: Utensils, label: "Feeding", value: pest.feeding },
    { icon: Activity, label: "Behavior", value: pest.behavior },
    { icon: Home, label: "Habitat", value: pest.habitat },
  ];

  return (
    <section className="py-24 bg-off-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Identification & Biology — 2 cols */}
          <div className="lg:col-span-2">
            <div className="mb-10">
              <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-forest-light text-forest">
                Identification
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
                Know the {pest.name}
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-forest to-amber" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="hover-card-premium rounded-2xl bg-white p-6 border border-black/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-forest to-forest-dark shadow-md shadow-forest/20">
                      <fact.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-forest mb-1.5">
                        {fact.label}
                      </h3>
                      <p className="text-sm text-charcoal leading-relaxed">{fact.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Signs + Risks — 1 col */}
          <div className="space-y-6">
            {/* Signs of infestation */}
            <div
              className="relative overflow-hidden rounded-2xl p-7 text-white shadow-xl"
              style={{ background: "linear-gradient(135deg, #1A1F71 0%, #2E3692 100%)" }}
            >
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-amber/20 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber/20 backdrop-blur-sm border border-amber/30">
                    <AlertTriangle className="h-5 w-5 text-amber" />
                  </div>
                  <h3 className="text-lg font-extrabold">Signs of Infestation</h3>
                </div>
                <ul className="space-y-3">
                  {pest.signs.map((sign, i) => (
                    <li key={i} className="flex gap-3 text-sm text-white/85 leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber shrink-0" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Health risks */}
            <div className="rounded-2xl p-7 bg-white border border-rose-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-red-600 shadow-md shadow-rose-500/20">
                  <ShieldAlert className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-extrabold text-charcoal">Health & Property Risks</h3>
              </div>
              <p className="text-sm text-charcoal/80 leading-relaxed">{pest.healthRisks}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
