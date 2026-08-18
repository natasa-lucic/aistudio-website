import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

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
  return (
    <section id="how-we-work" className="bg-[#1f1f1f] relative overflow-hidden min-h-screen flex flex-col">
      <div className="max-w-[1440px] mx-auto px-[100px] pt-[100px] pb-[80px] relative z-10 flex-1 flex flex-col justify-center">
        {/* Top: heading + description side by side */}
        <div className="flex gap-16 items-start mb-16">
          <AnimatedSection className="shrink-0 w-[380px]" direction="left" duration={1}>
            <h2 className="text-[40px] font-bold text-[#f5f5f5] tracking-[-0.4px] leading-[1.2]">
              From opportunity to outcome
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

        {/* Steps — 4 columns with left borders */}
        <div className="grid grid-cols-4">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={0.3 + 0.15 * i} duration={0.8}>
              <div className="border-l border-white/[0.26] py-6 px-6 h-full">
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

      {/* Building image bottom right */}
      <div className="absolute right-0 bottom-0 w-[662px] h-[525px] mix-blend-plus-lighter opacity-25">
        <Image src="/building-howwework.png" alt="" fill className="object-bottom" />
      </div>
    </section>
  );
}
