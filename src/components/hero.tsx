"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-28 pb-0 lg:pb-20 overflow-hidden bg-surface bg-pattern-dots">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-leaf/5 rounded-full animate-blob pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-leaf/5 rounded-full animate-blob pointer-events-none" style={{ animationDelay: "-6s" }} />

      <div className="mx-auto max-w-6xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div
            className={`max-w-2xl transition-all duration-1000 ease-out ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-leaf font-sans text-xs sm:text-sm font-medium tracking-widest uppercase mb-4 sm:mb-5">
              Climate Intelligence Platform
            </p>
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight font-semibold text-text mb-5 sm:mb-6">
              EcoNexus AI
              <span className="block font-serif text-leaf text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-snug mt-0.5">
                Pembiayaan Hijau berbasis Syariah dan Mitigasi Bencana
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-text/70 max-w-2xl mb-8 sm:mb-10">
              EcoNexus AI mengintegrasikan AI, Big Data, IoT, Blockchain, dan Cloud
              untuk mitigasi bencana hidrometeorologi dan pembiayaan hijau berbasis
              syariah di Indonesia.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#fitur"
                className="inline-block rounded-md bg-forest px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm text-cream font-sans font-medium hover:bg-moss transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Jelajahi Fitur
              </a>
              <a
                href="#kontak"
                className="inline-block rounded-md border border-text/30 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm text-text font-sans font-medium hover:bg-text/5 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Gabung Early Access
              </a>
            </div>
          </div>

          <div
            className={`relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full transition-all duration-1000 ease-out delay-200 ${
              mounted
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div
              className="relative w-full h-full overflow-hidden rounded-md"
              style={{
                clipPath: mounted ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                transition: "clip-path 1.2s ease-out",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=80"
                alt="Hutan tropis Kalimantan"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent dark:from-card/60" />
            </div>

            <div className="absolute -bottom-3 -left-3 bg-card px-4 py-2.5 rounded-md shadow-sm animate-float">
              <p className="font-sans text-xs font-semibold text-text">
                Real-time AI Processing
              </p>
              <p className="text-[10px] text-leaf">&lt; 5 menit latensi</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
    </section>
  );
}
