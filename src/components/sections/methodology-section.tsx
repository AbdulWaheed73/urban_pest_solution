import { ProcessStep } from "@/components/shared/process-step";

const steps = [
  {
    title: "Assess",
    description:
      "Thorough evaluation including inspection and risk analysis to identify pest issues and understand the environment.",
    icon: "Search",
  },
  {
    title: "Implement",
    description:
      "Apply targeted controls based on a customized IPM plan tailored to the assessed risks, effectively addressing identified problems.",
    icon: "Wrench",
  },
  {
    title: "Review",
    description:
      "Monitor and review the effectiveness of the IPM plan, making necessary adjustments to achieve optimal results.",
    icon: "ClipboardCheck",
  },
];

export function MethodologySection() {
  return (
    <section className="py-20 bg-gradient-to-r from-forest-dark to-forest">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-white sm:text-4xl tracking-tight">
            A.I.R &mdash; Pathway to Sustainable Pest Management
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            We implement pest management using our carefully designed A.I.R
            approach, ensuring every aspect is executed with precision and
            excellence.
          </p>
        </div>

        <div className="relative grid gap-12 md:grid-cols-3">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-white/20" />

          {steps.map((step, i) => (
            <ProcessStep
              key={step.title}
              stepNumber={i + 1}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
