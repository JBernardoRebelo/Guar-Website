/* eslint-disable react/jsx-pascal-case */
import React from "react";

import { _InfoSection } from "../Style";
import { _TextBox } from "../Style";

import img_pumpking from '../Images/pumpkin.png';
import img_forest from '../Images/forest.png';

export default function Story(){
    return(
        <_InfoSection>
            <h2>Story</h2>
            <_TextBox>
                <p className="Info">blah blah</p>
                <img src={img_pumpking} className="image" height={200} alt="pumpkinimg"/>
            </_TextBox>
            <_TextBox>
                <img src={img_forest} className="image" height={200} alt="forestimg"/>
                <p className="Info">blah blah</p>
            </_TextBox>
        </_InfoSection>
    )
}