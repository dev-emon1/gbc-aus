import { Agent } from "../types";

import AgentCard from "./AgentCard";
import AgentEmpty from "./AgentEmpty";

type Props = {
  agents: Agent[];
};

export default function AgentGrid({ agents }: Props) {
  if (!agents.length) {
    return <AgentEmpty />;
  }

  return (
    <div
      className="
        grid
        gap-6
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      {agents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}
