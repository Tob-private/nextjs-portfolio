import { projects } from "@/data/projects";
import { ProjectInterface } from "@/types/projects";
import Moon from "@/components/Moon";

export default function Projects() {
  return (
    <div className="project-grid">
      {projects.map((project: ProjectInterface) => (
        <Moon
          key={project.id}
          title={project.title}
          desc={project.desc}
          link={project.id}
        />
      ))}
    </div>
  );
}
