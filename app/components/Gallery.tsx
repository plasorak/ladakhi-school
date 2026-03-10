"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const images = [
  { src: "/gallery/school-entrance.jpg", alt: "Front entrance of Himalayan International School Ladakh under a clear blue sky", caption: "The school building in Leh, Union Territory of Ladakh" },
  { src: "/gallery/classroom-timetable.jpg", alt: "Colourful handmade weekly timetable displayed on a classroom wall", caption: "A hand-crafted weekly timetable decorating the classroom" },
  { src: "/gallery/teachers-at-school-entrance.jpg", alt: "Group of seven women teachers standing in front of the school entrance", caption: "Teachers and staff at the school entrance" },
  { src: "/gallery/ladakh-mountain-landscape.jpg", alt: "Panoramic view of Leh town with the Himalayan mountain range stretching across the horizon", caption: "The breathtaking Himalayan landscape surrounding the school" },
  { src: "/gallery/book-donation-students.jpg", alt: "Students and teachers gathered in front of the school holding donated books", caption: "Students proudly receiving donated books and school supplies" },
  { src: "/gallery/students-traditional-ladakhi-dress.jpg", alt: "Four girls wearing traditional Ladakhi perak headdresses and red ceremonial robes", caption: "Students dressed in traditional Ladakhi attire" },
  { src: "/gallery/traditional-dress-celebration-cake.jpg", alt: "Girls in traditional Ladakhi dress standing behind adults cutting a celebration cake", caption: "A celebration with students in traditional dress" },
  { src: "/gallery/students-school-bus.jpg", alt: "Students in school uniform posing in front of the yellow school bus", caption: "Students with the school bus" },
  { src: "/gallery/visitors-interactive-classroom.jpg", alt: "International visitors sitting on the classroom floor engaging with young students", caption: "Visitors joining students for an interactive classroom session" },
  { src: "/gallery/visitors-welcome-khata.jpg", alt: "International visitors being welcomed with traditional white khata scarves outside the school", caption: "Welcoming visitors with traditional khata scarves" },
  { src: "/gallery/students-cultural-dance-performance.jpg", alt: "Students in colourful traditional costumes performing a cultural dance at a parents day event", caption: "Students performing a traditional dance at Parents Day" },
  { src: "/gallery/staff-parents-day-celebration.jpg", alt: "School staff wearing white khata scarves posing together at the Parents Day celebration", caption: "Staff at the Parents Day celebration" },
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
