"use client";
import { useState, useEffect, useCallback } from "react";

const teachers = [
  {
    name: "Sonam Yangskit",
    role: "Principal & English Teacher",
    quote: null,
    bio: "My name is Sonam Yangskit, and I've been part of this school since 2019. It's an honour to serve as the Principal of this wonderful institution.<br>This school feels like my second home, and I see our students like flowers that need care and guidance to grow. What I love most is that we provide quality education at a very low cost, making sure every child gets a chance to learn. The school welcomes any student who wishes to study and always extends a helping hand to those in need.<br>Our teachers are sincere, dedicated, and cooperative, and the managing committee is always supportive. Because of their combined efforts, the school runs smoothly and creates a beautiful, positive environment for learning. I feel proud and blessed to be a part of such a caring and inspiring institution.<br>My future vision is to make this school a place where every child, regardless of their financial background, gets an equal opportunity to learn and grow. I aim to nurture students not only in academics but also in moral values, confidence, and life skills. I wish to see our students become responsible, kind, and capable individuals who serve society with honesty and dedication.<br>I also hope to strengthen co-curricular and traditional activities so that learning becomes joyful and meaningful for every child.",
  },
  {
    name: "Namgyal Choezin",
    role: "Bhoti Teacher",
    quote: "Seeing my students succeed is my greatest reward.",
    bio: "My name is Namgyal Choezin, and I've been teaching Bhoti at Himalayan International School for over 30 years. This school has been a big part of my life, and it truly feels like home to me.<br>Over the years, I've seen the school grow in many ways: from its infrastructure and educational standards to, most importantly, its strong and vibrant spirit, which makes me very proud. What brings me the most joy is seeing my former students doing well in life and contributing to society. That's what keeps me motivated to continue teaching and guiding the next generation.",
  },
  {
    name: "Padma Chondol",
    role: "Science & Mathematics Teacher",
    quote: "I love turning challenges into learning moments.",
    bio: "My name is Padma Chondol, I teach Science and Maths. I've been teaching here for the past 10 years.<br>For me, teaching is not just a job, it's something I genuinely love. I enjoy helping students understand difficult topics and supporting them as they grow. I'm really thankful to this school for giving me the chance to live my dream of becoming a teacher.",
  },
  {
    name: "Tsetan Dolma",
    role: "Mathematics Teacher",
    quote: "Learning never stops—for teachers or students.",
    bio: "My name is Tsetan Dolma and I teach Mathematics. I've been part of this school for the past 2 years.<br>I really like the friendly and supportive atmosphere here. The teachers and management are very cooperative, and there are many opportunities to learn and grow. I also appreciate how the school focuses not just on studies but on overall development for students.",
  },
  {
    name: "Padma Angmo",
    role: "Social Studies & English Teacher",
    quote: "Education is the path that shapes a better future.",
    bio: "My name is Padma Angmo and I teach Social Studies and English. I've been here for about 2 years.<br>Guiding my students towards the right path through education is the real aim of my life. One of the things I admire most about this school is how it supports students who need help financially, through sponsorships and free lunch. The students are bright and enthusiastic, and the staff is very supportive, which makes teaching here a wonderful experience.",
  },
  {
    name: "Tsering Angmo",
    role: "Kindergarten Teacher",
    quote: "Every child learns in their own beautiful way.",
    bio: "My name is Tsering Angmo, I've been working as a kindergarten teacher for the past three years.<br>I love being around children and helping them learn through curiosity and creativity. As a teacher, I see every student with a unique set of abilities and potential. My role is to nurture them with knowledge, patience, and encouragement so they can grow into confident, responsible individuals. What I really like about this school is the caring environment from teachers and management and the focus on providing education to students from low-income families. Children are provided with every opportunity to develop their confidence, teamwork, leadership and creativity so they can fly high and dream big.",
  },
  {
    name: "Jigmat Yangchan",
    role: "Bhoti Teacher",
    quote: "Small progress every day leads to big growth.",
    bio: "My name is Jigmat Yangchan and I have been teaching Bhoti language for over 2 years. I'm really happy to be part of this school.<br>I enjoy seeing my students learn something new every day, their excitement makes teaching very rewarding. I also appreciate the teamwork and support among both teachers and students here.",
  },
  {
    name: "Dechen Chonzom",
    role: "Social Studies Teacher",
    quote: "Caring for students goes beyond the classroom.",
    bio: "My name is Dechen Chonzom and I've been teaching Social Studies here for the past 11 years.<br>I really enjoy my work because I love spending time with students and teaching them new things. Most of our students come from low-income families, so teaching them gives me special satisfaction. And here the students also receive free lunch. And I am in charge of the lunch program, which has taught me valuable skills such as managing money, how to run a kitchen efficiently, and giving children healthy and nutritious food. Overall it gives me a deep sense of satisfaction in contributing to the students' wellbeing.",
  },
  {
    name: "Skarma Dolma",
    role: "Hindi Teacher",
    quote: "Growing with the school has been my greatest journey.",
    bio: "My name is Skarma Dolma and I have been working in this school for more than 20 years. I've seen the school grow a lot over the years, from a small rented building to now having its own solar-powered school building. It makes me proud to be part of its journey.",
  },
  {
    name: "Yangchan Dolma",
    role: "Social Studies & English Teacher",
    quote: "Teaching is about inspiring confidence.",
    bio: "My name is Yangchan Dolma, and I teach Social Studies and English. I've been here for over a year.<br>I enjoy teaching because it allows me to help students grow in confidence and understanding. I like the positive environment of the school, where both teachers and students learn from each other every day.<br>For me, teaching is not just a profession, it's something I truly care about.",
  },
];

export default function Teachers() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % teachers.length), []);
  const prev = () => setCurrent((c) => (c - 1 + teachers.length) % teachers.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section id="teachers" className="py-20 bg-sky-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">Meet Our Teachers</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our teachers are educators, mentors and role models. Many have been part of our school for years, showing deep commitment to our community. Together, they create a warm, supportive environment where everyone feels like part of a family. They are dedicated to supporting every child's journey and take pride in helping students grow, succeed, and feel valued every day.
          </p>
        </div>

        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card slideshow */}
          <div className="relative">
            {/* Invisible tallest card to hold layout height */}
            <div aria-hidden className="invisible pointer-events-none">
              <div className="bg-white rounded-2xl p-8 border border-sky-100 shadow-sm flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full shrink-0" />
                  <div>
                    <p className="text-lg">&nbsp;</p>
                    <p className="text-sm">&nbsp;</p>
                  </div>
                </div>
                <div className="text-sm leading-relaxed flex flex-col gap-2">
                  {teachers[0].bio.split("<br>").map((part, j) => (
                    <p key={j}>{part}</p>
                  ))}
                </div>
              </div>
            </div>

            {teachers.map((teacher, i) => (
              <div
                key={teacher.name}
                className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
              >
                <div className="bg-white rounded-2xl p-8 border border-sky-100 shadow-sm h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-teal-700 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white text-xl font-bold">{teacher.name[0]}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sky-900 text-lg leading-tight">{teacher.name}</h3>
                      <p className="text-orange-500 text-sm font-semibold">{teacher.role}</p>
                    </div>
                  </div>
                  {teacher.quote && (
                    <p className="text-teal-700 font-semibold italic text-sm mb-3">"{teacher.quote}"</p>
                  )}
                  <div className="text-slate-600 text-sm leading-relaxed flex flex-col gap-2">
                    {teacher.bio.split("<br>").map((part, j) => (
                      <p key={j}>{part}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Prev / Next buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-teal-700 hover:bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors shadow-md z-10"
              aria-label="Previous teacher"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-teal-700 hover:bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors shadow-md z-10"
              aria-label="Next teacher"
            >
              ›
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 mt-6">
            {teachers.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-orange-500" : "bg-sky-300"}`}
                aria-label={`Go to teacher ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
