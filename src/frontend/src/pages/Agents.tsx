import React from "react";
import AgentList from "../components/Agent/AgentList";

const Agents: React.FC = () => {
  return (
    <div>
      <h1>Agents</h1>
      <AgentList agents={[{ id: "1", name: "John", age: 25 }]} />
    </div>
  );
};

export default Agents;
