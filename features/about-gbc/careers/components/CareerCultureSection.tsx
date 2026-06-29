import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { CONTAINER } from "@/constants/layout";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CAREER_DATA } from "../data";

export default function CareerCultureSection() {
  const { culture } = CAREER_DATA;

  const values = [
    "Inclusive Workplace",
    "Student First Mindset",
    "Professional Growth",
    "Collaborative Environment",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className={CONTAINER}>
        <MotionStagger>
          <MotionReveal>
            <div className="text-center">
              <span className="inline-flex rounded-full border border-[#D84D95]/15 bg-[#D84D95]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                {culture.badge}
              </span>

              <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
                {culture.title}
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                {culture.description}
              </p>
            </div>
          </MotionReveal>

          <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
            {/* Image */}

            <MotionReveal delay={0.15}>
              <div className="relative overflow-hidden rounded-[36px]">
                <Image
                  src={culture.image}
                  alt={culture.title}
                  width={700}
                  height={700}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
              </div>
            </MotionReveal>

            {/* Content */}

            <MotionReveal delay={0.25}>
              <div>
                <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-10">
                  <h3 className="text-3xl font-bold text-slate-900">
                    A Community That Inspires Growth
                  </h3>

                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    We believe outstanding education begins with passionate
                    people. Every member of our team plays an important role in
                    creating a welcoming learning environment where students can
                    thrive.
                  </p>

                  <div className="mt-10 space-y-5">
                    {values.map((value) => (
                      <div key={value} className="flex items-center gap-4">
                        <CheckCircle2 className="text-[#D84D95]" size={22} />

                        <span className="font-medium text-slate-700">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MotionReveal>
          </div>
        </MotionStagger>
      </div>
    </section>
  );
}
