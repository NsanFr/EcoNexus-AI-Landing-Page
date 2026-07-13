import AnimatedSection from "./animated-section";

export default function About() {
  return (
    <section id="tentang" className="px-6 py-20 sm:py-24 md:py-32 bg-surface bg-pattern-lines scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-semibold text-text mb-8">
            Platform Iklim untuk Indonesia
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 mb-12">
          <AnimatedSection delay={100}>
            <p className="text-text/80 leading-relaxed text-base sm:text-lg mb-5 sm:mb-6">
              EcoNexus AI hadir sebagai platform SaaS Climate Intelligence yang
              dirancang khusus untuk mitigasi bencana hidrometeorologi sekaligus
              merevolusi ekosistem pembiayaan hijau berbasis syariah di Indonesia.
            </p>
            <p className="text-text/70 leading-relaxed text-sm sm:text-base">
              Berfokus pada kompleksitas ekosistem lahan gambut dan hutan di
              Kalimantan, platform ini mengolah data dari satelit global NASA,
              Copernicus, BMKG, BRIN, dan BIG dalam satu pipa data terintegrasi.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="bg-card rounded-md p-6 sm:p-8 border border-border/50 shadow-sm">
              <h3 className="font-sans text-base sm:text-lg font-semibold text-text mb-4 sm:mb-5">
                Kemampuan Inti
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "Prediksi bencana berbasis AI dengan latensi di bawah 5 menit",
                  "Integrasi data satelit, drone, dan sensor IoT lapangan",
                  "Dashboard multi-pengguna untuk pemerintah & korporasi",
                  "Notifikasi real-time dengan akses offline",
                  "Pembiayaan hijau syariah transparan berbasis blockchain",
                ].map((item, i) => (
                  <li key={item} className="flex items-start gap-3 text-text/70 text-sm sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-leaf shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={300}>
          <div className="bg-card rounded-md border border-border/50 p-8 sm:p-10 shadow-sm">
            <h3 className="font-sans text-lg sm:text-xl font-semibold text-text mb-8 sm:mb-10 text-center">
              Alur Data Platform
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-between md:px-4 gap-6 md:gap-0">
              <div className="flex flex-col items-center text-center min-w-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md bg-leaf/10 text-leaf flex items-center justify-center mb-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="font-sans text-sm sm:text-base font-semibold text-text">Satelit Global</span>
                <span className="text-xs sm:text-sm text-text/50">NASA & Copernicus</span>
              </div>

              <div className="hidden md:block text-leaf/40 shrink-0">
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                  <path d="M4 12h36M32 4l8 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="block md:hidden text-leaf/40 rotate-90 shrink-0">
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                  <path d="M4 12h36M32 4l8 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="flex flex-col items-center text-center min-w-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md bg-leaf/10 text-leaf flex items-center justify-center mb-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="font-sans text-sm sm:text-base font-semibold text-text">Data Lokal</span>
                <span className="text-xs sm:text-sm text-text/50">BMKG, BRIN, BIG</span>
              </div>

              <div className="hidden md:block text-leaf/40 shrink-0">
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                  <path d="M4 12h36M32 4l8 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="block md:hidden text-leaf/40 rotate-90 shrink-0">
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                  <path d="M4 12h36M32 4l8 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="flex flex-col items-center text-center min-w-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md bg-forest text-cream flex items-center justify-center mb-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="10.5" y1="6.5" x2="6.5" y2="17.5" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="13.5" y1="6.5" x2="17.5" y2="17.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <span className="font-sans text-sm sm:text-base font-semibold text-text">AI Processing</span>
                <span className="text-xs sm:text-sm text-text/50">TensorFlow &lt; 5 menit</span>
              </div>

              <div className="hidden md:block text-leaf/40 shrink-0">
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                  <path d="M4 12h36M32 4l8 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="block md:hidden text-leaf/40 rotate-90 shrink-0">
                <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                  <path d="M4 12h36M32 4l8 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="flex flex-col items-center text-center min-w-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-md bg-leaf/10 text-leaf flex items-center justify-center mb-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="13" y="3" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="3" y="15" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="13" y="15" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <span className="font-sans text-sm sm:text-base font-semibold text-text">Output</span>
                <span className="text-xs sm:text-sm text-text/50">Dashboard & Notifikasi</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
