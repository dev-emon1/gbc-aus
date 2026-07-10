import { ClipboardCheck } from "lucide-react";

type Props = {
  title: string;
};

export default function AssessmentCard({ title }: Props) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D84D95]/30 hover:shadow-xl">
      <div className="flex items-start gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D84D95]/10 transition-all duration-300 group-hover:bg-[#D84D95]">
          <ClipboardCheck
            size={22}
            className="text-[#D84D95] transition-colors duration-300 group-hover:text-white"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-[#D84D95]">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Competency-based assessment designed to evaluate your practical
            skills, technical knowledge and workplace readiness.
          </p>
        </div>
      </div>
    </div>
  );
}
