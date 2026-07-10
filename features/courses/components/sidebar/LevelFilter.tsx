const LEVELS = ["Certificate III", "Certificate IV", "Diploma"];

export default function LevelFilter() {
  return (
    <div>
      <h3 className="mb-3 font-semibold">Course Level</h3>

      <div className="space-y-2">
        {LEVELS.map((level) => (
          <label key={level} className="flex items-center gap-2">
            <input type="checkbox" />

            <span>{level}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
