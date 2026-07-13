import { FolderOpenDot } from "lucide-react";

type ResultCountProps = {
  total: number;
};

export default function ResultCount({ total }: ResultCountProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D84D95]/10 text-[#D84D95]">
        <FolderOpenDot size={22} />
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Available Study Areas
        </p>

        <h3 className="mt-1 text-lg font-bold text-slate-900">
          {total} Study Area{total !== 1 ? "s" : ""}
        </h3>
      </div>
    </div>
  );
}
