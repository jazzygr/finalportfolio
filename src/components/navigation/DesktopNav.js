import React from 'react';
import NavLinks from "./NavLinks"
import Logo from "./Logo"
import styled from "styled-components"
import theme from "../styles/Global"

 const DesktopNav= () => {
    return (
        <MyDesktopNavbar id="navbar">
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

z-index: 1000;
background: ${theme.white};
border-bottom:1px solid rgba(150, 150, 150, 0.2);
@media(min-width: 1026px){
    grid-template-columns: 15% 85%;
            }

#logo{
    @media(max-width: 1025px){
           display: none;
            }
}
.nav-links {
            list-style: none;
            display: grid;
            width: 100%;
            grid-template-columns: repeat(5, 1fr); 
            align-items: center;
            justify-items: center;
            height: 100%;
            font-size: 0.8rem;
            @media(max-width: 380px){
                font-size: 0.6rem;
            }
            button{
                background: none;
            }
        }
        @media(max-width: 1025px){
            li:last-child{
                display: none;
            }
        }
`
export default DesktopNav
