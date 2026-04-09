type Work = {
  category: string;
  client: string;
  title: string;
  result: string;
  thumbBg: string;
  thumbLabel: string;
};

const WORKS: Work[] = [
  {
    category: "UGC Campaign",
    client: "Peak Hydration",
    title: "Hook-First Creator Ads",
    result: "+28% CTR in 3 weeks with 12 UGC video variants.",
    thumbBg: "bg-neo-accent",
    thumbLabel: "UGC",
  },
  {
    category: "Website Launch",
    client: "Nord Row Studio",
    title: "Conversion Landing Build",
    result: "Shipped in 10 days with a 2.1x increase in lead form submissions.",
    thumbBg: "bg-neo-muted",
    thumbLabel: "WEB",
  },
  {
    category: "UGC Testing",
    client: "Luma Skincare",
    title: "Monthly Creative Sprint",
    result: "Reduced CPA by 19% after script and opening-frame A/B tests.",
    thumbBg: "bg-black",
    thumbLabel: "ADS",
  },
  {
    category: "Web Optimization",
    client: "Arcflow App",
    title: "Performance and SEO Refresh",
    result: "Core pages loaded 41% faster and organic signups grew 23%.",
    thumbBg: "bg-neo-secondary",
    thumbLabel: "SPEED",
  },
  {
    category: "Content Repurpose",
    client: "Fable Fitness",
    title: "UGC to Multi-Channel Pack",
    result: "Turned 8 clips into 34 assets for Reels, TikTok, and paid social.",
    thumbBg: "bg-neo-accent",
    thumbLabel: "REPURPOSE",
  },
  {
    category: "Website + UGC",
    client: "Founder Circle",
    title: "Launch Bundle",
    result: "New launch page and ad creative drove first 150 waitlist signups.",
    thumbBg: "bg-neo-muted",
    thumbLabel: "BUNDLE",
  },
];

export default function SampleWorks() {
  return (
    <section
      id="works"
      className="bg-neo-secondary border-b-4 border-black py-20 sm:py-28 relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-black text-white border-4 border-black shadow-[4px_4px_0px_0px_#000] px-4 py-2 -rotate-1 mb-6 select-none">
            <span className="font-bold text-xs uppercase tracking-widest">Selected Work</span>
          </div>

          <h2 className="font-black text-5xl sm:text-7xl lg:text-8xl leading-none tracking-tighter uppercase">
            Recent Results
            <br />
            <span style={{ WebkitTextStroke: "3px #000", color: "transparent" }}>
              Across UGC + Web
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WORKS.map((work) => (
            <article
              key={work.title}
              className="group bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-200 flex flex-col"
            >
              <div
                className={`${work.thumbBg} border-b-4 border-black h-44 relative overflow-hidden flex items-center justify-center`}
              >
                <span
                  aria-hidden
                  className="font-black text-[80px] leading-none tracking-tighter select-none pointer-events-none"
                  style={{
                    WebkitTextStroke: "2px rgba(255,255,255,0.35)",
                    color: "transparent",
                  }}
                >
                  {work.thumbLabel}
                </span>

                <div className="absolute top-4 left-4 bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] px-3 py-1 -rotate-2 select-none">
                  <span className="font-bold text-xs uppercase tracking-widest">{work.category}</span>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <p className="font-bold text-xs uppercase tracking-widest mb-1">{work.client}</p>
                  <h3 className="font-black text-xl uppercase tracking-tight leading-snug">{work.title}</h3>
                </div>

                <p className="font-bold text-sm leading-relaxed flex-1 border-l-4 border-black pl-4">
                  {work.result}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center h-10 px-5 self-start border-4 border-black bg-neo-bg font-bold text-xs uppercase tracking-wide shadow-[4px_4px_0px_0px_#000] hover:bg-black hover:text-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100"
                >
                  Discuss Similar Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
