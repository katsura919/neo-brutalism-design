"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-neo-bg border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        <a href="#" className="flex items-center gap-3 shrink-0" aria-label="Abie Maxey home">
          <div className="bg-neo-secondary border-4 border-black shadow-[4px_4px_0px_0px_#000] px-3 py-1.5 -rotate-1">
            <span className="font-bold text-xl uppercase tracking-tighter leading-none">ABIE</span>
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-bold text-[10px] uppercase tracking-[0.2em]">
              UGC + WEB DEV
            </div>
            <div className="font-bold text-[10px] uppercase tracking-[0.2em]">
              DIGITAL NOMAD STUDIO
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-bold text-sm uppercase tracking-wide px-4 py-2 border-4 border-transparent hover:border-black hover:bg-neo-accent hover:shadow-[4px_4px_0px_0px_#000] transition-all duration-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center h-12 px-6 bg-neo-accent border-4 border-black font-bold text-sm uppercase tracking-wide shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-px hover:-translate-y-px active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100"
          >
            Book Free Consult
          </a>

          <button
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="lg:hidden flex items-center justify-center w-12 h-12 border-4 border-black bg-white shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 font-bold text-xl"
          >
            {open ? "X" : "O"}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t-4 border-black bg-neo-bg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-bold text-base uppercase tracking-wide px-4 py-3 border-4 border-black bg-white shadow-[4px_4px_0px_0px_#000] hover:bg-neo-secondary transition-colors duration-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="font-bold text-base uppercase tracking-wide px-4 py-4 border-4 border-black bg-neo-accent shadow-[4px_4px_0px_0px_#000] text-center mt-2"
            >
              Book Free Consult
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
