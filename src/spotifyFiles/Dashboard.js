import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-node';
import Player from './Player';
import useAuth from './useAuth'

const spotifyApi = new SpotifyWebApi({
    clientId:'49fb612d070040f9a34236837ab79ad3',    
  })

export default function Dashboard({code}) {
  
  const accessToken = useAuth(code);

  const [songList, setSongList] = useState([]);
  const [random,setRandom] = useState(0)
  const [access,setAccess] = useState(false);


  console.log(songList)

  function randomNumber (min,max){
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

  function randomLetter(){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'];
    const random = randomNumber(0,alphabet.length)
    const letter = alphabet[random]
    return letter
  }

  useEffect(()=> {
    if (!accessToken) return

    spotifyApi.setAccessToken(accessToken)
  },[accessToken])
  
  const findSong = () =>{
    if (!accessToken) return
    spotifyApi.searchTracks(randomLetter()).then(res => {

      console.log(res.body)
      
      setSongList( 
      res.body.tracks.items.map(track => {
        
        const smallestAlbumImage = track.album.images.reduce(
          (smallest,image) => {
            if(image.height < smallest.height) return image
            return smallest
          }, track.album.images[0])
          
          return {
            artist:track.artists[0].name,
            title:track.name,
            uri:track.uri,
            albumUrl: smallestAlbumImage.url,
          }
      })
      )
      setRandom(randomNumber(0,19))
      setAccess(true)
    })

}

  const getArtistName = (artist) => {
    if (String(artist.split('')).length <=30){
      return <h1 className='normal'>{artist}</h1>
        
    }else if (String(artist.split('')).length <= 55){
      return <h1 className='toolong'>{artist}</h1>
    }else{
      return <h1 className='tootoolong'>{artist}</h1>
    }

  };
  return (
    <>
    <div className='body-container'>
    <div className='containter'>
      {access ? 
        getArtistName(songList[random].title)
        
         : null}
      
      <div className='cover'>
      {access ? <img className='cover-image' src = {songList[random].albumUrl}></img> : null}
      </div>

      {access ? <h2 className='artist'>{songList[random].artist}</h2> : null}

      <div className='playerContainer'>
      <Player accessToken={accessToken} trackUri={access ? songList[random].uri : []}/>
      </div>

    </div>
    </div>

      <div className='buttomPosition'>
      <button onClick={findSong}> Random Song</button>
      </div>
      
    
    </>
  )
}
