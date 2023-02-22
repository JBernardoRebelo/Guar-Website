/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { _NavBar } from "../Style";
import guar_logo from '../Images/guaricon.png'

function Navbar()
{
    return(
        <_NavBar>
            <img src={guar_logo} className="navbarLogo" width={100} alt="guarlogo"/>
            <h1 className="navbarTitle">Guar</h1>
            <div className="navbarElements">
                <h4 className="navBarElement">Intro</h4>
                <h4 className="navBarElement">Story</h4>
                <h4 className="navBarElement">Gameplay</h4>
                <h4 className="navBarElement">Contacts</h4>
            </div>
        </_NavBar>
    )
}

export default Navbar;