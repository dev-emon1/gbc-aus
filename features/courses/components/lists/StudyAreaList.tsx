import { StudyArea } from "../../types";
import StudyAreaListItem from "./StudyAreaListItem";

type Props = {
  studyAreas: StudyArea[];
};

export default function StudyAreaList({ studyAreas }: Props) {
  if (!studyAreas.length) {
    return (
      <div className="rounded-[32px] border border-dashed border-slate-300 bg-white py-20 text-center">
        <h3 className="text-2xl font-bold text-slate-900">
          No Study Areas Found
        </h3>

        <p className="mt-3 text-slate-600">
          Try changing your search keyword or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {studyAreas.map((studyArea) => (
        <StudyAreaListItem key={studyArea.id} studyArea={studyArea} />
      ))}
    </div>
  );
}
