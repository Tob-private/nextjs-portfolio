import { ProjectsInterface } from "../types/projects";

export const projects: ProjectsInterface[] = [
    {
        id: 1,
        title: "Angular Portfolio",
        desc: "Familiarizing myself with Angular",
        link: "https://github.com/Tob-private/angular-portfolio",
        content: "After my education at Chas Academy concluded, I decided to learn a new framework and make something with it. That &#34;something&#34; turned into my first, propper portfolio website. \n Being my first solo project, as well as my first project using Angular, it was a big learning experience. I learnt so much about Angular, as well as how to structure up what to do.",
        tech: ["TypeScript", "CSS Modules", "Angular"]
    },
    {
        id: 2,
        title: "Green Hero",
        desc: "A group project with UX, Fullstack Devs, and DevOps students",
        link: "https://github.com/decimaer/chaschallenge",
        content: "At the end of my first year on Chas Academy, a merged group of designers, developers (me!) and DevOps worked together to create a webapp that encouraged people to &#34;live a green life&#34;, where they got points for picking up trash from the streets, recycling, and shopping second hand. The Green Hero project taught me how to work in a full scale team, with designers, developers and DevOps. It was also the last project for my first year on the school, which was very stressful, but also educational.",
        tech: ["React", "Redux", "TypeScript", "MongoDB", "Mongoose", "Express.js", "Node.js", "TailwindCSS"]
    },
    {
        id: 3,
        title: "Internz",
        desc: "A group project when we first learned React",
        link: "https://github.com/Tobias-ChasStudent/Internz-Inlamning",
        content: "In the midst of our React course of my education at Chas Academy, me and a group of classmates were tasked with creating an app that would help students find internships, also known as  &#34;LIA &#34; (Learning While Working). This was my first fullstack group project, where I learnt about merging the frontend and the backend into one, cohesive project, teaching me about the pros and cons about working on a small project as a big group.",
        tech: ["React", "Redux", "TypeScript", "Firebase", "Express.js", "Node.js", "TailwindCSS"]
    },
    {
        id: 4,
        title: "PDF Refactoring",
        desc: "My first professional project",
        content: "During my internship at Clira, I was tasked with improving the stability and performance of their PDF exports, as new opportunities presented themselves. As we moved to a new infrastructure, I was responsible for refactoring the system we used to generate PDFs. I consider this to be the most fun project I have been a part of, mostly because I learnt so much. I learnt about Laravel's queue, Blade Template do's and dont's, how to organize such a large rewrite and, most importantly, when to give up on my pride and ask for help.",
        tech: ["Next.js", "Laravel", "PhP", "Blade Templates", "Gotenberg", "TailwindCSS", "PostgreSQL"]
    },
    {
        id: 5,
        title: "Quire",
        desc: "Introduction to Agile workflows",
        link: "https://github.com/Tobias-ChasStudent/Team-Panda-Quire",
        content: "My first real project was a group project with 3 classmates. The project's main task was to create a digital notepad website, and subsequently adding features like saving notes, create new notes, textformating, and more. This project served as an intro to Agile methods like Scrum, something I would use a lot in the coming years. It also showed me how important it is for a group to communicate with eachother, and reach out in case you get stuck.",
        tech: ["HTML5", "CSS3", "JavaScript"]
    }
]