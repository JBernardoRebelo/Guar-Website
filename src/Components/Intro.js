/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { _Intro } from "../Style";
import img_dwarf from '../Images/dwarf.png'

function Intro(){
    return(
        <_Intro>
            <h2 className="intro--title">Intro</h2>
            <img src={img_dwarf} className="intro--img" alt="introimg"/>
            <p className="intro--txt">Et labore adipisci molestiae consequatur. 
            Doloremque placeat qui sunt. 
            Vel impedit sit et quas et enim quis. 
            Eum est vero illum. Velit non sed aut. 
            Atque sit aut ut aliquam ex.
            Eveniet placeat non aut.
            Laudantium quia nihil voluptatibus error facilis. 
            Blanditiis voluptas corrupti quam voluptas.
            </p>
        </_Intro>
    )
}

export default Intro;