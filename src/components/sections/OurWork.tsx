import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects";
import AnimatedSection from "@/components/ui/AnimatedSection";

const projectImages = [
  "/project-1.png",
  "/project-2.png",
  "/project-3.png",
];

export default function OurWork() {
  const projects = getAllProjects();

  return (
    <section id="our-work" className="snap-start [scroll-snap-stop:always] bg-[#f5f5f5] min-h-screen flex flex-col justify-center py-[100px]">
      <div className="max-w-[1440px] mx-auto px-[100px]">
        <AnimatedSection className="text-center max-w-[726px] mx-auto mb-12" duration={1} distance={80}>
          <h2 className="text-[40px] font-bold text-[#1f1f1f] tracking-[-0.4px] leading-[1.2] mb-4">
            Turning opportunity into impact
          </h2>
          <p className="text-lg text-[#676767] leading-[1.4]">
            See how we&apos;re applying AI and digital capabilities to real client
            challenges — exploring, testing and validating new ways to deliver better
            outcomes.
          </p>
        </AnimatedSection>
      </div>

        {/* Project cards */}
        <div className="flex gap-6 overflow-x-auto pb-4 px-[100px] snap-x">
          {projects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={0.2 + 0.15 * i} className="shrink-0" scale>
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="relative w-[380px] h-[460px] rounded-xl overflow-hidden group">
                  <Image
                    src={projectImages[i] || projectImages[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[74%] to-black" />

                  {/* Tag */}
                  <div className="absolute top-6 left-6">
                    <span className="backdrop-blur-[12px] bg-[#1f1f1f]/40 text-[#f5f5f5] text-base leading-[1.2] px-3 py-2 rounded-lg">
                      {project.technologies[0]}
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3">
                    <p className="text-lg text-[#f5f5f5] leading-[1.2]">
                      {project.title}
                    </p>
                    <div className="flex items-center gap-1 text-[#f5f5f5]">
                      <span className="text-sm">Explore</span>
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="rotate-45">
                        <path d="M5 10h10M10 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
    </section>
  );
}
