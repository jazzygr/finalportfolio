import React from 'react';
import LandingContent from './LandingContent'
import styled from "styled-components"
import theme from '../styles/Global'

const MobileLanding = () => {
    return (
        <StyledMobileLanding>
        <LandingContent />
        </StyledMobileLanding>
        )
    }
    
    const StyledMobileLanding= styled.div`
    height: 100vh;
    margin-bottom: 13rem;
    .imageContainer{
        height: 50vh;
        @media(min-width: 860px){
            height: 80vh;
        }
        :nth-child(2){
            margin-bottom: 10%;
            transform: scaleX(-1);
            margin-right: -10px;
        }
    }
    padding-top: 10vh;
    .container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        .imageContainer{
            
            :nth-child(2){
                display: grid;
                align-items: center;
            }
        }
        @media(max-width: 860px){
            .textContainer{
                position: relative;
                z-index: 10;
            }
            display: block;
            position: relative;
            .imageContainer{
                
                :nth-child(2){
                    position: absolute;
                    width: 100%;
                    left: -5%;
                    top: 0;
                    right: 5%;
                    z-index: 1;
                    opacity: 0.2;
                }
            }       
        }
        .textContainer{
            margin-top: 20%;
            display: block;
            text-align: center;
            h1:nth-child(2){
                font-size: 5vh;
                font-weight: 400;
                margin-bottom: 5rem;
                color: ${theme.gray};
            }
            h2:nth-child(3){
                font-size: 7.5vh;
                span{
                    font-weight: 400;
                    color: ${theme.primary};
                }
            }
            .lineContainer{
                h2{
                    font-size: 4rem;
                    margin-bottom: 5rem;
                }
                div{
                    display: none;
                }
            }
            
            
            
            .buttonContainer{
                margin-top: 4rem;
                
                button{
                    display: block;
                    width: 70%;
                    margin: 0 auto;
                    margin-top: 1rem;
                    text-transform: uppercase;
                    background: ${theme.button};
                    color: ${theme.buttonText};
                    :hover{
                        border: 1px solid ${theme.buttonBorder};
                        opacity: 0.8;
                        cursor: pointer;
                        outline: none;
                        transition: background-color 0.5s ease-out, color 0.2s ease-out;
                    }
                    :focus{
                        outline: none;
                        transition: background-color 2s ease-out;
                    }
                }
            }       
        }
    }
    
    @media(min-width: 1025px){
        display: none;
    }
    `
    export default MobileLanding
    