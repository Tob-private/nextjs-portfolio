import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function Moon({title, desc}: {desc: string, title: string}) {
    return (
        <Card className="rounded-full text-center">
            <CardHeader>
                <CardTitle className="text-2xl">{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
            </CardHeader>
        </Card>
    );
}