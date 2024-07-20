export default function Social({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-x-1 hover:text-zinc-100 underline decoration-1 decoration-[#404040] underline-offset-4 hover:decoration-[#808080] duration-300 ease-in-out"
    >
      {icon}
      {label}
    </a>
  );
}
