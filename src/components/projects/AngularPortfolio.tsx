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

export default function AngularPortfolio() {
    return (
        <Card className="rounded-full text-center">
            <CardHeader>
                <CardTitle className="text-2xl">Angular Portfolio</CardTitle>
                <CardDescription>
                    Familiarizing myself with Angular
                </CardDescription>
                <CardAction>
                    <Button>
                        <Link href={""}>See more</Link>
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <p>
                    After my education at Chas Academy concluded, I decided to learn a new framework and make something with it. That &#34;something&#34; turned into my first, propper portfolio website.
                </p>
                <p>
                    Being my first solo project, as well as my first project using Angular, it was a big learning experience. I learnt so much about Angular, as well as how to structure up what to do.
                </p>
                <input type="text"/>
            </CardContent>
            <CardFooter className="flex-row flex-wrap">
                {["TypeScript", "CSS Modules", "Angular"].map((tech) => (
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