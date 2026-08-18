import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const pillars = [
  {
    image: "/Augment.png",
    titleBold: "Augment",
    titleRegular: "our expertise",
    description:
      "Helping our people deliver better, faster or more consistently.",
  },
  {
    image: "/Transform.png",
    titleBold: "Transform",
    titleRegular: "how we deliver",
    description:
      "Automating or fundamentally improving parts of existing consulting workflows.",
  },
  {
    image: "/Create.png",
    titleBold: "Create",
    titleRegular: "new digital offerings",
    description:
      "Turning our expertise into repeatable digital capabilities that can be used by our people and our clients.",
  },
];

export default function Focus() {
  return (
    <section id="focus" className="bg-[#f5f5f5] min-h-screen flex flex-col">
      {/* Section label bar */}
      <div className="border-y border-[#1f1f1f]/15">
        <div className="max-w-[1440px] mx-auto px-[100px] py-4">
          <p className="text-xs font-bold uppercase tracking-[1.2px] text-[#1f1f1f]">
            Our Focus
          </p>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto py-[140px] flex flex-col gap-[100px] items-center flex-1 justify-center">
        <AnimatedSection className="text-center max-w-[796px]" duration={1} distance={80}>
          <h2 className="text-[40px] font-bold text-[#1f1f1f] tracking-[-0.4px] leading-[1.2] mb-4">
            Where expertise meets opportunity
          </h2>
          <p className="text-lg text-[#676767] leading-[1.4]">
            AI technology alone isn&apos;t our differentiator. The opportunity lies in
            combining it with our domain expertise, client relationships, global delivery
            capability and wealth of project data and insights to create new value for our
            clients.
          </p>
        </AnimatedSection>

        {/* Three pillars with vertical orange line separators */}
        <div className="flex items-center justify-center gap-12 w-full">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.titleBold} delay={0.2 + 0.15 * i} className="contents" duration={1}>
              {/* Orange vertical line separator */}
              <div className="flex flex-col gap-6 items-center h-[260px] w-[9px] shrink-0">
                <div className="size-[9px] bg-[#ff5c00]" />
                <div className="flex-1 w-px bg-[#ff5c00]/30" />
                <div className="size-[9px] bg-[#ff5c00]" />
              </div>

              {/* Pillar content */}
              <div className="flex flex-col items-center text-center justify-between h-[260px] w-[320px]">
                <div className="h-[80px] w-[86px] relative">
                  <Image src={pillar.image} alt="" fill className="object-contain object-bottom" />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-2xl text-[#1f1f1f]">
                    <span className="font-bold">{pillar.titleBold} </span>
                    {pillar.titleRegular}
                  </p>
                  <p className="text-base text-[#676767] leading-[1.5]">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <p className="text-lg text-[#676767] text-center max-w-[564px]">
            Across all three, we look for opportunities where AI and digital can create
            meaningful, scalable client value.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
