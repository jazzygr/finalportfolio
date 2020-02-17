import React from 'react';
import styled from "styled-components"
import theme from "../styles/Global"
import animateScrollTo from 'animated-scroll-to';

const NavLinks = () => {
    
    function handleScroll() {
        animateScrollTo(document.getElementById('landing'));
    }
    function handleScroll1() {
        animateScrollTo(document.getElementById('aboutMe'));
    }
    function handleScroll2() {
        animateScrollTo(document.getElementById('portfolio'));
    }
    function handleScroll3() {
        animateScrollTo(document.getElementById('contact'));
    }
    
    
    
    return (
        <MyNavLinks>
        <ul className="nav-links">
        <li>
        <button onClick={handleScroll}>Home</button>
        </li>
        
        <li>
        <button onClick={handleScroll1}>About</button>
        </li>
        
        <li id="mobileLogo">
        <h2>JG</h2>
        </li>
        
        <li>
        <button onClick={handleScroll2}>Portfolio</button>
        </li>
        
        <li>
        <button onClick={handleScroll3}>Contact</button>
        </li>
        <li>
        <a href="https://docs.google.com/document/d/1z-YuNpemHMn2twhdsby2OizyXaa9GRV4Yw2FjArlT14/edit?usp=sharing" download><button>Get CV</button></a>
        </li>
        </ul>
        
        </MyNavLinks>
        )
    }
    
    const MyNavLinks= styled.nav`
    #mobileLogo{
        font-size: 1.5rem;
        color: ${theme.primary};
    }
    @media(min-width: 1026px){
        #mobileLogo{
            display: none;
        }
    }
    button{
        @media(max-width: 500px){
            font-size: 0.3rem;
        }
        cursor: pointer;
        border: none;
        font-weight: 400;
        text-transform: uppercase;            
        :focus{
            outline: none;
        }
        :hover{
            transition: transform 2s, 0.3s ease-in-out;
            transform: scale(1.4);

        }
    }
    `
    
    
    export default NavLinks