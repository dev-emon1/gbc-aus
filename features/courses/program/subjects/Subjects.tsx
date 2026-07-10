import { BookOpenText } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { Program } from "../../types";

import SubjectItem from "./SubjectItem";
import { SectionHeader } from "@/components/shared/sections/section-header";

type Props = {
  program: Program;
};

export default function Subjects({ program }: Props) {
  return (
    <section id="subjects" className="relative overflow-hidden bg-white py-24">
      <div className="absolute -left-44 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute -right-44 bottom-0 h-80 w-80 rounded-full bg-[#B7D531]/10 blur-[140px]" />

      <div className={CONTAINER}>
        <SectionHeader
          badge="Subjects"
          title="Units You'll Study"
          description="This qualification includes nationally recognised units designed to build your practical knowledge and technical expertise."
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-5 lg:grid-cols-2">
          {program.subjects.map((subject, index) => (
            <MotionReveal key={subject.code} delay={index * 0.02}>
              <SubjectItem code={subject.code} title={subject.title} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
