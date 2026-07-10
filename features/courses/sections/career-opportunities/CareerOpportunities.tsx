import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { StudyArea } from "../../types";

import CareerOpportunityCard from "./CareerOpportunityCard";

type Props = {
  studyArea: StudyArea;
};

export default function CareerOpportunities({ studyArea }: Props) {
  if (!studyArea.careerPaths?.length) {
    return null;
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-24
        lg:py-32
      "
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/5 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary/10 blur-[140px]" />

      <div className={`${CONTAINER} relative`}>
        {/* Header */}

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
              Career Opportunities
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-bold
                leading-tight
                text-slate-900
                lg:text-5xl
              "
            >
              Build A Successful Career
              <br />
              In Australia's Automotive Industry
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
              Graduate with practical skills and nationally recognised
              qualifications that prepare you for a wide range of career
              opportunities across Australia's automotive sector.
            </p>
          </div>
        </MotionReveal>

        {/* Grid */}

        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-2
          "
        >
          {studyArea.careerPaths.map((career, index) => (
            <MotionReveal key={career.title} delay={index * 0.08}>
              <CareerOpportunityCard
                index={index}
                title={career.title}
                description={career.description}
              />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
