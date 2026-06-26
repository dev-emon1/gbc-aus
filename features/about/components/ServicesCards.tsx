import Image from "next/image";

import {
  MotionHover,
  MotionReveal,
  MotionStagger,
} from "@/components/shared/animations";

const featuredCard = {
  title: "Practical Learning",

  description:
    "Gain real-world knowledge through hands-on learning experiences that prepare you for today's workplace.",

  image: "/images/about/practical-learning.jpg",

  tags: ["Industry Ready", "Hands-on Learning", "Career Focused"],
};

const cards = [
  {
    title: "Industry Connections",

    image: "/images/about/industry-connections.jpg",

    tags: ["Partnerships", "Networking"],
  },

  {
    title: "Student Support",

    image: "/images/about/student-support.jpg",

    tags: ["Guidance", "Success"],
  },

  {
    title: "Career Outcomes",

    image: "/images/about/career-ready.jpg",

    tags: ["Employment", "Skills"],
  },
];

export default function ServicesCards() {
  return (
    <MotionStagger className="space-y-7">
      {/* Featured Card */}

      <MotionReveal>
        <MotionHover scale={1.015} y={-6}>
          <div className="group overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.06)] transition-all duration-500 hover:border-[#D84D95]/20 hover:shadow-[0_40px_90px_rgba(15,23,42,0.10)]">
            <div className="relative h-[340px] overflow-hidden">
              <Image
                src={featuredCard.image}
                alt={featuredCard.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              <div className="absolute left-8 bottom-8 max-w-lg text-white">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md">
                  George Brown College
                </span>

                <h3 className="mt-6 text-4xl font-bold leading-tight">
                  {featuredCard.title}
                </h3>

                <p className="mt-5 leading-8 text-white/90">
                  {featuredCard.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredCard.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MotionHover>
      </MotionReveal>

      {/* Small Cards */}

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <MotionReveal key={card.title} delay={0.12 + index * 0.08}>
            <MotionHover scale={1.02} y={-5}>
              <div className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition-all duration-500 hover:border-[#D84D95]/20 hover:shadow-[0_30px_70px_rgba(15,23,42,0.08)]">
                {/* Image */}

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                      GBC
                    </span>
                  </div>
                </div>

                {/* Content */}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#D84D95]">
                    {card.title}
                  </h3>

                  {/* Feature Chips */}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-600 transition-all duration-300 group-hover:border-[#D84D95]/15 group-hover:bg-[#D84D95]/8 group-hover:text-[#D84D95]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Accent */}

                  <div className="mt-6 h-px bg-gradient-to-r from-[#D84D95]/30 via-slate-200 to-transparent transition-all duration-500 group-hover:from-[#D84D95] group-hover:via-[#D84D95]/30" />
                </div>
              </div>
            </MotionHover>
          </MotionReveal>
        ))}
      </div>
    </MotionStagger>
  );
}
