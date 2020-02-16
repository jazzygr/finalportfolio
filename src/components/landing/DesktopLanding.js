import React from 'react';
import LandingContent from './LandingContent'
import styled from "styled-components"
import theme from "../styles/Global"

const DesktopLanding = () => {
    
    return (
        <StyledDesktopLanding>
        <LandingContent />
        </StyledDesktopLanding>
        )
    }
    
    const StyledDesktopLanding= styled.div`
    .imageContainer{
        :nth-child(2){
            transform: scaleX(-1);
            margin-right: -5px;
        }
    }
    .container{
        display: grid;
        grid-template-columns: 60% 40%;
        align-items: center;
        padding-top: 10vh;
        height: 100vh;
        
        .textContainer{
            display: grid;
            grid-template-rows: repeat(3, 1fr), auto;
            h1:nth-child(2){
                font-size: 5vh;
                margin-left: 20%;
                font-weight: 400;
                color: ${theme.gray};
            }
            h2:nth-child(3){
                font-size: 3rem;
                margin-left: 30%;
                font-weight: 400;
                span{
                    font-weight: 400;
                    color: ${theme.primary};
                }
                
            }
            .lineContainer{
                display: grid;
                grid-template-columns: 10% auto;
                align-items: center;
                h2{
                    font-size: 12vh;
                }
                div{
                    display: grid;
                    width: 100%;
                    height: 4px;
                    background-color: black;
                }
            }
            
            .buttonContainer{
                margin-left: 10%;
                margin-top: 8rem;
                button{
                    width: 35%;
                    margin-right: 1rem;
                    :hover{
                        background: ${theme.secondary};
                    }
                }
            }       
        }
    }
    
    @media(max-width:1024px){
        display: none;
    }
    `
    
    export default DesktopLanding
    