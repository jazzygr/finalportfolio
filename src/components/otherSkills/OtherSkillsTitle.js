import React from 'react';
import styled from 'styled-components';
import theme from '../styles/Global'

const OtherSkillsTitle = () => {
    
    return (
            <StyledOtherSkills>
                <div className="lineContainer">
                    <h2>Other </h2>
                    <div></div>
                    <span>Skills</span>
                </div>
            </StyledOtherSkills>
        )
    }
    const StyledOtherSkills= styled.div`
    margin-top: 10vh;
    .lineContainer{
        @media(max-width:550px){
            font-size: 1.3rem;
        }
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
        span{
                color: ${theme.primary};
                margin-left: 2rem;
            }
    }
    `


export default OtherSkillsTitle