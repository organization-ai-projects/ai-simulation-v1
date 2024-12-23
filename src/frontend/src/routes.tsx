import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Agents from "./pages/Agents";
import Universes from "./pages/Universes";
import Multiverses from "./pages/Multiverses";
import Analytics from "./pages/Analytics";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/universes" element={<Universes />} />
      <Route path="/multiverses" element={<Multiverses />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
};

export default AppRoutes;
