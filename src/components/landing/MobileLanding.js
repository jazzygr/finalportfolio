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
    padding-top: 10vh;

    .container{
        display: block;
        align-items: center;
        padding-top: 10vh;
        height: 100vh;
        
        .textContainer{
            display: grid;
            align-items: center;
            grid-template-rows: repeat(3, 1fr);
            height: 25%;
            h1:nth-child(2){
                font-size: 4vh;
                margin-left: 15%;
                font-weight: 400;
                color: ${theme.gray};
            }
            h2:nth-child(3){
                font-size: 4vh;
                margin-left: 25%;
                font-weight: 400;
                span{
                    font-weight: 400;
                    color: ${theme.primary};
                }
                
            }
            .lineContainer{
                display: grid;
                grid-template-columns: 5% auto;
                align-items: center;
                h2{
                    font-size: 6vh;
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
                display: none;
                    button{
                        margin-right: 2rem;
                    }
                }       
        }
        }

    @media(min-width:751px){
        display: none;
    }
`
export default MobileLanding
