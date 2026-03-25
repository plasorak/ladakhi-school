const pillars = [
  {
    emoji: "🌟",
    bg: "bg-sky-100",
    title: "Our Vision",
    text: "To provide quality education that is accessible to all, celebrating diversity and fostering an inclusive environment where every child can thrive, while preserving Ladakhi language, art, and culture.",
  },
  {
    emoji: "🌿",
    bg: "bg-orange-100",
    title: "Organic Learning",
    text: "We offer a dynamic curriculum with humane assessment methods, allowing students to learn at their own pace and follow their unique paths — free from harmful comparisons and societal pressures.",
  },
  {
    emoji: "💙",
    bg: "bg-teal-100",
    title: "Fearless & Value-Based",
    text: "We cultivate values through dialogue and practice, encouraging students to question everything in an environment free from fear, comparison, and competition.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-sky-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Us</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-8"></div>
          <p className="text-lg text-sky-200 max-w-3xl mx-auto leading-relaxed">
            Himalayan International School Ladakh, previously known as <strong>Kunfan School</strong>, was
            established in <strong>1994</strong> by a group of dedicated individuals committed to improving
            education in Ladakh. The school currently enrols <strong>64 students</strong> and employs{" "}
            <strong>10 teachers</strong>, maintaining a low student-to-teacher ratio for personalised learning.
          </p>
          <p className="text-lg text-sky-200 max-w-3xl mx-auto leading-relaxed">
            Many of the students come from underprivileged backgrounds, with the school providing scholarships
            that make education accessible to those who would otherwise not have the opportunity to attend.
            The school is supported by donors who fund the students' fees, enabling it to continue offering
            education to those in need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="bg-sky-800 rounded-2xl p-8 border border-sky-700">
              <div className="text-4xl mb-4">{p.emoji}</div>
              <h3 className="text-xl font-bold text-orange-400 mb-3">{p.title}</h3>
              <p className="text-sky-200 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
