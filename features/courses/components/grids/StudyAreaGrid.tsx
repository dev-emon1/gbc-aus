import { StudyArea } from "../../types";

import { StudyAreaCard } from "../cards";
import EmptyState from "../EmptyState";

type Props = {
  studyAreas: StudyArea[];
};

export default function StudyAreaGrid({ studyAreas }: Props) {
  if (!studyAreas.length) {
    return (
      <EmptyState
        title="No Study Areas Found"
        description="Try changing your search keyword."
      />
    );
  }
  return (
    <div
      className="
        grid
        gap-8

        md:grid-cols-2

        xl:grid-cols-3
      "
    >
      {studyAreas.map((studyArea) => (
        <StudyAreaCard key={studyArea.id} studyArea={studyArea} />
      ))}
    </div>
  );
}
