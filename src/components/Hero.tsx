const STATS = [
  { value: "100+", label: "Videos Delivered" },
  { value: "5 Years", label: "In Development" },
  { value: "30+", label: "Brand Launches" },
];

const LOGOS = ["DTC BRANDS", "SaaS TEAMS", "FOUNDER-LED STARTUPS", "AGENCIES"];

export default function Hero() {
  return (
    <section className="bg-neo-bg border-b-4 border-black relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-14 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-neo-muted border-4 border-black shadow-[4px_4px_0px_0px_#000] px-4 py-2 -rotate-1 select-none">
              <span className="font-bold text-xs uppercase tracking-[0.18em]">
                Digital Nomad + Software Engineer
              </span>
            </div>

            <h1 className="font-black text-5xl sm:text-7xl lg:text-[80px] leading-none tracking-tighter uppercase">
              UGC Videos +{" "}
              <span className="inline-block bg-neo-accent border-4 border-black shadow-[6px_6px_0px_0px_#000] px-3 my-2 -rotate-1">
                Web Development
              </span>
              <br />
              For Brands That Move
            </h1>

            <p className="font-bold text-lg sm:text-xl leading-relaxed border-l-8 border-black pl-6 max-w-xl">
              Digital nomad and software engineer helping brands grow with
              high-converting UGC and modern web builds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="flex items-center justify-center h-14 px-8 bg-neo-accent border-4 border-black font-bold text-sm uppercase tracking-wide shadow-[6px_6px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-x-px hover:-translate-y-px active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 w-full sm:w-auto"
              >
                Book a Free Consult
              </a>
              <a
                href="#works"
                className="flex items-center justify-center h-14 px-8 bg-white border-4 border-black font-bold text-sm uppercase tracking-wide shadow-[6px_6px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-x-px hover:-translate-y-px active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100 w-full sm:w-auto"
              >
                View Work
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t-4 border-black">
              {STATS.map((item) => (
                <div key={item.label}>
                  <p className="font-black text-3xl sm:text-4xl tracking-tighter leading-none">
                    {item.value}
                  </p>
                  <p className="font-bold text-xs uppercase tracking-widest mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {LOGOS.map((logo) => (
                <span
                  key={logo}
                  className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] px-3 py-1.5 font-bold text-xs uppercase tracking-widest -rotate-1"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative h-[560px]">
            <div className="absolute inset-x-4 top-0 h-[320px] bg-neo-secondary border-4 border-black shadow-[10px_10px_0px_0px_#000] -rotate-2 p-5">
              <div className="h-full border-4 border-black bg-neo-bg flex items-center justify-center">
                <span className="font-black text-4xl uppercase tracking-tight text-center leading-none px-3">
                  Full-Bleed
                  <br />
                  Travel Shot
                </span>
              </div>
            </div>

            <div className="absolute left-0 bottom-10 w-64 bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] rotate-2 p-4">
              <div className="border-4 border-black bg-neo-muted h-36 flex items-center justify-center">
                <span className="font-bold text-sm uppercase tracking-widest text-center px-2">
                  UGC Frame
                </span>
              </div>
            </div>

            <div className="absolute right-0 bottom-0 w-56 bg-neo-accent border-4 border-black shadow-[8px_8px_0px_0px_#000] -rotate-1 p-4">
              <div className="border-4 border-black bg-white h-32 flex items-center justify-center">
                <span className="font-bold text-sm uppercase tracking-widest text-center px-2">
                  Website Preview
                </span>
              </div>
            </div>

            <div className="absolute top-8 left-0 bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000] px-4 py-2 -rotate-3 animate-bounce">
              <span className="font-bold text-xs uppercase tracking-widest">
                Fast Creator Delivery
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
