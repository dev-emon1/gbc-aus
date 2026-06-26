"use client";

import { Play } from "lucide-react";

import { MotionHover, MotionReveal } from "@/components/shared/animations";

type Props = {
  student: {
    id: number;
    name: string;
    course: string;
    image: string;
  };
  active?: boolean;
  onClick: () => void;
};

export default function StudentVideoCard({
  student,
  active = false,
  onClick,
}: Props) {
  return (
    <MotionReveal>
      <MotionHover scale={1.02} y={-6}>
        <button
          onClick={onClick}
          className={`group w-full overflow-hidden rounded-[28px] border bg-white text-left transition-all duration-500 ${
            active
              ? "border-[#D84D95] shadow-[0_25px_60px_rgba(216,77,149,0.18)]"
              : "border-slate-200 hover:border-[#D84D95]/20 hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
          }`}
        >
          {/* Image */}
          <div className="relative h-[280px] overflow-hidden">
            <img
              src={student.image}
              alt={student.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/15 to-transparent" />

            {/* Play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 ${
                  active
                    ? "bg-[#D84D95] text-white scale-110"
                    : "bg-white/90 text-[#D84D95] group-hover:scale-110"
                }`}
              >
                <Play fill="currentColor" className="ml-1 h-8 w-8" />
              </div>
            </div>

            {/* Active Badge */}
            {active && (
              <div className="absolute left-5 top-5">
                <span className="inline-flex rounded-full bg-[#D84D95] px-4 py-2 text-xs font-semibold text-white shadow-lg">
                  Playing
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#D84D95]">
              {student.name}
            </h3>

            <p className="mt-2 text-sm text-slate-500">{student.course}</p>
          </div>
        </button>
      </MotionHover>
    </MotionReveal>
  );
}
