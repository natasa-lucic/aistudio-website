import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
        <AnimatedSection>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF6B00] mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6 max-w-3xl mx-auto">
            Have a challenge where AI could help?
          </h2>
          <p className="text-[#1a1a1a]/60 text-lg max-w-xl mx-auto mb-10">
            We&apos;re always looking for the next meaningful problem to solve. Let&apos;s
            explore what&apos;s possible together.
          </p>
          <a
            href="mailto:ai.studio@arcadis.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B00] hover:bg-[#e55f00] text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF6B00]/20"
          >
            Discuss an Opportunity
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
