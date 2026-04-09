const ITEMS = [
  "UGC VIDEOS THAT CONVERT",
  "WEB BUILDS THAT SHIP FAST",
  "CREATOR-LED STRATEGY",
  "A/B TESTING SUPPORT",
  "TRAVELING WORLDWIDE",
];

const MARQUEE_ITEMS = [...ITEMS, ...ITEMS];

export default function Banner() {
  return (
    <div
      className="bg-neo-accent border-b-4 border-black overflow-hidden py-3 select-none"
      aria-label="Service highlights"
    >
      <div className="animate-marquee" aria-hidden>
        {MARQUEE_ITEMS.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-3 font-bold text-sm uppercase tracking-[0.15em] px-6"
          >
            <span>{item}</span>
            <span>+</span>
          </span>
        ))}
      </div>
    </div>
  );
}
