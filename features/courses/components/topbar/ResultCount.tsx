type ResultCountProps = {
  total: number;
};

export default function ResultCount({ total }: ResultCountProps) {
  return (
    <p className="text-sm text-gray-600">
      Showing <span className="font-semibold text-gray-900">{total}</span> Study
      Area{total !== 1 ? "s" : ""}
    </p>
  );
}
