"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import MobileMenu from "@/components/ui/MobileMenu";

const navItems = [
  { href: "#mission", label: "Our Mission" },
  { href: "#focus", label: "Our Focus" },
  { href: "#our-work", label: "Our Work" },
  { href: "#contact", label: "Talk to Us" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.header
        className="bg-[#1f1f1f] border-b border-white/10 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-[100px] py-4">
          <a href="#" className="flex items-center gap-2">
            <Image src="/arcadis-logo.svg" alt="Arcadis" width={168} height={34} priority />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest transition-colors text-white/60 hover:text-white"
              >
                <span className="inline-block h-2 w-2 bg-[#ff5c00]" />
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
