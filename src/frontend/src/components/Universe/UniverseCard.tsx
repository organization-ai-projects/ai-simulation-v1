import React from "react";

interface UniverseCardProps {
  name: string;
  description: string;
}

const UniverseCard: React.FC<UniverseCardProps> = ({ name, description }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default UniverseCard;
