import React, { useEffect, useRef } from "react";

const VRView: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mountRef.current) {
      // Placeholder pour le rendu VR (remplacer par une vraie logique)
      mountRef.current.innerHTML = "<p>VR View Placeholder</p>";
    }
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "400px", backgroundColor: "#000" }}
    />
  );
};

export default VRView;
