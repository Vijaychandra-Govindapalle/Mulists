export async function getSongs() {
  try {
    const res = await fetch('https://669670530312447373c289a8.mockapi.io/api/v1/songs/Music', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) {
      throw new Error('Response is not ok');
    }
    const songs = await res.json();
    // console.log(songs);
    return songs;
  } catch (error) {
    console.log(error);
  }
}

const client_id = '0ee6b9f778954f98a73fc6aa0fa61655'; 
const client_secret = 'e76d4fae3c74462fa0ea0f7f4bb2dcb4';


async function getToken() {
  const response = await fetch(' https://accounts.spotify.com/api/token',  { next: { revalidate: 3600 } , 
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
    },
  });

  return await response.json();
}

 export async function getSong(query:string) {
  if(query !== ''){
  const token = await getToken();

  const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token.access_token}
  });

  const results = response.json();
  return await results;
}
}

/*
getToken().then((response) => {
  console.log(response)
})


async function getTrackInfo(access_token: string) {
  const response = await fetch("https://api.spotify.com/v1/tracks/4cOdK2wGLETKBW3PvgPWqT", {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + access_token },
  });

  return await response.json();
}

async function getAlbumInfo(access_token:string) {
 const response = await fetch("https://api.spotify.com/v1/search?q=Faded&type=track", {
  method: 'GET',
  headers: { 'Authorization': 'Bearer ' + access_token },
});

return await response.json(); 
}



getToken().then(response => {
  getAlbumInfo(response.access_token).then(profile => {
    console.log(profile.tracks.items[0])
  })
});*/