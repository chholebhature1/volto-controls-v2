import { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

type IndustryItem = {
  id: number;
  name: string;
  tag: string;
  image: string;
  solutions: string[];
  targetSection: string;
};

const industries: IndustryItem[] = [
  { id: 1, name: "Solar Energy", tag: "Renewable Power", image: "/images/industries/power-plants.jpg", solutions: ["Solar Farm Automation", "SCADA & Monitoring", "Grid Protection Panels"], targetSection: "products" },
  { id: 2, name: "Dairy Processing", tag: "Food Safety", image: "/images/industries/dairy.jpg", solutions: ["PLC Control Systems", "Temperature Instrumentation", "Hygienic Enclosures"], targetSection: "products" },
  { id: 3, name: "Hotel & FEC", tag: "Hospitality", image: "/images/industries/fec-hotels.jpg", solutions: ["Building Management", "Power Distribution", "Emergency UPS Backup"], targetSection: "products" },
  { id: 4, name: "Textile", tag: "Manufacturing", image: "/images/industries/textile.jpg", solutions: ["Motor Control Centres", "Variable Frequency Drives", "Power Factor Correction"], targetSection: "products" },
  { id: 5, name: "Pharmaceuticals", tag: "Precision Automation", image: "/images/industries/pharmaceuticals.jpg", solutions: ["Clean Room Panels", "Process Instrumentation", "Validation-ready Systems"], targetSection: "quality" },
  { id: 6, name: "Power Plants", tag: "EPC Contracting", image: "/images/industries/power-plants.jpg", solutions: ["Switchgear Panels", "EPC Contracting", "Protection Relays"], targetSection: "products" },
  { id: 7, name: "Sugar & Refinery", tag: "Heavy Process", image: "/images/industries/sugar.jpg", solutions: ["DCS Integration", "Field Instrumentation", "Control Room Setup"], targetSection: "products" },
  { id: 8, name: "Packaging & Paper", tag: "Line Automation", image: "/images/industries/packaging-paper.jpg", solutions: ["Line Automation", "Tension Control Panels", "Drive Systems"], targetSection: "products" },
  { id: 9, name: "Steel & Metals", tag: "Heavy Industry", image: "/images/industries/rubber-tyre.jpg", solutions: ["High-current MCCs", "Arc Flash Protection", "PLC Systems"], targetSection: "products" },
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

.vc-industries-carousel,
.vc-industries-carousel * {
  box-sizing: border-box;
}

.vc-industries-carousel {
  --vc-bg: #f8f9fb;
  --vc-surface: #ffffff;
  --vc-border: #e2e7ef;
  --vc-border2: #cbd3df;
  --vc-blue: #1565c0;
  --vc-teal: #00acc1;
  --vc-text: #0d1f3c;
  --vc-muted: #7a92aa;
  --vc-muted2: #b0bec5;

  position: relative;
  overflow: clip;
  border: 1px solid rgba(203, 211, 223, 0.7);
  border-radius: 42px;
  padding: 2.45rem 1rem 84px;
  background: linear-gradient(130deg, rgba(255, 255, 255, 0.96) 0%, rgba(248, 249, 251, 0.94) 48%, rgba(7, 69, 117, 0.05) 100%);
  color: var(--vc-text);
  font-family: 'DM Sans', sans-serif;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55), 0 24px 60px rgba(13, 31, 60, 0.08);
}

.vc-shell {
  position: relative;
  z-index: 1;
  width: min(100%, 1280px);
  margin: 0 auto;
}

.vc-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.35rem;
}

.vc-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 10.5px;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--vc-teal);
}

.vc-eyebrow::before,
.vc-eyebrow::after {
  content: '';
  width: 24px;
  height: 1px;
  background: var(--vc-teal);
  opacity: 0.85;
}

.vc-stage {
  position: relative;
  margin-top: 0.5rem;
  padding: 0 2rem;
}

.vc-carousel {
  width: 100%;
  overflow: visible;
  padding: 0;
  touch-action: pan-y pinch-zoom;
}

.vc-carousel .swiper-wrapper {
  align-items: center;
}

.vc-carousel .swiper-wrapper {
  transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1) !important;
  will-change: transform;
}

.vc-carousel .swiper-slide {
  transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1) !important;
}

.vc-slide {
  width: 300px;
  height: 400px;
  opacity: 0.72;
  transition: opacity 280ms ease, transform 280ms ease;
}

.vc-card {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(203, 211, 223, 0.72);
  background: linear-gradient(130deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.9) 48%, rgba(7, 69, 117, 0.08) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55), 0 14px 28px rgba(13, 31, 60, 0.06);
  transition: border-color 280ms ease, box-shadow 280ms ease, transform 280ms ease, opacity 280ms ease;
}

.vc-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(130deg, rgba(255, 255, 255, 0.26) 0%, rgba(255, 255, 255, 0.08) 48%, rgba(7, 69, 117, 0.1) 100%);
  pointer-events: none;
  z-index: 0;
}

.vc-accent {
  position: absolute;
  inset: 0 0 auto;
  height: 3px;
  background: linear-gradient(90deg, var(--vc-blue), var(--vc-teal));
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 280ms ease;
  z-index: 3;
}

.vc-media {
  position: relative;
  height: 66%;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(21, 101, 192, 0.08), rgba(0, 172, 193, 0.08));
  z-index: 1;
}

.vc-image,
.vc-fallback {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 420ms ease;
}

.vc-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(21, 101, 192, 0.08), rgba(0, 172, 193, 0.1));
  color: var(--vc-blue);
}

.vc-fallback svg {
  width: 80px;
  height: 80px;
}

.vc-body {
  height: 34%;
  padding: 10px 14px 10px;
  border-top: 1px solid rgba(203, 211, 223, 0.48);
  display: flex;
  flex-direction: column;
  background: linear-gradient(130deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.94) 48%, rgba(7, 69, 117, 0.04) 100%);
  position: relative;
  z-index: 1;
}

.vc-tag {
  display: inline-flex;
  align-self: flex-start;
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(0, 172, 193, 0.1);
  color: var(--vc-teal);
  font-size: 9px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.vc-name {
  margin: 0.55rem 0 0;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 20px;
  line-height: 0.95;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--vc-text);
}

.vc-solutions {
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 280ms ease, opacity 280ms ease, margin-top 280ms ease;
}

.vc-solutions li {
  position: relative;
  margin-top: 6px;
  padding-left: 20px;
  font-size: 11px;
  line-height: 1.35;
  color: rgba(13, 31, 60, 0.88);
}

.vc-solutions li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 14px;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--vc-blue), var(--vc-teal));
}

.vc-cta {
  margin-top: auto;
  align-self: flex-start;
  padding: 0;
  border: 0;
  border-bottom: 1px solid rgba(21, 101, 192, 0.26);
  background: transparent;
  color: var(--vc-blue);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 220ms ease, border-color 220ms ease, transform 220ms ease;
}

.vc-cta:hover {
  color: var(--vc-teal);
  border-color: rgba(0, 172, 193, 0.45);
}

.vc-swiper {
  position: absolute;
  top: 50%;
  z-index: 6;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  padding: 0;
  border: 1px solid var(--vc-border2);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.98);
  color: var(--vc-blue);
  box-shadow: 0 10px 24px rgba(13, 31, 60, 0.08);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 220ms ease, border-color 220ms ease, color 220ms ease, transform 220ms ease, box-shadow 220ms ease;
}

.vc-swiper:hover {
  background: rgba(0, 172, 193, 0.08);
  border-color: var(--vc-teal);
  color: var(--vc-teal);
  box-shadow: 0 14px 28px rgba(0, 172, 193, 0.16);
}

.vc-swiper-prev {
  left: 0;
}

.vc-swiper-next {
  right: 0;
}

.vc-swiper svg {
  width: 18px;
  height: 18px;
}

.vc-pagination {
  position: relative;
  inset: auto;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.vc-carousel .swiper-pagination-bullet {
  width: 5px;
  height: 5px;
  margin: 0 !important;
  border-radius: 999px;
  background: var(--vc-muted2);
  opacity: 1;
  transition: width 220ms ease, background 220ms ease, transform 220ms ease;
}

.vc-carousel .swiper-pagination-bullet-active {
  width: 22px;
  height: 5px;
  border-radius: 3px;
  background: var(--vc-blue);
}

.swiper-slide-active {
  opacity: 1;
}

.swiper-slide-active .vc-card {
  border-color: rgba(0, 172, 193, 0.62);
  box-shadow: 0 18px 42px rgba(0, 172, 193, 0.18), 0 0 0 1px rgba(0, 172, 193, 0.22);
}

.swiper-slide-active .vc-accent {
  transform: scaleX(1);
}

.swiper-slide-active .vc-image,
.swiper-slide-active .vc-fallback {
  transform: scale(1.05);
}

.swiper-slide-active .vc-solutions {
  max-height: 120px;
  margin-top: 0.6rem;
  opacity: 1;
}

.swiper-slide-active .vc-cta {
  color: var(--vc-teal);
  border-color: rgba(0, 172, 193, 0.5);
}

.vc-card:focus-within .vc-solutions {
  max-height: 120px;
  margin-top: 0.6rem;
  opacity: 1;
}

.vc-card:focus-within .vc-cta {
  color: var(--vc-teal);
  border-color: rgba(0, 172, 193, 0.5);
}

@media (max-width: 768px) {
  .vc-industries-carousel {
    padding: 4.5rem 1rem 3.5rem;
  }

  .vc-stage {
    padding: 0 2.5rem;
  }

  .vc-slide {
    width: 260px;
    height: 360px;
  }
}

@media (max-width: 480px) {
  .vc-industries-carousel {
    padding: 3.85rem 0.85rem 3rem;
  }

  .vc-stage {
    padding: 0 2rem;
  }

  .vc-slide {
    width: 240px;
    height: 330px;
  }

  .vc-swiper {
    width: 36px;
    height: 36px;
    margin-top: -18px;
  }

  .vc-swiper svg {
    width: 16px;
    height: 16px;
  }
}
`;

function IndustriesCarousel() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const handleExploreSolutions = useCallback((targetSection: string) => {
    const section = document.getElementById(targetSection);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      const contactSection = document.getElementById("contact");
      contactSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section className="vc-industries-carousel" aria-label="Industry Expertise">
      <style>{styles}</style>
      <div className="vc-shell">
        <header className="vc-header">
          <div className="vc-eyebrow">Industry Expertise</div>
        </header>
        <div className="vc-stage">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            loop
            loopAdditionalSlides={9}
            speed={700}
            spaceBetween={22}
            autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 220, modifier: 1.2, slideShadows: false }}
            pagination={{ clickable: true, el: ".vc-pagination" }}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
              swiper.autoplay.start();
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            allowTouchMove
            className="vc-carousel"
          >
            {industries.map((industry) => (
              <SwiperSlide key={industry.id} className="vc-slide">
                <article className="vc-card">
                  <div className="vc-accent" />
                  <div className="vc-media">
                    <img
                      className="vc-image"
                      src={industry.image}
                      alt={industry.name}
                      loading="lazy"
                      decoding="async"
                      style={{ opacity: failedImages[industry.id] ? 0 : 1 }}
                      onLoad={() => {
                        setFailedImages((prev) => {
                          if (!prev[industry.id]) return prev;
                          const next = { ...prev };
                          delete next[industry.id];
                          return next;
                        });
                      }}
                      onError={() => {
                        setFailedImages((prev) => ({ ...prev, [industry.id]: true }));
                      }}
                    />
                    {failedImages[industry.id] && (
                      <div className="vc-fallback" aria-hidden="true">
                        <svg viewBox="0 0 96 96">
                          <defs>
                            <linearGradient id={"vc-fb-" + industry.id} x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0%" stopColor="#1565C0" />
                              <stop offset="100%" stopColor="#00ACC1" />
                            </linearGradient>
                          </defs>
                          <rect x="22" y="28" width="52" height="34" rx="5" fill="none" stroke={"url(#vc-fb-" + industry.id + ")"} strokeWidth="3" />
                          <path d="M31 39h20M31 48h16" fill="none" stroke={"url(#vc-fb-" + industry.id + ")"} strokeLinecap="round" strokeWidth="3" />
                          <path d="M49 18 40 38h11l-5 20 18-26H53l4-14Z" fill={"url(#vc-fb-" + industry.id + ")"} />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="vc-body">
                    <div className="vc-tag">{industry.tag}</div>
                    <h3 className="vc-name">{industry.name}</h3>
                    <ul className="vc-solutions">
                      {industry.solutions.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className="vc-cta"
                      onClick={() => handleExploreSolutions(industry.targetSection)}
                    >
                      Explore Solutions <span aria-hidden="true">&#8594;</span>
                    </button>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="vc-pagination" />
          <button type="button" className="vc-swiper vc-swiper-prev" aria-label="Previous industry" onClick={() => swiperInstance?.slidePrev()}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M15.5 5.5 9 12l6.5 6.5-1.4 1.4L6.2 12l7.9-7.9 1.4 1.4Z" />
            </svg>
          </button>
          <button type="button" className="vc-swiper vc-swiper-next" aria-label="Next industry" onClick={() => swiperInstance?.slideNext()}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="m8.5 18.5-1.4-1.4L13.6 12 7.1 5.9l1.4-1.4L17.8 12l-9.3 6.5Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default IndustriesCarousel;
