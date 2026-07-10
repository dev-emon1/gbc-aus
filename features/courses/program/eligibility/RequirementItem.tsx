import { CheckCircle2 } from "lucide-react";

type Props = {
  text: string;
};

export default function RequirementItem({ text }: Props) {
  return (
    <div className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D84D95]/30 hover:shadow-xl">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B7D531]/15 transition-all duration-300 group-hover:bg-[#B7D531]">
        <CheckCircle2
          size={20}
          className="text-[#B7D531] transition-colors duration-300 group-hover:text-white"
        />
      </div>

      <p className="text-[15px] leading-7 text-slate-700">{text}</p>
    </div>
  );
}
