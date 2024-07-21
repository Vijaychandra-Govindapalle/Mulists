'use client';
import { useState, useEffect, ChangeEvent } from 'react';
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { getSong } from '../../lib/data';



interface Image {
  url: string;
}

interface Album {
  id: string;
  images: Image[];
}

interface Track {
  id: string;
  name: string;
  album: Album;
}

interface SongResult {
  tracks: {
    items: Track[];
  };
}

export default function GetSongs() {

  const [results, setResults] = useState<Track[]>([])

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = async (song: string) => {
    const params = new URLSearchParams(searchParams);
    if (song) {
      params.set('query', song);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
    const songs = await getSong(song)
    setResults(songs.tracks.items);
  };

  return (
    <div className="p-10">
      <div className="flex flex-row w-full bg-red-500 rounded-full">
        <svg className="m-4 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
          <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14">
          </path>
        </svg>
        <input
          className="text-black my-4 text-2xl focus:outline-none  bg-inherit"
          placeholder="Search For Songs"
          onChange={(e: ChangeEvent<HTMLInputElement>) => e.target.value !== '' ? handleSearch(e.target.value) : null}
          defaultValue={searchParams.get('query')?.toString()}
        />
        </div>
          <ul className="flex flex-col gap-2 mt-10">
        {results.map((result) => (
          <li key={result.id}>
            <div className="flex flex-row w-full bg-white rounded-full p-2  hover:cursor-pointer">
              <div className="h-12 w-12 rounded-full relative">
                <Image
                  width={48}
                  height={48}
                  className="rounded-full aspect-square object-cover"
                  alt="Profile picture"
                  src={result.album.images[0].url}
                />
              </div>
              <div className="ml-4 flex items-center">
                <span className="text-lg text-black">{result.name}</span>
              </div>
              <svg className='ml-auto my-2' xmlns="http://www.w3.org/2000/svg" width={30} height={30}  viewBox="0 0 20 20"><g fill="black"><circle cx={10} cy={15} r={2}>
                </circle><circle cx={10} cy={10} r={2}></circle><circle cx={10} cy={5} r={2}></circle></g></svg>
            </div>
          </li>
        ))}
      </ul>
      {results.length === 0 && <p>No results found</p>}
    </div>
    
  );
}
