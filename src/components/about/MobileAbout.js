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
    @media(min-width:751px){
            display: none;
        }
    .aboutText{
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
            font-size: 2.2vh;
            padding: 1rem;
        }
        button{
            display: block;
            width: 80%;
            margin: 0 auto;
            font-size: 3vh;
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
        margin-top: 3rem;
        width: 100%;
        
        div {
            background-color: black;
            height: 2px;
        }
        h2{
            font-weight: 400;
            font-size: 3.3vh;
            padding: 0 1rem;
            text-align: center;
        }
    }
    `
    export default MobileAbout
    