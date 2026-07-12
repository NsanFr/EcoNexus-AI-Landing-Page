"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "Fitur", href: "#fitur" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Dampak", href: "#dampak" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-sans text-lg font-semibold tracking-tight text-forest"
        >
          EcoNexus
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={scrollTo(link.href.slice(1))}
              className="text-forest/70 hover:text-forest transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={scrollTo("kontak")}
            className="rounded-md bg-forest px-4 py-2 text-sm text-cream hover:bg-moss transition-colors cursor-pointer"
          >
            Gabung Waitlist
          </a>
        </div>

        <button
          className="md:hidden text-forest p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-stone/50 px-6 py-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={scrollTo(link.href.slice(1))}
              className="block text-forest/70 hover:text-forest transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={scrollTo("kontak")}
            className="inline-block rounded-md bg-forest px-4 py-2 text-sm text-cream hover:bg-moss transition-colors cursor-pointer"
          >
            Gabung Waitlist
          </a>
        </div>
      )}
    </nav>
  );
}
