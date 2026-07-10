import {
  BookOpen,
  CalendarDays,
  Clock3,
  Coffee,
  GraduationCap,
  MapPin,
  MonitorSmartphone,
  Timer,
} from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { SectionHeader } from "@/components/shared/sections/section-header";
import { CONTAINER } from "@/constants/layout";

import { Program } from "../../types";
import QuickFactCard from "./QuickFactCard";

type Props = {
  program: Program;
};

const FACTS = [
  {
    label: "Duration",
    value: (program: Program) => program.quickFacts.duration,
    icon: Clock3,
  },
  {
    label: "Study Mode",
    value: (program: Program) => program.quickFacts.studyMode,
    icon: MonitorSmartphone,
  },
  {
    label: "Campus",
    value: (program: Program) => program.quickFacts.campus,
    icon: MapPin,
  },
  {
    label: "AQF Level",
    value: (program: Program) => program.quickFacts.aqfLevel,
    icon: GraduationCap,
  },
  {
    label: "Hours Per Week",
    value: (program: Program) => program.quickFacts.hoursPerWeek,
    icon: Timer,
  },
  {
    label: "Intake",
    value: (program: Program) => program.quickFacts.intake,
    icon: CalendarDays,
  },
  {
    label: "Study Weeks",
    value: (program: Program) => program.quickFacts.studyWeeks,
    icon: BookOpen,
  },
  {
    label: "Break Duration",
    value: (program: Program) => program.quickFacts.breakDuration,
    icon: Coffee,
  },
];

export default function QuickFacts({ program }: Props) {
  return (
    <section
      id="quick-facts"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="absolute -left-44 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[130px]" />

      <div className="absolute -right-44 bottom-0 h-80 w-80 rounded-full bg-[#B7D531]/10 blur-[130px]" />

      <div className={CONTAINER}>
        <SectionHeader
          badge="Quick Facts"
          title="Everything You Need To Know"
          description="Explore the key information about this qualification including duration, study mode, campus, intake and academic level before you apply."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {FACTS.map((item, index) => (
            <MotionReveal key={item.label} delay={index * 0.05}>
              <QuickFactCard
                icon={item.icon}
                label={item.label}
                value={item.value(program)}
              />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
