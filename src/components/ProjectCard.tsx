import Button from "./Button";
import Video from "./Video";

export default function ProjectCard({
  project,
}: {
  project: {
    id: number;
    title: string;
    tech: string[];
    description: string;
    link: string;
    api_link: string;
    demo: string;
  };
}) {
  return (
    <article className="flex flex-col lg:flex-row items-center justify-center gap-8 p-12 container">
      {project.demo !== "" ? <Video demo={project.demo} /> : ""}
      <div className="w-3/4 text-center flex flex-col gap-4 items-center">
        <h3 className="border-b-2 pb-1 border-purple-400">{project.title}</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {project.tech.map((tech: string, i: number) => (
            <li key={i} className="bg-purple-200 dark:bg-cyan-900 px-2">
              {tech}
            </li>
          ))}
        </div>
        <p>{project.description}</p>
        <div className="flex gap-4">
          <Button title="repo" link={project.link} />
          {project.api_link !== "" ? (
            <Button title="API repo" link={project.api_link} />
          ) : (
            ""
          )}
        </div>
      </div>
    </article>
  );
}
