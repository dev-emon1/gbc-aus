import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Award, BookOpen } from "lucide-react";

import { StudyArea } from "../../types";

type Props = {
  studyArea: StudyArea;
};

export default function StudyAreaCard({ studyArea }: Props) {
  return (
    <Link
      href={`/courses/${studyArea.slug}`}
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
        hover:shadow-[0_30px_80px_rgba(15,23,42,.14)]
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <Image
          src={studyArea.image}
          alt={studyArea.title}
          width={800}
          height={550}
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

        {/* Featured */}

        {studyArea.featured && (
          <div
            className="
              absolute
              left-5
              top-5
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <Award size={15} className="text-[#B7D531]" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Featured
            </span>
          </div>
        )}

        {/* Programs */}

        <div
          className="
            absolute
            bottom-5
            left-5
            rounded-2xl
            border
            border-white/15
            bg-white/10
            px-5
            py-3
            backdrop-blur-xl
          "
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/75">
            Programs
          </p>

          <h3 className="mt-1 text-2xl font-bold text-white">
            {studyArea.programs.length}
          </h3>
        </div>
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center gap-2">
          <BookOpen size={16} className="text-[#D84D95]" />

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D84D95]">
            Study Area
          </span>
        </div>

        <h3
          className="
            mt-4
            text-2xl
            font-bold
            leading-snug
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-[#D84D95]
          "
        >
          {studyArea.title}
        </h3>

        <p
          className="
            mt-5
            line-clamp-3
            text-[15px]
            leading-7
            text-slate-600
          "
        >
          {studyArea.overview.description}
        </p>

        {/* Highlights */}

        <div className="mt-6 flex flex-wrap gap-2">
          {studyArea.overview.highlights.slice(0, 2).map((item) => (
            <span
              key={item}
              className="
                  rounded-full
                  bg-slate-100
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-slate-700
                "
            >
              {item}
            </span>
          ))}
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
            pt-7
          "
        >
          <span className="font-semibold text-slate-900">
            Explore Study Area
          </span>

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#D84D95]
              text-white
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:shadow-lg
            "
          >
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
}
