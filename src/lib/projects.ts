import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: string[];
  metrics: ProjectMetric[];
  heroImage: string;
  content: string;
}

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export function getAllProjects(): Project[] {
  const filenames = fs.readdirSync(projectsDirectory);
  const projects = filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(projectsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        challenge: data.challenge,
        solution: data.solution,
        outcome: data.outcome,
        technologies: data.technologies ?? [],
        metrics: data.metrics ?? [],
        heroImage: data.heroImage ?? "",
        content,
      } as Project;
    });

  return projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getAllProjects();
  return projects.find((p) => p.slug === slug);
}
