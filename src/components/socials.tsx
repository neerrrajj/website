import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiMail,
} from "react-icons/fi";

const socials = [
  {
    label: "twitter",
    href: "https://x.com/neerrrajj_",
    icon: <FiTwitter />,
  },
  // {
  //   label: "instagram",
  //   href: "https://instagram.com/neerrrajj",
  //   icon: <FiInstagram />,
  // },
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
  {
    label: "email",
    href: "mailto:neerajprabhuram@gmail.com",
    icon: <FiMail />,
  },
];

export default function Socials() {
  return (
    <ul className="flex flex-wrap gap-x-4">
      {socials.map((social) => (
        <li key={social.href}>
          <Social icon={social.icon} label={social.label} href={social.href} />
        </li>
      ))}
    </ul>
  );
}

export const Social = ({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-x-1 py-1 hover:text-zinc-100 underline decoration-1 decoration-[#404040] underline-offset-4 hover:decoration-[#808080] duration-300 ease-in-out"
    >
      {icon}
      {label}
    </a>
  );
};
