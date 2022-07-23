import React from 'react';
import { CounterButton } from '../Components/CounterButton';
import Dashboard from '../spotifyFiles/Dashboard';
import { Login } from '../spotifyFiles/Login';
import '../spotifyFiles/Login.css'


export const Home = () => {
    const code = new URLSearchParams(window.location.search).get('code')
    return (
        <>
        {code ? <Dashboard code = {code}/>  :<Login/>}
        </>
    );
}