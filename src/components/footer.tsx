export default function Footer() {
  return (
    <footer className="px-6 py-6 sm:py-8 border-t border-stone/50">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <p className="font-sans text-xs sm:text-sm font-semibold text-forest">
          EcoNexus AI
        </p>
        <p className="text-[10px] sm:text-xs text-forest/50">
          &copy; {new Date().getFullYear()} EcoNexus AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
