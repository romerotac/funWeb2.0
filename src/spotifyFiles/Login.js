import React from "react";
import './Login.css'
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=49fb612d070040f9a34236837ab79ad3&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export const Login = () => {


    return (
        <>
        <h1 className="title">Random music generator with the usage of spotifyApi</h1>
        <div className="login_content" >
        <button><a href={AUTH_URL}>Start</a></button>
        </div>
        </>
    )
}

