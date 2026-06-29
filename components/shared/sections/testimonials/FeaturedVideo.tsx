"use client";

import YouTube from "react-youtube";

import { MotionHover, MotionReveal } from "@/components/shared/animations";

import { TestimonialVideo } from "./types";

type Props = {
  video: TestimonialVideo;

  badge?: string;

  onVideoEnd?: () => void;
};

export default function FeaturedVideo({
  video,
  badge = "Student Success Story",
  onVideoEnd,
}: Props) {
  return (
    <MotionReveal>
      <MotionHover scale={1.01} y={-6}>
        <div
          className="
            overflow-hidden
            rounded-[36px]
            border
            border-slate-200
            bg-white
            shadow-[0_25px_70px_rgba(15,23,42,.08)]
            transition-all
            duration-500
            hover:shadow-[0_35px_90px_rgba(15,23,42,.12)]
          "
        >
          {/* Video */}

          <div className="relative aspect-video overflow-hidden bg-slate-100">
            <YouTube
              videoId={video.videoId}
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

          <div className="p-8">
            <MotionReveal delay={0.1}>
              <span
                className="
                  inline-flex
                  rounded-full
                  bg-[#D84D95]/10
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#D84D95]
                "
              >
                {badge}
              </span>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <h3 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
                {video.name}
              </h3>
            </MotionReveal>

            <MotionReveal delay={0.3}>
              <p className="mt-2 text-base text-slate-500">{video.course}</p>
            </MotionReveal>

            {video.quote && (
              <MotionReveal delay={0.4}>
                <div className="mt-7 rounded-2xl bg-slate-50 p-6">
                  <p className="italic leading-8 text-slate-600">
                    "{video.quote}"
                  </p>
                </div>
              </MotionReveal>
            )}
          </div>
        </div>
      </MotionHover>
    </MotionReveal>
  );
}
