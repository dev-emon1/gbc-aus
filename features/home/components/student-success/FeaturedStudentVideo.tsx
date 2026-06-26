"use client";

import YouTube from "react-youtube";

import { MotionHover, MotionReveal } from "@/components/shared/animations";

type Props = {
  student: any;
  onVideoEnd: () => void;
};

export default function FeaturedStudentVideo({ student, onVideoEnd }: Props) {
  return (
    <MotionReveal>
      <MotionHover scale={1.01} y={-6}>
        <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_35px_90px_rgba(15,23,42,0.12)]">
          {/* Video */}
          <div className="relative aspect-video overflow-hidden bg-slate-100">
            <YouTube
              videoId={student.videoId}
              onEnd={onVideoEnd}
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 1,
                  rel: 0,
                  modestbranding: 1,
                },
              }}
              className="h-full w-full"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-7">
            <MotionReveal delay={0.1}>
              <span className="inline-flex rounded-full bg-[#D84D95]/10 px-4 py-2 text-xs font-semibold text-[#D84D95]">
                Student Success Story
              </span>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <h3 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
                {student.name}
              </h3>
            </MotionReveal>

            <MotionReveal delay={0.3}>
              <p className="mt-2 text-base text-slate-500">{student.course}</p>
            </MotionReveal>
          </div>
        </div>
      </MotionHover>
    </MotionReveal>
  );
}
