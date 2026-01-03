import { useState } from "react";
import "./navbar.css";

export default function Navbar({ openComponent }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (section) => {
    openComponent(section);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        
        <div
          className="text-lg font-semibold text-gray-800 cursor-pointer"
          onClick={() => handleClick("home")}
        >
          Home
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["home", "about", "skills", "works", "experience", "contactme"].map(
            (item) => (
              <div
                key={item}
                className="text-base font-medium text-gray-800 cursor-pointer
                           px-4 py-2 rounded-md transition-all duration-300
                           hover:text-blue-600 hover:bg-blue-50 active:scale-95"
                onClick={() => handleClick(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
            )
          )}
        </div>

        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="flex flex-col items-center py-4 gap-2">
            {["home", "about", "skills", "works", "experience", "contactme"].map(
              (item) => (
                <div
                  key={item}
                  className="w-full text-center text-base font-medium
                             text-gray-800 cursor-pointer
                             px-4 py-3 transition
                             hover:bg-blue-50 hover:text-blue-600"
                  onClick={() => handleClick(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
