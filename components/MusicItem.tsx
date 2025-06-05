import Image from "next/image";
import test from "../public/test.png";
import { FaPlay } from "react-icons/fa";

export default function MusicItem() {
  return (
    <div className="flex flex-col items-start gap-4 p-2 md:p-3 hover:bg-neutral-700 rounded-lg transition-colors max-w-4xl w-full cursor-pointer group">
      <div className="w-32 h-32 md:w-42 md:h-42 relative rounded-md overflow-hidden">
        <Image
          width={600}
          height={600}
          src={test}
          alt={"Music Item"}
          className="rounded-sm object-cover w-full h-full"
        />
        <button
          className="absolute rounded-full bg-indigo-700 z-10 bottom-2 right-2 
                        transition-all duration-300 p-3 py-3.5 flex items-center justify-center
                        opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                        hover:scale-105"
        >
          <FaPlay className="text-md md:text-xl ml-1" />
        </button>
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold hover:underline text-md md:text-lg">
          Test name
        </h1>
        <h2 className="text-[12px] md:text-sm hover:underline">Test author</h2>
      </div>
    </div>
  );
}
