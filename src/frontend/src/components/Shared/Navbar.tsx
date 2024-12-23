import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto">
        <ul className="flex justify-center items-center gap-6 text-white">
          <li>
            <Link
              to="/"
              className={`hover:text-primary transition-colors ${
                location.pathname === "/" ? "text-primary" : ""
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/agents"
              className={`hover:text-primary transition-colors ${
                location.pathname === "/agents" ? "text-primary" : ""
              }`}
            >
              Agents
            </Link>
          </li>
          <li>
            <Link
              to="/universes"
              className={`hover:text-primary transition-colors ${
                location.pathname === "/universes" ? "text-primary" : ""
              }`}
            >
              Universes
            </Link>
          </li>
          <li>
            <Link
              to="/multiverses"
              className={`hover:text-primary transition-colors ${
                location.pathname === "/multiverses" ? "text-primary" : ""
              }`}
            >
              Multiverses
            </Link>
          </li>
          <li>
            <Link
              to="/analytics"
              className={`hover:text-primary transition-colors ${
                location.pathname === "/analytics" ? "text-primary" : ""
              }`}
            >
              Analytics
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
