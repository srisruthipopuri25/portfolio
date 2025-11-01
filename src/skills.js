import "./skills.css";

export default function Skills() {
  const skills = [
    { name: "Python", icon: "fa-brands fa-python", color: "text-yellow-500" },
    { name: "HTML", icon: "fa-brands fa-html5", color: "text-orange-500" },
    { name: "CSS", icon: "fa-brands fa-css3-alt", color: "text-blue-500" },
    { name: "JavaScript", icon: "fa-brands fa-js", color: "text-yellow-400" },
    { name: "React", icon: "fa-brands fa-react", color: "text-cyan-500" },
    { name: "SQL", icon: "fa-solid fa-database", color: "text-blue-600" },
    { name: "Tailwind CSS", icon: "fa-solid fa-wind", color: "text-cyan-400" },
  ];

  return (
    <div className="Fullheight py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          My <span className="text-blue-600">Skills</span>
        </h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center group"
              >
                <i className={`${skill.icon} ${skill.color} text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300`}></i>
                <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
