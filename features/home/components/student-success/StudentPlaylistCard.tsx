"use client";

import { Play } from "lucide-react";

import { MotionHover, MotionReveal } from "@/components/shared/animations";

type Props = {
  student: any;
  active: boolean;
  onClick: () => void;
};

export default function StudentPlaylistCard({
  student,
  active,
  onClick,
}: Props) {
  return (
    <MotionReveal>
      <MotionHover scale={1.015} y={-4}>
        <button
          onClick={onClick}
          className={`group flex w-full gap-4 overflow-hidden rounded-[24px] border bg-white p-3 text-left transition-all duration-300 ${
            active
              ? "border-[#D84D95] shadow-[0_18px_45px_rgba(216,77,149,0.18)]"
              : "border-slate-200 hover:border-[#D84D95]/20 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
          }`}
        >
          {/* Thumbnail */}
          <div className="relative h-24 w-40 shrink-0 overflow-hidden rounded-2xl">
            <img
              src={student.cover}
              alt={student.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 ${
                  active
                    ? "bg-[#D84D95] text-white"
                    : "bg-white/90 text-[#D84D95] group-hover:scale-110"
                }`}
              >
                <Play fill="currentColor" className="ml-0.5 h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <h4 className="line-clamp-2 text-base font-bold text-slate-900">
              {student.name}
            </h4>

            <p className="mt-1 text-sm text-slate-500">{student.course}</p>

            {active && (
              <span className="mt-3 inline-flex w-fit rounded-full bg-[#D84D95]/10 px-3 py-1 text-xs font-semibold text-[#D84D95]">
                Now Playing
              </span>
            )}
          </div>
        </button>
      </MotionHover>
    </MotionReveal>
  );
}
