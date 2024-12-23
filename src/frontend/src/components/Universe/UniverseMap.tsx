import React, { useEffect, useRef } from "react";

const UniverseMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      // Logique pour générer la carte
      mapRef.current.innerHTML = "<p>Map Placeholder</p>";
    }
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "400px", backgroundColor: "#ccc" }}
    />
  );
};

export default UniverseMap;
