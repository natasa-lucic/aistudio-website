"use client";

import { useRef } from "react";
import Image from "next/image";
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
    <>
      {/* Subheading bar */}
      <div className="bg-[#1f1f1f] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-[100px] py-4">
          <p className="text-xs uppercase tracking-[1.2px] text-[#bbb]">
            The future of Arcadis delivery through AI
          </p>
        </div>
      </div>

      <section
        ref={ref}
        className="relative h-[calc(100vh-60px)] flex flex-col overflow-hidden bg-[#1f1f1f]"
      >
        {/* Building image - parallax */}
        <motion.div
          className="absolute right-0 top-0 h-full w-[55%] mix-blend-screen opacity-55"
          style={{ y: bgY }}
        >
          <Image
            src="/Building1.png"
            alt=""
            fill
            className="object-contain object-right-bottom"
            priority
          />
        </motion.div>

        {/* Hero content */}
        <motion.div
          className="relative z-10 max-w-[1440px] mx-auto px-[100px] w-full flex-1 flex flex-col justify-center pb-8"
          style={{ y: textY, opacity }}
        >
          <motion.h1
            className="text-[120px] font-bold tracking-tight text-[#ededed] leading-[1.1] mb-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            AI Studio
          </motion.h1>

          <motion.p
            className="max-w-[557px] text-2xl text-[#ededed] leading-[36px] tracking-[-0.48px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Turning AI and digital capabilities into better outcomes for our clients.
          </motion.p>

          {/* Stats card */}
          <motion.div
            className="mt-[100px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 rounded-[18px] bg-white/[0.09] backdrop-blur-sm p-[52px]">
              <p className="max-w-[507px] text-lg text-[#ededed] leading-[1.6] opacity-85">
                The AI Studio explores how emerging AI and digital capabilities can be
                combined with our domain expertise and global delivery capability to solve
                meaningful client problems and create new opportunities.
              </p>
              <div className="flex flex-1 items-center justify-around gap-16">
                <Stat value="17" label="Scaling opportunities" />
                <Stat value="4" label="Service lines engaged" />
                <Stat value="3" label="Strategic partners" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-start">
        <span className="text-[56px] font-bold text-[#fafafa] leading-[1.1] tracking-[-6px]">{value}</span>
        <span className="ml-1 mt-2 inline-block size-2 bg-[#ff5c00]" />
      </div>
      <span className="text-base text-[#f5f5f5]">{label}</span>
    </div>
  );
}
