import React from 'react';
import NavLinks from "./NavLinks"
import Logo from "./Logo"
import styled from "styled-components"
import theme from "../styles/Global"

 const DesktopNav= () => {
    return (
        <MyDesktopNavbar>
            <Logo />
            <NavLinks />
        </MyDesktopNavbar>
    )
}

const MyDesktopNavbar = styled.div`
display: grid;
height: 10vh;
width: 100%;
position: fixed;
grid-template-columns: 15% 85%;
z-index: 1000;
background: ${theme.white};
border-bottom:1px solid rgba(150, 150, 150, 0.2);

.nav-links {
            list-style: none;
            display: grid;
            grid-template-columns: repeat(5, 1fr); 
            align-items: center;
            justify-items: center;
            height: 100%;
            font-size: 2vh;
            button{
                height: 5vh;
            }
        }
    @media(max-width: 1024px){
            display: none;
    }
`
export default DesktopNav
