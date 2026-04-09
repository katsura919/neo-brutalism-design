import { Monitor, PenLine, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  points: string[];
  cardBg: string;
  sticker: string;
};

const SERVICES: Service[] = [
  {
    icon: PenLine,
    title: "UGC Video Packages",
    desc: "Concepts, scripting, filming, editing, hooks, captions, and platform variants.",
    points: ["Creative concepts", "Native hooks", "Edit variations"],
    cardBg: "bg-white",
    sticker: "bg-neo-accent",
  },
  {
    icon: Monitor,
    title: "Web Development",
    desc: "Landing pages and full websites with performance optimization and SEO-ready structure.",
    points: ["Landing pages", "Full-site builds", "Speed + SEO basics"],
    cardBg: "bg-neo-secondary",
    sticker: "bg-white",
  },
  {
    icon: Target,
    title: "Optional Add-ons",
    desc: "Creative strategy, A/B testing, and content repurposing to extend campaign output.",
    points: ["Creative strategy", "A/B testing", "Content repurposing"],
    cardBg: "bg-neo-muted",
    sticker: "bg-white",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-neo-bg border-b-4 border-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-neo-secondary border-4 border-black shadow-[4px_4px_0px_0px_#000] px-4 py-2 rotate-1 mb-6 select-none">
            <span className="font-bold text-xs uppercase tracking-widest">Services</span>
          </div>

          <h2 className="font-black text-5xl sm:text-7xl lg:text-8xl leading-none tracking-tighter uppercase">
            Built For
            <span className="inline-block bg-neo-accent border-4 border-black px-3 shadow-[6px_6px_0px_0px_#000] -rotate-1 my-2 ml-2">
              Creator-Led
            </span>
            <br />
            Brand Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`${service.cardBg} border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-200 flex flex-col relative`}
              >
                <div className="border-b-4 border-black p-6 flex items-center justify-between">
                  <div className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] p-3">
                    <Icon className="w-7 h-7" strokeWidth={3} />
                  </div>
                  <span className="font-black text-6xl leading-none">0{index + 1}</span>
                </div>

                <div className="p-6 flex flex-col gap-5 flex-1">
                  <div className={`${service.sticker} border-4 border-black shadow-[4px_4px_0px_0px_#000] px-3 py-2 inline-block -rotate-1 self-start`}>
                    <span className="font-bold text-xs uppercase tracking-widest">Core Offer</span>
                  </div>

                  <h3 className="font-black text-2xl uppercase tracking-tight leading-tight">
                    {service.title}
                  </h3>

                  <p className="font-bold text-sm leading-relaxed">{service.desc}</p>

                  <ul className="space-y-2 border-t-4 border-black pt-4">
                    {service.points.map((point) => (
                      <li key={point} className="font-bold text-sm uppercase tracking-wide">
                        + {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
