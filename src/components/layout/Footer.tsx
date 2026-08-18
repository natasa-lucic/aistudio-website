import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-[100px]">
        {/* Top row */}
        <div className="flex items-center justify-between py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Image src="/arcadis-logo.svg" alt="Arcadis" width={100} height={20} />
            <span className="text-white/40 text-sm">|</span>
            <span className="text-white/60 text-sm">AI Studio</span>
          </div>
          <nav className="flex items-center gap-8">
            <a href="#mission" className="text-sm text-white/50 hover:text-white transition-colors">Our mission</a>
            <a href="#focus" className="text-sm text-white/50 hover:text-white transition-colors">Our focus</a>
            <a href="#our-work" className="text-sm text-white/50 hover:text-white transition-colors">Our work</a>
            <a href="#contact" className="text-sm text-white/50 hover:text-white transition-colors">Contact</a>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="py-4">
          <p className="text-xs text-white/30">
            &copy; Arcadis {new Date().getFullYear()}&ensp;|&ensp;Internal use only
          </p>
        </div>
      </div>
    </footer>
  );
}
