const pillars = [
  {
    emoji: "🌟",
    bg: "bg-sky-50",
    title: "Our Vision",
    text: "To provide quality education that is accessible to all, celebrating diversity and fostering an inclusive environment where every child can thrive, while preserving Ladakhi language, art, and culture.",
  },
  {
    emoji: "🌿",
    bg: "bg-amber-50",
    title: "Organic Learning",
    text: "We offer a dynamic curriculum with humane assessment methods, allowing students to learn at their own pace and follow their unique paths — free from harmful comparisons and societal pressures.",
  },
  {
    emoji: "💙",
    bg: "bg-teal-50",
    title: "Fearless & Value-Based",
    text: "We cultivate values through dialogue and practice, encouraging students to question everything in an environment free from fear, comparison, and competition.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">About Us</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Himalayan International School Ladakh, previously known as <strong>Kunfan School</strong>, was
            established in <strong>1994</strong> by a group of dedicated individuals committed to improving
            education in Ladakh. The school currently enrols <strong>64 students</strong> and employs{" "}
            <strong>ten teachers</strong>, maintaining a low student-to-teacher ratio for personalised learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className={`${p.bg} rounded-2xl p-8 border border-slate-100`}>
              <div className="text-4xl mb-4">{p.emoji}</div>
              <h3 className="text-xl font-bold text-sky-900 mb-3">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
