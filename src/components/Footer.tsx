export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-navy-800 bg-navy-950/40 text-center select-none" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center gap-2">
        <p className="text-slate-200 text-sm font-medium">
          P Koushal &copy; 2026
        </p>
        <p className="text-slate-400 text-xs">
          Built with React, Tailwind CSS, and passion for software development.
        </p>
      </div>
    </footer>
  );
}
