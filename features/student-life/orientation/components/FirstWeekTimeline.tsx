import {
  BookOpen,
  GraduationCap,
  Laptop,
  MapPinned,
  Users,
} from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { ORIENTATION_CONTENT } from "../data/orientation";

const ICONS = [Users, MapPinned, GraduationCap, Laptop, BookOpen];

export default function FirstWeekTimeline() {
  const section = ORIENTATION_CONTENT.timeline;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#D84D95]/5 blur-[130px]" />

      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#B7D531]/10 blur-[150px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Your Journey
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              {section.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {section.description}
            </p>
          </div>
        </MotionReveal>

        <div className="relative mx-auto mt-20 max-w-4xl">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-[#D84D95] via-[#B7D531] to-transparent" />

          <div className="space-y-10">
            {section.items.map((item, index) => {
              const Icon = ICONS[index] ?? BookOpen;

              return (
                <MotionReveal key={item.title} delay={index * 0.08}>
                  <div className="relative flex gap-6">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D84D95] text-white shadow-[0_10px_30px_rgba(216,77,149,.25)]">
                      <Icon size={24} />
                    </div>

                    <div className="flex-1 rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#D84D95]/20 hover:shadow-[0_20px_50px_rgba(15,23,42,.08)]">
                      <span className="inline-flex rounded-full bg-[#B7D531]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6E8E1D]">
                        Day {index + 1}
                      </span>

                      <h3 className="mt-4 text-2xl font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {getDescription(index)}
                      </p>
                    </div>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function getDescription(index: number) {
  const descriptions = [
    "Attend the official orientation session, meet our Student Services team and receive essential information.",

    "Explore classrooms, student facilities and key campus locations during your guided tour.",

    "Meet your trainers, classmates and gain an overview of your study program.",

    "Activate your student portal, email account and access online learning resources.",

    "Begin your classes with confidence and start your learning journey at George Brown College.",
  ];

  return descriptions[index];
}
