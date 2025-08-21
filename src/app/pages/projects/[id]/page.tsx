"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ProjectInterface } from "@/app/types/projects";
import { notFound, usePathname } from "next/navigation";
import { projects } from "@/app/data/projects";

export default function ProjectPage() {
  const pathStringID: string | undefined = usePathname().split("/").pop();

  const pathID: number = Number(pathStringID);

  const project: ProjectInterface = projects.find(
    (project: ProjectInterface) => project.id === pathID,
  );

  if (!project) notFound();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{project.title}</CardTitle>
        <CardDescription>{project.desc}</CardDescription>
        {project.link && (
          <CardAction>
            <Button>
              <Link href={project.link}>See more</Link>
            </Button>
          </CardAction>
        )}
      </CardHeader>
      <CardContent>
        <p>{project.content}</p>
      </CardContent>
      <CardFooter className="flex-row flex-wrap">
        {project.tech.map((technology) => (
          <span
            key={technology}
            className="px-3 py-1 rounded-full bg-gray-700 text-gray-200 text-sm font-medium"
          >
            {technology}
          </span>
        ))}
      </CardFooter>
    </Card>
  );
}
