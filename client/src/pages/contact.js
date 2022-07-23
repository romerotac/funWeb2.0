import React, { useState } from 'react';
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {AiFillFilePdf} from 'react-icons/ai';
import {FaRegSmileBeam} from 'react-icons/fa'


export const Contact = () => {

    function goToGithub() {
        window.open('https://github.com/romerotac', '_blank');
    }

    function goToLinkedin() {
        window.open('https://www.linkedin.com/in/christianromerotaipe', '_blank');
    }

    const downloadFile = (e) =>{
        e.preventDefault()


    }
    return (
        
        <>
        <div className='body-aboutme'>
        
        <div className='row-1'>
        <div className='column-1'>
        <h1>About me</h1>
        <p> Hi I'm Chrsitian Romero Taipe, the creator of this page. If you are reading this, it means that you liked the page, and would like to know more about future project that I will make. 
            This page will be abdate evry once in a while with more small project to show. If you are intrested on knowing about me better down below I have three differt buttons, each linking to the corespondive page.
            
        </p>
        <p>P.S the PDF file button will show my CV <FaRegSmileBeam style={{marginBottom: '-2px'}}/></p>
        
        </div>
        <div className='idk'>
            <div className='image-position'> </div>
        </div>
        </div>

        <div className='footer-aboutme'>
        
            <div className='button-position'> <button className='github-button' onClick={goToGithub}><BsGithub size={'1x'} className="icons"/></button></div>
            <div className='button-position'> <button className='linkedin-button' onClick={goToLinkedin}><BsLinkedin size={'1x'} className="icons"/></button></div>
            <div className='button-position'> <button className='file-button'><a href='/pdfFiles/CV.pdf' target={"_black"}> <AiFillFilePdf size={'1x'} className="icons"/></a></button></div>
            
            
           
        
        </div>
        
        </div>
        </>
    );
}