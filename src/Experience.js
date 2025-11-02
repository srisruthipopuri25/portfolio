export default function Experience() {
  return (
    <div className="Fullheight py-20" id="experience">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          My <span className="text-blue-600">Experience</span>
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Program Analyst
              </h2>
              <p className="text-lg text-blue-600 font-semibold mb-2">
                Cognizant Technology Solutions
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                09/2023 to Present
              </p>
            </div>
            
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">▪</span>
                <span>
                  Built and optimized React.js components with pixel-perfect design and accessibility (WCAG) compliance.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">▪</span>
                <span>
                  Debugged and resolved critical UI issues using browser developer tools and logging techniques. Improved platform performance and user experience, benefiting thousands of users across multiple browsers.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">▪</span>
                <span>
                  Collaborated with cross-functional teams to deliver scalable, high-performing front-end features.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">▪</span>
                <span>
                  Integrated RESTful APIs and managed application state using tools like Redux, Zustand, React Query and the Context API, DOM.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">▪</span>
                <span>
                  Wrote clean, modular, and maintainable TypeScript code, following modern UI architecture principles.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">▪</span>
                <span>
                  Utilized Git for version control and participated in Agile workflows to coordinate sprint deliverables.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">▪</span>
                <span>
                  Strong understanding of the Document Object Model (DOM) and its role in building interactive web applications.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
