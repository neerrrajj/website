import Link from "next/link";
import { Fragment } from "react";
import { Social } from "./socials";
import { FiGithub } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";

import prisma from "@/lib/db";

export async function TopProjects() {
  const topProjects = await prisma.project.findMany({
    take: 4,
    orderBy: {
      createdAt: "desc",
    },
  });
  console.log("topProjects:", topProjects);

  const truncatedDescription = (des: string, limit: number) => {
    if (des.length <= limit) {
      return des;
    }
    const lastSpace = des.lastIndexOf(" ", limit);
    const truncateIndex = lastSpace > 0 ? lastSpace : limit;
    return des.slice(0, truncateIndex) + "...";
  };

  return (
    <ul className="mb-6 md:grid grid-cols-2 gap-3">
      {topProjects.map((project) => (
        <li key={project.id} className="mb-4 md:mb-0">
          <Link href={`/projects#${project.id}`}>
            <div
              className="flex items-center justify-between p-3 rounded-md border border-zinc-900 
              bg-gradient-to-t from-zinc-900 bg-black hover:bg-zinc-900 duration-300 ease-in-out"
            >
              <div>
                <p className="text-zinc-300 mb-2 ">{project.name}</p>
                <p className="text-sm">
                  {truncatedDescription(project.description, 60)}
                </p>
              </div>
              <div className="mx-3">
                <MdKeyboardArrowRight size={20} />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export async function AllProjects() {
  const allProjects = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  console.log("allProjects:", allProjects);

  return (
    <ul>
      {allProjects.map((project) => (
        <li key={project.id}>
          <div className="h-[1px] bg-zinc-800 flex-grow mb-6" />
          <div>
            <div className="flex flex-wrap items-center justify-between mb-6">
              <h1
                className="text-lg font-semibold text-zinc-200"
                id={project.id.toString()}
              >
                {project.name}
              </h1>
              <div className="flex gap-x-4">
                {project.liveUrl ? (
                  <Social
                    icon={<TbWorld />}
                    label="website"
                    href={project.liveUrl}
                  />
                ) : (
                  <Fragment />
                )}
                <Social
                  icon={<FiGithub />}
                  label="github"
                  href={project.codeUrl}
                />
              </div>
            </div>
            <p>{project.description}</p>
            <ul className="flex flex-wrap gap-x-4 my-6">
              {project.labels.split(",").map((label) => (
                <li
                  key={label}
                  className="bg-zinc-800 px-3 py-1 rounded text-zinc-200 text-sm my-2"
                >
                  <p>{label}</p>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
