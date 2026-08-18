export default function Footer() {
  return (
    <footer className="bg-[#111] text-white/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <svg
            width="100"
            height="20"
            viewBox="0 0 180 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Arcadis"
          >
            <circle cx="12" cy="16" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M8 20 Q12 8 16 20" stroke="#FF6B00" strokeWidth="2" fill="none" />
            <text x="30" y="22" fill="currentColor" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">
              ARCADIS
            </text>
          </svg>
          <span className="text-xs">AI Studio</span>
        </div>
        <p className="text-xs">&copy; {new Date().getFullYear()} Arcadis. All rights reserved.</p>
      </div>
    </footer>
  );
}
