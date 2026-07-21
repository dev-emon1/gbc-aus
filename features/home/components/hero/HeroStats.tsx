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
    threshold: 0.4,
  });

  return (
    <div
      ref={ref}
      className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-200 pt-6 sm:mt-10 sm:gap-6 sm:pt-8 lg:mt-12 lg:gap-8"
    >
      {stats.map((item) => (
        <div key={item.label} className="group text-center sm:text-left">
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
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

          <p className="mt-1 text-[11px] font-medium text-slate-500 sm:mt-2 sm:text-sm">
            {item.label}
          </p>

          <div className="mx-auto mt-3 h-[3px] w-8 rounded-full bg-[#D84D95]/20 transition-all duration-500 group-hover:w-12 group-hover:bg-[#D84D95] sm:mx-0 sm:mt-4 sm:w-10 sm:group-hover:w-16" />
        </div>
      ))}
    </div>
  );
}
