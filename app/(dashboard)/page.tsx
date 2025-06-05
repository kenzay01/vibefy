import MusicItem from "@/components/MusicItem";
import { Fragment } from "react";
import MusicItemList from "@/components/MusicItemList";
export default function HomePage() {
  return (
    <div className="p-6 px-0">
      <div className="flex flex-col gap-8">
        <MusicItemList title="Recently Played" />
        <MusicItemList title="Top Hits" />
        <MusicItemList title="Your Favorites" />
        <MusicItemList title="New Releases" />
      </div>
    </div>
  );
}
