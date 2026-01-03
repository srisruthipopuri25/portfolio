import heroimage from "./assets/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center"
      style={{
        backgroundImage: `url('${heroimage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex justify-between items-center gap-8">
        {/* LEFT - Text Section */}
        <div className="max-w-lg text-left flex-1">
          <p
            className="text-2xl text-gray-700 mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Hey There, Welcome!!
          </p>

          <p className="text-lg text-gray-500 mb-2">I am</p>

          <h1
            className="text-5xl md:text-6xl font-bold tracking-widest
                       bg-gradient-to-r from-purple-500 to-pink-500
                       text-transparent bg-clip-text mb-8"
          >
            SRUTHI
          </h1>

          <a
            href="https://drive.google.com"
            target="_blank"
            className="inline-flex items-center justify-center
                       px-8 py-3 rounded-xl
                       text-white font-semibold
                       bg-gradient-to-r from-emerald-400 to-green-500
                       shadow-lg shadow-emerald-400/40
                       hover:scale-105 transition"
          >
            Resume
          </a>
        </div>

        {/* RIGHT - Image Section */}
        <div className="relative flex-1 flex justify-center items-center">
          {/* subtle glow halo */}
          <div className="absolute w-96 h-96 
                          bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300
                          rounded-full blur-3xl opacity-40" />

          <div className="relative p-[2px] rounded-2xl animate-[float_6s_ease-in-out_infinite] w-full max-w-[600px]">
            <div className="backdrop-blur-xl bg-white/20 rounded-2xl p-2 shadow-lg">
              <img
                src="https://media.gettyimages.com/id/1400646644/photo/girl-sitting-on-the-high-school-stairs-studing-with-laptop.jpg?s=612x612&w=0&k=20&c=tYZfcoFQ8FmXBwXZA2SdUyCgoVLj8xOFS5RgytMieOI="
                alt="student"
                className="rounded-xl w-full object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
