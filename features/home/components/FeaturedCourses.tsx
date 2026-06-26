import Link from "next/link";

import CourseCard from "./CourseCard";
import { CONTAINER } from "@/constants/layout";

import {
  MotionReveal,
  MotionStagger,
  MotionHover,
} from "@/components/shared/animations";

const courses = [
  {
    title: "Information Technology",
    duration: "52 Weeks",
    category: "Technology",
    image: "/images/courses/it.jpg",
    href: "/courses/information-technology",
  },
  {
    title: "Human Resource Management",
    duration: "52 Weeks",
    category: "Management",
    image: "/images/courses/hrm.jpg",
    href: "/courses/human-resource-management",
  },
  {
    title: "Business Management",
    duration: "52 Weeks",
    category: "Business",
    image: "/images/courses/business.jpg",
    href: "/courses/business-management",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="bg-white py-28">
      <div className={CONTAINER}>
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <MotionReveal>
              <span className="inline-flex rounded-full bg-[#D84D95]/10 px-5 py-2 text-sm font-medium text-[#D84D95]">
                Explore Courses
              </span>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
                Find Your Future Course
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Industry-focused qualifications designed to prepare students for
                successful careers and global opportunities.
              </p>
            </MotionReveal>
          </div>

          <MotionReveal delay={0.3}>
            <Link
              href="/courses"
              className="font-semibold text-[#D84D95] transition-colors hover:text-[#c83d87]"
            >
              View All Courses →
            </Link>
          </MotionReveal>
        </div>

        {/* Cards */}
        <MotionStagger className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course, index) => (
            <MotionReveal key={course.title} delay={index * 0.12}>
              <MotionHover scale={1.015} y={-8}>
                <CourseCard {...course} />
              </MotionHover>
            </MotionReveal>
          ))}
        </MotionStagger>
        {/* CTA Banner */}
        <MotionReveal delay={0.45}>
          <div className="mt-24 overflow-hidden rounded-[40px] bg-gradient-to-r from-[#D84D95] via-[#cf458c] to-[#c83d87] p-10 text-white md:p-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <MotionReveal delay={0.1}>
                  <h3 className="text-3xl font-bold md:text-5xl">
                    Not Sure Which Course Is Right For You?
                  </h3>
                </MotionReveal>

                <MotionReveal delay={0.2}>
                  <p className="mt-4 text-lg leading-relaxed text-white/90">
                    Speak with our experienced advisors and get personalised
                    guidance for your education and career pathway.
                  </p>
                </MotionReveal>
              </div>

              <MotionReveal delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <MotionHover scale={1.04} y={-4}>
                    <Link
                      href="/meet-an-advisor"
                      className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-[#D84D95] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(255,255,255,0.35)]"
                    >
                      Meet an Advisor
                    </Link>
                  </MotionHover>

                  <MotionHover scale={1.04} y={-4}>
                    <Link
                      href="/courses"
                      className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#D84D95]"
                    >
                      Explore Courses
                    </Link>
                  </MotionHover>
                </div>
              </MotionReveal>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
