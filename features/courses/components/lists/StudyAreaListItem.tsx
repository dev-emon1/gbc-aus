import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, BookOpen, GraduationCap, MapPin } from "lucide-react";

import { StudyArea } from "../../types";

type Props = {
  studyArea: StudyArea;
};

export default function StudyAreaListItem({ studyArea }: Props) {
  return (
    <Link
      href={`/courses/${studyArea.slug}`}
      className="
        group
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#D84D95]/20
        hover:shadow-[0_30px_80px_rgba(15,23,42,.12)]
      "
    >
      <div className="grid lg:grid-cols-[340px_1fr]">
        {/* Image */}

        <div className="relative overflow-hidden">
          <Image
            src={studyArea.image}
            alt={studyArea.title}
            width={700}
            height={500}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

          <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Study Area
            </span>
          </div>
        </div>

        {/* Content */}

        <div className="flex flex-col p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#D84D95]">
                {studyArea.title}
              </h3>

              <p className="mt-5 text-[15px] leading-8 text-slate-600">
                {studyArea.overview.description}
              </p>
            </div>

            <div className="rounded-2xl bg-[#D84D95]/10 px-5 py-4 text-center">
              <p className="text-3xl font-bold text-[#D84D95]">
                {studyArea.programs.length}
              </p>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Programs
              </p>
            </div>
          </div>

          {/* Meta */}

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
              <BookOpen size={16} className="text-[#D84D95]" />

              <span className="text-sm font-medium text-slate-700">
                {studyArea.programs.length} Qualifications
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
              <MapPin size={16} className="text-[#D84D95]" />

              <span className="text-sm font-medium text-slate-700">
                Sydney Campus
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
              <GraduationCap size={16} className="text-[#D84D95]" />

              <span className="text-sm font-medium text-slate-700">
                Industry Focused
              </span>
            </div>
          </div>
          {/* Footer */}

          <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Explore Study Area
              </p>

              <h4 className="mt-2 text-lg font-semibold text-slate-900">
                View Programs
              </h4>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-[#D84D95] transition-all duration-300 group-hover:translate-x-1">
                Explore
              </span>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D84D95]/20 bg-white text-[#D84D95] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#D84D95] group-hover:text-white group-hover:shadow-xl">
                <ArrowUpRight size={18} strokeWidth={2.4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
