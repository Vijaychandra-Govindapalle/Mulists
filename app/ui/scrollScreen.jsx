
export default async function ScrollScreen({songs}) {
    return(
    <main>
        <ul>
            {songs.map(song => 
            <li key={song.id}>
                 <h1>{song.title}</h1><div>
                    <h2>{song.Playing}</h2>
                </div>
                </li>

            )}
            
        </ul>
       
        

    </main>
    )
}