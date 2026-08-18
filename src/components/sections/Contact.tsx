import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-[100px] bg-[#1f1f1f]">
      <div className="max-w-[1440px] mx-auto px-[100px]">
        <AnimatedSection>
          <h2 className="text-[40px] font-bold text-[#f5f5f5] tracking-[-0.4px] leading-[1.2] mb-8">
            Have an opportunity<br />worth exploring?
          </h2>
        </AnimatedSection>

        <div className="flex gap-16 items-start">
          {/* Left column */}
          <AnimatedSection delay={0.1} className="max-w-[380px]" direction="left" duration={1}>
            <p className="text-base font-bold text-[#f5f5f5] mb-4">
              Bring us the problem - we&apos;ll help explore what&apos;s possible.
            </p>
            <p className="text-sm text-[#8f8f8f] leading-[1.6] mb-8">
              If you&apos;ve identified a recurring client challenge an inefficient way of
              working, or an opportunity where AI and digital could create meaningful
              value, we&apos;d like to hear about it.
            </p>
            <a
              href="mailto:aistudio@arcadis.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-[#f5f5f5] text-sm rounded-full hover:bg-white/10 transition-colors"
            >
              Discuss an opportunity
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </AnimatedSection>

          {/* Right column */}
          <AnimatedSection delay={0.3} direction="right" duration={1}>
            <p className="text-base font-bold text-[#f5f5f5] mb-4">
              Have a question about AI Studio?
            </p>
            <p className="text-sm text-[#8f8f8f] leading-[1.6] mb-4">
              Get in touch with the AI Studio team.
            </p>
            <a
              href="mailto:aistudio@arcadis.com"
              className="inline-flex items-center gap-2 text-[#f5f5f5] text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              aistudio@arcadis.com
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
