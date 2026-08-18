import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Mission() {
  return (
    <section id="mission" className="py-24 md:py-32 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <AnimatedSection>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF6B00] mb-4">
            Our Mission
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight">
              We explore how AI can transform the way Arcadis delivers for clients.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6 text-[#1a1a1a]/70 text-lg leading-relaxed">
              <p>
                The AI Studio is where emerging AI and digital capabilities meet deep domain
                expertise. We identify meaningful problems across Arcadis service lines and
                develop solutions that scale — turning research into real delivery impact.
              </p>
              <p>
                Our work spans the full lifecycle: from opportunity identification and rapid
                prototyping to production deployment and measurable outcomes. We partner with
                teams across Environment, Water, Transportation, and Built Environment to
                ensure every solution is grounded in real-world complexity.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
