"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#1a1a1a]"
    >
      {/* Parallax background shapes */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute right-0 top-0 h-full w-1/2">
          <div className="absolute right-32 top-10 w-24 h-[500px] bg-gradient-to-t from-zinc-700/40 to-zinc-600/20 skew-x-[-5deg]" />
          <div className="absolute right-16 top-20 w-20 h-[450px] bg-gradient-to-t from-zinc-700/30 to-zinc-600/10 skew-x-[-5deg]" />
          <div className="absolute right-48 top-5 w-16 h-[520px] bg-gradient-to-t from-zinc-600/40 to-zinc-500/15 skew-x-[-5deg]" />
          <div className="absolute right-60 top-16 w-12 h-[380px] bg-gradient-to-t from-zinc-700/30 to-transparent skew-x-[-5deg]" />
          <div className="absolute right-72 top-32 w-10 h-[300px] bg-gradient-to-t from-zinc-600/20 to-transparent skew-x-[-5deg]" />
        </div>
        {/* Accent glow */}
        <div className="absolute right-20 bottom-1/3 w-64 h-64 bg-[#FF6B00]/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Hero content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full pt-32"
        style={{ y: textY, opacity }}
      >
        <motion.p
          className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF6B00] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          The future of Arcadis delivery through AI
        </motion.p>

        <motion.h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-[0.9] mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          AI Studio
        </motion.h1>

        <motion.p
          className="max-w-lg text-lg md:text-xl text-white/70 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Turning AI and digital capabilities into better outcomes for our clients
          and communities worldwide.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-wrap gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Stat value="17" label="Scaling opportunities" />
          <Stat value="4" label="Service lines engaged" />
          <Stat value="3" label="Strategic partners" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-start">
        <span className="text-4xl md:text-5xl font-light text-white">{value}</span>
        <span className="ml-1 mt-1 inline-block h-2 w-2 bg-[#FF6B00]" />
      </div>
      <span className="text-sm text-white/50">{label}</span>
    </div>
  );
}
