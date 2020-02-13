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
    @media(min-width:1025px){
            display: none;
        }
    .aboutText{
        h4{
            text-align: center;
            margin: 5%;
            font-weight: 600;
            font-size: 2vh;
        }
        h3{
            color: ${theme.gray};
            font-weight: 400;
            text-align: center;
            
            span{
                display: block;
                font-weight: 400;
                font-size: 5vh;
                color: ${theme.primary};
            }
            
        }
        p{
            font-size: 2vh;
            padding: 1rem;
            font-family: 'montserrat';
            margin: 0 2rem 0.5rem 2rem;
            color: ${theme.gray};
        }
        button{
            display: block;
            width: 80%;
            height: 4vh;
            margin: 0 auto;
            font-size: 2vh;
        }
    }
    .imageContainer{
        :nth-child(2){
            transform: scaleX(-1);
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
            font-weight: 400;
            font-size:  4vh;
            padding: 0 1rem;
            text-align: center;
        }
    }
    `
    export default MobileAbout
    