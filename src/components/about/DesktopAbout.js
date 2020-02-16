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
    @media(max-width:1024px){
        display: none;
    }
    `
    const StyledAboutTitle = styled.div`
    .lineContainer{
        margin-left: 50%;
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        font-size: 2rem;
        h2{
            margin-right: 1rem;
        }
        div{
            height: 4px;
            background-color: ${theme.black};
        }
    }
    `
    
    const StyledDesktopAbout= styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .aboutText{
        display: grid;
        h4{
            margin-top: 0.5rem;
            margin-right: 5%;
            font-weight: 600;
            font-size: 1.2rem;
        }
        h3{
            color: ${theme.gray};
            font-weight: 400;
            margin-left: 5%;
            
            span{
                font-size: 2rem;
                color: ${theme.primary};
            }
        }
        p{
            padding: 1rem 2rem 1rem 0;
            color: ${theme.gray};
        }
    }
    `
    
    export default DesktopAbout
    