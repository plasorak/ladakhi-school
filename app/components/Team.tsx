const team = [
  {
    name: "Tsewang Norboo",
    role: "Executive Director",
    bio: "Mr. Norboo is a highly experienced educator and administrator, having served in various leadership roles within the Government’s Education Department for over two decades. He has been a teacher, project officer for adult education, and held positions such as Zonal Education Officer and Deputy Chief Education Officer. Throughout his career and as the Executive Director of an NGO that works closely with the school, he has contributed significantly to social development and education in the region. His dedication and expertise continue to guide the vision and growth of Himalayan International School Ladakh.",
  },
  {
    name: "Tsering Morup",
    role: "Core Committee Member",
    bio: "Mr. Tsering Morup brings a wealth of experience in education and community service to Himalayan International School Ladakh. He has served as a teacher and head assistant in the Education Department, and has also worked with the Animal Husbandry Department. Mr. Morup is a founder member of several social welfare organisations, including Lamdon Social Welfare Society and Lotsava Lamdon Model School. He has actively participated in national and international conferences, seminars, and workshops, contributing to the development of education and social welfare in Ladakh.",
  },
  {
    name: "Padma Tashi",
    role: "Core Committee Member",
    bio: "Padma Tashi is a dedicated leader and social worker with extensive experience in community development and education in Ladakh. He has served on district-level monitoring and anti-smoking committees, worked with the Ladakh Ecological Development Group, and is the Executive Director of Rural Development and You (RDY) since 2004. Padma Tashi has contributed voluntary services to youth programmes and is actively involved with several community-based organisations and private schools. He regularly participates in national and international seminars, workshops, and conferences, helping to advance education and social welfare in the region.",
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
