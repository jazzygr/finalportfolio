import React from 'react';
import styled from "styled-components"
import AboutImage from "./AboutImage"
import AboutContent from './AboutContent';
import AboutTitle from './AboutTitle'
import theme from '../styles/Global'

const MobileAbout = () => {
    return (
        <StyledMobileAbout>
        <AboutTitle />
        <AboutImage />
        <AboutContent />
        </StyledMobileAbout>
        )
    }
    
    const StyledMobileAbout= styled.div`
    margin-top: 10rem;
    @media(min-width:1025px){
            display: none;
        }
    .aboutText{
        h4{
            text-align: center;
            margin: 5%;
            font-weight: 600;
            font-size: 1.2rem;
        }
        h3{
            color: ${theme.gray};
            font-weight: 400;
            text-align: center;
            
            span{
                display: block;
                font-size: 2.5rem;
                color: ${theme.primary};
            }
            
        }
        p{
            padding: 1rem;
            margin: 0 2rem 0.5rem 2rem;
            color: ${theme.gray};
        }
        button{
            display: block;
            width: 90%;
            text-transform: uppercase;
            margin: 0 auto;
            background: ${theme.button};
            color: ${theme.buttonText};
            border: 1px solid ${theme.buttonBorder};
            :hover{
                opacity: 0.8;
            }
        }
    }
    
    .lineContainer{
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        text-align: center;
        width: 100%;
        
        div {
            background-color: black;
            height: 2px;
        }
        h2{
            font-size:  3rem;
            padding: 0 1rem;
        }
    }
    `
    export default MobileAbout
    