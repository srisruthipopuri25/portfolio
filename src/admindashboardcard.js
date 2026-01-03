export default function AdminDashboardCard() {
  return (
    <div className="relative bg-[#0b2545] text-white p-6 mt-10 rounded-2xl w-80 text-center shadow-lg mx-auto">
      
      {/* Circle icon floating above card */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-md">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="stock dashboard icon"
          className="w-12 h-12"
        />
      </div>

      <h2 className="mt-8 text-xl font-bold">
        Stock Market Admin Dashboard
      </h2>

      <p className="text-sm mt-4 text-gray-300">
        A modern admin dashboard built to track and visualize stock market data.
        It displays stock prices, trends, and performance metrics using
        interactive charts and tables for efficient market analysis.
      </p>

      {/* Tech / Feature Icons */}
      <div className="flex justify-center gap-4 mt-5 mb-4 text-2xl">
        <span title="Stock Trends">📈</span>
        <span title="Market Analytics">📊</span>
        <span title="Growth & Performance">💹</span>
      </div>

      <a
        href="https://github.com/srisruthipopuri25/StockMarketDashboard"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
      >
        View
      </a>
    </div>
  );
}
