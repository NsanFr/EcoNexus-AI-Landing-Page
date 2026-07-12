import type { Metadata } from "next";
import { Sora, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoNexus AI — Platform Climate Intelligence",
  description:
    "Platform SaaS Climate Intelligence untuk mitigasi bencana hidrometeorologi & pembiayaan hijau syariah di Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${sora.variable} ${sourceSerif.variable}`}>
      <body className="min-h-screen bg-cream font-serif text-forest antialiased">
        {children}
      </body>
    </html>
  );
}
