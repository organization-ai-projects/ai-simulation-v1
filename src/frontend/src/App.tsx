import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";

// Lazy load des pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Agents = lazy(() => import("./pages/Agents"));
const Universes = lazy(() => import("./pages/Universes"));
const Multiverses = lazy(() => import("./pages/Multiverses"));
const Analytics = lazy(() => import("./pages/Analytics"));
const NotFound = lazy(() => import("./pages/NotFound")); // Route 404

// Spinner pour le fallback (chargement)
const Loader: React.FC = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <div className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/universes" element={<Universes />} />
            <Route path="/multiverses" element={<Multiverses />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
