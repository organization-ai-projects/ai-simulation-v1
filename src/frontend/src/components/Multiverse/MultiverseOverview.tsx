import React from "react";

interface MultiverseOverviewProps {
  title: string;
  universesCount: number;
}

const MultiverseOverview: React.FC<MultiverseOverviewProps> = ({
  title,
  universesCount,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Number of Universes: {universesCount}</p>
    </div>
  );
};

export default MultiverseOverview;
