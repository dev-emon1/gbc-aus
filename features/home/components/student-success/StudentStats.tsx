"use client";

import CounterUp from "@/components/shared/animations/CounterUp";
import { MotionHover, MotionReveal } from "@/components/shared/animations";

const stats = [
  {
    value: 8000,
    suffix: "+",
    label: "Active Students",
  },
  {
    value: 95,
    suffix: "%",
    label: "Student Satisfaction",
  },
  {
    value: 50,
    suffix: "+",
    label: "Career Focused Courses",
  },
];

export default function StudentStats() {
  return (
    <div className="mt-20 grid gap-6 md:grid-cols-3">
      {stats.map((item, index) => (
        <MotionReveal key={item.label} delay={index * 0.12}>
          <MotionHover scale={1.02} y={-6}>
            <div className="group rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-500 hover:border-[#D84D95]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <h3 className="text-4xl font-bold text-[#D84D95]">
                <CounterUp end={item.value} suffix={item.suffix} />
              </h3>

              <p className="mt-3 text-slate-600 transition-colors duration-300 group-hover:text-slate-900">
                {item.label}
              </p>
            </div>
          </MotionHover>
        </MotionReveal>
      ))}
    </div>
  );
}
