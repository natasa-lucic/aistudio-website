"use client";

import { motion } from "framer-motion";

interface MobileMenuProps {
  items: { href: string; label: string }[];
  onClose: () => void;
}

export default function MobileMenu({ items, onClose }: MobileMenuProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[60] bg-[#1a1a1a] flex flex-col"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
    >
      <div className="flex items-center justify-between px-6 py-4">
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
        <button
          onClick={onClose}
          className="p-2 text-white"
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="flex flex-col items-center justify-center flex-1 gap-8">
        {items.map((item, i) => (
          <motion.a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
          >
            {item.label}
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
}
