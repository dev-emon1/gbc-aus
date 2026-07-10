type Props = {
  value: string;

  onChange: (value: string) => void;
};

export default function SearchBox({ value, onChange }: Props) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">
        Search Study Areas
      </label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder="Search..."
        className="
          w-full
          rounded-lg
          border
          border-gray-300
          px-4
          py-2
          outline-none
        "
      />
    </div>
  );
}
