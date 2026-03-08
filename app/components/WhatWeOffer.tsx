const offerings = [
  {
    emoji: "📚",
    bg: "bg-sky-50",
    title: "Classes",
    desc: "Kindergarten to Grade 8, with small class sizes for personalised attention.",
  },
  {
    emoji: "📖",
    bg: "bg-amber-50",
    title: "Curriculum",
    desc: "Mathematics, Social Studies, Science, English, Hindi, and Ladakhi language.",
  },
  {
    emoji: "🎭",
    bg: "bg-teal-50",
    title: "Activities",
    desc: "Traditional dance, games, sports, Parents' Day, picnics, and study tours.",
  },
  {
    emoji: "🏫",
    bg: "bg-rose-50",
    title: "Facilities",
    desc: "10 classrooms, office, kitchen, and a playground.",
  },
];

export default function WhatWeOffer() {
  return (
    <section id="offer" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">What We Offer</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((o) => (
            <div key={o.title} className={`${o.bg} rounded-2xl p-8`}>
              <div className="text-4xl mb-4">{o.emoji}</div>
              <h3 className="font-bold text-sky-900 text-lg mb-2">{o.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
