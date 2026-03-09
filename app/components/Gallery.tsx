"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const images = [
  { src: "/gallery/IMG_9171.jpg", alt: "School life", caption: "Students enjoying their break time on the school grounds in Leh." },
  { src: "/gallery/IMG_9256.jpg", alt: "Students at school", caption: "A moment of learning and connection in one of our classrooms." },
  { src: "/gallery/IMG_9309.jpg", alt: "School campus", caption: "The Himalayan International School campus, nestled in the heart of Ladakh." },
  { src: "/gallery/IMG_9313.jpg", alt: "School life", caption: "Our students bring energy and joy to every corner of the school." },
  { src: "/gallery/WhatsApp Image 2024-11-29 at 11.12.07.jpeg", alt: "School activities", caption: "Celebrating culture and creativity through school activities." },
  { src: "/gallery/WhatsApp Image 2024-11-29 at 11.12.14.jpeg", alt: "Students learning", caption: "Engaged and curious — learning in a warm, supportive environment." },
  { src: "/gallery/WhatsApp Image 2024-11-29 at 11.12.14 (1).jpeg", alt: "Classroom activities", caption: "Small class sizes mean every child gets the attention they deserve." },
  { src: "/gallery/WhatsApp Image 2024-11-29 at 11.12.15.jpeg", alt: "School events", caption: "School events bring students, teachers, and families together." },
  { src: "/gallery/WhatsApp Image 2024-11-29 at 11.12.15 (1).jpeg", alt: "Students at school", caption: "Friendships and memories made at Himalayan International School." },
  { src: "/gallery/WhatsApp Image 2024-11-29 at 11.12.15 (2).jpeg", alt: "School life", caption: "A vibrant school community rooted in Ladakhi values." },
  { src: "/gallery/WhatsApp Image 2024-11-29 at 11.12.18 (1).jpeg", alt: "School activities", caption: "Traditional dance and arts are woven into school life." },
  { src: "/gallery/WhatsApp Image 2024-11-29 at 11.12.19.jpeg", alt: "Students and teachers", caption: "Our dedicated teachers nurture every student's potential." },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), []);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="py-16 bg-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">Gallery</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {/* Slideshow */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg bg-slate-200" style={{ aspectRatio: "4/3" }}>
            {images.map((img, i) => (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Prev / Next buttons */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              ›
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-orange-500" : "bg-warm/60"}`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-slate-500 text-sm italic mt-4 min-h-[1.5rem] transition-opacity duration-300">
            {images[current].caption}
          </p>
        </div>
      </div>
    </section>
  );
}
