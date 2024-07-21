import { Suspense } from "react";

import { AllProjects } from "@/components/projects";
import { AllProjectsSkeleton } from "@/components/skeleton";

export default async function Projects() {
  return (
    <main>
      <h1 className="font-extrabold text-4xl mb-6 text-zinc-200">projects</h1>
      <p className="mb-10">list of some of my projects</p>
      <Suspense fallback=<AllProjectsSkeleton />>
        <AllProjects />
        <div className="h-[1px] bg-zinc-800 flex-grow mb-6" />
      </Suspense>
    </main>
  );
}
