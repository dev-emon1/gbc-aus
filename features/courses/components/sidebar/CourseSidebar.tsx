import SearchBox from "./SearchBox";

type CourseSidebarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  onReset: () => void;
};

export default function CourseSidebar({
  search,
  onSearchChange,
  onReset,
}: CourseSidebarProps) {
  return (
    <div className="space-y-8 rounded-2xl border border-gray-200 bg-white p-6">
      <SearchBox value={search} onChange={onSearchChange} />

      <button
        onClick={onReset}
        className="
          w-full
          rounded-lg
          border
          border-gray-300
          py-2
          text-sm
          font-medium
          transition
          hover:bg-gray-100
        "
      >
        Reset
      </button>
    </div>
  );
}
