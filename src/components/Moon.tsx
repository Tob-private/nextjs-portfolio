import Link from "next/link";

export default function Moon({title, desc, link}: {title: string, desc: string, link: number}) {

    return (
        <Link href={`/pages/projects/${link}`} className="rounded-full bg-gray-500 text-center p-1 flex flex-col place-content-center">
            <div>
                <h1 className="text-2xl">{title}</h1>
                <p>{desc}</p>
            </div>
        </Link>
    );
}