import { useState, useEffect, useRef } from "react";
import IndustriesCarousel from "./IndustriesCarousel";
import { companyContact } from "@/lib/company";

type HeroSectionProps = {
  showContent?: boolean;
  onVideoReady?: () => void;
};

export default function HeroSection({ showContent = true, onVideoReady }: HeroSectionProps) {
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [shouldUseVideo, setShouldUseVideo] = useState(true);
  const hasNotifiedVideoReady = useRef(false);

  const baseUrl = import.meta.env.BASE_URL;
  const heroVideoSrc = `${baseUrl}videos/volto-hero.mp4`;
  const heroVideoDesktopSrc = `${baseUrl}videos/volto-hero-desktop.mp4`;
  const heroVideoMobileSrc = `${baseUrl}videos/volto-hero-mobile.mp4`;
  const heroPosterSrc = `${baseUrl}images/hero-poster.jpg`;
  const exideLogoSrc = `${baseUrl}images/Exide.png`;
  const keiLogoSrc = `${baseUrl}images/Kei%20Logo.jpg`;

  const notifyVideoReady = () => {
    if (hasNotifiedVideoReady.current) return;
    hasNotifiedVideoReady.current = true;
    onVideoReady?.();
  };

  useEffect(() => {
    const connection = (
      navigator as Navigator & {
        connection?: {
          saveData?: boolean;
          effectiveType?: string;
        };
      }
    ).connection;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;
    const isConstrainedNetwork =
      Boolean(connection?.saveData) || /(^|-)2g|3g/i.test(connection?.effectiveType ?? "");
    const canUseVideo = !prefersReducedMotion && !isMobileViewport && !isConstrainedNetwork;

    setShouldUseVideo(canUseVideo);

    if (!canUseVideo) {
      setVideoReady(false);
      setVideoFailed(true);
      notifyVideoReady();
    }
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[100svh] md:min-h-screen hero-bg overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroPosterSrc}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover object-center brightness-110 contrast-105 transition-opacity duration-700 ${shouldUseVideo && videoReady && !videoFailed ? "opacity-0" : "opacity-72"}`}
          loading="eager"
          decoding="async"
        />
        {shouldUseVideo && (
          <video
            className={`absolute inset-0 h-full w-full object-cover object-center brightness-110 contrast-105 transition-opacity duration-700 ${videoReady && !videoFailed ? "opacity-58" : "opacity-0"}`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPosterSrc}
            aria-hidden="true"
            onLoadedData={() => {
              setVideoReady(true);
              setVideoFailed(false);
              notifyVideoReady();
            }}
            onCanPlay={() => {
              setVideoReady(true);
              setVideoFailed(false);
              notifyVideoReady();
            }}
            onError={() => {
              setVideoReady(false);
              setVideoFailed(true);
              notifyVideoReady();
            }}
          >
            <source media="(max-width: 767px)" srcSet={heroVideoMobileSrc} type="video/mp4" />
            <source media="(min-width: 768px)" srcSet={heroVideoDesktopSrc} type="video/mp4" />
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        )}
        <div className={`absolute inset-0 ${shouldUseVideo && videoReady && !videoFailed ? "bg-[radial-gradient(120%_95%_at_12%_4%,rgba(255,255,255,0.92)_0%,rgba(237,246,255,0.72)_46%,rgba(228,240,253,0.5)_100%)]" : "bg-[radial-gradient(120%_95%_at_12%_4%,rgba(255,255,255,0.95)_0%,rgba(241,248,255,0.82)_46%,rgba(232,243,255,0.68)_100%)]"}`} />
        <div className={`absolute inset-0 ${shouldUseVideo && videoReady && !videoFailed ? "bg-[linear-gradient(118deg,rgba(255,255,255,0.58)_0%,rgba(235,246,255,0.36)_44%,rgba(194,227,255,0.28)_100%)]" : "bg-[linear-gradient(118deg,rgba(255,255,255,0.72)_0%,rgba(235,246,255,0.5)_44%,rgba(194,227,255,0.32)_100%)]"}`} />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 z-[1] grid-bg opacity-24" />

      {/* Blue gradient orb */}
      <div className="absolute top-1/4 right-1/4 z-[1] w-[30rem] h-[30rem] bg-[#3f8ef7]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 z-[1] w-72 h-72 bg-[#64d3e8]/16 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-14 left-1/3 z-[1] w-56 h-56 bg-white/50 rounded-full blur-3xl" />

      {/* Horizontal lines decoration */}
      <div className="absolute left-0 top-1/3 z-[1] w-1/4 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute right-0 top-2/3 z-[1] w-1/4 h-px bg-gradient-to-l from-transparent via-cyan-400/40 to-transparent" />

      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 transition-all duration-700 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none select-none"
        }`}
      >
        <div className="grid lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] gap-12 lg:gap-14 items-center lg:items-start">
          {/* Left content */}
          <div className="animate-fade-in-left w-full flex flex-col items-center text-center lg:pt-2">
             {/* Badge */}
             <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-[#BCD6F2] mb-6 shadow-[0_8px_24px_rgba(19,72,132,0.1)] backdrop-blur-sm">
               <div className="w-2 h-2 rounded-full bg-[#1565C0] animate-pulse" />
               <span className="text-xs font-semibold text-[#1565C0] tracking-[0.15em] uppercase">
                 Electrical &amp; Engineering Consultancy
               </span>
             </div>

            {/* Headline */}
            <div className="relative w-full max-w-[44rem] mb-9 overflow-hidden rounded-[2.1rem] border border-[#D2E3F7] bg-[linear-gradient(118deg,rgba(255,255,255,0.95)_0%,rgba(245,251,255,0.88)_42%,rgba(218,239,255,0.78)_100%)] px-7 py-10 backdrop-blur-2xl shadow-[0_24px_60px_rgba(32,76,126,0.18)] sm:px-10 sm:py-12 lg:px-12 lg:py-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(113,219,255,0.24),transparent_60%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.26)_0%,rgba(255,255,255,0.08)_48%,rgba(7,69,117,0.1)_100%)]" />
              <div className="relative text-center">
                 <div className="flex items-center justify-center gap-4 mb-1">
                   <img
                     src="/images/volto-visualmark.png"
                     alt="Volto Visual Mark"
                     className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
                     loading="eager"
                     decoding="async"
                   />
                   <h1 className="text-6xl sm:text-7xl lg:text-[6.2rem] font-bold text-[#09213E] leading-[0.95]" style={{ fontFamily: 'Syne, sans-serif' }}>
                     VOLTO
                   </h1>
                 </div>
                 <p className="mt-4 text-base sm:text-lg lg:text-xl font-semibold tracking-[0.46em] uppercase text-[#1565C0]">
                   CONTROL LLP
                 </p>
                 <div className="mx-auto mt-6 h-px w-56 bg-gradient-to-r from-transparent via-[#1f79d5]/70 to-transparent" />
                 <p className="mt-6 text-base sm:text-lg font-semibold text-[#1565C0] tracking-wide">
                   Electrical &amp; Engineering Consultancy
                 </p>
                 <p className="mt-2 text-sm sm:text-base text-[#41566F] leading-relaxed max-w-md mx-auto">
                   Delivering end-to-end electrical solutions — from custom control panels and switchgear to EPC contracting, power distribution, and reliable UPS backup systems.
                 </p>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-[#4F637E] leading-relaxed mb-9 max-w-3xl">
              Electrical Turnkey Solutions · Generator &amp; DG Panels · UPS &amp; Power Backup
              · EPC Contracting
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => scrollToSection("products")}
                className="group px-8 py-3.5 rounded-full bg-[linear-gradient(100deg,#1e5fde_0%,#1f75e7_42%,#00aee8_100%)] text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_16px_34px_rgba(30,95,222,0.45)] hover:scale-[1.03]"
                data-testid="hero-explore-btn"
              >
                Explore Services
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="group px-8 py-3.5 rounded-full bg-white border border-[#C7DFF6] backdrop-blur-md shadow-[0_10px_26px_rgba(12,48,88,0.12)] hover:border-[#6CA9DF] text-[#123155] font-semibold text-sm transition-all duration-300 hover:bg-[#F7FBFF]"
                data-testid="hero-quote-btn"
              >
                Contact Us
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <a
                href={companyContact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_12px_28px_rgba(37,211,102,0.4)] hover:scale-[1.03]"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { num: "2016", label: "Experience from" },
                { num: "2026", label: "Founded" },
                { num: "9+", label: "Industries Served" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-[#0A1F3B] font-mono-stats">{stat.num}</div>
                  <div className="text-xs text-[#71839B] uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Industry carousel */}
          <div className="relative w-full max-w-[32rem] mx-auto flex flex-col gap-5 animate-fade-in-right mt-6 lg:mt-0">
            <IndustriesCarousel />
          </div>
        </div>
      </div>

      {!showContent && (
        <div className="absolute inset-x-0 bottom-24 z-20 flex justify-center px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C7DCF4] bg-white/95 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2E557D] backdrop-blur-md shadow-[0_10px_24px_rgba(22,72,128,0.12)]">
            <span className="h-2 w-2 rounded-full bg-[#1565C0] animate-pulse" />
            Initializing Hero Experience
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-xs text-[#5E7390]">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-[#AFC9E6] flex items-center justify-center">
          <div className="w-1 h-2 bg-[#4B6F95] rounded-full" />
        </div>
      </div>
    </section>
  );
}
