import React from 'react';
import styled from "styled-components"
import Button from '../Button'
import animateScrollTo from 'animated-scroll-to';
import theme from '../styles/Global'

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
            
            <li>
            <button onClick={handleScroll2}>Portfolio</button>
            </li>
            
            <li>
            <button onClick={handleScroll3}>Contact</button>
            </li>
            <li>
                <a href="https://docs.google.com/document/d/1z-YuNpemHMn2twhdsby2OizyXaa9GRV4Yw2FjArlT14/edit?usp=sharing" download>
                <Button text="View CV"></Button>
                </a>
            </li>
            </ul>
            
        </MyNavLinks>
        )
    }

    const MyNavLinks= styled.nav`
        button{
            cursor: pointer;
            border: none;
            
            font-family: 'montserrat';
            font-weight: 400;
            text-transform: uppercase;
            :focus{
                outline: none;
            }
            :hover{
                transition: transform 5s, 0.3s ease-in-out;
                transform: scale(1.1);
        }
    }
    `


export default NavLinks