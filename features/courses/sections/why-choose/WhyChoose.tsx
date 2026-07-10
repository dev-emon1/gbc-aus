import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { StudyArea } from "../../types";

type Props = {
  studyArea: StudyArea;
};

export default function WhyChoose({ studyArea }: Props) {
  if (!studyArea.whyChoose?.length) {
    return null;
  }

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className={CONTAINER}>
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
              Why Study At GBC
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Learn With Confidence,
              <br />
              Graduate With Purpose.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Experience practical education, nationally recognised
              qualifications and industry-focused learning designed to prepare
              you for long-term career success.
            </p>
          </div>
        </MotionReveal>

        <div className="mt-20 space-y-5">
          {studyArea.whyChoose.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.08}>
              <article
                className="
                  group
                  grid
                  gap-8
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  transition-all
                  duration-300
                  hover:border-primary/20
                  hover:bg-primary/[0.02]
                  lg:grid-cols-[90px_1fr]
                "
              >
                <div
                  className="
                    text-5xl
                    font-bold
                    text-slate-200
                    transition
                    duration-300
                    group-hover:text-primary
                  "
                >
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
