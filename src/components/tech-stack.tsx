"use client";

import { useInView } from "@/hooks/use-in-view";

const techs = [
  {
    name: "Artificial Intelligence",
    desc: "TensorFlow untuk prediksi dan analitik prediktif",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="10.5" y1="7" x2="7" y2="17" stroke="currentColor" strokeWidth="1.5" />
        <line x1="13.5" y1="7" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" />
        <line x1="7.5" y1="19" x2="16.5" y2="19" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Big Data",
    desc: "Pipeline data multi-sumber skala makro",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "IoT",
    desc: "Sensor lapangan untuk data lingkungan real-time",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="8" y="2" width="8" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 14v2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10h10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Blockchain",
    desc: "Polygon/Ethereum untuk transparansi dana",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 9l7-5 7 5v7l-7 5-7-5V9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 9l7 5M19 9l-7 5M12 14v7" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Cloud Computing",
    desc: "Infrastruktur AWS/GCP latensi rendah",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 10a5 5 0 0 0-9.5-2.5A4 4 0 0 0 8 14h10a3 3 0 1 0 0-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function TechItem({
  tech,
  index,
}: {
  tech: { name: string; desc: string; icon: React.ReactNode };
  index: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="border border-stone/50 rounded-md p-4 sm:p-5 bg-white text-center shadow-sm"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease-out, transform 0.5s ease-out`,
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div className="w-10 h-10 rounded-md bg-leaf/10 text-leaf flex items-center justify-center mx-auto mb-3">
        {tech.icon}
      </div>
      <h3 className="font-sans text-xs sm:text-sm font-semibold text-forest mb-1.5 sm:mb-2">
        {tech.name}
      </h3>
      <p className="text-[10px] sm:text-xs text-forest/60 leading-relaxed">
        {tech.desc}
      </p>
    </div>
  );
}

export default function TechStack() {
  const { ref: headingRef, inView: headingInView } = useInView();

  return (
    <section className="px-6 py-20 sm:py-24 md:py-32 bg-pattern-lines">
      <div className="mx-auto max-w-5xl">
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
            Teknologi
          </p>
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-semibold text-forest">
            Lima Pilar Teknologi
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5">
          {techs.map((t, i) => (
            <TechItem key={t.name} tech={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
