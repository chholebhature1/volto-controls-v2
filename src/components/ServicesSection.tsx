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
    desc: "MCCs, PCCs, AMF panels, distribution boards, and speciality control panels — all custom-built to IS/IEC standards for industrial and commercial facilities.",
    highlights: ["Motor Control Centres", "AMF & DG Panels", "APFC Panels"],
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
    highlights: ["7.5 kVA – 2250 kVA", "Containerised DG Sets", "Dual Fuel Sets"],
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
    highlights: ["Online UPS Systems", "Power Factor Correction"],
  },
];

const extendedSolutions = [
  {
    id: "earthing",
    number: "01",
    title: "Earthing Solutions",
    desc: "Complete grounding and lightning protection systems engineered for electrical safety, fault dissipation, and long-term site reliability.",
    items: [
      "Earthing Electrodes",
      "Copper Electrodes",
      "Lightning Arresters",
      "Back Fill Compound",
      "Earthing Pit Covers",
      "FRP Earth Pit Chambers",
    ],
  },
  {
    id: "bus-duct",
    number: "02",
    title: "Bus Duct Systems",
    desc: "High-performance bus duct solutions designed for safe, efficient, and scalable power distribution across industrial facilities.",
    items: ["High Quality Bus Duct", "Aluminum Bus Duct", "Copper Bus Duct"],
  },
  {
    id: "cable-tray",
    number: "03",
    title: "Cable Tray Systems",
    desc: "Robust cable tray systems for organized routing, mechanical protection, and easy maintenance of electrical networks.",
    items: [
      "Stainless Steel Cable Trays",
      "Mild Steel (MS) Cable Trays",
      "Galvanized Iron (GI) Cable Trays",
    ],
  },
  {
    id: "lighting",
    number: "04",
    title: "Industrial Lighting Solutions",
    desc: "End-to-end lighting design and automation solutions for factories, warehouses, and large-scale infrastructure environments.",
    items: [
      "Industrial Lighting Design",
      "Warehouse Light Design",
      "Light Automation",
      "Stadium Light Design",
    ],
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

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
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

        <div className="reveal">
          <div className="mb-9 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8FBFF] border border-[#DCE8F8] mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00BCD4]" />
                <span className="text-xs font-semibold text-[#1565C0] tracking-widest uppercase">Extended Solutions</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1628] mb-3">
                Additional Electrical Infrastructure Solutions
              </h3>
              <p className="text-[#4E5F74] text-base leading-relaxed">
                Beyond custom panels, EPC execution, DG systems, and UPS backup, Volto Control also delivers essential infrastructure products for safe distribution, cable management, grounding, and lighting.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit items-center justify-center rounded-full border border-[#1565C0]/20 bg-[#1565C0] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(21,101,192,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D4F9C] focus:outline-none focus:ring-2 focus:ring-[#1565C0] focus:ring-offset-2"
            >
              Request Technical Details
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {extendedSolutions.map((solution, i) => (
              <article
                key={solution.id}
                className="rounded-2xl border border-[#DCE8F8] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(15,23,42,0.10)]"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 h-1.5 w-12 rounded-full bg-gradient-to-r from-[#1565C0] to-[#00BCD4]" />
                    <h4 className="text-xl font-bold text-[#0A1628] leading-snug">{solution.title}</h4>
                  </div>
                  <span className="shrink-0 rounded-full border border-[#CFE0F8] bg-[#EAF4FF] px-3 py-1 text-xs font-bold text-[#1565C0] font-mono-stats">
                    {solution.number}
                  </span>
                </div>

                <p className="text-sm text-[#44566C] leading-relaxed mb-5">{solution.desc}</p>

                <ul className="grid gap-2 sm:grid-cols-2">
                  {solution.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 rounded-lg border border-[#E8EEF6] bg-[#F8FBFF] px-3 py-2 text-xs font-medium leading-snug text-[#2B3A4F]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00BCD4]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
