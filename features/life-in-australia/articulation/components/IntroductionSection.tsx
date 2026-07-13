import { ArrowRight, GraduationCap, Landmark, University } from "lucide-react";

import { MotionReveal } from "@/components/shared/animations";
import { CONTAINER } from "@/constants/layout";

import { ARTICULATION_CONTENT } from "../data/articulation";

export default function IntroductionSection() {
  const section = ARTICULATION_CONTENT.introduction;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Ambient Glow */}

      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#D84D95]/5 blur-[120px]" />

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#B7D531]/10 blur-[140px]" />

      <div className={`${CONTAINER} relative`}>
        <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_.9fr]">
          {/* Left */}

          <MotionReveal>
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D84D95]">
                Articulation Explained
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight text-slate-900 lg:text-5xl">
                {section.title}
              </h2>

              <p className="mt-7 text-xl font-medium text-slate-700">
                {section.subtitle}
              </p>

              <p className="mt-7 leading-9 text-slate-600">
                {section.description}
              </p>
            </div>
          </MotionReveal>

          {/* Right */}

          <MotionReveal delay={0.1}>
            <div className="relative rounded-[36px] border border-slate-200 bg-slate-50 p-10">
              {/* Flow */}

              <div className="space-y-8">
                <FlowCard
                  icon={<GraduationCap size={24} />}
                  title="Study at GBC"
                  subtitle="Complete your vocational qualification."
                />

                <div className="flex justify-center">
                  <ArrowRight className="rotate-90 text-[#D84D95]" />
                </div>

                <FlowCard
                  icon={<University size={24} />}
                  title="Receive Credit"
                  subtitle="Eligible units transfer towards university."
                />

                <div className="flex justify-center">
                  <ArrowRight className="rotate-90 text-[#D84D95]" />
                </div>

                <FlowCard
                  icon={<Landmark size={24} />}
                  title="Graduate From University"
                  subtitle="Complete your Bachelor qualification."
                />
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}

type FlowCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

function FlowCard({ icon, title, subtitle }: FlowCardProps) {
  return (
    <div className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95]">
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>

        <p className="mt-2 leading-7 text-slate-600">{subtitle}</p>
      </div>
    </div>
  );
}
