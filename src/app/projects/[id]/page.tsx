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
import { ProjectInterface } from "@/types/projects";
import { usePathname } from "next/navigation";
import { fetchProjectFromPath } from "@/utils/projectHelpers";

export default function ProjectPage() {
  const pathStringID: string | undefined = usePathname().split("/").pop();

  if (!pathStringID) {
    throw new Error("Path ID is undefined");
  }

  const project: ProjectInterface = fetchProjectFromPath(pathStringID);

  return (
    <Card className="width-full max-w-2xl mx-auto my-8 p-6 rounded-lg shadow-lg">
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
        {project.content.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
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
