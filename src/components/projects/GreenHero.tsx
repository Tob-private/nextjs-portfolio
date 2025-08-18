import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
} from "../ui/card";

export default function GreenHero() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl">Green Hero</CardTitle>
                <CardDescription>
                    A group project with UX, Devs, and DevOps students
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                    At the end of my first year on Chas Academy, a merged group of designers, developers (me!) and DevOps worked together to create a webapp that encouraged people to &#34;live a green life&#34;, where they got points for picking up trash from the streets, recycling, and shopping second hand.
                </p>
                <p>
                    The Green Hero project taught me how to work in a full scale team, with designers, developers and DevOps. It was also the last project for my first year on the school, which was very stressful, but also educational.
                </p>
            </CardContent>
            <CardFooter className="flex-row flex-wrap">
                {["React", "Redux", "TypeScript", "MongoDB", "Mongoose", "Express.js", "Node.js", "TailwindCSS"].map((tech) => (
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