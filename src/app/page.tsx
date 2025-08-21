import Planet from "@/components/Planet";
import { type PlanetInterface } from "@/types/planet";
import { planets } from "@/data/planets";

// Idea is to have a solarsystem of planets with moons.
// Each planet will be a page representing things like contact info, projects, experience, about me, etc
// And each moon will be an item on this page. So for example a contact info page will have a moon for email, one for github, etc.
// A planet will be a component that takes in a link/route, name/page name
// The name will determine the styling of a planet. So if the "planet" name is 'projects' it will have a string of TailwindCSS styles that get sent into 'className'
// Breadcrumb with this: https://www.openstatus.dev/blog/dynamic-breadcrumb-nextjs

export default function Home() {
  return (
    <article className="flex gap-4 px-4 justify-around place-items-center h-full w-[90%] m-auto">
      {/* line behind planets */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-400 -z-10"></div>
      {planets.map((planet: PlanetInterface) => (
        <Planet key={planet.id} planet={planet} />
      ))}
    </article>
  );
}
