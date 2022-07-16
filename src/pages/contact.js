import React, { useState } from 'react';


export const Contact = () => {

    const [song,setSong] = useState("");
    const [length,setLength] = useState("");
    const [coverSong, setCoverSong] = useState("");
    const [link, setLink] = useState("");



    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4b7b329e47msh3b23f1a1384fd74p1497d6jsnf8ac011be5ee',
            'X-RapidAPI-Host': 'genius.p.rapidapi.com'
        }
    };
    

    function randomNumber (min,max){
        return Math.floor(Math.random() * (max-min + 1)) + min;
    }

    const fecthMe = () => {

    fetch('https://genius.p.rapidapi.com/artists/16775/songs', options)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setLength(data.response.songs.length);
            const position = randomNumber(0,length);

            setSong(data.response.songs[position].full_title);
            setCoverSong(data.response.songs[position].header_image_thumbnail_url);
            setLink(data.response.songs[position].url);
            
        })
        .catch(err => console.error(err));
        }


    return (
        
        <>
        <h1>Random Music Generator</h1>
        <div className='title'>
        <h2>{song}</h2>
        <a href={link} target="_blank"><button>Click me to listen to the song </button></a>
        </div>
        <div className='cover'>
        <img src={coverSong}/>
        </div>
        <button onClick={fecthMe}>Find me somehitng to listen</button>

        </>
    );
}