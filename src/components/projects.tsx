import prisma from "@/lib/db";
import Link from "next/link";

export default async function Projects() {
  const projects = await prisma.project.findMany({
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });

  const truncatedDescription = (des: string, limit: number) => {
    const words = des.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return des;
  };

  return (
    <ul className="mb-6">
      {projects.map((project) => (
        <li key={project.id} className="mb-6">
          <Link
            href={`/projects#${project.id}`}
            className="hover:text-zinc-100 duration-300 ease-in-out"
          >
            <p className="text-zinc-300 underline decoration-1 decoration-zinc-500 underline-offset-4">
              {project.name}
            </p>
            <p>{truncatedDescription(project.description, 10)}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
