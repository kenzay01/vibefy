import { Fragment } from "react";
import MusicItem from "@/components/MusicItem";

export default function MusicItemList({ title }: { title: string }) {
  return (
    <section>
      <h1 className="text-2xl font-semibold pl-6 md:pl-12">{title}</h1>
      <div
        className="mt-1 flex overflow-x-auto gap-2 md:gap-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {Array.from({ length: 12 }).map((_, index) => {
          return (
            <Fragment key={index}>
              {index === 0 && <div className="ml-1 md:ml-4" />}
              <MusicItem />
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
