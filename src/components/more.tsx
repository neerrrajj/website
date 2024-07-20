import Link from "next/link";

export default function More({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={href}
      className="mb-10 hover:text-zinc-100 underline decoration-1 decoration-[#404040] underline-offset-4 hover:decoration-[#808080] duration-300 ease-in-out"
    >
      {text} -&gt;
    </Link>
  );
}
