/* eslint-disable react/jsx-pascal-case */
import React from "react";

import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";

import { _NavBar } from "../Style";

import guar_logo from '../Images/guaricon.png'

function Navbar()
{
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <_NavBar>
            {/* Logo and Title */}
            <div className="navbarTitle">
                <img src={guar_logo} className="navBarLogo" width={40} height={40} alt="guarlogo"/>
                <h1>Guar</h1>
            </div>
            <nav ref={navRef} className="navbarElements">
                <a href="/#" className="navBarElement">Home</a>
                <a href="/#" className="navBarElement">Intro</a>
                <a href="/#" className="navBarElement">Story</a>
                <a a href="/#" className="navBarElement">Gameplay</a>
                <a href="/#" className="navBarElement">Contacts</a>
                {/* <button className="navButton navButtonOff" onClick={showNavBar}>
                    <FaTimes/>
                </button> */}
            </nav>
            {/* <button className="navButtonOff" onClick={showNavBar}>
                <FaBars/>
            </button> */}
        </_NavBar>
    )
}

export default Navbar;