import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import {
  MotionHover,
  MotionReveal,
  MotionStagger,
} from "@/components/shared/animations";

const featured = {
  title: "Practical Learning",

  description:
    "Our practical approach combines classroom learning with real-world experience, helping students build industry-ready skills and confidence for successful careers.",

  image: "/images/about/practical-learning.jpg",
};

const cards = [
  {
    title: "Industry Connections",

    description:
      "Strong partnerships with industry create valuable learning and career opportunities.",

    image: "/images/about/industry-connections.jpg",
  },

  {
    title: "Student Support",

    description:
      "Dedicated support services help students succeed throughout their academic journey.",

    image: "/images/about/student-support.jpg",
  },

  {
    title: "Career Ready",

    description:
      "Graduate with practical knowledge and professional confidence for today's workforce.",

    image: "/images/about/career-ready.jpg",
  },
];

export default function WhatWeOfferCards() {
  return (
    <MotionStagger className="space-y-7">
      {/* Featured Card */}

      <MotionReveal>
        <MotionHover scale={1.015} y={-6}>
          <Link
            href="#"
            className="group block overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.06)] transition-all duration-500 hover:border-[#D84D95]/20 hover:shadow-[0_40px_90px_rgba(15,23,42,0.10)]"
          >
            <div className="relative h-[340px] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />

              <div className="absolute left-8 bottom-8 max-w-lg text-white">
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md">
                  George Brown College
                </span>

                <h3 className="mt-6 text-4xl font-bold leading-tight">
                  {featured.title}
                </h3>

                <p className="mt-5 leading-8 text-white/90">
                  {featured.description}
                </p>

                <div className="mt-7 inline-flex items-center gap-2 font-semibold">
                  Learn More
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          </Link>
        </MotionHover>
      </MotionReveal>

      {/* Bottom Cards */}

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <MotionReveal key={card.title} delay={0.15 + index * 0.08}>
            <MotionHover scale={1.02} y={-5}>
              <Link
                href="#"
                className="group block overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition-all duration-500 hover:border-[#D84D95]/20 hover:shadow-[0_30px_70px_rgba(15,23,42,0.08)]"
              >
                {/* Image */}

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>

                {/* Content */}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#D84D95]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    {card.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 font-semibold text-[#D84D95]">
                    Learn More
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </MotionHover>
          </MotionReveal>
        ))}
      </div>
    </MotionStagger>
  );
}
