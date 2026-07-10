import { Sparkles } from "lucide-react";

type Props = {
  text: string;
};

export default function OutcomeCard({ text }: Props) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D84D95]/30 hover:shadow-xl">
      <div className="flex items-start gap-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D84D95]/10 transition-all duration-300 group-hover:bg-[#D84D95]">
          <Sparkles
            size={20}
            className="text-[#D84D95] transition-colors duration-300 group-hover:text-white"
          />
        </div>

        <p className="pt-1 text-[15px] leading-7 text-slate-700">{text}</p>
      </div>
    </div>
  );
}
