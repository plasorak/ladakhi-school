"use client";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col text-white overflow-hidden">
      {/* Background photo */}
      <Image
        src="/back-cover.jpg"
        alt="Himalayan landscape"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-sky-950/60" />

      {/* Prayer flags — one garland image strung below the navbar.
          In-flow so it keeps its aspect ratio and pushes the hero content down;
          no client JS, so it never pops in or reflows. A denser strip is used
          from sm up; a lighter one keeps the flags legible on phones. */}
      <div className="relative z-20 flex-none pt-16 pointer-events-none select-none">
        <picture>
          <source media="(min-width: 640px)" srcSet={`${basePath}/prayer-flags.svg`} />
          <img
            src={`${basePath}/prayer-flags-mobile.svg`}
            alt=""
            aria-hidden
            className="block w-full h-auto max-h-32 object-cover object-top"
          />
        </picture>
      </div>

      {/* Main content centered in the remaining space */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pb-4">
        <div className="mb-4">
          <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Est. 1994 · Leh, Ladakh, India
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight max-w-4xl">
          Himalayan International
          <br />
          <span className="text-orange-400">School Ladakh</span>
        </h1>

        <p className="text-lg md:text-xl text-sky-100 mb-6 max-w-2xl leading-relaxed">
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

        <div className="mt-8 mb-4 grid grid-cols-3 gap-8 max-w-xs text-center">
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
