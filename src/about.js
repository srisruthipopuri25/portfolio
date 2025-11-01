import "./about.css";

export default function About() {
  return (
    <div className="Fullheight py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          About <span className="text-blue-600">Me</span>
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a passionate developer with a strong interest in creating innovative 
              web applications and solving complex problems. I love building user-friendly 
              interfaces and working with modern technologies to bring ideas to life.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With experience in full-stack development, I specialize in creating 
              responsive, scalable applications that provide exceptional user experiences. 
              I'm always eager to learn new technologies and take on challenging projects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
