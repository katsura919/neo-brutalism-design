type Plan = {
  name: string;
  headline: string;
  desc: string;
  features: string[];
  featured?: boolean;
  cardBg: string;
  ctaBg: string;
  ctaText: string;
};

const PLANS: Plan[] = [
  {
    name: "Starter UGC",
    headline: "3 videos / month",
    desc: "A monthly creator package for consistent short-form output.",
    features: ["Concept + scripting", "Filming + editing", "Hooks, captions, 1 revision round"],
    cardBg: "bg-white",
    ctaBg: "bg-neo-accent",
    ctaText: "text-black",
  },
  {
    name: "Growth UGC",
    headline: "8 videos / month",
    desc: "High-volume creative testing for scaling paid and organic channels.",
    features: ["Everything in Starter", "Variant-focused deliverables", "Priority turnaround support"],
    featured: true,
    cardBg: "bg-neo-accent",
    ctaBg: "bg-black",
    ctaText: "text-white",
  },
  {
    name: "Web Dev Sprint",
    headline: "Single or multi-page site",
    desc: "A focused build sprint for launches, offers, or full website refreshes.",
    features: ["UX wireframe + build", "Performance optimization", "SEO foundation + handoff"],
    cardBg: "bg-neo-secondary",
    ctaBg: "bg-white",
    ctaText: "text-black",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-neo-muted border-b-4 border-black py-20 sm:py-28 relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] px-4 py-2 rotate-1 mb-6 select-none">
              <span className="font-bold text-xs uppercase tracking-widest">Pricing</span>
            </div>

            <h2 className="font-black text-5xl sm:text-7xl lg:text-8xl leading-none tracking-tighter uppercase">
              Pick Your
              <span className="inline-block bg-neo-secondary border-4 border-black px-3 shadow-[6px_6px_0px_0px_#000] rotate-1 my-2 ml-2">
                Build Path
              </span>
            </h2>
          </div>

          <p className="font-bold text-lg max-w-sm leading-relaxed lg:text-right">
            All packages include a discovery call and revision rounds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`${plan.cardBg} border-4 border-black relative flex flex-col ${
                plan.featured
                  ? "shadow-[14px_14px_0px_0px_#000] md:-translate-y-6"
                  : "shadow-[8px_8px_0px_0px_#000]"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white border-4 border-black px-5 py-1 whitespace-nowrap select-none z-10">
                  <span className="font-bold text-xs uppercase tracking-widest">Most Popular</span>
                </div>
              )}

              <div className="p-6 border-b-4 border-black">
                <p className="font-bold text-xs uppercase tracking-widest mb-2">{plan.name}</p>
                <h3 className="font-black text-4xl leading-none tracking-tighter">{plan.headline}</h3>
                <p className="font-bold text-sm leading-relaxed mt-3">{plan.desc}</p>
              </div>

              <ul className="p-6 flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="font-bold text-sm">
                    + {feature}
                  </li>
                ))}
              </ul>

              <div className="p-6 pt-0">
                <a
                  href="#contact"
                  className={`flex items-center justify-center h-14 w-full border-4 border-black font-bold text-sm uppercase tracking-wide shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-x-px hover:-translate-y-px active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 ${plan.ctaBg} ${plan.ctaText}`}
                >
                  Book Discovery Call
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center h-14 px-10 bg-black text-white border-4 border-black font-bold text-sm uppercase tracking-wide shadow-[6px_6px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-x-px hover:-translate-y-px active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-100"
          >
            Request Custom Quote
          </a>
          <p className="font-bold text-sm uppercase tracking-wide text-center">
            Mixed bundles available for UGC + Web Development.
          </p>
        </div>
      </div>
    </section>
  );
}
