import { type PlanetInterface } from "../types/planet"

export const planets: PlanetInterface[] = [
    {
        id: 1,
        name: "about",
        route: "/pages/about/",
        styling: "w-40 h-40 rounded-full bg-red-700 grid place-items-center text-center",
        desc: "My story"
    },
    {
        id: 2,
        name: "projects",
        route: "/pages/projects/",
        styling: "w-60 h-60 rounded-full bg-green-700 grid place-items-center text-center",
        desc: "My projects, ranging from homelabbing to websites"
    },
    {
        id: 3,
        name: "professional experience",
        route: "/pages/experience/",
        styling: "w-80 h-80 rounded-full bg-orange-700 grid place-items-center text-center",
        desc: "The work experience I have accumulated"
    },
    {
        id: 4,
        name: "contact",
        route: "/pages/contact/",
        styling: "w-50 h-50 rounded-full bg-blue-700 grid place-items-center text-center",
        desc: "My links and contact info"
    }
]