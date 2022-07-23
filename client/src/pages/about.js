import React from 'react';
import { useSelector } from 'react-redux';
import { getNumberOfClicks } from '../reduxFiles/selectors';
import { useEffect,useState, useRef} from 'react';
import './about.css'

export const About = () => {
    //const numberOfClicks = useSelector(getNumberOfClicks);
    const [chuck, setChuck] = useState([]);
    const [getChuck, setGetChuck] = useState(false);
    const firstRenderRef = useRef(true);


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-RapidAPI-Key': '4b7b329e47msh3b23f1a1384fd74p1497d6jsnf8ac011be5ee',
            'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
        }
    };

    const fecthMe = () => {
    fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
        .then((response) => {
           return response.json();
        })
        .then((data) => {
            setChuck(data.value);
        })
        .catch(err => console.error(err));
    }

    const modeRef = useRef();
    const [isFlipped,setIsFlipped] = useState(true);

    const handleToggle = () => {
        modeRef.current.classList.toggle("is-flipped");

        if (isFlipped){
        fecthMe();
        }

        setIsFlipped(!isFlipped);
    }

    return (
        <>
        <div className='container'>
        <div className='header'>
        <h1>Flip the card for some Awsome facts</h1>
        </div>
        <div className='sub_header'>
        <h2> Disclaimer!!! you may found innapropriate language, you have been warned!</h2>
        </div>
        <div className="card">
            <div className='card_inner' ref= {modeRef} onClick={handleToggle}>
                <div className='card_face card__face--front'>
                    <h2> The Facts</h2>
                </div>
                <div className='card_face card__face--back'>
                    <div className='card_content'>
                         <h3>{chuck}</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>

        </>
    );
}
