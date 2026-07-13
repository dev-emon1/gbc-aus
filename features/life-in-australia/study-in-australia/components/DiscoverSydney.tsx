import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Check } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { STUDY_AUSTRALIA_CONTENT } from "../data/study-australia";

const FEATURES = [
  "World-famous beaches and coastline",
  "Global career opportunities",
  "Safe multicultural community",
  "Excellent transport network",
];

export default function DiscoverSydney() {
  const section = STUDY_AUSTRALIA_CONTENT.sydney;

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      <div className={`${CONTAINER}`}>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <MotionReveal>
            <div className="relative overflow-hidden rounded-[36px]">
              <Image
                src={section.image}
                alt={section.title}
                width={900}
                height={900}
                className="
        aspect-[4/5]
        w-full
        object-cover
      "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D84D95]">
                Discover Sydney
              </span>

              <h2 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
                {section.title}
              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-600">
                {section.description}
              </p>
              <div className="mt-10 space-y-5">
                {FEATURES.map((feature) => (
                  <div key={feature} className="flex items-start gap-4">
                    <div
                      className="
          mt-1
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-full
          bg-[#D84D95]/10
        "
                    >
                      <Check size={16} className="text-[#D84D95]" />
                    </div>

                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/campus"
                className="
    mt-12
    inline-flex
    items-center
    gap-3
    rounded-full
    border
    border-slate-300
    px-7
    py-4
    font-semibold
    transition-all
    duration-300
    hover:border-[#D84D95]
    hover:text-[#D84D95]
  "
              >
                Explore Sydney
                <ArrowRight size={18} />
              </Link>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
