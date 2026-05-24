import React, { useState } from "react";
import { config } from "../../config";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-screen sm:w-fit left-1/2 -translate-x-1/2 p-4 z-50">
      <div className="flex justify-between sm:gap-20 sm:justify-center items-center">
        <div className="text-2xl font-bold text-white hover:text-orange-500 transition-colors duration-300">{config.loadingScreen}</div>

        {/* Hamburger Menu Button */}
        <button className="sm:hidden p-2" onClick={toggleMenu}>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-8 items-center">
          {config.sections.map((section, index) => (
            <a
              key={index}
              href={`#${section.toLowerCase()}`}
              className="font-semibold text-white hover:text-orange-500 transition-colors text-xl duration-300"
            >
              {section}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden ${isOpen ? "block" : "hidden"} mt-4`}>
        <div className="flex flex-col gap-2 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-gray-200">
          {config.sections.map((section, index) => (
            <a
              key={index}
              href={`#${section.toLowerCase()}`}
              className="font-semibold text-gray-800 hover:text-orange-500 transition-colors text-xl duration-300 py-2 px-3 rounded-lg hover:bg-orange-50"
              onClick={toggleMenu}
            >
              {section}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
