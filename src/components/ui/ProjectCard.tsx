import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col h-full p-6 rounded-xl border border-white/10 hover:border-[#FF6B00]/30 bg-white/5 hover:bg-white/[0.08] transition-all duration-300">
      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="text-[10px] uppercase tracking-wider text-[#FF6B00]/80 bg-[#FF6B00]/10 px-2 py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#FF6B00] transition-colors duration-300">
        {project.title}
      </h3>

      <p className="text-sm text-white/60 leading-relaxed mb-6 flex-1">
        {project.excerpt}
      </p>

      {/* Metrics preview */}
      <div className="flex gap-6 pt-4 border-t border-white/10">
        {project.metrics.slice(0, 2).map((metric) => (
          <div key={metric.label} className="flex flex-col">
            <span className="text-lg font-semibold text-white">{metric.value}</span>
            <span className="text-[10px] uppercase tracking-wider text-white/40">
              {metric.label}
            </span>
          </div>
        ))}
      </div>

      {/* Arrow indicator */}
      <div className="absolute top-6 right-6 text-white/20 group-hover:text-[#FF6B00] transition-all duration-300 group-hover:translate-x-1">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </article>
  );
}
