import Image from "next/image";

import { CheckCircle2 } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { STUDENT_SERVICES_CONTENT } from "../data/student-services";

export default function AcademicSupport() {
  const section = STUDENT_SERVICES_CONTENT.academicSupport;

  return (
    <section className="bg-white py-24 lg:py-28">
      <div className={CONTAINER}>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image */}

          <MotionReveal>
            <div className="relative overflow-hidden rounded-[32px]">
              <Image
                src={section.image}
                alt={section.title}
                width={700}
                height={700}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </MotionReveal>

          {/* Content */}

          <MotionReveal delay={0.1}>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
                Academic Excellence
              </span>

              <h2 className="mt-5 text-4xl font-bold text-slate-900">
                {section.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {section.description}
              </p>

              <div className="mt-10 space-y-6">
                {section.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="mt-1 text-[#B7D531]">
                      <CheckCircle2 size={22} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
