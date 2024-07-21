"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import neerajLogo from "/public/neeraj-logo.png";

const navLinks = [
  {
    label: "projects",
    href: "/projects",
  },
  {
    label: "about",
    href: "/about",
  },
];

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="flex items-center justify-between pl-4 pr-6 pt-2 md:pt-4 pb-4">
      <Link href="/">
        <Image src={neerajLogo} alt="logo" width={80} />
      </Link>
      <nav>
        <ul className="flex gap-x-4">
          {navLinks.map((navLink) => (
            <li key={navLink.href}>
              <Link
                href={navLink.href}
                className={`${
                  navLink.href === pathName ? "text-zinc-100" : ""
                }`}
              >
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
