import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { MotionHover } from "@/components/shared/animations";

import { CTAData } from "./types";

type Props = {
  data: CTAData;
};

export default function CTAButtons({ data }: Props) {
  const { primaryButton, secondaryButton } = data;

  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
      {/* Primary */}

      <MotionHover y={-2}>
        <Link
          href={primaryButton.href}
          className="group inline-flex items-center gap-3 rounded-full bg-[#D84D95] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C63C84]"
        >
          {primaryButton.label}

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </MotionHover>

      {/* Secondary */}

      {secondaryButton && (
        <MotionHover y={-2}>
          <Link
            href={secondaryButton.href}
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-slate-900"
          >
            {secondaryButton.label}

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </MotionHover>
      )}
    </div>
  );
}
