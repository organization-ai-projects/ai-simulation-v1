import React from "react";
import UniverseCard from "./UniverseCard";

interface Universe {
  id: string;
  name: string;
  description: string;
}

interface UniverseListProps {
  universes: Universe[];
}

const UniverseList: React.FC<UniverseListProps> = ({ universes }) => {
  return (
    <div>
      {universes.map((universe) => (
        <UniverseCard
          key={universe.id}
          name={universe.name}
          description={universe.description}
        />
      ))}
    </div>
  );
};

export default UniverseList;
