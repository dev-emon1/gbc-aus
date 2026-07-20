import { Agent } from "./types";

export function filterAgents(agents: Agent[], keyword: string): Agent[] {
  const query = keyword.trim().toLowerCase();

  if (!query) {
    return agents;
  }

  return agents.filter((agent) => {
    return (
      agent.name.toLowerCase().includes(query) ||
      agent.email.toLowerCase().includes(query)
    );
  });
}

export function paginateAgents(
  agents: Agent[],
  page: number,
  perPage: number,
): Agent[] {
  const start = (page - 1) * perPage;

  return agents.slice(start, start + perPage);
}

export function getTotalPages(totalAgents: number, perPage: number): number {
  return Math.ceil(totalAgents / perPage);
}
