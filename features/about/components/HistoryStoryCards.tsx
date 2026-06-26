import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";

import {
  MotionHover,
  MotionReveal,
  MotionStagger,
} from "@/components/shared/animations";

const stories = [
  {
    icon: GraduationCap,

    title: "Academic Excellence",

    description:
      "Delivering quality education through experienced educators, practical teaching methods and student-centred learning.",
  },

  {
    icon: BriefcaseBusiness,

    title: "Industry Focused Learning",

    description:
      "Programs developed with industry relevance to prepare graduates with practical knowledge and workplace-ready skills.",
  },

  {
    icon: Award,

    title: "Student Success",

    description:
      "Supporting students with an engaging learning environment that encourages personal growth, confidence and career success.",
  },
];

export default function HistoryStoryCards() {
  return (
    <MotionStagger className="space-y-6">
      {stories.map((story, index) => {
        const Icon = story.icon;

        return (
          <MotionReveal key={story.title} delay={index * 0.12}>
            <MotionHover scale={1.015} y={-4}>
              <div className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-[#D84D95]/20 hover:shadow-[0_30px_70px_rgba(15,23,42,0.08)]">
                {/* Background Glow */}

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D84D95]/6 blur-3xl transition-all duration-500 group-hover:bg-[#D84D95]/10" />

                <div className="relative z-10 flex gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-[#D84D95]/10 transition-all duration-300 group-hover:bg-[#D84D95]">
                    <Icon className="h-8 w-8 text-[#D84D95] transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {story.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {story.description}
                    </p>
                  </div>
                </div>
              </div>
            </MotionHover>
          </MotionReveal>
        );
      })}

      {/* Acknowledgement */}

      <MotionReveal delay={0.4}>
        <div className="rounded-[30px] border border-slate-200 bg-gradient-to-br from-white via-[#FFF9FC] to-slate-50 p-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
          <span className="inline-flex rounded-full bg-[#D84D95]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
            Acknowledgement
          </span>

          <p className="mt-5 leading-8 text-slate-600">
            George Brown College respectfully acknowledges the Traditional
            Custodians of the land and pays respect to Elders past, present and
            emerging.
          </p>
        </div>
      </MotionReveal>
    </MotionStagger>
  );
}
