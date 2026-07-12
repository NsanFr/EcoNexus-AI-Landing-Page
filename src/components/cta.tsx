"use client";

import { useInView } from "@/hooks/use-in-view";

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l6.5 7.5M20 4l-6.5 7.5M20 20l-6.5-7.5M4 20l6.5-7.5M10.5 11.5L4 4M13.5 11.5L20 4M10.5 12.5L4 20M13.5 12.5L20 20" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M8 11v5M8 8v0M12 16v-5M16 16v-3a2 2 0 0 0-4 0" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 8.75 15.5 12 9.75 15.25" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Cta() {
  const { ref, inView } = useInView();

  return (
    <section
      id="kontak"
      className="px-6 py-20 sm:py-24 md:py-32 bg-forest scroll-mt-20"
    >
      <div
        ref={ref}
        className="mx-auto max-w-5xl flex flex-col md:flex-row gap-10 md:gap-16"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        }}
      >
        <div className="max-w-lg">
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-semibold text-cream mb-3">
            Dapatkan Akses Awal
          </h2>
          <p className="text-sm sm:text-base text-cream/70 leading-relaxed mb-8">
            EcoNexus AI sedang dalam tahap pengembangan. Daftar sekarang untuk
            mendapatkan akses awal dan informasi terbaru.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Masukkan email kamu"
              className="flex-1 rounded-md bg-cream/10 border border-cream/20 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream/50 transition-colors"
              required
            />
            <button
              type="submit"
              className="rounded-md bg-cream px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm text-forest font-sans font-medium hover:bg-cream/90 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Daftar
            </button>
          </form>
        </div>

        <div>
          <h3 className="font-sans text-base sm:text-lg font-semibold text-cream mb-5">
            Ikuti Kami
          </h3>
          <div className="flex flex-col gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="inline-flex items-center gap-3 text-cream/60 hover:text-cream transition-colors text-sm"
              >
                {s.icon}
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
