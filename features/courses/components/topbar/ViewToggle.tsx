import { Grid2X2, List } from "lucide-react";

type Props = {
  view?: "grid" | "list";
  onChange?: (view: "grid" | "list") => void;
};

export default function ViewToggle({ view = "grid", onChange }: Props) {
  return (
    <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 p-1">
      <button
        type="button"
        onClick={() => onChange?.("grid")}
        className={`
          flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300
          ${
            view === "grid"
              ? "bg-[#D84D95] text-white shadow-md"
              : "text-slate-500 hover:bg-white hover:text-[#D84D95]"
          }
        `}
        aria-label="Grid View"
      >
        <Grid2X2 size={18} />
      </button>

      <button
        type="button"
        onClick={() => onChange?.("list")}
        className={`
          ml-1 flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300
          ${
            view === "list"
              ? "bg-[#D84D95] text-white shadow-md"
              : "text-slate-500 hover:bg-white hover:text-[#D84D95]"
          }
        `}
        aria-label="List View"
      >
        <List size={18} />
      </button>
    </div>
  );
}
