import { BriefcaseBusiness } from "lucide-react";

import { CareerOutcome } from "../../types";

type Props = {
  career: CareerOutcome;
};

export default function CareerCard({ career }: Props) {
  return (
    <div className="group h-full rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D84D95]/30 hover:shadow-xl">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D84D95]/10 transition-all duration-300 group-hover:bg-[#D84D95]">
        <BriefcaseBusiness
          size={22}
          className="text-[#D84D95] transition-colors duration-300 group-hover:text-white"
        />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[#D84D95]">
        {career.title}
      </h3>

      <p className="mt-4 leading-8 text-slate-600">{career.description}</p>
    </div>
  );
}
