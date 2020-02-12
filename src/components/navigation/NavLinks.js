import React from 'react';
import styled from "styled-components"
import {Link} from 'gatsby'
import Button from '../Button'
import theme from "../styles/Global"

const NavLinks = () => {
    return (
        <MyNavLinks>
            <ul className="nav-links">
            <li>
            <StyledLink to="/home">Home</StyledLink>
            </li>
            <li>
            <StyledLink to="/about">About</StyledLink>
            </li>
            
            <li>
            <StyledLink to="/portfolio">Portfolio</StyledLink>
            </li>
            
            <li>
            <StyledLink to="/contact">Contact</StyledLink>
            </li>
            <li>
                <Button text="Get CV"/>
            </li>
            </ul>
            
        </MyNavLinks>
        )
    }

    const MyNavLinks= styled.nav`
    
    `
     const StyledLink = styled(Link)`
     text-decoration: none;
     text-transform: uppercase;
     color: ${theme.black};
 `


export default NavLinks