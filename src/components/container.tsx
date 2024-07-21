export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[750px] mx-auto px-6 my-12 md:my-20">{children}</div>
  );
}
