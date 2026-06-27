import { MotionStagger } from "@/components/shared/animations";

import { TEAM_DATA } from "../data";

import TeamCard from "./TeamCard";

export default function TeamGrid() {
  if (!TEAM_DATA.members.length) return null;

  return (
    <MotionStagger
      className="
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {TEAM_DATA.members.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </MotionStagger>
  );
}
