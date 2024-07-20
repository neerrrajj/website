export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[750px] mx-auto px-10">{children}</div>;
}
