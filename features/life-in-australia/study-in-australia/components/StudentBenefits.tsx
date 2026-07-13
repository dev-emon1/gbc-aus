import Image from "next/image";

import { CheckCircle2 } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { STUDY_AUSTRALIA_CONTENT } from "../data/study-australia";

export default function StudentBenefits() {
  const section = STUDY_AUSTRALIA_CONTENT.benefits;

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      <div className={CONTAINER}>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <MotionReveal>
            <div className="relative">
              <Image
                src={section.image}
                alt={section.title}
                width={900}
                height={900}
                className="aspect-[4/5] w-full rounded-[36px] object-cover"
              />

              <div className="absolute -bottom-8 -right-8 rounded-3xl bg-white p-8 shadow-2xl">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                  International Students
                </p>

                <h3 className="mt-3 text-4xl font-black text-[#D84D95]">
                  150+
                </h3>

                <p className="mt-2 text-slate-600">Nationalities represented</p>
              </div>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D84D95]">
                Life In Australia
              </span>

              <h2 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
                {section.title}
              </h2>

              <p className="mt-7 text-lg leading-9 text-slate-600">
                Australia offers much more than quality education. Students
                enjoy an exceptional lifestyle, safe communities and endless
                opportunities to explore, work and grow.
              </p>
              <div className="mt-10 grid gap-5">
                {section.items.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <CheckCircle2 size={24} className="mt-1 text-[#D84D95]" />

                    <span className="text-lg text-slate-700">{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 rounded-[28px] border border-slate-200 bg-white p-8">
                <h4 className="text-xl font-bold text-slate-900">
                  Did You Know?
                </h4>

                <p className="mt-4 leading-8 text-slate-600">
                  Australia consistently ranks among the world's most liveable
                  countries, offering excellent healthcare, modern
                  infrastructure and a high standard of living for international
                  students.
                </p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
