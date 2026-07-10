import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import ProgramCard from "../../components/cards/ProgramCard";
import { StudyArea } from "../../types";

type Props = {
  studyArea: StudyArea;
};

export default function AvailablePrograms({ studyArea }: Props) {
  return (
    <section
      id="programs"
      className="
        relative
        overflow-hidden
        py-24
        lg:py-32
      "
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />

      <div
        className="
          absolute
          left-0
          top-0
          h-80
          w-80
          rounded-full
          bg-[#38BDF8]/8
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          right-0
          bottom-0
          h-80
          w-80
          rounded-full
          bg-[#D84D95]/8
          blur-[140px]
        "
      />

      <div className={`${CONTAINER} relative`}>
        <MotionReveal>
          <div className="max-w-3xl">
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
                tracking-[0.25em]
                text-[#D84D95]
              "
            >
              Available Programs
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-bold
                text-slate-900
                lg:text-5xl
              "
            >
              Choose Your Qualification
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              Select the nationally recognised qualification that best matches
              your career goals and study pathway.
            </p>
          </div>
        </MotionReveal>

        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {studyArea.programs.map((program, index) => (
            <MotionReveal key={program.id} delay={index * 0.08}>
              <ProgramCard studyArea={studyArea} program={program} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
