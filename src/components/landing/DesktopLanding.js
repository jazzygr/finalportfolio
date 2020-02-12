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
    .container{
        display: grid;
        grid-template-columns: 60% 40%;
        align-items: center;
        padding-top: 10vh;
        height: 100vh;
        
        .textContainer{
            display: grid;
            grid-template-rows: repeat(3, 1fr), auto;
            height: 50%;
            h1:nth-child(2){
                font-size: 5vh;
                margin-left: 20%;
                font-weight: 400;
                color: ${theme.gray};
            }
            h2:nth-child(3){
                font-size: 8vh;
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
                    font-size: 10vh;
                    font-weight: 400;
                }
                div{
                    display: grid;
                    width: 100%;
                    height: 2px;
                    background-color: black;
                }
            }
            
            .buttonContainer{
                    margin-left: 10%;
                    margin-top: 10vh;
                    button{
                        margin-right: 2rem;
                    }
                }       
        }
        }

    @media(max-width:750px){
        display: none;
    }
`

export default DesktopLanding
