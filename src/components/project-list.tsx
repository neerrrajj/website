import { Fragment } from "react";
import { FiGithub } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import Social from "./social";

type Project = {
  id: number;
  name: string;
  description: string;
  labels: string;
  liveUrl: string | null;
  codeUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export default function ProjectList({ project }: { project: Project }) {
  const labels = project.labels.split(",");

  return (
    <div>
      <div className="h-[1px] bg-zinc-800 flex-grow mb-6" />
      <div className="flex items-center justify-between mb-6">
        <h1
          className="text-lg font-semibold text-zinc-200"
          id={project.id.toString()}
        >
          {project.name}
        </h1>
        <div className="flex ">
          {project.liveUrl ? (
            <Social icon={<TbWorld />} label="website" href={project.liveUrl} />
          ) : (
            <Fragment />
          )}
          <Social icon={<FiGithub />} label="github" href={project.codeUrl} />
        </div>
      </div>
      <p>{project.description}</p>
      <div className="flex gap-x-4 my-6">
        {labels.map((label) => (
          <p className="bg-zinc-700 px-3 py-1 rounded text-zinc-200 text-sm">
            {label}
          </p>
        ))}
      </div>
    </div>
  );
}
