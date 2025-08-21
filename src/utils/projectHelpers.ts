import { projects } from "@/data/projects";
import { ProjectInterface } from "@/types/projects";
import { notFound } from "next/navigation";

export const fetchProjectFromPath = (path: string): ProjectInterface => {
  const pathID: number = Number(path);

  const project: ProjectInterface | undefined = projects.find(
    (project: ProjectInterface) => project.id === pathID,
  );

  if (!project) notFound();

  return project;
};
