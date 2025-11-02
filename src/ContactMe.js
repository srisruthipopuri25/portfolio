export default function ContactMe() {
  return (
    <div className="Fullheight" id="contactme">
      <div className="flex flex-col items-center justify-center py-16 px-5 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-gray-800">
          Contact <span className="text-blue-600">Me</span>
        </h1>
        
        <div className="flex gap-8 md:gap-12 justify-center items-center flex-wrap">
          <a
            href="mailto:srisruthipopuri@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-5xl md:text-6xl text-red-500 hover:text-red-600 cursor-pointer transition-all duration-300 hover:scale-110 no-underline"
            aria-label="Gmail"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          
          <a
            href="https://www.linkedin.com/in/srisruthipopuri/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-5xl md:text-6xl text-blue-600 hover:text-blue-700 cursor-pointer transition-all duration-300 hover:scale-110 no-underline"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
