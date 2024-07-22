import { MdKeyboardArrowRight } from "react-icons/md";

export const TopProjectsSkeleton = () => {
  return (
    <ul className="mb-6 md:grid grid-cols-2 gap-3">
      {Array.from({ length: 4 }).map((_, index) => (
        <li key={index} className="mb-4 md:mb-0">
          <div
            className="flex items-center justify-between p-3 rounded-md border 
            border-zinc-900 bg-gradient-to-t from-zinc-900 bg-black"
          >
            <div>
              <p className="text-zinc-300 bg-zinc-800 h-6 w-36 mb-4 rounded"></p>
              <p className="bg-zinc-800 h-3 w-56 rounded mt-3"></p>
              <p className="bg-zinc-800 h-3 w-56 rounded mt-2"></p>
            </div>
            <div className="mx-3">
              <MdKeyboardArrowRight size={20} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export const AllProjectsSkeleton = () => {
  return (
    <ul>
      {Array.from({ length: 4 }).map((_, index) => (
        <li key={index} className="mb-6">
          <div className="h-[1px] bg-zinc-800 flex-grow mb-6" />
          <div>
            <div className="flex items-center justify-between mb-8 h-8">
              <h1 className="text-lg font-semibold bg-zinc-700 h-6 w-48 rounded"></h1>
              <div className="flex gap-x-4">
                <div className="bg-zinc-800 h-6 w-16 rounded"></div>
                <div className="bg-zinc-800 h-6 w-16 rounded"></div>
              </div>
            </div>
            <p className="bg-zinc-800 h-4 w-full rounded mb-2"></p>
            <p className="bg-zinc-800 h-4 w-full rounded mb-4"></p>
            <ul className="flex gap-x-4 my-6">
              <li className="bg-zinc-800 h-7 w-16 rounded"></li>
              <li className="bg-zinc-800 h-7 w-16 rounded"></li>
              <li className="bg-zinc-800 h-7 w-16 rounded"></li>
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};
