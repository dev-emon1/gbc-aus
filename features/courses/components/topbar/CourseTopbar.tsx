import { ResultCount, SortSelect, ViewToggle } from ".";

type CourseTopbarProps = {
  total: number;
  sortBy: string;
  onSortChange: (value: string) => void;
  view: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
};

export default function CourseTopbar({
  total,
  sortBy,
  onSortChange,
  view,
  onViewChange,
}: CourseTopbarProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}

        <ResultCount total={total} />

        {/* Right */}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <SortSelect value={sortBy} onChange={onSortChange} />

          <div className="h-10 w-px bg-slate-200 hidden sm:block" />

          <ViewToggle view={view} onChange={onViewChange} />
        </div>
      </div>
    </div>
  );
}
