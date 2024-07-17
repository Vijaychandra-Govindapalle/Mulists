import Image from "next/image";

import { getSongs } from "./lib/data";
import ScrollScreen from "./ui/scrollScreen";

export default async function Home() {
  const songs = await getSongs();
  //console.log(songs)
  return (
   <main>
    <div>
    <ScrollScreen songs={songs}/>
    </div>
    </main>
  );
}
