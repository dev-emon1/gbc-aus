import Link from "next/link";
import { ArrowUpRight, Download, GraduationCap } from "lucide-react";

import { OVERVIEW_RESOURCES } from "./constants";

export default function OverviewResources() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      <Link
        href={OVERVIEW_RESOURCES.brochure.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 min-w-[320px] flex-1 items-center justify-between rounded-xl bg-[#D84D95] px-5 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15">
            <Download size={17} />
          </div>

          <div>
            <h4 className="text-sm font-semibold">
              {OVERVIEW_RESOURCES.brochure.title}
            </h4>

            <p className="text-[11px] text-white/80">
              {OVERVIEW_RESOURCES.brochure.description}
            </p>
          </div>
        </div>

        <ArrowUpRight
          size={18}
          className="transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </Link>

      <Link
        href={OVERVIEW_RESOURCES.pathway.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 min-w-[320px] flex-1 items-center justify-between rounded-xl border border-[#B7D531] bg-white px-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#B7D531] hover:shadow-xl"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#B7D531] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#B7D531]">
            <GraduationCap size={17} />
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 group-hover:text-white">
              {OVERVIEW_RESOURCES.pathway.title}
            </h4>

            <p className="text-[11px] text-slate-500 transition-colors duration-300 group-hover:text-white/80">
              {OVERVIEW_RESOURCES.pathway.description}
            </p>
          </div>
        </div>

        <ArrowUpRight
          size={18}
          className="text-[#B7D531] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
        />
      </Link>
    </div>
  );
}
