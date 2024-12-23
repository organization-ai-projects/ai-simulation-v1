import React, { useState } from "react";

interface Multiverse {
  id: number;
  name: string;
  description: string;
  status: "active" | "inactive";
}

const Multiverses: React.FC = () => {
  const [multiverses, setMultiverses] = useState<Multiverse[]>([]);

  return (
    <div className="multiverses-container">
      <h1>Multivers</h1>
      <div className="multiverses-grid">
        {multiverses.map((multiverse) => (
          <div key={multiverse.id} className="multiverse-card">
            <h3>{multiverse.name}</h3>
            <p>{multiverse.description}</p>
            <span className={`status ${multiverse.status}`}>
              {multiverse.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Multiverses;
