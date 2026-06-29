"use client";

import { useState } from "react";

import { CONTAINER } from "@/constants/layout";

import { MotionHover, MotionReveal } from "@/components/shared/animations";

import FeaturedVideo from "./FeaturedVideo";
import PlaylistCard from "./PlaylistCard";
import VideoHeader from "./VideoHeader";
import VideoStats from "./VideoStats";

import { TestimonialsData, TestimonialsVariant } from "./types";

type Props = {
  data: TestimonialsData;

  variant?: TestimonialsVariant;
};

export default function TestimonialsSection({ data, variant = "home" }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeVideo = data.videos[activeIndex];

  const handleNextVideo = () => {
    setActiveIndex((prev) => (prev === data.videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className={
        variant === "home"
          ? "bg-gradient-to-b from-slate-50 to-white py-32"
          : "bg-white py-28"
      }
    >
      <div className={CONTAINER}>
        {/* Header */}

        <VideoHeader
          badge={data.badge}
          title={data.title}
          description={data.description}
        />

        {/* Layout */}

        <div className="grid gap-8 xl:grid-cols-[1.7fr_420px]">
          {/* Featured Video */}

          <MotionReveal delay={0.25}>
            <FeaturedVideo video={activeVideo} onVideoEnd={handleNextVideo} />
          </MotionReveal>

          {/* Playlist */}

          <div className="flex max-h-[720px] flex-col gap-4 overflow-y-auto pr-2">
            {data.videos.map((video, index) => (
              <MotionReveal key={video.id} delay={0.35 + index * 0.08}>
                <MotionHover scale={1.015} y={-4}>
                  <PlaylistCard
                    video={video}
                    active={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                  />
                </MotionHover>
              </MotionReveal>
            ))}
          </div>
        </div>

        {/* Stats */}

        {variant === "home" && (
          <MotionReveal delay={0.6}>
            <VideoStats stats={data.stats} />
          </MotionReveal>
        )}
      </div>
    </section>
  );
}
