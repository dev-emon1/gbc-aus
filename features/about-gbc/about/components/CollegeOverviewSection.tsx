import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import CollegeOverviewContent from "./CollegeOverviewContent";
import CollegeOverviewStats from "./CollegeOverviewStats";

import { ABOUT_DATA } from "../data";

export default function CollegeOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Glow */}

      <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#D84D95]/6 blur-[140px]" />

      <div className="absolute -right-28 bottom-20 h-80 w-80 rounded-full bg-[#B7D531]/8 blur-[140px]" />

      <div className={CONTAINER}>
        <MotionStagger className="grid items-center gap-20 lg:grid-cols-[1fr_380px]">
          <MotionReveal>
            <CollegeOverviewContent data={ABOUT_DATA.overview} />
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <CollegeOverviewStats data={ABOUT_DATA.overview.stats} />
          </MotionReveal>
        </MotionStagger>
      </div>
    </section>
  );
}
