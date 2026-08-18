import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/ui/ProjectCard";

export default function OurWork() {
  const projects = getAllProjects();

  return (
    <section id="our-work" className="py-24 md:py-32 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <AnimatedSection>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#FF6B00] mb-4">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl">
            Projects driving real impact
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mb-16">
            From prototype to production — here&apos;s how AI Studio is transforming
            delivery across Arcadis.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={0.1 * i}>
              <Link href={`/projects/${project.slug}`}>
                <ProjectCard project={project} />
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
