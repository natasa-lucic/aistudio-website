"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const approaches = [
  { icon: "/icon-build-dark.png", label: "Build" },
  { icon: "/icon-buy-dark.png", label: "Buy" },
  { icon: "/icon-partner-dark.png", label: "Partner" },
];

const steps = [
  {
    number: "01",
    title: "Is it worth pursuing?",
    description:
      "Is there a meaningful client opportunity, strategic fit and potential value?",
  },
  {
    number: "02",
    title: "Are we solving the right problem?",
    description:
      "Do we have evidence that this is a real and important problem for our target users and clients?",
  },
  {
    number: "03",
    title: "Have we found the right solution?",
    description:
      "Can we demonstrate that the proposed solution is desirable, usable, feasible and viable?",
  },
  {
    number: "04",
    title: "Can it create value at scale?",
    description:
      "Is there evidence of demand, adoption and sufficient business potential to justify further product investment?",
  },
];

export default function HowWeWork() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="how-we-work" ref={wrapperRef} className="snap-start [scroll-snap-stop:always] relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#1f1f1f]">
        {/* Building image — pinned behind both content panels */}
        <div className="absolute right-0 top-0 bottom-0 w-[700px] mix-blend-plus-lighter opacity-25">
          <Image src="/building-howwework.png" alt="" fill className="object-contain object-bottom" />
        </div>

        {/* Content stack — slides up over the pinned background as the user scrolls */}
        <motion.div style={{ y }} className="relative z-10 h-[200vh]">
          {/* Panel 1: From opportunity to outcome */}
          <div className="h-screen flex flex-col justify-center">
            <div className="max-w-[1440px] mx-auto px-[100px] w-full">
              <div className="flex gap-16 items-start mb-16">
                <AnimatedSection className="shrink-0 w-[380px]" direction="left" duration={1}>
                  <h2 className="text-[40px] font-bold text-[#f5f5f5] tracking-[-0.4px] leading-[1.2]">
                    From opportunity
                    <br />
                    to outcome
                  </h2>
                </AnimatedSection>

                <AnimatedSection delay={0.2} className="flex-1 max-w-[500px]" direction="right" duration={1}>
                  <div className="flex flex-col gap-4 text-[#8f8f8f] text-base leading-[1.6]">
                    <p>
                      Not every idea should become a product - and not every solution needs to be built by us.
                    </p>
                    <p>
                      We progressively evaluate opportunities based on the client problem, strategic fit and potential value. As evidence and confidence grow, we determine whether an opportunity is worth pursuing and the best way to bring it to life.
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              <div className="grid grid-cols-4">
                {steps.map((step, i) => (
                  <AnimatedSection key={step.number} delay={0.3 + 0.15 * i} duration={0.8}>
                    <div className="border-l border-dashed border-white/[0.08] py-6 px-6 h-full">
                      <p className="text-5xl text-[#676767] leading-[1.1] mb-8">{step.number}</p>
                      <h3 className="text-lg font-bold text-[#f5f5f5] tracking-[-0.32px] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#cecece] opacity-80 leading-[1.5]">
                        {step.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          {/* Panel 2: We pursue the approach... */}
          <div className="h-screen flex flex-col justify-center">
            <div className="max-w-[1440px] mx-auto px-[100px] w-full">
              <AnimatedSection className="max-w-[700px] mb-16" direction="left" duration={1}>
                <h2 className="text-[40px] font-bold text-[#f5f5f5] tracking-[-0.4px] leading-[1.2]">
                  We pursue the approach best positioned to create sustainable client and business value.
                </h2>
              </AnimatedSection>

              <div className="max-w-[684px]">
                <div className="grid grid-cols-3 gap-8">
                  {approaches.map((item, i) => (
                    <AnimatedSection key={item.label} delay={0.2 + 0.15 * i} duration={0.8}>
                      <div className="flex items-center gap-2 mb-6">
                        <span className="size-[7px] bg-[#ff5c00] shrink-0" />
                        <p className="text-xs font-bold uppercase tracking-[1.2px] text-[#f5f5f5]">
                          {item.label}
                        </p>
                      </div>
                      <div className="h-[90px] w-[90px] relative">
                        <Image src={item.icon} alt="" fill className="object-contain object-left" />
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                <AnimatedSection delay={0.5} duration={0.8}>
                  <p className="text-sm text-[#cecece] opacity-80 leading-[1.5] mt-10 max-w-[560px]">
                    Promising initiatives progress towards implementation and scale; others may be refined, pivoted or stopped based on what we learn.
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
