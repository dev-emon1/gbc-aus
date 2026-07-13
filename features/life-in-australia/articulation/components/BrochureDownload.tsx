import Link from "next/link";

import { ArrowRight, Download, FileText } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { ARTICULATION_CONTENT } from "../data/articulation";

export default function BrochureDownload() {
  const brochure = ARTICULATION_CONTENT.brochure;

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Background Glow */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#D84D95]/5 blur-[140px]" />

      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#B7D531]/10 blur-[160px]" />

      <div className={CONTAINER}>
        <MotionReveal>
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_35px_90px_rgba(15,23,42,.08)]">
            <div className="grid items-center lg:grid-cols-[220px_1fr]">
              {/* Left */}

              <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#D84D95] to-[#C63C84] p-12">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl">
                  <FileText size={54} className="text-white" />
                </div>
              </div>

              {/* Right */}

              <div className="p-10 lg:p-14">
                <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D84D95]">
                  Official Brochure
                </span>

                <h2 className="mt-5 text-4xl font-black leading-tight text-slate-900">
                  {brochure.title}
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
                  {brochure.description}
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  {/* Download */}

                  <Link
                    href={brochure.pdf}
                    target="_blank"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#D84D95] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C63C84]"
                  >
                    <Download
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5"
                    />
                    Download Brochure
                  </Link>

                  {/* Advisor */}

                  <Link
                    href="/meet-an-advisor"
                    className="group inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition-all duration-300 hover:border-[#D84D95] hover:text-[#D84D95]"
                  >
                    Meet an Advisor
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>

                {/* Bottom Info */}

                <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-100 pt-8">
                  <InfoItem title="Official" value="SCU Pathway Guide" />

                  <InfoItem title="Format" value="PDF Brochure" />

                  <InfoItem title="Updated" value="Latest Version" />
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}

type InfoItemProps = {
  title: string;
  value: string;
};

function InfoItem({ title, value }: InfoItemProps) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {title}
      </p>

      <p className="mt-2 font-semibold text-slate-900">{value}</p>
    </div>
  );
}
