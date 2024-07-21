import { getSongs } from "./lib/data";
import ScrollScreen from "./ui/scrollScreen";
import { getSong } from './lib/data';
import Login from './Login/page';

export default async function Home() {
  const songs = await getSong('Faded');
  const dummySongs = await getSongs()
  console.log(songs)
  return (
    <>
    <Login />
    </>
    //<ScrollScreen songs={dummySongs} /> 
   // 
  );
}
 