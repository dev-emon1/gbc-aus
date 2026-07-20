import Link from "next/link";

import { ArrowRight, Mail, MapPin, Users } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";

export default function HelpSection() {
  return (
    <MotionReveal>
      <section className="mt-24">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
          <div className="grid lg:grid-cols-2">
            {/* Left */}

            <div className="border-b border-slate-200 p-10 lg:border-b-0 lg:border-r">
              <span
                className="
                  inline-flex
                  rounded-full
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
                Need Assistance?
              </span>

              <h3 className="mt-6 text-3xl font-bold text-slate-900">
                We're Here to Help
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                If you're unsure which application form to use or need
                assistance during the admission process, our admissions team is
                ready to help.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-[#D84D95]/10 p-3 text-[#D84D95]">
                    <Mail size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Admissions Email</p>

                    <Link
                      href="mailto:info@georgebrown.nsw.edu.au"
                      className="font-semibold text-slate-900 hover:text-[#D84D95]"
                    >
                      info@georgebrown.nsw.edu.au
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-[#B7D531]/15 p-3 text-[#7d9720]">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Campus</p>

                    <p className="font-medium text-slate-900">
                      George Brown College,
                      <br />
                      Sydney, NSW, Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}

            <div className="flex flex-col justify-center bg-slate-50 p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B7D531]/15 text-[#7d9720]">
                <Users size={30} />
              </div>

              <h3 className="mt-8 text-3xl font-bold text-slate-900">
                Prefer Applying Through an Agent?
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                George Brown College works with authorised education agents who
                can guide you through course selection, document preparation,
                visa requirements, and the application process.
              </p>

              <Link
                href="/find-an-agent"
                className="
                  mt-10
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  bg-slate-900
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#D84D95]
                "
              >
                Find an Education Agent
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MotionReveal>
  );
}
