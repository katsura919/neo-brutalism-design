const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

const SOCIALS = [
  { label: "TikTok", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="bg-neo-secondary border-b-4 border-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <p className="font-black text-2xl sm:text-3xl uppercase tracking-tight text-black">
            Ready to build your next launch?
          </p>
          <a
            href="mailto:hello@abiemaxey.com"
            className="inline-flex items-center justify-center h-14 px-8 bg-black text-white border-4 border-black font-bold text-sm uppercase tracking-wide shadow-[6px_6px_0px_0px_#000] hover:bg-neo-accent hover:text-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100"
          >
            hello@abiemaxey.com
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-10">
          <div className="space-y-5">
            <div className="inline-flex items-center bg-neo-accent border-4 border-white shadow-[4px_4px_0px_0px_#fff] px-3 py-1.5 -rotate-1">
              <span className="font-black text-xl uppercase tracking-tight text-black">ABIE MAXEY</span>
            </div>
            <p className="font-bold text-base leading-relaxed max-w-md">
              UGC videos and modern web development for brands that need speed,
              authenticity, and measurable growth.
            </p>
            <p className="font-bold text-sm uppercase tracking-widest">
              Working remotely worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-bold text-sm uppercase tracking-wide border-4 border-transparent hover:border-white hover:bg-white hover:text-black px-3 py-2 transition-all duration-100 self-start"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xs uppercase tracking-widest mb-4">Socials</h3>
            <div className="flex flex-col gap-2">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="font-bold text-sm uppercase tracking-wide border-4 border-white bg-black px-3 py-2 shadow-[4px_4px_0px_0px_#fff] hover:bg-neo-secondary hover:text-black hover:border-black transition-all duration-100 self-start"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t-4 border-white mt-12 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-bold text-xs uppercase tracking-widest">
            Bookings: calendly.com/abie-maxey
          </p>
          <p className="font-bold text-xs uppercase tracking-widest">
            2026 Abie Maxey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
