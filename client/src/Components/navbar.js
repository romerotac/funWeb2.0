import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import './navbar.css';
import { SidebarData } from './sidebarData';
import { IconContext } from 'react-icons/lib';
export const NavBar  = () => {

    const [sidebar,setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
        <IconContext.Provider value={{color:'white'}}>
        <div className='navbar'>
            <Link to ='#' className='menu-bars'>
                <FaBars onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to= "#" className='menu-bars'>
                        <AiOutlineClose/>
                    </Link>
                </li>
                {SidebarData.map((items,index) => {
                    return (
                        <li key ={index} className ={items.cName}>
                            <Link to = {items.path}>
                                <span>{items.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}
