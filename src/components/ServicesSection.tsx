import { useEffect, useRef } from "react";

const services = [
  {
    id: "panels",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="32" height="28" rx="3" stroke="#1565C0" strokeWidth="2"/>
        <rect x="8" y="10" width="10" height="8" rx="1.5" stroke="#1565C0" strokeWidth="1.5"/>
        <rect x="22" y="10" width="10" height="8" rx="1.5" stroke="#1565C0" strokeWidth="1.5"/>
        <line x1="8" y1="23" x2="32" y2="23" stroke="#00BCD4" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="27" x2="24" y2="27" stroke="#00BCD4" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Custom Electrical Panels",
    tag: "Core Product",
    desc: "LT switchboards, MCCs, PCCs, AMF panels, distribution boards, and speciality control panels — all custom-built to IS/IEC standards for industrial and commercial facilities.",
    highlights: ["LT Switch Boards", "Motor Control Centres", "AMF & DG Panels", "APFC Panels"],
  },
  {
    id: "epc",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" aria-hidden="true">
        <path d="M6 34 L20 8 L34 34" stroke="#1565C0" strokeWidth="2" strokeLinejoin="round"/>
        <line x1="10" y1="26" x2="30" y2="26" stroke="#00BCD4" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="18" r="3" stroke="#1565C0" strokeWidth="1.5"/>
      </svg>
    ),
    title: "EPC Contracting",
    tag: "Turnkey Projects",
    desc: "End-to-end engineering, procurement, and construction services — from site survey and design through supply, installation, commissioning, and handover.",
    highlights: ["Site Survey & Design", "Procurement", "Installation", "Commissioning"],
  },
  {
    id: "dg",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" aria-hidden="true">
        <rect x="5" y="14" width="24" height="14" rx="2" stroke="#1565C0" strokeWidth="2"/>
        <path d="M29 19 L35 22 L29 25" stroke="#1565C0" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="12" cy="21" r="3" stroke="#00BCD4" strokeWidth="1.5"/>
        <line x1="18" y1="18" x2="18" y2="24" stroke="#00BCD4" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="22" y1="18" x2="22" y2="24" stroke="#00BCD4" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Generator & DG Solutions",
    tag: "Power Backup",
    desc: "Diesel generator sets from 7.5 kVA to 2250 kVA for standby, prime, and continuous duty applications — with full lifecycle support from load survey to maintenance.",
    highlights: ["7.5 kVA – 2250 kVA", "Containerised DG Sets", "Dual Fuel Sets", "AMF Control Panels"],
  },
  {
    id: "ups",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" aria-hidden="true">
        <path d="M20 5 L20 20 M20 20 L13 13 M20 20 L27 13" stroke="#1565C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 22 C10 28 14 34 20 34 C26 34 30 28 30 22" stroke="#00BCD4" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="22" x2="32" y2="22" stroke="#1565C0" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "UPS & Power Backup",
    tag: "Reliable Power",
    desc: "Uninterruptible power supply systems, power factor correction panels, and feeder pillars ensuring zero-downtime power availability for critical operations.",
    highlights: ["Online UPS Systems", "Power Factor Correction", "Feeder Pillars", "Bus Ducts"],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
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
    <section id="services" className="section-white py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1565C0]" />
            <span className="text-xs font-semibold text-[#1565C0] tracking-widest uppercase">What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
            Our Core Services
          </h2>
          <p className="text-[#555] max-w-2xl mx-auto text-base leading-relaxed">
            Four focused service pillars built on a decade of hands-on electrical engineering expertise — delivered by the Bhushan Brothers and the Volto Control team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <article
              key={svc.id}
              className="reveal-up rounded-2xl border border-[#DCE8F8] bg-white p-6 shadow-sm hover:shadow-[0_12px_32px_rgba(21,101,192,0.10)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#EAF4FF] border border-[#CFE0F8] mb-5">
                {svc.icon}
              </div>
              <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#EAF4FF] text-[10px] tracking-widest uppercase font-bold text-[#1565C0] mb-3 w-fit">
                {svc.tag}
              </div>
              <h3 className="text-lg font-bold text-[#0A1628] leading-snug mb-3">{svc.title}</h3>
              <p className="text-sm text-[#44566C] leading-relaxed mb-5 flex-1">{svc.desc}</p>
              <ul className="space-y-1.5">
                {svc.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-[#2B3A4F] font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00BCD4] shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
