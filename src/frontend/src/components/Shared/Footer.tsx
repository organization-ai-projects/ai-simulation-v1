import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 bg-gray-100 text-center text-gray-600 border-t border-gray-200">
      <p>&copy; {currentYear} Simulation AI. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
