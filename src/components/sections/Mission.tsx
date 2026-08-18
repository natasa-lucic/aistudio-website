import AnimatedSection from "@/components/ui/AnimatedSection";

const foundations = [
  "Deep domain expertise across sectors",
  "Trusted client relationships",
  "Global delivery capability",
  "A wealth of project data and insights",
];

export default function Mission() {
  return (
    <section id="mission" className="relative bg-[#1f1f1f] overflow-hidden min-h-screen flex flex-col">
      {/* Section label bar */}
      <div className="border-y border-white/10">
        <div className="max-w-[1440px] mx-auto px-[100px] py-4">
          <p className="text-xs font-bold uppercase tracking-[1.2px] text-[#1f1f1f] dark:text-[#bbb] text-[#bbb]">
            Our Mission
          </p>
        </div>
      </div>

      <div className="max-w-[1243px] mx-auto py-[140px] relative z-10 flex-1 flex items-center">
        <div className="flex gap-[133px] items-end">
          {/* Left: We build on */}
          <AnimatedSection className="w-[436px] shrink-0" direction="left" duration={1}>
            <h3 className="text-[32px] text-[#ededed] tracking-[-0.64px] leading-[36px] mb-9">
              We build on
            </h3>
            <div className="flex flex-col gap-[12px]">
              {foundations.map((item, i) => (
                <div key={i} className="rounded-md border border-white/10 py-[18px] px-5 flex gap-4 items-center bg-white/[0.03]">
                  <span className="text-base font-bold text-[#676767]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg text-[#8f8f8f]">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Scaling our expertise */}
          <AnimatedSection delay={0.3} className="flex-1" direction="right" duration={1}>
            <h2 className="text-[40px] font-bold text-[#ededed] tracking-[-0.4px] leading-[1.2] mb-6 max-w-[525px]">
              Scaling our expertise through AI and digital
            </h2>
            <div className="space-y-6 text-lg text-[#8f8f8f] leading-[1.6]">
              <p>
                Our mission is to identify where AI and digital capabilities can genuinely
                improve the way we solve problems for our clients.
              </p>
              <p>
                We build on what already differentiates us — our domain expertise, trusted
                client relationships and global delivery capability — and combine it with
                customer insight, product thinking and technology to explore new ways of
                delivering value.
              </p>
              <p>
                In doing so, we strengthen our Human + Digital strategy: augmenting our
                people, transforming how we deliver, and creating scalable digital
                capabilities that complement our core business.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
