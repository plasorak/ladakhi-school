const team = [
  {
    name: "Tsewang Norboo",
    role: "Executive Director",
    bio: "A highly experienced educator and administrator with over two decades of leadership in the Government's Education Department. He has served as a teacher, project officer for adult education, Zonal Education Officer, and Deputy Chief Education Officer, contributing significantly to social development and education in Ladakh.",
  },
  {
    name: "Tsering Morup",
    role: "Core Committee Member",
    bio: "Brings a wealth of experience in education and community service, having served as a teacher and head assistant in the Education Department. A founder member of Lamdon Social Welfare Society and Lotsava Lamdon Model School, with active participation in national and international conferences.",
  },
  {
    name: "Padma Tashi",
    role: "Core Committee Member",
    bio: "Director of Live to Love India and Executive Director of Rural Development and You (RDY) since 2004. He leads initiatives in education, environment, and rural empowerment, and is a member of CENSFOOD advancing climate-resilient livelihoods across remote Himalayan villages.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-teal-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Management Team</h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-teal-700 rounded-2xl p-8 border border-teal-600 text-center"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">{member.name[0]}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
              <p className="text-orange-400 text-sm font-semibold mb-4">{member.role}</p>
              <p className="text-teal-200 text-sm leading-relaxed text-left">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
