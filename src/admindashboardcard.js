export default function admindashboardcard() {
  return (
    <div className="relative bg-[#0b2545] text-white p-6 mt-10 rounded-2xl w-80 text-center shadow-lg mx-auto">
      {/* Circle icon floating above card */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-md">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1163/1163624.png"
          alt="weather icon"
          className="w-12 h-12"
        />
      </div>

      <h2 className="mt-8 text-xl font-bold">Admin Dashboard</h2>

      <p className="text-sm mt-4 text-gray-300">
        This Application is responsible for showing all the Weather parameters
        like Temperature, Weather description, Wind Speed, Humidity, Max and Min
        Temperatures and Pressure when we search for a City.
      </p>

      <div className="flex justify-center gap-3 mt-4 mb-4 text-xl">
        <i className="text-cyan-400">⚛️</i>
        <i className="text-sky-400">🌊</i>
        <i className="text-pink-400">🌧️</i>
      </div>

      <a
        href=""
        className="mt-10 p-5 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-4 py-2 rounded-full font-semibold"
      >
        Show
      </a>
    </div>
  );
}
