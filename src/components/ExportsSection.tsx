import { useEffect, useRef } from "react";
import { companyProfile, presenceHighlights } from "@/lib/company";

export default function ExportsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 70);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="presence" className="py-24 bg-[#F6F5EF]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 reveal">
          <div className="inline-flex items-center gap-2 rounded-xl border border-[#D6DEE9] bg-[#ECF2FB] px-3 py-2 mb-4">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-[#D3DEEE] text-[#2D6FE1]">
              <span className="text-sm font-bold">R</span>
            </span>
            <span className="text-xs font-semibold text-[#2D6FE1] tracking-[0.15em] uppercase">Presence & Reach</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-[#1962D3] mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Pan-India and International Delivery
          </h2>
          <p className="text-[#5A677A] max-w-3xl text-lg leading-relaxed">
            Together with our associate group companies, Volto Control LLP delivers industrial electrical and automation
            solutions across India and internationally with responsive engineering support.
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)] gap-7 mb-12">
          <div className="reveal-left rounded-2xl border border-[#E0E5EE] bg-[#F7F9FC] p-6">
            <div className="rounded-2xl border border-[#E1E6EF] bg-[#EEF3F9] p-5">
              <div className="relative overflow-hidden rounded-xl border border-[#DAE2ED] aspect-[16/9] bg-[#E8EEF5]">
                <img
                  src="/images/world-map.svg"
                  alt="World map graphic representing delivery reach"
                  className="absolute inset-0 h-full w-full object-cover brightness-[0.22] contrast-125 saturate-0"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_48%,rgba(11,191,241,0.18),rgba(231,238,246,0.28)_42%,rgba(231,238,246,0.56)_100%)]" />

                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M 30 58 Q 50 40 70 46" fill="none" stroke="rgba(8,177,231,0.86)" strokeWidth="0.45" strokeLinecap="round" />
                  <path d="M 30 58 Q 54 52 76 62" fill="none" stroke="rgba(8,177,231,0.55)" strokeWidth="0.35" strokeLinecap="round" />
                  <circle cx="30" cy="58" r="1.95" fill="rgba(8,177,231,0.25)" className="animate-pulse" />
                  <circle cx="70" cy="46" r="1.15" fill="rgba(8,177,231,0.18)" />
                  <circle cx="76" cy="62" r="1.15" fill="rgba(8,177,231,0.18)" />
                  <circle cx="30" cy="58" r="0.7" fill="#08B1E7" />
                  <circle cx="70" cy="46" r="0.45" fill="#08B1E7" />
                  <circle cx="76" cy="62" r="0.45" fill="#08B1E7" />
                </svg>

                <div className="absolute left-3 bottom-3 rounded-lg border border-[#D4E1F2] bg-white/80 px-2.5 py-1.5 text-[10px] font-semibold text-[#3474DE] tracking-wider uppercase">
                  Pan-India and International Delivery
                </div>
              </div>
            </div>
          </div>

          <aside className="reveal-right rounded-2xl border border-[#E0E5EE] bg-[#FBFCFE] p-5 sm:p-6">
            <h3 className="text-[30px] leading-none font-semibold text-[#111C2D]" style={{ fontFamily: "Syne, sans-serif" }}>
              Reach Highlights
            </h3>
            <p className="mt-2 text-sm text-[#66768B]">Solutions delivered through associate group companies and direct project execution</p>

            <div className="mt-6 space-y-3">
              {presenceHighlights.map((item) => (
                <div key={item.title} className="rounded-xl border border-[#E4E8EF] bg-white px-4 py-3">
                  <div className="text-sm font-semibold text-[#0A1628] mb-1">{item.title}</div>
                  <div className="text-sm text-[#66768B] leading-relaxed">{item.description}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {companyProfile.presence.map((item, i) => (
            <div
              key={item}
              className="reveal rounded-2xl border border-[#D8E0EA] bg-white p-5 shadow-[0_10px_24px_rgba(10,22,40,0.08)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1565C0] mb-2">Presence</div>
              <h4 className="text-xl font-semibold text-[#0A1628] mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                {item}
              </h4>
              <p className="text-sm text-[#5b6777] leading-relaxed">
                {item === "Pan-India"
                  ? "Project execution and service support across the country."
                  : "Support for overseas requirements through associate group companies."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
