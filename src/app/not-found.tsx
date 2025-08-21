import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1>
               Du verkar ha gått vilse 
            </h1>
            <Link href={"/"}>Tillbaks Hem</Link>
        </div>
    );
}
