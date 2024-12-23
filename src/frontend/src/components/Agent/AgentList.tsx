import React from "react";
import AgentCard from "./AgentCard";

// Définir les types pour les agents
interface Agent {
  id: string;
  name: string;
  age: number;
}

interface AgentListProps {
  agents: Agent[];
}

const AgentList: React.FC<AgentListProps> = ({ agents }) => {
  return (
    <div>
      {agents.map((agent) => (
        <AgentCard key={agent.id} name={agent.name} age={agent.age} />
      ))}
    </div>
  );
};

export default AgentList;
