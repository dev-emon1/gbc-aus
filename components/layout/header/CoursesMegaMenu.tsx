import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { COURSE_NAVIGATION } from "@/constants/course-navigation";

const sortedCourses = [...COURSE_NAVIGATION].sort((a, b) =>
  a.title.localeCompare(b.title),
);

export default function CoursesMegaMenu() {
  return (
    <div className="invisible absolute left-1/2 top-full z-50 w-[620px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 xl:w-[680px] 2xl:w-[740px]">
      <div className="overflow-hidden rounded-[24px] border border-slate-200/70 bg-white shadow-[0_18px_45px_rgba(15,23,42,.08)] backdrop-blur-xl">
        {/* Header */}

        <header className="border-b border-slate-100 px-6 py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D84D95]">
                Find Your Future
              </span>

              <h3 className="mt-1 text-[21px] font-semibold tracking-[-0.03em] text-slate-900">
                Find Your Courses
              </h3>

              <p className="mt-1 max-w-[340px] text-[11px] leading-[18px] text-slate-500">
                Explore nationally recognised study areas offered at George
                Brown College.
              </p>
            </div>

            <span className="inline-flex shrink-0 items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-600">
              {COURSE_NAVIGATION.length} Courses
            </span>
          </div>
        </header>

        {/* Course List */}

        <div className="max-h-[380px] overflow-y-auto p-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300 hover:[&::-webkit-scrollbar-thumb]:bg-slate-400">
          <div className="grid grid-cols-2 gap-x-5 gap-y-0.5">
            {sortedCourses.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.slug}`}
                className="group/item flex items-center justify-between rounded-lg px-3 py-2 transition-all duration-200 ease-out hover:bg-slate-50"
              >
                <div className="flex min-w-0 items-center gap-2.5">
                  {/* Accent */}

                  <span className="h-[2px] w-3 shrink-0 rounded-full bg-slate-300 transition-all duration-300 group-hover/item:w-5 group-hover/item:bg-[#D84D95]" />

                  {/* Title */}

                  <span className="truncate text-[13px] font-medium tracking-[-0.02em] text-slate-800 transition-colors duration-200 group-hover/item:text-[#D84D95]">
                    {course.title}
                  </span>
                </div>

                {/* Arrow */}

                <ArrowRight
                  size={13}
                  strokeWidth={2}
                  className="ml-3 shrink-0 -translate-x-1 opacity-0 text-slate-400 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100 group-hover/item:text-[#D84D95]"
                />
              </Link>
            ))}
          </div>
        </div>
        {/* Footer */}

        <footer className="flex items-center justify-between border-t border-slate-100 px-6 py-4">
          <p className="text-[11px] text-slate-500">
            Nationally recognised qualifications.
          </p>

          <Link
            href="/courses"
            className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-[#D84D95] transition-colors duration-200 hover:text-[#c73f85]"
          >
            View All Courses
            <ArrowRight
              size={14}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </footer>
      </div>
    </div>
  );
}
