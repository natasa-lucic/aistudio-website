import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const dimensions = [
  {
    icon: "/icon-adoption.svg",
    title: "Adoption",
    description: "Are people using it?",
    bg: "bg-[#2e1100]",
    textColor: "text-[#f5f5f5]",
  },
  {
    icon: "/icon-workflow.svg",
    title: "Workflow improvement",
    description: "Is work becoming faster, better, or easier?",
    bg: "bg-[#662500]",
    textColor: "text-[#f5f5f5]",
  },
  {
    icon: "/icon-business.svg",
    title: "Business impact",
    description: "Is it improving productivity, capacity, margins, or revenue?",
    bg: "bg-[#c24600]",
    textColor: "text-[#f5f5f5]",
  },
  {
    icon: "/icon-strategic.svg",
    title: "Strategic impact",
    description: "Is it helping transform Arcadis?",
    bg: "bg-[#ff9052]",
    textColor: "text-[#1f1f1f]",
  },
];

export default function Adoption() {
  return (
    <section className="bg-[#f5f5f5] min-h-screen flex flex-col justify-center py-[80px]">
      <div className="max-w-[1310px] mx-auto rounded-xl overflow-hidden bg-[#1f1f1f]">
        <div className="pt-[146px] pb-[100px] px-16 text-center">
          <AnimatedSection className="max-w-[672px] mx-auto" duration={1} distance={80}>
            <h2 className="text-[40px] font-bold text-[#f5f5f5] tracking-[-0.4px] leading-[1.2] mb-4">
              Scaling Through Adoption
            </h2>
            <p className="text-lg text-[#bbb] leading-[1.4]">
              Success is not measured by how many tools we build. It is measured by how
              many people use them and whether work improves as a result. Our approach
              prioritises adoption alongside innovation. We measure value in four
              dimensions:
            </p>
          </AnimatedSection>
        </div>

        {/* Four dimension cards */}
        <AnimatedSection className="flex" delay={0.3} duration={0.8}>
          {dimensions.map((dim) => (
            <div
              key={dim.title}
              className={`${dim.bg} flex gap-5 items-start p-[18px] flex-1`}
            >
              <div className="size-[60px] bg-[#f5f5f5]/[0.17] border border-[#f5f5f5]/[0.24] flex items-center justify-center shrink-0">
                <Image src={dim.icon} alt="" width={24} height={24} />
              </div>
              <div className="flex flex-col gap-1">
                <p className={`text-base font-bold ${dim.textColor} tracking-[-0.32px]`}>
                  {dim.title}
                </p>
                <p className={`text-sm ${dim.textColor} opacity-80 leading-[1.5]`}>
                  {dim.description}
                </p>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
