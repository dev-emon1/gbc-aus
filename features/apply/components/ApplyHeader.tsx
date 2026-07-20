import Link from "next/link";

import { ArrowRight, Mail } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";

export default function ApplyHeader() {
  return (
    <MotionReveal>
      <div className="mx-auto mb-16 max-w-4xl text-center">
        {/* Badge */}

        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-[#D84D95]/20
            bg-[#D84D95]/10
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#D84D95]
          "
        >
          Application Process
        </span>

        {/* Heading */}

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
          Download Your Application Form
        </h2>

        {/* Description */}

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Select the appropriate application form below, complete all required
          information, and email the completed form together with your
          supporting documents to our admissions team.
        </p>

        {/* Email Card */}

        <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5">
          <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95]">
                <Mail size={24} />
              </div>

              <div className="text-left">
                <p className="text-sm font-medium text-slate-500">
                  Submit your completed application to
                </p>

                <Link
                  href="mailto:info@georgebrown.nsw.edu.au"
                  className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-slate-900 transition-colors hover:text-[#D84D95]"
                >
                  info@georgebrown.nsw.edu.au
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Notice */}

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4 text-sm leading-7 text-amber-900">
          <strong>Important:</strong> Please ensure that all required
          information is completed before submitting your application. Any
          supporting documents requested by the admissions team should be
          included with your email submission.
        </div>
      </div>
    </MotionReveal>
  );
}
