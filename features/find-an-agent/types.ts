export interface Agent {
  id: string;

  name: string;

  email: string;
}

export interface AgentFilters {
  search: string;
}

export interface AgentStats {
  totalAgents: number;
}
