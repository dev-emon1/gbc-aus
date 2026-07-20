import { CheckCircle2, FileText, Mail } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";

const STEPS = [
  {
    icon: FileText,
    title: "Choose Your Application Form",
    description:
      "Select the correct application form based on your age and admission requirements.",
  },

  {
    icon: CheckCircle2,
    title: "Complete the Application",
    description:
      "Fill in all required information and prepare the supporting documents requested by the admissions team.",
  },

  {
    icon: Mail,
    title: "Submit via Email",
    description:
      "Email your completed application form and supporting documents to our admissions office for assessment.",
  },
];

export default function ApplicationProcess() {
  return (
    <MotionReveal>
      <section className="mt-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex rounded-full bg-[#D84D95]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D84D95]">
            Simple Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Your Application Journey
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Applying to George Brown College is simple. Follow these three steps
            to begin your admission journey.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-[28px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-2 hover:border-[#D84D95]/20"
              >
                <div className="absolute right-6 top-6 text-5xl font-black text-slate-100">
                  0{index + 1}
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95]">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </MotionReveal>
  );
}
