# EcoNexus AI — Landing Page

Landing page untuk **EcoNexus AI**, platform SaaS Climate Intelligence yang
dirancang untuk mitigasi bencana hidrometeorologi dan pembiayaan hijau berbasis
syariah di Indonesia.

Dibangun dengan Next.js + TypeScript + Tailwind CSS v4.

## Tech Stack

| Bagian | Teknologi |
|--------|-----------|
| Framework | Next.js 16 |
| Bahasa | TypeScript |
| Styling | Tailwind CSS v4 |
| Font | Sora (heading), Source Serif 4 (body) |
| Animasi | CSS keyframes + IntersectionObserver |
| Build | Webpack |

## Struktur Halaman

Landing page terdiri dari 8 section:

1. **Navbar** — Fixed navigation dengan mobile hamburger menu
2. **Hero** — Headline + forest image + morphing blob background
3. **Tentang** — Deskripsi platform + kemampuan inti + diagram alur data
4. **Fitur** — 9 modular feature cards dengan SVG icons handmade
5. **Cara Kerja** — 4 step alur data pipeline
6. **Dampak** — 3 segmen target pengguna (Pemerintah, Korporasi, Masyarakat)
7. **Teknologi** — 5 pilar teknologi (AI, Big Data, IoT, Blockchain, Cloud)
8. **CTA** — Email waitlist form + sosial media

## Cara Menjalankan

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build production
npm run build

# Start production server
npm start
```

Buka `http://localhost:3000` di browser.

> **Catatan:** Di Windows x64, perlu `--webpack` flag karena Turbopack belum
> support platform ini. Udah diatur otomatis di `package.json`.

## Struktur Project

```
src/
├── app/
│   ├── globals.css      # Tailwind theme + custom animations + patterns
│   ├── layout.tsx       # Root layout with fonts & metadata
│   └── page.tsx         # Halaman utama (gabungan semua section)
├── components/
│   ├── navbar.tsx       # Navigation bar (sticky, scroll-aware, mobile menu)
│   ├── hero.tsx         # Hero section (forest image, blob animation)
│   ├── about.tsx        # About + kemampuan inti + diagram alur data
│   ├── features.tsx     # 9 feature cards dengan SVG icons
│   ├── how-it-works.tsx # 4 step boxes
│   ├── target-audience.tsx # 3 segmen pengguna
│   ├── tech-stack.tsx   # 5 pilar teknologi
│   ├── cta.tsx          # Waitlist form + sosial media
│   ├── animated-section.tsx # Scroll-triggered fade-in wrapper
│   └── footer.tsx       # Footer
└── hooks/
    └── use-in-view.ts   # IntersectionObserver hook
```

## Desain

### Warna
| Nama | Warna | Penggunaan |
|------|-------|------------|
| cream | `#f5f3ee` | Background utama |
| forest | `#1a3c2a` | Teks utama, tombol solid |
| leaf | `#4a7c59` | Aksen, ikon, highlight |
| moss | `#2d5a3d` | Hover state tombol |
| stone | `#e8e5df` | Border |

### Font
- **Sora** — headings (sans-serif, geometric)
- **Source Serif 4** — body text (serif, readability)

Hindari font AI-slop kayak Inter atau Poppins.

### Animasi
- Scroll-triggered fade-up tiap section (IntersectionObserver)
- Morphing blob di background hero
- Image reveal (clip-path) di hero
- Floating badge
- Stagger animation di feature cards

### Background Patterns
- Dots, rings, dan diagonal lines — sangat tipis (opacity 4-8%)
- Biar halaman tidak kosong tanpa ganggu readability

## Deployment

### GitHub Pages
```bash
npm run build
```

Hasil build ada di folder `out/`. Tinggal arahkan GitHub Pages ke folder
`/root` atau `/docs` tergantung konfigurasi.

### Vercel / Netlify / Cloudflare Pages
Tinggal hubungkan repo GitHub, build command `npm run build`, output folder
`out/`. Jangan lupa set `next build --webpack` di build settings.
