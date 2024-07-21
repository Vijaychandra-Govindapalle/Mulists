import { getSongs } from "./lib/data";
import ScrollScreen from "./ui/scrollScreen";
import GetSongs from "./ui/searchSongs/page";
import { getSong } from './lib/data';

export default async function Home() {
  const songs = await getSong('Faded');
  const dummySongs = await getSongs()
  console.log(songs)
  return (
    <>
    <ScrollScreen songs={dummySongs} /> </>
   
  
   // 
   
  );
}
 