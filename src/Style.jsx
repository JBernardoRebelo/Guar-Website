import styled from 'styled-components'

export const _App = styled.section`

    background-color: #FCBB6D;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    .image{
        border-radius: 10px;
    }
`

export const _NavBar = styled.section`

    box-shadow: 0px 3px 7.5px rgba(0, 0, 0, 0.1);
    background-image: '../Images/pumpkinbanner.png';
    display: flex;
    align-content: center;
    justify-content: space-evenly;
    

    .banner{
        display: contents;
    }

    .navbarTitle{
        color: #685D79;
        font-size: x-large;
        font-weight: bolder;
        text-shadow: 1px 1px #1117;
    }

    .navbarElements{
        color: #685D79;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        flex-wrap: nowrap;
        align-items: center;
    }

    .navBarElement{
        margin: 5%;
    }

`

export const _InfoSection = styled.section`

    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    color: #685D79;

    .Title{
        color:#685D79;
    }

    .Info{
        margin: 5%;
    }

`

export const _TextBox = styled.section`

    display: flex;
    margin: 5%;

`