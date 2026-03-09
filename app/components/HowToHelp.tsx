const projects = [
  { name: "Kindergarten Section", cost: "₹1 Cr" },
  { name: "Playground", cost: "₹15 L" },
  { name: "Hostels for Students", cost: "₹1 Cr" },
  { name: "Dining Hall", cost: "₹50 L" },
];

const donateItems = [
  "Musical instruments — guitar, drum kit, piano, traditional Ladakhi instruments",
  "Sports equipment — carrom board, volleyball, cricket, badminton, basketball",
];

const volunteerRoles = ["Computer teacher", "Music teacher", "Games teacher"];

export default function HowToHelp() {
  return (
    <section id="help" className="py-20 bg-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">How You Can Help</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-xl mx-auto">
            Your support makes a real difference in the lives of children in Ladakh. Here are some
            ways you can contribute.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Donate to a project */}
          <div className="bg-slate-200 rounded-2xl p-8">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-5 text-sky-900">Donate to a Project</h3>
            <ul className="space-y-3">
              {projects.map((p) => (
                <li key={p.name} className="flex justify-between items-center text-sm border-b border-slate-300 pb-3">
                  <span className="text-slate-600">{p.name}</span>
                  <span className="font-bold text-sky-900">{p.cost}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-500 text-xs mt-4">Contact us to discuss landscaping and other projects.</p>
          </div>

          {/* Sponsor a child */}
          <div className="bg-slate-200 rounded-2xl p-8">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-4 text-sky-900">Sponsor a Child</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Sponsor a child&apos;s full year of education. See the fee structure above for costs in
              INR, USD, and EUR. For fees in GBP or other currencies, please get in touch — we are
              happy to help.
            </p>
            <a
              href="#contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Donate items + Volunteer */}
          <div className="bg-slate-200 rounded-2xl p-8">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-bold mb-3 text-sky-900">Donate Items</h3>
            <ul className="space-y-2 mb-7">
              {donateItems.map((item) => (
                <li key={item} className="text-slate-600 text-sm flex gap-2">
                  <span className="text-orange-500 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mb-3 text-sky-900">Volunteer</h3>
            <ul className="space-y-2">
              {volunteerRoles.map((role) => (
                <li key={role} className="text-slate-600 text-sm flex gap-2">
                  <span className="text-orange-500 flex-shrink-0">•</span>
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
