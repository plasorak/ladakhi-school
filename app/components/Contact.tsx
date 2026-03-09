export default function Contact() {
  return (
    <>
      <section id="contact" className="py-20 bg-sky-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 bg-sky-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-bold text-white mb-2">Address</h3>
              <p className="text-sky-300 text-sm leading-relaxed">
                Himalayan International School
                <br />
                Dambuchan, Leh
                <br />
                Near Ladakh Heart Foundation
                <br />
                Union Territory of Ladakh 194101
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-sky-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-bold text-white mb-2">Phone</h3>
              <p className="text-sky-300 text-sm leading-relaxed">
                <a href="tel:+917051120583" className="hover:text-white transition-colors block">
                  +91 70511 20583
                </a>
                <a href="tel:+919622979114" className="hover:text-white transition-colors block">
                  +91 9622979114
                </a>
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-sky-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="font-bold text-white mb-2">Email</h3>
              <a
                href="mailto:ladakhhisl@gmail.com"
                className="text-sky-300 hover:text-white transition-colors text-sm"
              >
                ladakhhisl@gmail.com
              </a>
              <p className="text-sky-600 text-xs mt-2">We also have Instagram &amp; Facebook pages.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-sky-950 text-sky-300 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-semibold text-white mb-1">Himalayan International School Ladakh</p>
          <p className="text-sm mb-4">Dambuchan, Leh · Union Territory of Ladakh 194101</p>
          <p className="text-xs text-sky-600">
            © {new Date().getFullYear()} Himalayan International School Ladakh. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
