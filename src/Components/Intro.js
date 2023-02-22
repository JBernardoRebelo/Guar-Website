/* eslint-disable react/jsx-pascal-case */
import React from "react";

import { _InfoSection } from "../Style";
import { _TextBox } from "../Style";

import img_dwarf from '../Images/dwarf.png'

function Intro(){
    return(
        <_InfoSection>
            <h2 className="Title">Intro</h2>
            <_TextBox>
                <img src={img_dwarf} className="image" height={200} alt="introimg"/>
                <p className="Info">Et labore adipisci molestiae consequatur. 
                Doloremque placeat qui sunt. 
                Vel impedit sit et quas et enim quis. 
                Eum est vero illum. Velit non sed aut. 
                Atque sit aut ut aliquam ex.
                Eveniet placeat non aut.
                Laudantium quia nihil voluptatibus error facilis. 
                Blanditiis voluptas corrupti quam voluptas.
                </p>
            </_TextBox>
        </_InfoSection>
    )
}

export default Intro;