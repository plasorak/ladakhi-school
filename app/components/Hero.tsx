"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const FLAG_COLORS = ["#2980B9", "#FFFFFF", "#C0392B", "#27AE60", "#F1C40F"];
const FLAG_SPACING = 25; // target px between flag centres

// Parabolic sag: 0px at edges, ~35px at centre — simulates a sagging rope
const sag = (i: number, count: number) =>
  Math.round(35 * 4 * (i / (count - 1)) * (1 - i / (count - 1)));

export default function Hero() {
  const [flagCount, setFlagCount] = useState(0); // 0 on SSR → no flags until hydrated

  useEffect(() => {
    const update = () =>
      setFlagCount(Math.max(6, Math.round(window.innerWidth / FLAG_SPACING)));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
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

      {/* Prayer flags — hanging from the bottom edge of the navbar */}
      <div className="absolute top-16 left-0 right-0 z-20 pointer-events-none select-none" style={{ height: 120 }}>
        {/* Parabolic rope — control point y=70 → midpoint at y=35, matching sag() max */}
        <svg className="absolute top-0 left-0 w-full" height="50" viewBox="0 0 1000 50" preserveAspectRatio="none">
          <path d="M 0,0 Q 500,70 1000,0" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="none" />
        </svg>
        {flagCount > 1 && Array.from({ length: flagCount }).map((_, i) => (
          <div
            key={i}
            className="flag-wave flex flex-col items-center absolute"
            style={{
              left: `${(i / (flagCount - 1)) * 100}%`,
              top: sag(i, flagCount),
              transform: "translateX(-50%)",
              animationDelay: `${i * 0.12}s`,
            }}
          >
            {/* String hanging from rope */}
            <div style={{ width: 1, height: 1, background: "rgba(255,255,255,0.5)" }} />
            {/* Flag */}
            <div
              style={{
                width: 20,
                height: 20,
                background: FLAG_COLORS[i % FLAG_COLORS.length],
                opacity: 0.92,
                borderRadius: 1,
                boxShadow: "0 1px 4px rgba(0,0,0,0.35)",
                border: FLAG_COLORS[i % FLAG_COLORS.length] === "#FFFFFF" ? "1px solid rgba(255,255,255,0.4)" : "none",
              }}
            />
          </div>
        ))}
      </div>

      {/* Yak */}
      {/* <div className="yak z-20" aria-hidden="true">🐃</div> */}

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
