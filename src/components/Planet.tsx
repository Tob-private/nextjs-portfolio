import Link from "next/link";
import { type PlanetInterface } from "../app/types/planet";

export default function Planet({ planet }: { planet: PlanetInterface }) {
  return (
    <Link href={planet.route} className="rounded-full">
      <section className={`${planet.styling} px-4`}>
        <div>
          <h2 className="text-xl capitalize">{planet.name}</h2>
          <p className="text-s">{planet.desc}</p>
        </div>
      </section>
    </Link>
  );
}
