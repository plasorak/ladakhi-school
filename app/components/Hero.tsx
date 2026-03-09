export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-900 via-teal-800 to-teal-600 text-white">
      {/* Mountain silhouette decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg viewBox="0 0 1440 500" className="absolute bottom-0 w-full" preserveAspectRatio="xMidYMax slice">
          <path d="M0,500 L180,200 L360,320 L540,100 L720,260 L900,60 L1080,220 L1260,140 L1440,180 L1440,500 Z" fill="white" />
          <path d="M0,500 L240,340 L480,420 L720,300 L960,380 L1200,280 L1440,360 L1440,500 Z" fill="white" opacity="0.5" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <div className="mb-6">
          <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Est. 1994 · Leh, Ladakh, India
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Himalayan International
          <br />
          <span className="text-orange-400">School Ladakh</span>
        </h1>

        <p className="text-xl md:text-2xl text-sky-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Quality education that celebrates diversity, preserves Ladakhi culture,
          and empowers every child to thrive.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Learn More
          </a>
          <a
            href="#help"
            className="border-2 border-white hover:bg-white hover:text-sky-900 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Support Us
          </a>
        </div>

        <div className="mt-20 mb-16 grid grid-cols-3 gap-8 max-w-xs mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-orange-400">64</div>
            <div className="text-sky-200 text-sm mt-1">Students</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400">10</div>
            <div className="text-sky-200 text-sm mt-1">Teachers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400">30+</div>
            <div className="text-sky-200 text-sm mt-1">Years</div>
          </div>
        </div>
      </div>

    </section>
  );
}
