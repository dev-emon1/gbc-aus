import { ResultCount, SortSelect, ViewToggle } from ".";

type CourseTopbarProps = {
  total: number;
  sortBy: string;
  onSortChange: (value: string) => void;
};

export default function CourseTopbar({
  total,
  sortBy,
  onSortChange,
}: CourseTopbarProps) {
  return (
    <div
      className="
        flex
        flex-col
        gap-4
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-4

        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      <ResultCount total={total} />

      <div className="flex items-center gap-3">
        <SortSelect value={sortBy} onChange={onSortChange} />

        <ViewToggle />
      </div>
    </div>
  );
}
