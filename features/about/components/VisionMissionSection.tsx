import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { ABOUT_DATA } from "../data";

import VisionMissionContent from "./VisionMissionContent";
import VisionMissionCard from "./VisionMissionCard";

export default function VisionMissionSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FCFCFD] to-white py-28">
      {/* Background Glow */}

      <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-[#D84D95]/6 blur-[140px]" />

      <div className="absolute -right-24 bottom-24 h-96 w-96 rounded-full bg-[#B7D531]/8 blur-[160px]" />

      <div className={CONTAINER}>
        <MotionStagger className="mx-auto max-w-6xl">
          <VisionMissionContent data={ABOUT_DATA.visionMission} />

          <div className="mt-16 space-y-8">
            <MotionReveal delay={0.12}>
              <VisionMissionCard
                type="vision"
                data={ABOUT_DATA.visionMission.vision}
              />
            </MotionReveal>

            <MotionReveal delay={0.24}>
              <VisionMissionCard
                type="mission"
                data={ABOUT_DATA.visionMission.mission}
              />
            </MotionReveal>
          </div>
        </MotionStagger>
      </div>
    </section>
  );
}
