import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { COURSE_NAVIGATION } from "@/constants/course-navigation";

const sortedCourses = [...COURSE_NAVIGATION].sort((a, b) =>
  a.title.localeCompare(b.title),
);

const rows = [];

for (let i = 0; i < sortedCourses.length; i += 2) {
  rows.push(sortedCourses.slice(i, i + 2));
}

export default function CoursesMegaMenu() {
  return (
    <div
      className="
        invisible
        absolute
        left-1/2
        top-full
        z-50

        mt-4

        w-[720px]
        xl:w-[780px]
        2xl:w-[840px]

        max-w-[calc(100vw-40px)]

        -translate-x-1/2
        translate-y-2

        overflow-hidden

        rounded-[24px]
        border
        border-slate-200

        bg-white

        opacity-0

        shadow-[0_20px_55px_rgba(15,23,42,.08)]

        transition-all
        duration-300

        group-hover:visible
        group-hover:translate-y-0
        group-hover:opacity-100
      "
    >
      <div className="p-8">
        {/* Header */}

        <div className="mb-7">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D84D95]">
            FIND YOUR FUTURE
          </span>

          <div className="mt-3 flex items-end justify-between gap-4">
            <div>
              <h3 className="text-[32px] font-bold tracking-tight text-slate-900">
                Find Your Courses
              </h3>

              <p className="mt-2 max-w-md text-[15px] leading-7 text-slate-500">
                Explore nationally recognised study areas offered at George
                Brown College.
              </p>
            </div>

            <span className="rounded-full border border-slate-200 px-3 py-2 text-[11px] font-semibold text-slate-600">
              {COURSE_NAVIGATION.length} Courses
            </span>
          </div>
        </div>

        {/* Course List */}
        {/* Course List */}

        <div className="max-h-[430px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 hover:[&::-webkit-scrollbar-thumb]:bg-slate-400">
          <div className="space-y-1">
            {rows.map((row, index) => (
              <div key={index} className="grid grid-cols-2 gap-x-10">
                {row.map((course) => (
                  <Link
                    key={course.id}
                    href={`/courses/${course.slug}`}
                    className="group/item flex items-center justify-between rounded-xl px-4 py-3.5 transition-all duration-300 hover:bg-[#FCF8FA]"
                  >
                    <span className="text-[15px] font-semibold tracking-[-0.01em] text-slate-800 transition-colors duration-300 group-hover/item:text-[#D84D95]">
                      {course.title}
                    </span>

                    <ArrowRight
                      size={15}
                      className="shrink-0 text-slate-400 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:text-[#D84D95]"
                    />
                  </Link>
                ))}

                {row.length === 1 && <div />}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}

        <div
          className="
            mt-8

            flex
            items-center
            justify-between

            border-t
            border-slate-100

            pt-6
          "
        >
          <p className="text-sm text-slate-500">
            Nationally recognised qualifications.
          </p>

          <Link
            href="/courses"
            className="
              group

              inline-flex
              items-center
              gap-2

              text-[15px]
              font-semibold

              text-[#D84D95]
            "
          >
            View All Courses
            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
