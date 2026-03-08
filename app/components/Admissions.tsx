const steps = [
  {
    num: "01",
    title: "Admission Notice",
    desc: "We share admission updates through TV, radio, and parent/community groups.",
  },
  {
    num: "02",
    title: "Fill the Form",
    desc: "Admission forms are filled out at the school office. A teacher will assist parents at every step to make the process smooth and easy.",
  },
  {
    num: "03",
    title: "Submit Documents",
    desc: "Bring originals and photocopies of: Birth Certificate, Aadhaar Card, School Leaving Certificate (if changing schools), and previous report card (if available).",
  },
  {
    num: "04",
    title: "Admission Test",
    desc: "Students take a short Level Test to help us understand their current learning level.",
  },
  {
    num: "05",
    title: "Result & Confirmation",
    desc: "Results are shared soon after the test. Selected students confirm admission by paying the required fees within the given time.",
  },
];

const fees = [
  { class: "Nursery – UKG", monthly: "₹1,200", yearly: "₹14,400", usd: "$350", eur: "€300", gbp: "—" },
  { class: "1st – 3rd Class", monthly: "₹1,450", yearly: "₹17,400", usd: "—", eur: "—", gbp: "—" },
  { class: "4th – 5th Class", monthly: "₹1,550", yearly: "₹18,600", usd: "—", eur: "—", gbp: "—" },
  { class: "6th – 8th Class", monthly: "₹1,650", yearly: "₹19,800", usd: "—", eur: "—", gbp: "—" },
];

export default function Admissions() {
  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Admissions process */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">Admissions</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-slate-600">
            Admissions are open in <strong>November</strong> and <strong>March</strong>.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-20">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-5 mb-8">
              <div className="flex-shrink-0 w-12 h-12 bg-sky-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {step.num}
              </div>
              <div className="pt-2.5">
                <h3 className="font-bold text-sky-900 mb-1">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Fee structure */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">Fee Structure</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-xl mx-auto">
            We aim to provide quality education at an affordable cost. Our fees are simple and transparent.
          </p>
        </div>

        <div className="overflow-x-auto max-w-3xl mx-auto mb-8">
          <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-sm border border-slate-100">
            <thead>
              <tr className="bg-sky-900 text-white text-sm">
                <th className="text-left px-6 py-4 font-semibold">Class</th>
                <th className="text-right px-6 py-4 font-semibold">Monthly (₹)</th>
                <th className="text-right px-6 py-4 font-semibold">Yearly (₹)</th>
                <th className="text-right px-6 py-4 font-semibold">USD</th>
                <th className="text-right px-6 py-4 font-semibold">EUR</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((row, i) => (
                <tr key={row.class} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-6 py-4 font-medium text-sky-900 text-sm">{row.class}</td>
                  <td className="px-6 py-4 text-right text-slate-600 text-sm">{row.monthly}</td>
                  <td className="px-6 py-4 text-right text-slate-600 text-sm">{row.yearly}</td>
                  <td className="px-6 py-4 text-right text-slate-600 text-sm">{row.usd}</td>
                  <td className="px-6 py-4 text-right text-slate-600 text-sm">{row.eur}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="max-w-3xl mx-auto bg-amber-50 rounded-2xl p-6 border border-amber-100">
          <h3 className="font-bold text-sky-900 mb-2">Sponsorship Programme</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Currently, <strong>30 students</strong> (almost 50% of total enrolment) are fully sponsored
            by volunteers, and one student is sponsored by the school itself. For fees in other currencies,
            please email us directly.
          </p>
        </div>
      </div>
    </section>
  );
}
