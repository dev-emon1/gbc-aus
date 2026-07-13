import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  BriefcaseBusiness,
  School,
  Trophy,
} from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

const STEPS = [
  {
    icon: School,
    title: "Study at George Brown College",
    description:
      "Complete your nationally recognised vocational qualification at GBC.",
  },
  {
    icon: BookOpen,
    title: "Graduate Successfully",
    description:
      "Successfully complete your course and become eligible for articulation pathways.",
  },
  {
    icon: GraduationCap,
    title: "Transfer to University",
    description:
      "Receive advanced standing towards selected Southern Cross University degrees.",
  },
  {
    icon: Trophy,
    title: "Earn Your Degree",
    description:
      "Graduate with an internationally recognised Bachelor qualification.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Build Your Career",
    description:
      "Launch your professional career with industry-ready knowledge and qualifications.",
  },
];

export default function StudyJourney() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[160px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D84D95]">
              Study Journey
            </span>

            <h2 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
              Your Learning Pathway
            </h2>

            <p className="mt-7 text-lg leading-9 text-slate-600">
              Follow a structured pathway from vocational education to
              university and graduate with globally recognised qualifications.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-20 grid gap-8 lg:grid-cols-5">
          {STEPS.map((step, index) => {
            const Icon = step.icon;

            return (
              <MotionReveal key={step.title} delay={index * 0.08}>
                <div className="relative h-full rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95]">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {step.description}
                  </p>

                  {index !== STEPS.length - 1 && (
                    <ArrowRight className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-[#D84D95] xl:block" />
                  )}
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
