import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { markdownToHtml } from "@/lib/markdown";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

export function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Arcadis AI Studio`,
    description: project.excerpt,
  };
}

export default async function ProjectPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const contentHtml = await markdownToHtml(project.content);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-[#1a1a1a] py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <AnimatedSection>
              <Link
                href="/#our-work"
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] uppercase tracking-wider text-[#FF6B00]/80 bg-[#FF6B00]/10 px-2.5 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                {project.title}
              </h1>
              <p className="text-lg text-white/60 max-w-2xl">
                {project.excerpt}
              </p>
            </AnimatedSection>

            {/* Metrics */}
            <AnimatedSection delay={0.3}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-bold text-white">
                      {metric.value}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-white/40 mt-1">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Challenge / Solution / Outcome */}
        <section className="py-16 md:py-24 bg-[#f8f8f8]">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="grid gap-12">
              <AnimatedSection>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF6B00]">
                      Challenge
                    </span>
                  </div>
                  <p className="md:w-3/4 text-[#1a1a1a]/70 text-lg leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF6B00]">
                      Solution
                    </span>
                  </div>
                  <p className="md:w-3/4 text-[#1a1a1a]/70 text-lg leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF6B00]">
                      Outcome
                    </span>
                  </div>
                  <p className="md:w-3/4 text-[#1a1a1a]/70 text-lg leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Full content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 md:px-8">
            <AnimatedSection>
              <div
                className="prose prose-lg prose-headings:text-[#1a1a1a] prose-headings:font-bold prose-p:text-[#1a1a1a]/70 prose-p:leading-relaxed prose-strong:text-[#1a1a1a] max-w-none"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
