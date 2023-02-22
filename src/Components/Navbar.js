/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { _NavBar } from "../Style";
import guar_logo from '../Images/guaricon.png'

function Navbar()
{
    return(
        <_NavBar>
            <img src={guar_logo} className="navbar--logo" alt="guarlogo"/>
            <h1 className="navbar--title">Guar</h1>
            <div className="navbar--links"> 
                <p>Intro</p>
                <p>Story</p>
                <p>Gameplay</p>
                <p>Contacts</p>
            </div>
        </_NavBar>
    )
}

export default Navbar;