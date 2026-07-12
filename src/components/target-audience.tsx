"use client";

import { useInView } from "@/hooks/use-in-view";

const audiences = [
  {
    title: "Pemerintah & BPBD",
    items: [
      "Dashboard taktis untuk pengambilan keputusan cepat",
      "Data prediktif titik api dan sebaran banjir",
      "Sistem peringatan dini terintegrasi",
    ],
  },
  {
    title: "Korporasi",
    items: [
      "Management risiko bencana untuk tambang & agrikultur",
      "Islamic ESG Score untuk kepatuhan syariah",
      "Marketplace karbon dan green investment",
    ],
  },
  {
    title: "Masyarakat",
    items: [
      "Notifikasi bencana real-time via mobile",
      "Panduan evakuasi akses offline",
      "Partisipasi wakaf dan donasi transparan",
    ],
  },
];

function AudienceCard({
  audience,
  index,
}: {
  audience: { title: string; items: string[] };
  index: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="border border-stone/50 rounded-md p-5 sm:p-6 shadow-sm"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <h3 className="font-sans text-sm sm:text-base font-semibold text-forest mb-3 sm:mb-4">
        {audience.title}
      </h3>
      <ul className="space-y-2 sm:space-y-3">
        {audience.items.map((item) => (
          <li
            key={item}
            className="text-xs sm:text-sm text-forest/70 flex items-start gap-2"
          >
            <span className="text-leaf mt-0.5 shrink-0">—</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TargetAudience() {
  const { ref: headingRef, inView: headingInView } = useInView();

  return (
    <section id="dampak" className="px-6 py-20 sm:py-24 md:py-32 bg-white scroll-mt-20">
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
            Target Pengguna
          </p>
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-semibold text-forest">
            Untuk Semua{" "}
            <span className="italic font-serif font-normal">
              Pemangku Kepentingan
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {audiences.map((a, i) => (
            <AudienceCard key={a.title} audience={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
