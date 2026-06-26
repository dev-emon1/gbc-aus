import { CONTAINER } from "@/constants/layout";

import CampusHero from "./CampusHero";
import CampusCard from "./CampusCard";
import CampusFeatureCard from "./CampusFeatureCard";

import { MotionReveal, MotionHover } from "@/components/shared/animations";

import { campusCards, campusFeatures, campusHero } from "./campus-data";

export default function CampusExperience() {
  return (
    <section className="bg-white py-28">
      <div className={CONTAINER}>
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <MotionReveal>
            <span className="inline-flex rounded-full bg-[#D84D95]/10 px-5 py-2 text-sm font-medium text-[#D84D95]">
              Campus Experience
            </span>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
              Experience Student Life At GBC
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Learn, connect and grow in an environment designed to prepare
              students for academic and professional success.
            </p>
          </MotionReveal>
        </div>

        {/* Bento Layout */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Hero */}
          <div className="lg:col-span-7 lg:row-span-2">
            <MotionReveal delay={0.15}>
              <MotionHover scale={1.01} y={-4}>
                <CampusHero {...campusHero} />
              </MotionHover>
            </MotionReveal>
          </div>
          {/* Right Card 01 */}
          <div className="lg:col-span-5">
            <MotionReveal delay={0.3}>
              <MotionHover scale={1.015} y={-8}>
                <CampusCard
                  {...campusCards[0]}
                  className="h-full min-h-[297px]"
                />
              </MotionHover>
            </MotionReveal>
          </div>

          {/* Right Card 02 */}
          <div className="lg:col-span-5">
            <MotionReveal delay={0.45}>
              <MotionHover scale={1.015} y={-8}>
                <CampusCard
                  {...campusCards[1]}
                  className="h-full min-h-[297px]"
                />
              </MotionHover>
            </MotionReveal>
          </div>

          {/* Bottom Cards */}
          <div className="grid gap-6 lg:col-span-12 lg:grid-cols-3">
            {campusFeatures.map((feature, index) => (
              <MotionReveal key={feature.id} delay={0.6 + index * 0.12}>
                <MotionHover scale={1.015} y={-8}>
                  <CampusFeatureCard
                    title={feature.title}
                    image={feature.image}
                  />
                </MotionHover>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
