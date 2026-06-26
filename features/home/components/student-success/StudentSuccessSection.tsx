"use client";

import { useState } from "react";

import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionHover } from "@/components/shared/animations";

import FeaturedStudentVideo from "./FeaturedStudentVideo";
import StudentPlaylistCard from "./StudentPlaylistCard";
import StudentStats from "./StudentStats";

import { students } from "./student-data";

export default function StudentSuccessSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStudent = students[activeIndex];

  const handleNextVideo = () => {
    setActiveIndex((prev) => (prev === students.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-32">
      <div className={CONTAINER}>
        {/* Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <MotionReveal>
            <span className="inline-flex rounded-full bg-[#D84D95]/10 px-5 py-2 text-sm font-medium text-[#D84D95]">
              Student Success Stories
            </span>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-6xl">
              Real Stories.
              <br />
              Real Outcomes.
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Discover how GBC students transformed their future through
              practical education and industry pathways.
            </p>
          </MotionReveal>
        </div>

        {/* Layout */}

        <div className="grid gap-8 xl:grid-cols-[1.7fr_420px]">
          {/* Featured Video */}

          <MotionReveal delay={0.25}>
            <FeaturedStudentVideo
              student={activeStudent}
              onVideoEnd={handleNextVideo}
            />
          </MotionReveal>

          {/* Playlist */}

          <div className="flex max-h-[720px] flex-col gap-4 overflow-y-auto pr-2">
            {students.map((student, index) => (
              <MotionReveal key={student.id} delay={0.35 + index * 0.08}>
                <MotionHover scale={1.015} y={-4}>
                  <StudentPlaylistCard
                    student={student}
                    active={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                  />
                </MotionHover>
              </MotionReveal>
            ))}
          </div>
        </div>

        {/* Stats */}
        <MotionReveal delay={0.6}>
          <StudentStats />
        </MotionReveal>
      </div>
    </section>
  );
}
