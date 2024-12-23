import React from "react";

// Définir les types pour les props du composant
interface AgentCardProps {
  name: string;
  age: number;
}

// Composant fonctionnel
const AgentCard: React.FC<AgentCardProps> = ({ name, age }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
};

export default AgentCard;
