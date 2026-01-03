export default function Weathercard() {
  return (
    <div className="relative bg-[#0b2545] text-white p-6 pt-12 rounded-2xl w-80 text-center shadow-lg">
      
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-md">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1163/1163624.png"
          alt="weather icon"
          className="w-12 h-12"
        />
      </div>

      <h2 className="mt-8 text-xl font-bold">Weather Application</h2>

      <p className="text-sm mt-4 text-gray-300">
        This application shows weather parameters like temperature, description,
        wind speed, humidity, max and min temperatures, and pressure when a city
        is searched.
      </p>

      <div className="flex justify-center gap-3 mt-4 mb-4 text-xl">
        <span>⚛️</span>
        <span>🌊</span>
        <span>🌧️</span>
      </div>

      <a
        href="https://github.com/srisruthipopuri25/weatherapp"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
      >
        View
      </a>
    </div>
  );
}
