"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "@/components/ui/MobileMenu";

const navItems = [
  { href: "#mission", label: "Our Mission" },
  { href: "#focus", label: "Our Focus" },
  { href: "#how-we-work", label: "How We Work" },
  { href: "#our-work", label: "Our Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-[#1a1a1a]/95 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">
          <a href="#" className="flex items-center gap-2">
            <svg
              width="140"
              height="28"
              viewBox="0 0 180 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Arcadis"
            >
              <circle cx="12" cy="16" r="10" stroke="white" strokeWidth="2" fill="none" />
              <path d="M8 20 Q12 8 16 20" stroke="#FF6B00" strokeWidth="2" fill="none" />
              <text x="30" y="22" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">
                ARCADIS
              </text>
            </svg>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-xs font-medium uppercase tracking-widest transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FF6B00]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-4 h-0.5 bg-white" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            items={navItems}
            onClose={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
