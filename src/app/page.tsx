import Link from "next/link";
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
    <main className="mt-20">
      <h1 className="font-extrabold text-4xl mb-6 text-zinc-200">title</h1>
      <p className="mb-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
        asperiores consequatur deleniti ad velit, ipsa impedit. Facere dolor
        debitis ea sapiente, deleniti corporis sed, beatae aut iure ex incidunt
        neque.
      </p>
      <h2 className="font-semibold text-2xl mb-6 text-zinc-300">projects</h2>
      <p className="mb-10">list of some of my projects</p>
      <div className="flex gap-x-4">
        find me on:
        <ul className="flex gap-x-4 mb-2">
          {socials.map((social) => (
            <li key={social.href}>
              <Link
                href={social.href}
                className="flex items-center gap-x-2 hover:text-zinc-100 duration-300 ease-in-out"
              >
                {social.icon}
                {social.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href="/about"
        className="mb-10 hover:text-zinc-50 underline decoration-1 decoration-[#404040] underline-offset-4 hover:decoration-[#808080] duration-300 ease-in-out"
      >
        more about me -&gt;
      </Link>
    </main>
  );
}
