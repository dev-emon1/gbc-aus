export default function ViewToggle() {
  return (
    <div className="flex overflow-hidden rounded-lg border">
      <button
        className="
          border-r
          px-4
          py-2
          text-sm
          font-medium
        "
      >
        Grid
      </button>

      <button
        className="
          px-4
          py-2
          text-sm
          font-medium
        "
      >
        List
      </button>
    </div>
  );
}
