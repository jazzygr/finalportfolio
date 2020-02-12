import React from 'react';
import styled from "styled-components"
import AboutImage from "./AboutImage"
import AboutContent from './AboutContent';
import theme from '../styles/Global'
import AboutTitle from './AboutTitle';

const DesktopAbout = () => {
    
    return (
        <Title>
        <StyledAboutTitle>
        <AboutTitle />
        </StyledAboutTitle>
        <StyledDesktopAbout>
        <AboutImage />
        <AboutContent />
        </StyledDesktopAbout>
        </Title>
        )
    }
    
    const Title= styled.div`
    .imageContainer{
        :first-child{
            transform: scaleX(-1);
        }
    }
    @media(max-width:750px){
        display: none;
    }
    `
    const StyledAboutTitle = styled.div`
    .lineContainer{
        margin-left: 50%;
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        font-size: 4vh;
        font-weight: 400;
        h2{
            margin-right: 1rem;
            font-weight: 400;
        }
        div{
            height: 2px;
            background-color: ${theme.black};
        }
    }
    `
    
    const StyledDesktopAbout= styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .textContainer{
        display: grid;
        grid-template-rows: 5.5vh 4vh auto;
    }
    .aboutText{
        h3{
            color: ${theme.gray};
            font-weight: 400;
            margin-left: 5%;
            
            span{
                font-weight: 400;
                font-size: 5vh;
                color: ${theme.primary};
            }
            
        }
        p{
            font-size: 2.2vh;
            padding: 1rem 2rem 1rem 0;
        }
    }
    `
    
    export default DesktopAbout
    