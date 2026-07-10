import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  GraduationCap,
  MapPin,
} from "lucide-react";

import { Program, StudyArea } from "../../types";

type Props = {
  studyArea: StudyArea;
  program: Program;
};

export default function ProgramCard({ studyArea, program }: Props) {
  return (
    <Link
      href={`/courses/${studyArea.slug}/${program.slug}`}
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#D84D95]/20
        hover:shadow-[0_35px_90px_rgba(15,23,42,.14)]
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <Image
          src={program.heroImage}
          alt={program.title}
          width={900}
          height={600}
          className="
            aspect-[16/10]
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Level */}

        <div
          className="
            absolute
            left-5
            top-5
            rounded-full
            border
            border-white/20
            bg-white/10
            px-4
            py-2
            backdrop-blur-xl
          "
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
            {program.level}
          </span>
        </div>

        {/* Code */}

        <div
          className="
            absolute
            bottom-5
            left-5
            rounded-xl
            border
            border-white/20
            bg-white/10
            px-4
            py-2
            backdrop-blur-xl
          "
        >
          <span className="text-sm font-semibold text-white">
            {program.code}
          </span>
        </div>
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-2xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-[#D84D95]">
          {program.title}
        </h3>

        <p
          className="
            mt-5
            min-h-[84px]
            text-[15px]
            leading-7
            text-slate-600
          "
        >
          {program.shortDescription ||
            "Build practical knowledge and industry-ready skills through nationally recognised vocational training designed for future employment opportunities."}
        </p>

        {/* Quick Facts */}

        <div className="mt-8 grid grid-cols-2 gap-3">
          <QuickFact
            icon={<Clock3 size={16} />}
            label="Duration"
            value={program.quickFacts.duration || "TBA"}
          />

          <QuickFact
            icon={<MapPin size={16} />}
            label="Campus"
            value={program.quickFacts.campus}
          />

          <QuickFact
            icon={<GraduationCap size={16} />}
            label="Study Mode"
            value={program.quickFacts.studyMode}
          />

          <QuickFact
            icon={<GraduationCap size={16} />}
            label="AQF"
            value={program.quickFacts.aqfLevel}
          />
        </div>

        {/* Footer */}

        <div
          className="
            mt-auto
            flex
            items-center
            justify-between
            border-t
            border-slate-100
            pt-8
          "
        >
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Explore Qualification
            </p>

            <p className="mt-1 font-semibold text-slate-900">View Program</p>
          </div>

          <div
            className="
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    bg-[#D84D95]
    text-white
    shadow-[0_10px_25px_rgba(216,77,149,.25)]
    ring-4
    ring-[#D84D95]/10
    transition-all
    duration-300
    group-hover:-translate-y-1
    group-hover:scale-110
    group-hover:shadow-[0_18px_35px_rgba(216,77,149,.35)]
  "
          >
            <ArrowUpRight size={18} strokeWidth={2.4} />
          </div>
        </div>

        {/* Bottom Progress */}

        <div
          className="
            mt-6
            h-1
            w-full
            overflow-hidden
            rounded-full
            bg-slate-100
          "
        >
          <div
            className="
              h-full
              w-0
              rounded-full
              bg-gradient-to-r
              from-[#D84D95]
              to-[#B7D531]
              transition-all
              duration-500
              group-hover:w-full
            "
          />
        </div>
      </div>
    </Link>
  );
}

type QuickFactProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function QuickFact({ icon, label, value }: QuickFactProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-100
        bg-slate-50
        p-4
      "
    >
      <div className="flex items-center gap-2 text-[#D84D95]">
        {icon}

        <span className="text-xs font-semibold uppercase tracking-[0.16em]">
          {label}
        </span>
      </div>

      <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">
        {value}
      </p>
    </div>
  );
}
