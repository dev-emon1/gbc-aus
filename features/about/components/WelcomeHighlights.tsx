import {
  Award,
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";

import { MotionHover, MotionReveal } from "@/components/shared/animations";

const highlights = [
  "Industry Focused Learning",
  "Practical Education",
  "Experienced Educators",
  "Student Support",
  "Career Ready Programs",
];

export default function WelcomeHighlights() {
  return (
    <MotionReveal delay={0.15}>
      <MotionHover scale={1.015}>
        <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-br from-white via-[#FFF9FC] to-slate-50 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.06)]">
          {/* Glow */}

          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#D84D95]/8 blur-3xl" />

          <div className="relative z-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#D84D95]/10">
              <GraduationCap className="h-8 w-8 text-[#D84D95]" />
            </div>

            <h3 className="mt-6 text-3xl font-bold text-slate-900">
              George Brown College
            </h3>

            <p className="mt-3 leading-8 text-slate-600">
              A supportive learning environment designed to prepare students for
              academic success and professional careers.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D84D95]/10">
                    <Award className="h-4 w-4 text-[#D84D95]" />
                  </div>

                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-3">
                <BriefcaseBusiness className="h-5 w-5 text-[#D84D95]" />

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Established
                  </p>

                  <h4 className="mt-1 font-bold text-slate-900">2010</h4>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#B7D531]" />

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    Campus
                  </p>

                  <h4 className="mt-1 font-bold text-slate-900">Sydney</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionHover>
    </MotionReveal>
  );
}
