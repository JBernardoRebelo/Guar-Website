import styled from 'styled-components'

import banner from './Images/pumpkinbanner_update.png'
import background_img from './Images/fire_forest_update.png'

export const _App = styled.section`

    margin: -1.5%;
    background-image: url(${background_img});
    background-size: cover;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    html{   
        scroll-behavior: smooth;
    }

    .image{
        border-radius: 4%;
    }
`

export const _NavBar = styled.section`

    box-shadow: 0px 3px 7.5px rgba(0, 0, 0, 0.5);
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    background-size: cover;
    background-image: url(${banner});
    
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
        :hover{
            color: var(--secondaryColor);
        }
    }
`

export const _InfoSection = styled.section`

    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 5%;
    background-color: rgb(216, 115, 127, 0.5);
    box-shadow: 0px 3px 7.5px rgba(0, 0, 0, 0.5);

    --mainColor: #d8737f;
    --mainColorLight: #f18c8e;
    --textColor: #FCBB6D;
    --shadowColorDark: #40394a;

    .Title{
        margin-bottom: -2%;
        color: var(--mainColorLight);
        text-shadow: 2px 1px var(--shadowColorDark);
    }

    .Info{
        color: black;
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
    --highlight: #FCBB6D;
    --shadowColor: #685D79;
    --shadowColorDark: #40394a;

    margin-top: auto;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-around;

    background-size: cover;
    background-position: 1%;
    background-image: url(${banner});

    .contactElement{
        margin: 2%;
        color: var(--mainColor);
        text-decoration: none;
        font-weight: bold;
        :hover{
            color: var(--highlight);
        }
    }
`

export const _SliderStyles = styled.section`
        
    height: 100%;
    width: 100%;
    position: relative;
    text-align: center;

    --mainColor: #D8737F;
    --mainColorLight: #f18c8e;
    --highlight: #FCBB6D;
    --shadowColor: #685D79;
    --shadowColorDark: #40394a;

    .leftArrowStyles{
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        left: -50px;
        font-size: 45px;
        color: var(--mainColorLight);
        z-Index: 1;
        cursor: pointer;
        :hover{
            color: var(--highlight);
        }
    }

    .rightArrowStyles{
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        right: -50px;
        font-size: 45px;
        color: var(--mainColorLight);
        z-Index: 1;
        cursor: pointer;
        :hover{
            color: var(--highlight);
        }
    }
        
    .dotsContainerStyles{
        display: flex;
        justify-content: center;
    }

    .dotStyles{
        margin: 0 5px;
        cursor: pointer;
        font-size: 50px;
        font-weight: bolder;
        color: var(--shadowColorDark);
        :hover{
            color: var(--highlight);
        }
        
        &.selected{
            color: var(--mainColor);
        }
    }

    .dotCurrent{
        color: var(--highlight);
    }

    .description{
        height: 100px;
        margin-bottom: -30px;
    }

`

export const _TextBox = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5%;

`