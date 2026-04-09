const VALUES = [
  { title: "Speed", desc: "Fast turnarounds for launches, tests, and edits." },
  {
    title: "Authenticity",
    desc: "Creator-first storytelling that feels native to each platform.",
  },
  {
    title: "Measurable Growth",
    desc: "Every deliverable ties back to conversion and performance.",
  },
];

const SNAPSHOTS = [
  { label: "TRAVEL LOG", color: "bg-neo-secondary", rotate: "-rotate-2" },
  { label: "UGC SHOOT", color: "bg-neo-accent", rotate: "rotate-1" },
  { label: "SITE BUILD", color: "bg-neo-muted", rotate: "-rotate-1" },
  { label: "CLIENT CALL", color: "bg-white", rotate: "rotate-2" },
];

export default function About() {
  return (
    <section id="about" className="bg-neo-muted border-b-4 border-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] px-4 py-2 -rotate-1 mb-6 select-none">
              <span className="font-bold text-xs uppercase tracking-widest">
                About Abie
              </span>
            </div>

            <h2 className="font-bold text-5xl sm:text-7xl leading-none tracking-tighter uppercase">
              Engineer Brain.
              <br />
              <span className="inline-block bg-neo-secondary border-4 border-black px-3 shadow-[6px_6px_0px_0px_#000] rotate-1 my-2">
                Creator Energy.
              </span>
            </h2>

            <p className="font-bold text-lg sm:text-xl leading-relaxed mt-6 border-l-8 border-black pl-5">
              I am Abie Maxey, a software engineer and digital nomad helping
              brands grow with UGC videos and modern websites that convert.
              I blend rapid production, clean implementation, and clear
              performance goals into every sprint.
            </p>

            <p className="font-bold text-base sm:text-lg leading-relaxed mt-5">
              Currently based in Chiang Mai and traveling worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {SNAPSHOTS.map((snapshot) => (
              <div
                key={snapshot.label}
                className={`${snapshot.color} ${snapshot.rotate} border-4 border-black shadow-[8px_8px_0px_0px_#000] h-36 sm:h-40 flex items-center justify-center`}
              >
                <span className="font-bold text-sm uppercase tracking-widest text-center px-2">
                  {snapshot.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {VALUES.map((value) => (
            <article
              key={value.title}
              className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000] p-6 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_#000] transition-all duration-200"
            >
              <h3 className="font-bold text-2xl uppercase tracking-tight">{value.title}</h3>
              <p className="font-bold text-sm leading-relaxed mt-3">{value.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
