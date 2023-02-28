import styled from 'styled-components'

import banner from './Images/pumpkinbanner_update.png'
import background_img from './Images/fire_forest_update.png'

export const _App = styled.section`

    margin: -1.5%;
    background-size: cover;
    background-image: url(${background_img});
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    html{   
        scroll-behavior: smooth;
    }

    .image{
        border-radius: 4%;
    }
`

export const _NavBar = styled.section`

    top: 0;
    left: 0;
    height: 6%;
    width: 100%;
    display: flex;
    /* position: fixed; */
    transition: 0.5s;
    align-items: center;
    align-content: center;
    background-size: cover;
    justify-content: space-around;
    background-image: url(${banner});
    box-shadow: 0px 3px 7.5px rgba(0, 0, 0, 0.5);

    --mainColor: #D8737F;
    --textColor: #FCBB6D;
    --shadowColor: #685D79;
    --mainColorLight: #f18c8e;

    :hover{
        height: 10%;
        transition: 0.5s;
    }

    .banner{
        display: contents;
    }

    .navBarLogo{
        margin: 5%;
        padding-top: 20%;
    }

    .navbarTitle{
        display: flex;
        font-size: x-large;
        font-weight: bolder;
        color: var(--mainColorLight);
        text-shadow: 2px 1.5px var(--shadowColor);
    }

    .navbarElements{
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        align-items: center;
        align-content: center;
        color: var(--textColor);
        justify-content: center;
        text-shadow: 1px 1px black;
    }

    .navBarElement{
        margin: 5%;
        font-weight: bold;
        text-decoration: none;
        color: var(--mainColor);
        :hover{
            color: var(--secondaryColor);
        }
    }
`

export const _InfoSection = styled.section`

    margin: 5%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    background-color: rgb(216, 115, 127, 0.5);
    box-shadow: 0px 3px 7.5px rgba(0, 0, 0, 0.5);

    --textColor: #FCBB6D;
    --mainColor: #d8737f;
    --mainColorLight: #f18c8e;
    --shadowColorDark: #40394a;

    .Title{
        margin-bottom: -2%;
        color: var(--mainColorLight);
        text-shadow: 1px 1px var(--shadowColorDark);
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

    display: flex;
    margin-top: auto;
    align-items: center;
    align-content: center;
    justify-content: space-around;

    background-size: cover;
    background-position: 1%;
    background-image: url(${banner});
    
    --mainColor: #D8737F;
    --highlight: #FCBB6D;
    --shadowColor: #685D79;
    --mainColorLight: #f18c8e;
    --shadowColorDark: #40394a;


    .contactElement{
        margin: 2%;
        font-weight: bold;
        text-decoration: none;
        color: var(--mainColor);
        :hover{
            color: var(--highlight);
        }
    }
`

export const _SliderStyles = styled.section`
        
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;

    --mainColor: #D8737F;
    --highlight: #FCBB6D;
    --shadowColor: #685D79;
    --mainColorLight: #f18c8e;
    --shadowColorDark: #40394a;

    .title{
        color: var(--highlight);
        text-shadow: 1px 1px var(--shadowColorDark);
    }

    .leftArrowStyles{
        top: 50%;
        z-Index: 1;
        left: -50px;
        font-size: 45px;
        cursor: pointer;
        position: absolute;
        color: var(--mainColorLight);
        transform: translate(0, -50%);
        :hover{
            color: var(--highlight);
        }
    }

    .rightArrowStyles{
        top: 50%;
        z-Index: 1;
        right: -50px;
        font-size: 45px;
        cursor: pointer;
        position: absolute;
        color: var(--mainColorLight);
        transform: translate(0, -50%);
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

    margin: 1.5%;
    display: flex;
    align-items: center;
    justify-content: center;

`