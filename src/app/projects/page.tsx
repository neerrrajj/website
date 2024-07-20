import ProjectList from "@/components/project-list";
import prisma from "@/db";

export default async function Projects() {
  const projects = await prisma.project.findMany();

  return (
    <div className="my-20">
      <h1 className="font-extrabold text-4xl mb-6 text-zinc-200">projects</h1>
      <p className="mb-10">list of some of my projects</p>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectList project={project} />
          </li>
        ))}
      </ul>
      <div className="h-[1px] bg-zinc-800 flex-grow mb-6" />
    </div>
  );
}
