import React from 'react'
import NavLinks from './NavLinks'
import styled from "styled-components"
import Logo from './Logo'
import theme from '../styles/Global'

const MobileNavbar = () => {
    return (
        <MyMobileNavbar>
            <Logo />
            <NavLinks />
        </MyMobileNavbar>
        )
    }

    const MyMobileNavbar=styled.nav`
        position: fixed;
        z-index: 1000;
        background: ${theme.white};
        width: 100%;

    border-bottom: 1px solid rgba(120, 120, 120, 0.2);
    @media(min-width: 751px){
        display: none;
    }
    .nav-links{
       padding: 0.5rem;
       list-style: none;
       text-align: center;
       justify-content: center;
       background: ${theme.accent};
       box-shadow: inset 0 0 10px 5px rgba(150, 150, 150, 0.2);
       border-top: 1px solid rgba(150, 150, 150, 1);


           display: none;
       }
       li{
           height: 1.5rem;
           font-size: 2.5vh;
       }
       
    }
    `
    
    
export default MobileNavbar