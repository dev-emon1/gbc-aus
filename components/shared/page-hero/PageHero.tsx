import Image from "next/image";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import PageHeroBreadcrumb from "./PageHeroBreadcrumb";
import { PageHeroProps } from "./types";

export default function PageHero({ data }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="relative h-[430px] overflow-hidden lg:h-[460px]">
        {/* Background Image */}

        <Image
          src={data.backgroundImage}
          alt={data.title}
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />

        {/* Premium Overlay */}

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,.88)_0%,rgba(15,23,42,.72)_35%,rgba(15,23,42,.38)_70%,rgba(15,23,42,.18)_100%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,.08)_0%,rgba(15,23,42,.04)_55%,rgba(15,23,42,.25)_100%)]" />

        {/* Grid Pattern */}

        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Ambient Glow */}

        <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#D84D95]/10 blur-[110px]" />

        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#B7D531]/6 blur-[120px]" />

        {/* Top Border */}

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Content */}

        <div className={`${CONTAINER} relative z-20 flex h-full items-center`}>
          <div className="max-w-xl">
            <MotionReveal>
              <PageHeroBreadcrumb breadcrumbs={data.breadcrumbs} />
            </MotionReveal>

            <MotionReveal delay={0.08}>
              <span className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-xl">
                {data.badge}
              </span>
            </MotionReveal>

            <MotionReveal delay={0.16}>
              <h1 className="mt-7 text-5xl font-bold leading-[1.05] text-white md:text-6xl xl:text-[68px]">
                {data.title}
              </h1>
            </MotionReveal>

            <MotionReveal delay={0.24}>
              <p className="mt-8 max-w-lg text-[18px] leading-8 text-white/80">
                {data.description}
              </p>
            </MotionReveal>
            {/* Institution Metadata */}

            <MotionReveal delay={0.32}>
              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
                {data.metadata?.map((item, index) => (
                  <div key={item.label} className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{
                          backgroundColor: item.color,
                        }}
                      />

                      <span className="text-sm font-medium tracking-wide text-white/65">
                        {item.label}
                      </span>
                    </div>

                    {index !== data.metadata!.length - 1 && (
                      <div className="hidden h-4 w-px bg-white/15 md:block" />
                    )}
                  </div>
                ))}
              </div>
            </MotionReveal>
          </div>
        </div>

        {/* Bottom Ambient Light */}

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />

        {/* Bottom Divider */}

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </section>
  );
}
