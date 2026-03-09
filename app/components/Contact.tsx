export default function Contact() {
  return (
    <>
      <section id="contact" className="py-20 bg-sky-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* Address */}
            <div className="text-center">
              <div className="w-14 h-14 bg-sky-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-sky-200" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
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

            {/* Phone */}
            <div className="text-center">
              <div className="w-14 h-14 bg-sky-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-sky-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">Phone</h3>
              <p className="text-sky-300 text-sm leading-relaxed">
                <a href="tel:+917051120583" className="hover:text-white transition-colors block">
                  +91 70511 20583
                </a>
                <a href="tel:+919622979114" className="hover:text-white transition-colors block">
                  +91 96229 79114
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="w-14 h-14 bg-sky-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-sky-200" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">Email</h3>
              <a
                href="mailto:ladakhhisl@gmail.com"
                className="text-sky-300 hover:text-white transition-colors text-sm"
              >
                ladakhhisl@gmail.com
              </a>
            </div>

            {/* Facebook */}
            <div className="text-center">
              <div className="w-14 h-14 bg-sky-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-sky-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.563 9.876v-6.988H7.898V12h2.539V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.888h-2.33v6.988A10.002 10.002 0 0 0 22 12z" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">Facebook</h3>
              <a
                href="https://www.facebook.com/p/Himalayan-International-School-Ladakh-HISL-61553086157251/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 hover:text-white transition-colors text-sm"
              >
                HISL on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-sky-950 text-sky-300 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-semibold text-white mb-1">Himalayan International School Ladakh</p>
          {/* <p className="text-sm mb-4">Dambuchan, Leh · Union Territory of Ladakh 194101</p> */}
          <p className="text-xs text-sky-600">
            © {new Date().getFullYear()} Himalayan International School Ladakh. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
