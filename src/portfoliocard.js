export default function PortfolioCard() {
  return (
    <div className="relative bg-[#0b2545] text-white p-6 mt-10 rounded-2xl w-80 text-center shadow-lg mx-auto">
      
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-md">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          alt="portfolio icon"
          className="w-12 h-12"
        />
      </div>

      <h2 className="mt-8 text-xl font-bold">
        Personal Portfolio Website
      </h2>

      <p className="text-sm mt-4 text-gray-300">
        A responsive portfolio showcasing my skills, projects, and professional
        experience. Designed to present my work clearly and help recruiters
        quickly understand my technical capabilities.
      </p>

      <div className="flex justify-center gap-4 mt-5 mb-4 text-2xl">
        <span title="Developer">👩‍💻</span>
        <span title="Projects">💼</span>
        <span title="Web Development">🌐</span>
      </div>

      <a
        href="https://github.com/srisruthipopuri25/portfolio"
        target="_blank"
        className="inline-block mt-6 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
      >
        View
      </a>
    </div>
  );
}
