import Link from "next/link";

import { ArrowRight } from "lucide-react";

export default function FooterBrand() {
  return (
    <div className="max-w-[520px]">
      <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-slate-900">
        George Brown College
      </h2>

      <p className="mt-4 max-w-[430px] text-[15px] leading-7 text-slate-600">
        Trusted Australian education provider delivering nationally recognised
        qualifications, practical learning and career-focused outcomes.
      </p>

      <Link
        href="/about"
        className="group mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-[#D84D95]"
      >
        Learn More
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}
