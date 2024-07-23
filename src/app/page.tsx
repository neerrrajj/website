import { Suspense } from "react";

import More from "@/components/more";
import Socials from "@/components/socials";
import { TopProjects } from "@/components/projects";
import { TopProjectsSkeleton } from "@/components/skeleton";

export default function Home() {
  return (
    <main>
      <h1 className="font-extrabold text-4xl mb-6 text-zinc-200">neeraj</h1>
      <p className="mb-4">
        hello friend, this is neeraj. i love beautiful design and i love to
        code. generally curious, mostly optimistic. a cybersecurity professional
        transitioning to software engineering, learning and building
        applications for fun.
      </p>
      <div className="mb-8">
        <More text="more about me" href="/about" />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-8">
        <p>find me on:</p>
        <Socials />
      </div>
      <div className="mb-20">
        <h2 className="font-semibold text-2xl mb-6 text-zinc-300">projects</h2>
        <Suspense fallback=<TopProjectsSkeleton />>
          <TopProjects />
        </Suspense>
        <More text="all projects" href="/projects" />
      </div>
    </main>
  );
}
