import prisma from "@/lib/db";
import Link from "next/link";

export default async function Projects() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

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
        <li key={project.id} className="mb-4">
          <Link
            href={`/projects#${project.id}`}
            className="hover:text-zinc-100 duration-300 ease-in-out"
          >
            <p>{project.name}</p>
            <p>{truncatedDescription(project.description, 10)}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
