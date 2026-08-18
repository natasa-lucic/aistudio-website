import AnimatedSection from "@/components/ui/AnimatedSection";

const focusAreas = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12h6M12 9v6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Natural Language Processing",
    description:
      "Extracting insights from unstructured documents, automating review processes, and enabling natural language interfaces to complex data.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3h18v18H3zM9 9h6v6H9z" />
      </svg>
    ),
    title: "Computer Vision",
    description:
      "Automated inspection of infrastructure assets, satellite imagery analysis, and real-time environmental monitoring through visual AI.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Predictive Analytics",
    description:
      "Forecasting asset degradation, environmental changes, and project risks using machine learning models trained on domain-specific data.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Digital Twins",
    description:
      "Creating virtual replicas of physical assets and systems that combine real-time sensor data with engineering models for decision support.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m14 0h2M3 15h2m14 0h2M7 7h10v10H7z" />
      </svg>
    ),
    title: "Workflow Automation",
    description:
      "Intelligent orchestration of complex processes — from permitting workflows to quality assurance — reducing manual effort and accelerating delivery.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Generative AI",
    description:
      "Leveraging large language models for report generation, design exploration, stakeholder communication, and knowledge management at scale.",
  },
];

export default function Focus() {
  return (
    <section id="focus" className="py-24 md:py-32 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <AnimatedSection>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF6B00] mb-4">
            Our Focus
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl">
            Deep expertise across AI disciplines
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mb-16">
            We bring together specialists in machine learning, data engineering, and
            domain science to solve problems that matter.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, i) => (
            <AnimatedSection key={area.title} delay={0.1 * i}>
              <div className="group p-6 rounded-xl border border-white/10 hover:border-[#FF6B00]/30 bg-white/5 hover:bg-white/[0.08] transition-all duration-300">
                <div className="text-[#FF6B00] mb-4">{area.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
