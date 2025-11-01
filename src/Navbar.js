import "./navbar.css";

export default function Navbar({ openComponent }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm py-4">
      <div className="flex justify-center items-center gap-8 md:gap-10 max-w-6xl mx-auto px-4 md:px-6">
        <div 
          className="text-base font-medium text-gray-800 cursor-pointer px-4 py-2 rounded-md transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 active:scale-95" 
          onClick={() => openComponent("home")}
        >
          Home
        </div>
        <div 
          className="text-base font-medium text-gray-800 cursor-pointer px-4 py-2 rounded-md transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 active:scale-95" 
          onClick={() => openComponent("about")}
        >
          About
        </div>
        <div 
          className="text-base font-medium text-gray-800 cursor-pointer px-4 py-2 rounded-md transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 active:scale-95" 
          onClick={() => openComponent("skills")}
        >
          Skills
        </div>
        <div 
          className="text-base font-medium text-gray-800 cursor-pointer px-4 py-2 rounded-md transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 active:scale-95" 
          onClick={() => openComponent("works")}
        >
          Works
        </div>
        <div 
          className="  cursor-pointer px-4 py-2 rounded-md transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 active:scale-95" 
          onClick={() => openComponent("experience")}
        >
          Experience
        </div>
        <div 
          className="text-base font-medium text-gray-800 cursor-pointer px-4 py-2 rounded-md transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 active:scale-95" 
          onClick={() => openComponent("contactme")}
        >
          ContactMe
        </div>
      </div>
    </nav>
  );
}
