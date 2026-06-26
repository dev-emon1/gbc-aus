"use client";

import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionHover } from "@/components/shared/animations";

import ResourceCard from "./ResourceCard";
import { resources } from "./resource-data";

export default function ResourcesSection() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-28">
      <div className={CONTAINER}>
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <MotionReveal>
            <span className="inline-flex rounded-full bg-[#D84D95]/10 px-5 py-2 text-sm font-medium text-[#D84D95]">
              Resources & Downloads
            </span>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-6xl">
              Everything You Need
              <br />
              Before You Apply
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Access brochures, handbooks and useful information to help you
              choose the right study pathway.
            </p>
          </MotionReveal>
        </div>

        {/* Resource Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {resources.map((resource, index) => (
            <MotionReveal key={resource.id} delay={0.25 + index * 0.15}>
              <MotionHover scale={1.015} y={-8}>
                <ResourceCard {...resource} />
              </MotionHover>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
