import React from "react";
import AgentList from "../components/Agent/AgentList";

// Exemple de données statiques pour tester
const agents = [
  { id: "1", name: "John Doe", age: 30 },
  { id: "2", name: "Jane Smith", age: 25 },
];

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <AgentList agents={agents} />
    </div>
  );
};

export default Dashboard;
