import React, { useState } from 'react';
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {AiFillFilePdf} from 'react-icons/ai';

export const Contact = () => {

    return (
        
        <>
        <div className='body-aboutme'>
        
        <div className='row-1'>
        <div className='column-1'>
        <h1>About me</h1>
        <p> Hi I'm Chrsitian Romero Taipe, the creator of this page. If you are reading this, it means that my personal project wasn't that bad and that you enjoyed ine of the two pages or maybe both. If you are intrested on knowing more about 
            me down below this page you can find the soical media that i used as well as the source code of this project.
        </p>
        </div>
        <div className='idk'>
            <div className='image-position'> </div>
        </div>
        </div>

        <div className='footer-aboutme'>
        
            <div className='button-position'> <button className='github-button'><BsGithub size={'1x'} className="icons"/></button></div>
            <div className='button-position'> <button className='linkedin-button'><BsLinkedin size={'1x'} className="icons"/></button></div>
            <div className='button-position'> <button className='file-button'><AiFillFilePdf size={'1x'} className="icons"/></button></div>
            
           
        
        </div>
        
        </div>
        </>
    );
}