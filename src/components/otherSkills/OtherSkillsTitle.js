import React from 'react';
import styled from 'styled-components';
import theme from '../styles/Global'

const OtherSkillsTitle = () => {
    
    return (
            <StyledOtherSkills>
                <div className="lineContainer">
                    <div></div>
                    <h2>Other <span>Skills</span></h2>
                    <div></div>
                    
                </div>
            </StyledOtherSkills>
        )
    }
    const StyledOtherSkills= styled.div`
    margin-top: 10vh;
    width: 100%;
    .lineContainer{
        @media(max-width:550px){
            font-size: 1.3rem;
        }
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        font-size: 2rem;
        h2{
            margin: 2rem;
        }

        div{
            height: 4px;
            width: 100%;
            background-color: ${theme.black};
        }
        span{
                color: ${theme.primary};
                display: block;
                text-align: center;
            }
    }
    `


export default OtherSkillsTitle