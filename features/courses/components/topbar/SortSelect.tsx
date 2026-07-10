type Props = {
  value: string;

  onChange: (value: string) => void;
};

export default function SortSelect({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        rounded-lg
        border
        border-gray-300
        px-4
        py-2
      "
    >
      <option value="featured">Featured</option>

      <option value="a-z">A-Z</option>

      <option value="z-a">Z-A</option>
    </select>
  );
}
