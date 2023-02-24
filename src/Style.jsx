import styled from 'styled-components'

import banner from './Images/pumpkinbanner_update.png'
import banner2 from './Images/pumpkin.png'
import background_img from './Images/fire_forest_update.png'

export const _App = styled.section`

    margin: -1.5%;
    background-image: url(${background_img});
    background-size: cover;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    .image{
        border-radius: 4%;
    }
`

export const _NavBar = styled.section`

    background-image: url(${banner});
    background-size: cover;
    box-shadow: 0px 3px 7.5px rgba(0, 0, 0, 0.5);
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    
    --mainColor: #D8737F;
    --mainColorLight: #f18c8e;
    --textColor: #FCBB6D;
    --shadowColor: #685D79;

    .banner{
        display: contents;
    }

    .navBarLogo{
        padding-top: 20%;
        margin: 5%;
    }

    .navbarTitle{
        display: flex;
        color: var(--mainColorLight);
        font-size: x-large;
        font-weight: bolder;
        text-shadow: 2px 1.5px var(--shadowColor);
    }

    .navbarElements{
        color: var(--textColor);
        text-shadow: 1px 1px black;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        flex-wrap: nowrap;
        align-items: center;
    }

    .navBarElement{
        margin: 5%;
        color: var(--mainColor);
        text-decoration: none;
        font-weight: bold;
    }

    .navBarElement:hover{
        color: var(--secondaryColor);
    }
`

export const _InfoSection = styled.section`

    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 10%;
    background-color: rgb(216, 115, 127, 0.5);
    box-shadow: 0px 3px 7.5px rgba(0, 0, 0, 0.5);

    --mainColor: #d8737f;
    --mainColorLight: #f18c8e;
    --textColor: #FCBB6D;
    --shadowColorDark: #40394a;

    .imageGlue{
        margin: -1.6%;
        position: static ;
    }

    .Title{
        color: var(--mainColorLight);
        text-shadow: 2px 1px var(--shadowColorDark);
    }

    .Info{
        color: black;
        margin-top: 0%;
        margin-left: 3%;
        margin-right: 3%;
    }

    .flexBoxTitle{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }

`

export const _Contacts = styled.section`

    --mainColor: #D8737F;
    --mainColorLight: #f18c8e;
    --textColor: #FCBB6D;
    --shadowColor: #685D79;
    --shadowColorDark: #40394a;

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    background-image: url(${banner2});
    background-size: cover;
    background-position: 1%;

    .list{

    }

`

export const _TextBox = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5%;

`