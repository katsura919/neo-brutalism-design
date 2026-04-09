type Testimonial = {
  quote: string;
  author: string;
  role: string;
  outcome: string;
  cardBg: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Abie rebuilt our launch page and produced ad-ready UGC clips in the same sprint. Our launch felt cohesive for the first time.",
    author: "Mia Torres",
    role: "Founder, Solora Labs",
    outcome: "+28% CTR in first paid campaign",
    cardBg: "bg-neo-bg",
  },
  {
    quote:
      "The web sprint moved fast without sacrificing quality. We had a clean site live in under two weeks and immediately started booking demos.",
    author: "Jordan Kim",
    role: "Co-founder, Rallystack",
    outcome: "Launch completed in 10 days",
    cardBg: "bg-neo-secondary",
  },
  {
    quote:
      "Creative strategy plus UGC variants gave us way more testing power. We finally had enough iterations to learn what actually converts.",
    author: "Leah Grant",
    role: "Growth Lead, Tidal Well",
    outcome: "19% lower CPA after variant testing",
    cardBg: "bg-neo-muted",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-black border-b-4 border-black py-20 sm:py-28 relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 2px, transparent 2.5px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-neo-accent border-4 border-black shadow-[4px_4px_0px_0px_#fff] px-4 py-2 -rotate-1 mb-6 select-none">
            <span className="font-bold text-xs uppercase tracking-widest">Testimonials</span>
          </div>

          <h2 className="font-black text-5xl sm:text-7xl lg:text-8xl leading-none tracking-tighter uppercase text-white">
            Founder Feedback
            <br />
            <span className="inline-block bg-neo-secondary border-4 border-black px-3 shadow-[6px_6px_0px_0px_#fff] rotate-1 my-2 text-black">
              From Real Builds
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.author}
              className={`${item.cardBg} border-4 border-white shadow-[8px_8px_0px_0px_#fff] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#fff] transition-all duration-200 p-7 flex flex-col gap-5`}
            >
              <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] px-3 py-2 -rotate-1 self-start">
                <span className="font-bold text-xs uppercase tracking-widest">{item.outcome}</span>
              </div>

              <p className="font-bold text-base leading-relaxed flex-1">&ldquo;{item.quote}&rdquo;</p>

              <footer className="border-t-4 border-black pt-4">
                <cite className="font-bold text-sm uppercase tracking-wide not-italic">
                  {item.author}
                </cite>
                <p className="font-bold text-xs uppercase tracking-widest mt-1">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
