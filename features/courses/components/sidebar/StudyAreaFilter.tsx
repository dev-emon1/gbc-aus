import { STUDY_AREAS } from "../../data/index";

export default function StudyAreaFilter() {
  return (
    <div>
      <h3 className="mb-3 font-semibold">Study Areas</h3>

      <div className="space-y-2">
        {STUDY_AREAS.map((area) => (
          <label key={area.id} className="flex items-center gap-2">
            <input type="checkbox" />

            <span>{area.title}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
