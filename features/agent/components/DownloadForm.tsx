import Link from "next/link";

import { ArrowUpRight, FileText } from "lucide-react";

import { CONTAINER } from "@/constants/layout";

import {
  MotionHover,
  MotionReveal,
  MotionStagger,
} from "@/components/shared/animations";

import { AGENT_DOCUMENT } from "../data/document";

export default function DownloadForm() {
  return (
    <section className="section-padding">
      <div className={CONTAINER}>
        <MotionStagger className="mx-auto max-w-3xl text-center">
          <MotionReveal>
            <span className="inline-flex rounded-full bg-[#D84D95]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D84D95]">
              Agent Application
            </span>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
              Download the Official Application Form
            </h2>
          </MotionReveal>

          <MotionReveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Start your partnership journey by downloading and completing our
              official education agent application form.
            </p>
          </MotionReveal>
        </MotionStagger>

        <MotionReveal delay={0.24}>
          <MotionHover y={-6}>
            <Link
              href={AGENT_DOCUMENT.file}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mx-auto
                mt-16
                flex
                max-w-5xl
                items-center
                justify-between
                gap-8
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-8
                transition-all
                duration-300
                hover:border-[#D84D95]/20
                hover:shadow-[0_25px_60px_rgba(15,23,42,.08)]
              "
            >
              <div className="flex items-center gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#D84D95]/10 text-[#D84D95] transition-all duration-300 group-hover:bg-[#D84D95] group-hover:text-white">
                  <FileText size={34} />
                </div>

                <div className="text-left">
                  <div className="inline-flex rounded-full bg-[#B7D531]/15 px-3 py-1 text-xs font-semibold text-[#7B9824]">
                    {AGENT_DOCUMENT.pages}
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-slate-900">
                    {AGENT_DOCUMENT.title}
                  </h3>

                  <p className="mt-2 font-medium text-[#D84D95]">
                    {AGENT_DOCUMENT.subtitle}
                  </p>

                  <p className="mt-5 max-w-2xl leading-7 text-slate-600">
                    {AGENT_DOCUMENT.description}
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition-all duration-300 group-hover:border-[#D84D95] group-hover:bg-[#D84D95] group-hover:text-white">
                  <ArrowUpRight
                    size={24}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            </Link>
          </MotionHover>
        </MotionReveal>
      </div>
    </section>
  );
}
