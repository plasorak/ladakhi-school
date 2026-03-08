"use client";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#offer", label: "What We Offer" },
  { href: "#team", label: "Our Team" },
  { href: "#students", label: "Students" },
  { href: "#admissions", label: "Admissions" },
  { href: "#help", label: "How to Help" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-sky-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-bold text-sm text-amber-400">Himalayan International School</span>
          <span className="text-xs text-sky-200">Leh, Ladakh · Est. 1994</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-amber-400 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="lg:hidden bg-sky-800 px-4 pb-4 flex flex-col gap-3 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block py-1 hover:text-amber-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
