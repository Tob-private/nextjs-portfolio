import Link from "next/link";
import { Button } from "../ui/button";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardAction,
    CardContent,
    CardFooter
} from "../ui/card";

export default function Internz() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Internz</CardTitle>
                <CardDescription>
                    A group project when we first learned React
                </CardDescription>
                <CardAction>
                    <Button>
                        <Link href={"https://github.com/Tobias-ChasStudent/Internz-Inlamning"}>See more</Link>
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <p>
                    In the midst of our React course of my education at Chas Academy, me and a group of classmates were tasked with creating an app that would help students find internships, also known as  &#34;LIA &#34; (Learning While Working).
                </p>
                <p>
                    This was my first fullstack group project, where I learnt about merging the frontend and the backend into one, cohesive project, teaching me about the pros and cons about working on a small project as a big group.
                </p>
                <input type="text" />
            </CardContent>
            <CardFooter className="flex-row flex-wrap">
                {["React", "Redux", "TypeScript", "Firebase", "Express.js", "Node.js", "TailwindCSS"].map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-gray-700 text-gray-200 text-sm font-medium"
                    >
                        {tech}
                    </span>
                ))}
            </CardFooter>
        </Card>
    );
}