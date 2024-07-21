import More from "@/components/more";
import Projects from "@/components/projects";
import Socials from "@/components/socials";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <h1 className="font-extrabold text-4xl mb-6 text-zinc-200">neeraj</h1>
      <p className="mb-6">
        hello friend, this is neeraj, a cybersecurity professional transitioning
        into software engineering, with a keen interest across the complete
        stack, learning and building applications for fun.
      </p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-6">
        <p>find me on:</p>
        <Socials />
      </div>
      <More text="more about me" href="/about" />
      <div className="mt-10 mb-16">
        <h2 className="font-semibold text-2xl mb-8 text-zinc-300">projects</h2>
        <Suspense
          fallback=<p className="mb-28">loading my awesome projects...</p>
        >
          <Projects />
        </Suspense>
        <More text="all projects" href="/projects" />
      </div>
    </main>
  );
}
