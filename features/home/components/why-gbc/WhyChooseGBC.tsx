import Link from "next/link";
import { Award, BriefcaseBusiness, Globe2, GraduationCap } from "lucide-react";

import { CONTAINER } from "@/constants/layout";
import WhyCard from "../why-gbc/WhyCard";

import {
  MotionHover,
  MotionReveal,
  MotionStagger,
} from "@/components/shared/animations";

const items = [
  {
    icon: GraduationCap,
    title: "Industry Focused Learning",
    description:
      "Programs designed around real-world industry needs and future career opportunities.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Ready Graduates",
    description:
      "Practical training that prepares students for employment from day one.",
  },
  {
    icon: Globe2,
    title: "International Community",
    description:
      "A diverse student environment that supports global networking and growth.",
  },
  {
    icon: Award,
    title: "Recognised Qualifications",
    description:
      "Nationally recognised education pathways trusted by employers.",
  },
];

export default function WhyChooseGBC() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-pink-50/30 py-28">
      <div className={CONTAINER}>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          {/* Left */}
          <div>
            <MotionReveal>
              <span className="inline-flex rounded-full bg-[#D84D95]/10 px-5 py-2 text-sm font-medium text-[#D84D95]">
                Why Choose GBC
              </span>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
                Education Designed
                <br />
                For Real Careers
              </h2>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Our courses combine academic excellence, practical learning and
                industry engagement to help students achieve meaningful career
                outcomes.
              </p>
            </MotionReveal>

            <MotionReveal delay={0.3}>
              <MotionHover scale={1.03} y={-3}>
                <Link
                  href="/about"
                  className="mt-8 inline-flex rounded-full bg-[#D84D95] px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-[0_20px_40px_rgba(216,77,149,0.30)]"
                >
                  Learn More About GBC
                </Link>
              </MotionHover>
            </MotionReveal>
          </div>

          {/* Right */}
          <MotionStagger className="grid gap-6 md:grid-cols-2">
            {items.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.12}>
                <MotionHover scale={1.02} y={-8}>
                  <WhyCard {...item} />
                </MotionHover>
              </MotionReveal>
            ))}
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
