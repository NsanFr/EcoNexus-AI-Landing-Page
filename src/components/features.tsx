"use client";

import { useInView } from "@/hooks/use-in-view";

const features = [
  {
    title: "AI & Machine Learning Disaster Prediction",
    desc: "Memprediksi potensi titik kebakaran hutan dan sebaran luapan banjir secara spasial sebelum kejadian fisik terjadi.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="4" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8.5" y1="5.5" x2="5.5" y2="14.5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="11.5" y1="5.5" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="6" y1="16" x2="14" y2="16" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Big Data Analytics Pipeline",
    desc: "Mengintegrasikan puluhan parameter lingkungan dari drone, satelit, dan sensor IoT dalam satu interpretasi data.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <ellipse cx="10" cy="5" rx="6" ry="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 5v5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5V5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 10v5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5v-5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Dashboard SaaS Korporat & Pemerintah",
    desc: "Visualisasi data taktis dan analitik prediktif bagi BPBD, perusahaan tambang, dan agrikultur.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="7" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="2" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="9" width="7" height="9" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="12" width="7" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Mobile Apps Real-time Notification",
    desc: "Peringatan dini langsung ke ponsel masyarakat rawan bencana, lengkap panduan evakuasi offline.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="5" y="1" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="15" r="1" fill="currentColor" />
        <path d="M7 6h6M7 8.5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Green Waqf Platform",
    desc: "Wakaf instan untuk pengadaan sensor IoT, bibit pohon, hingga pembiayaan proyek restorasi lahan.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 18s-6-4.5-6-8.5a6 6 0 0 1 12 0c0 4-6 8.5-6 8.5z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Smart Zakat Environment",
    desc: "Otomatisasi distribusi dana zakat tepat sasaran berdasarkan data kerusakan riil di lapangan.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v8M6 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Blockchain Transparency Matrix",
    desc: "Catatan arus dana abadi (immutable) di jaringan Polygon/Ethereum, bebas penyelewengan.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 7l6-4 6 4v6l-6 4-6-4V7z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 7l6 4M16 7l-6 4M10 11v6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Islamic ESG Score",
    desc: "Penilaian otomatis kinerja keberlanjutan dan kepatuhan syariah perusahaan.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 17V8l3-2 4 3 4-3 3 2v9H3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 11v4M10 9v6M14 12v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Carbon & Green Impact Marketplace",
    desc: "Wadah perdagangan karbon lokal syariah dan pendanaan proyek restorasi lingkungan bersertifikat.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6a4 4 0 0 0-4 4 4 4 0 0 0 4 4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 10a4 4 0 0 1-4 4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    ),
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: { title: string; desc: string; icon: React.ReactNode };
  index: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="border border-border/50 rounded-md p-5 hover:border-leaf/30 hover:bg-leaf/5 transition-all shadow-sm bg-card"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease-out, transform 0.5s ease-out`,
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div className="w-9 h-9 rounded-md bg-leaf/10 text-leaf flex items-center justify-center mb-3">
        {feature.icon}
      </div>
      <h3 className="font-sans text-sm sm:text-base font-semibold text-text mb-1.5 sm:mb-2">
        {feature.title}
      </h3>
      <p className="text-xs sm:text-sm text-text/70 leading-relaxed">
        {feature.desc}
      </p>
    </div>
  );
}

export default function Features() {
  const { ref: headingRef, inView: headingInView } = useInView();

  return (
    <section id="fitur" className="px-6 py-20 sm:py-24 md:py-32 bg-card bg-pattern-rings scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <div
          ref={headingRef}
          className="max-w-2xl mb-12 sm:mb-16"
          style={{
            opacity: headingInView ? 1 : 0,
            transform: headingInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <p className="text-leaf font-sans text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
            Fitur Modular
          </p>
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-semibold text-text">
            Sembilan Modul,{" "}
            <span className="italic font-serif font-normal">Satu Ekosistem</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
