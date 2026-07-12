"use client";

import { useInView } from "@/hooks/use-in-view";

const steps = [
  {
    number: "01",
    title: "Pengumpulan Data",
    desc: "Data satelit (NASA, Copernicus) dikombinasikan dengan data cuaca dan geospasial dari BMKG, BRIN, dan BIG.",
  },
  {
    number: "02",
    title: "Pemrosesan AI",
    desc: "Mesin TensorFlow di cloud AWS/GCP memproses ribuan parameter lingkungan dengan latensi di bawah 5 menit.",
  },
  {
    number: "03",
    title: "Analitik & Prediksi",
    desc: "Sistem menghasilkan prediksi spasial titik api, sebaran banjir, dan rekomendasi mitigasi.",
  },
  {
    number: "04",
    title: "Distribusi & Aksi",
    desc: "Output dikirim ke dashboard korporat, notifikasi mobile masyarakat, dan sistem pembiayaan hijau.",
  },
];

function Step({
  step,
  index,
}: {
  step: { number: string; title: string; desc: string };
  index: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="border border-stone/50 rounded-md p-5 sm:p-6 bg-white relative shadow-sm"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <span className="font-sans text-5xl sm:text-6xl font-bold text-leaf/10 absolute top-2 right-4 select-none">
        {step.number}
      </span>
      <div className="relative z-10">
        <div className="w-8 h-8 rounded-md bg-leaf/10 text-leaf flex items-center justify-center text-xs font-bold font-sans mb-3">
          {step.number}
        </div>
        <h3 className="font-sans text-sm sm:text-base font-semibold text-forest mb-1.5 sm:mb-2">
          {step.title}
        </h3>
        <p className="text-xs sm:text-sm text-forest/70 leading-relaxed">
          {step.desc}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const { ref: headingRef, inView: headingInView } = useInView();

  return (
    <section id="cara-kerja" className="px-6 py-20 sm:py-24 md:py-32 bg-pattern-dots scroll-mt-20">
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
            Cara Kerja
          </p>
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-semibold text-forest">
            Dari Data Satelit ke Aksi Nyata
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((step, i) => (
            <Step key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
