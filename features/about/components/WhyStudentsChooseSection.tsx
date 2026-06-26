import Image from "next/image";

import { MotionReveal, MotionStagger } from "@/components/shared/animations";

import { CONTAINER } from "@/constants/layout";

const points = [
  "Industry Focused Learning",
  "Practical Training",
  "Experienced Educators",
  "Student Support Services",
  "Career Development Opportunities",
  "Modern Learning Environment",
];

export default function WhyStudentsChooseSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      {/* Background Glow */}

      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#D84D95]/6 blur-[140px]" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#B7D531]/8 blur-[140px]" />

      <div className={CONTAINER}>
        <MotionStagger className="grid items-center gap-20 lg:grid-cols-[1fr_520px]">
          {/* LEFT CONTENT */}

          <MotionReveal>
            <div>
              <span className="inline-flex rounded-full border border-[#D84D95]/15 bg-[#D84D95]/10 px-5 py-2 text-sm font-semibold text-[#D84D95]">
                Why Students Choose GBC
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-[1.1] text-slate-900 md:text-5xl">
                A Trusted Pathway
                <br />
                To Career Success
              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                Students choose George Brown College for its commitment to
                practical education, supportive learning environment and strong
                industry connections that prepare graduates for real-world
                success.
              </p>

              {/* Checklist */}

              <div className="mt-10 space-y-4">
                {points.map((item, index) => (
                  <MotionReveal key={item} delay={index * 0.06}>
                    <div className="flex items-center gap-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#D84D95]" />

                      <p className="text-[16px] font-medium text-slate-700">
                        {item}
                      </p>
                    </div>
                  </MotionReveal>
                ))}
              </div>
            </div>
          </MotionReveal>

          {/* RIGHT IMAGE */}

          <MotionReveal delay={0.15}>
            <div className="relative">
              {/* Background Layer */}

              <div className="absolute left-6 top-6 h-full w-full rounded-[40px] bg-gradient-to-br from-[#D84D95]/10 via-white to-[#B7D531]/10" />

              {/* Image Card */}

              <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-[0_35px_90px_rgba(15,23,42,0.10)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/about/why-gbc.jpg"
                    alt="Why Students Choose GBC"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
              </div>
            </div>
          </MotionReveal>
        </MotionStagger>
      </div>
    </section>
  );
}
