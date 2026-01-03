export default function EcommerceCard() {
  return (
    <div className="relative bg-[#0b2545] text-white p-6 mt-10 rounded-2xl w-80 text-center shadow-lg mx-auto">
      

      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-md">
        <img
          src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
          alt="ecommerce icon"
          className="w-12 h-12"
        />
      </div>

      <h2 className="mt-8 text-xl font-bold">
        Nykaa E-Commerce Application
      </h2>

      <p className="text-sm mt-4 text-gray-300">
        A full-featured e-commerce web application inspired by Nykaa. Users can browse products, add items to the cart, place orders, and track their purchases. Built with React, Next.js, and modern web technologies for a smooth shopping experience.
      </p>

      <div className="flex justify-center gap-4 mt-5 mb-4 text-2xl">
        <span title="Shopping Cart">🛒</span>
        <span title="Products & Categories">🛍️</span>
        <span title="Payment & Orders">💳</span>
      </div>

      <a
        href="https://e-commerce-nykaa.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
      >
        View
      </a>
    </div>
  );
}
