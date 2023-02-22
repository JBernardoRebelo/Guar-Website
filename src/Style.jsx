import styled from 'styled-components'

export const _App = styled.section`

    background-color: #FCBB6D;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export const _NavBar = styled.section`

    background-color: #D8737F;
    display: flex;
    padding: 20px 36px;
    box-shadow: 0px 3px 7.5px rgba(0, 0, 0, 0.1);

    .navbar--logo{
        position: fixed;
        height: 10%;
    }

    .navbar--title{
        color: #685D79;
        position: relative;
        top: 50%;
        left: 50%;
    }

    .navbar--links{
        color: #685D79;
        display: flex;
        position: relative;
        flex-direction: column;
        left: 70%;
    }

`

export const _Intro = styled.section`

    display: block;


    .intro--title{
        color:#685D79;
    }

    .intro--txt{
        color: #685D79;
    }

    .intro--img{
        height: 200px;
    }

`
