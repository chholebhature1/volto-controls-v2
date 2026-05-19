import { useEffect, useRef } from "react";
import { companyContact } from "@/lib/company";

const storyCards = [
  {
    title: "Electrical Panels",
    text: "Designing, manufacturing, and supplying high-quality electrical control panels for industries across India and internationally.",
  },
  {
    title: "Automation Systems",
    text: "Industrial electricals and automation delivered with responsive engineering support through our associate group companies.",
  },
  {
    title: "EPC Execution",
    text: "End-to-end project delivery from design and engineering through installation, commissioning, servicing, and maintenance.",
  },
];

const facts = [
  { label: "Founded", value: "2026" },
  { label: "Experience Since", value: "2016" },
  { label: "Location", value: companyContact.cityState },
  { label: "Systems", value: "Panels, Automation, EPC" },
  { label: "Exports", value: "5+ Export Markets" },
  { label: "Solutions", value: "Panels, Automation, EPC" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 90);
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
    <section id="about" className="section-white py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1565C0]" />
            <span className="text-xs font-semibold text-[#1565C0] tracking-widest uppercase">Our Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
            Electrical and Instrumentation Engineering from Faridabad
          </h2>
          <p className="text-[#555] max-w-3xl mx-auto text-base leading-relaxed">
            Volto Control LLP was founded in 2026. Our founder has been working in electrical engineering since 2016.
            Together with our associate group companies, we deliver end-to-end solutions in industrial electricals and automation across India and internationally.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="reveal-left space-y-6">
            <article className="overflow-hidden rounded-2xl border border-[#DCE8F8] bg-white shadow-sm">
              <img
                src="/images/Founder .jpeg"
                alt="Mr. Vidya Bhushan, Founder of Volto Control LLP"
                className="h-[320px] w-full object-contain object-center bg-[#F6FAFF]"
                loading="lazy"
                decoding="async"
              />
              <div className="p-5 sm:p-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#EAF4FF] text-[11px] tracking-wider uppercase font-bold text-[#1565C0] mb-3">
                  Founder
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1628] leading-tight mb-2">Mr. Vidya Bhushan</h3>
                <p className="text-sm font-semibold text-[#1565C0] uppercase tracking-wider mb-3">Founder, Volto Control LLP</p>
                <p className="text-sm text-[#44566C] leading-relaxed">
                  Electrical engineering leadership focused on reliability, precision, and long-term project execution.
                </p>
              </div>
            </article>

            <div className="rounded-2xl border border-[#DCE8F8] bg-gradient-to-br from-[#F6FAFF] to-white p-6 sm:p-7 shadow-sm space-y-5">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#EAF4FF] text-[11px] tracking-wider uppercase font-bold text-[#1565C0]">
                Company Profile
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1628] leading-tight">
                Volto Control LLP
              </h3>
              <p className="text-sm sm:text-[0.95rem] text-[#44566C] leading-relaxed">
                Volto Control LLP was founded in 2026 and is headquartered in Faridabad, Haryana. Our founder has been working in electrical engineering since 2016, and together with our associate group companies we deliver end-to-end solutions in industrial electricals and automation across India and internationally.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Faridabad", "2026", "2016", "Automation", "EPC"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 text-xs font-medium bg-[#F5F7FA] border border-[#E2E8F0] text-[#0A1628] rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal-right space-y-5">
            <blockquote className="cyan-border-left mb-2">
              <p className="text-lg italic text-[#333] leading-relaxed">
                "We don't just manufacture panels — we engineer reliability. Every project we undertake is backed by founder experience since 2016, precision, passion, and industrial expertise."
              </p>
              <footer className="mt-3 text-sm text-[#1565C0] font-semibold">
                - Mr. Vidya Bhushan, Founder, Volto Control LLP
              </footer>
            </blockquote>

            {storyCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-[#DCE8F8] bg-white p-5 sm:p-6 shadow-sm">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#EAF4FF] text-[11px] tracking-wider uppercase font-bold text-[#1565C0] mb-3">
                  {card.title}
                </div>
                <p className="text-sm sm:text-[0.95rem] text-[#44566C] leading-relaxed">
                  {card.text}
                </p>
              </article>
            ))}

            <div className="rounded-2xl border border-[#DCE8F8] bg-gradient-to-br from-[#F6FAFF] to-white p-5 sm:p-6 shadow-sm">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {facts.map((fact) => (
                  <div key={fact.label} className="rounded-xl border border-[#E6ECF5] bg-white px-4 py-3">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5C7192]">{fact.label}</div>
                    <div className="mt-1 text-sm font-semibold text-[#0A1628] leading-relaxed">{fact.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
