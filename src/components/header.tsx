"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <header className="flex justify-between px-10 py-8">
      <Link href="/">logo</Link>
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
