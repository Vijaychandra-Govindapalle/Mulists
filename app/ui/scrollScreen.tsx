'use-client';
import Post from "./post";
import Image from "next/image";
import music_bg from "../../public/music_bg.jpg";
import Link from "next/link";

interface Song {
  id: string;
  name: string;
  avatar: string;
  image: string;
}

interface ScrollScreenProps {
  songs: Song[];
}

export default function ScrollScreen({ songs }: ScrollScreenProps) {
  return (
    <div className="w-full">
      <div className="absolute w-full flex justify-center top-60">
        <p className="text-9xl bg-cyan-500">Your Playlists</p>
      </div>
      <div className="sticky top-0 mt-96">
        <Image
          className="w-full h-full -z-10"
          priority={true}
          alt="BackgroundImage"
          src={music_bg}
        />
      </div>

      <div className="w-5/6 mx-auto overflow-x-hidden">
        <ul className="mx-auto">
          {songs.map((song) => (
            <li key={song.id}>
              <Post
                author={song.name}
                pImage={song.avatar}
                playListImage={song.image}
              />
            </li>
          ))}
        </ul>
        <div className="w-[70%] h-20 flex justify-center items-center fixed bottom-0 left-1/2 transform -translate-x-1/2">
        <Link href="/ui/searchSongs">
          <p className="text-lg opacity-10 hover:opacity-100 border-2 px-20 py-2 cursor-pointer bg-green-400 rounded-full">
            +
          </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
