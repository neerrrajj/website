import More from "@/components/more";
import Projects from "@/components/projects";
import Social from "@/components/social";
import Link from "next/link";
import { Suspense } from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";

const socials = [
  {
    label: "twitter",
    href: "https://x.com/neerrrajj_",
    icon: <FiTwitter />,
  },
  {
    label: "instagram",
    href: "https://instagram.com/neerrrajj",
    icon: <FiInstagram />,
  },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/neerajprabhuram",
    icon: <FiLinkedin />,
  },
  {
    label: "github",
    href: "https://github.com/neerrrajj",
    icon: <FiGithub />,
  },
];

export default function Home() {
  return (
    <main className="my-12 md:my-20">
      <h1 className="font-extrabold text-4xl mb-6 text-zinc-200">neeraj</h1>
      <p className="mb-6">
        hello friend, this is neeraj, a cybersecurity professional transitioning
        into software engineering, with a keen interest across the complete
        stack, learning and building applications for fun.
      </p>
      <div className="flex flex-col md:flex-row gap-x-4 gap-y-2 mb-4">
        <p>find me on:</p>
        <ul className="flex flex-wrap gap-x-4">
          {socials.map((social) => (
            <li key={social.href}>
              <Social
                icon={social.icon}
                label={social.label}
                href={social.href}
              />
            </li>
          ))}
        </ul>
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
