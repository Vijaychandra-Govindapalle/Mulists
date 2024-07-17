

export async function getSongs()  { 
    try{
    const res = await
    fetch('https://669670530312447373c289a8.mockapi.io/api/v1/songs/songs', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  })
  if(!res.ok){
    throw new Error("response is not ok");
  }
  const songs = await res.json();
  return songs
}catch(error){
    console.log(error);
}

}
