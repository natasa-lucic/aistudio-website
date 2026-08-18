import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We embed with delivery teams to identify high-impact problems where AI can make a meaningful difference. No technology looking for a problem — only real challenges seeking better solutions.",
  },
  {
    number: "02",
    title: "Prototype",
    description:
      "Rapid experimentation with real data. We build working proofs-of-concept within weeks, testing feasibility and refining approaches with direct input from domain experts.",
  },
  {
    number: "03",
    title: "Scale",
    description:
      "Successful prototypes are engineered for production: robust data pipelines, monitoring, and integration with existing workflows. We design for adoption, not just accuracy.",
  },
  {
    number: "04",
    title: "Measure",
    description:
      "Every deployment is instrumented to track real impact — time saved, cost reduced, quality improved. We iterate based on outcomes, not assumptions.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 md:py-32 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <AnimatedSection>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF6B00] mb-4">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-16 max-w-2xl">
            From opportunity to impact in four steps
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={0.15 * i}>
              <div className="relative group">
                <span className="text-6xl font-bold text-[#FF6B00]/10 group-hover:text-[#FF6B00]/20 transition-colors duration-300">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
