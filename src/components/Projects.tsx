import ProjectCard from "./ProjectCard";
import bandsite from "../assets/Bandsite.mov";
import brainflix from "../assets/Brainflix.mov";

export default function Projects() {
  const projectData = [
    {
      id: 15,
      title: "Portfolio Website",
      tech: ["React", "Tailwind", "Typescript"],
      description:
        "Minimalist portfolio website to display my latest projects.",
      link: "http://www.github.com/fio-md/dev-portfolio",
      api_link: "",
      demo: "",
    },
    {
      id: 16,
      title: "Fishing for Compliments",
      tech: ["Phaser", "React", "Node.js", "Express", "MySQL"],
      description:
        "A 2D fishing game where fish give you compliments. This was my capstone project for BrainStation.",
      link: "http://www.github.com/fio-md/fishing-for-compliments",
      api_link: "http://www.github.com/fio-md/fishing-for-compliments-api",
      demo: "",
    },
    {
      id: 17,
      title: "Brainflix",
      tech: ["Typescript", "React", "Node.js", "Express", "Axios"],
      description:
        "Full stack site resembling a video sharing platform. This is a bootcamp project I converted to TypeScript.",
      link: "http://www.github.com/fio-md/brainflix",
      api_link: "http://www.github.com/fio-md/brainflix-api",
      demo: brainflix,
    },
    {
      id: 18,
      title: "Bandsite",
      tech: ["HTML", "CSS", "Typescript"],
      description:
        "Two page site with dynamic data from an external API. This is also a bootcamp project I converted to TypeScript.",
      link: "http://www.github.com/fio-md/bandsite",
      api_link: "",
      demo: bandsite,
    },
  ];

  return (
    <section id="projects" className="pt-4 pb-4 bg-zinc-100 dark:bg-zinc-900">
      <h2 className="text-4xl my-8 text-center">projects</h2>
      <ul className="divide-y divide-solid divide-zinc-600 dark:divide-zinc-400 divide-y-1 ">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}
