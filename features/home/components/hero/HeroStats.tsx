"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    end: 8000,
    prefix: "",
    suffix: "+",
    label: "Students",
  },
  {
    end: 95,
    suffix: "%",
    label: "Satisfaction",
  },
  {
    end: 50,
    suffix: "+",
    label: "Courses",
  },
];

export default function HeroStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <div
      ref={ref}
      className="mt-12 grid grid-cols-3 gap-8 border-t border-slate-200 pt-8"
    >
      {stats.map((item) => (
        <div key={item.label} className="group">
          <h3 className="text-4xl font-bold tracking-tight text-slate-900">
            {inView ? (
              <CountUp
                end={item.end}
                duration={2.5}
                separator=","
                prefix={item.prefix}
                suffix={item.suffix}
              />
            ) : (
              `0${item.suffix ?? ""}`
            )}
          </h3>

          <p className="mt-2 text-sm font-medium text-slate-500">
            {item.label}
          </p>

          {/* Premium Line */}
          <div className="mt-4 h-[3px] w-10 rounded-full bg-[#D84D95]/20 transition-all duration-500 group-hover:w-16 group-hover:bg-[#D84D95]" />
        </div>
      ))}
    </div>
  );
}
