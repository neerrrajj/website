import { addProject } from "@/lib/actions";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Form() {
  return (
    <form
      action={addProject}
      className="flex flex-col mx-auto max-w-[400px] gap-y-4"
    >
      <input
        name="project-name"
        type="text"
        placeholder="project name"
        className="border border-zinc-600 rounded px-4 h-10 bg-black text-zinc-100"
        required
      />
      <textarea
        name="project-description"
        placeholder="project description"
        className="border border-zinc-600 rounded px-3 py-2 bg-black text-zinc-100"
        rows={7}
        required
      />
      <input
        name="project-labels"
        type="text"
        placeholder="project labels"
        className="border border-zinc-600 rounded px-4 h-10 bg-black text-zinc-100"
        required
      />
      <input
        name="project-live-url"
        type="text"
        placeholder="project live url"
        className="border border-zinc-600 rounded px-4 h-10 bg-black text-zinc-100"
      />
      <input
        name="project-code-url"
        type="text"
        placeholder="project code url"
        className="border border-zinc-600 rounded px-4 h-10 bg-black text-zinc-100"
        required
      />
      <div className="flex gap-x-2 mt-4">
        <LogoutLink className="pt-1.5 w-1/3 rounded bg-red-700 text-zinc-100 font-medium items-center">
          logout
        </LogoutLink>
        <button className="py-2 w-2/3 rounded bg-zinc-200 text-zinc-900 font-medium">
          submit
        </button>
      </div>
    </form>
  );
}
