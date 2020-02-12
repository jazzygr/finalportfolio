import React from 'react';
import SkillsCardContent from './SkillsCardContent'
import SkillsTextContent from "./SkillsTextContent"
import styled from "styled-components"

const DesktopSkills = () => {
    return (
        <StyledDesktopSkills>
            <SkillsTextContent />
            <SkillsCardContent />
        </StyledDesktopSkills>
        )
    }
    
    const StyledDesktopSkills = styled.div`
    display: grid;
    margin-right: 3rem;
    grid-template-columns: 40% 60%;
    padding-bottom: 3rem;
    
    .cardContainer {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        
        div:nth-child(1){
            grid-column-start: span 2;
            overflow: hidden;
            :hover {
                transition: 0.2s ease-in;
                transform: scale(1.1);
            }
        }
        
        @media(max-width:960px) {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);
        }
        
        @media(max-width:760px) {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);
        }
    }
    
    
    @media(max-width: 750px){
        display: none;
    }
    `
    export default DesktopSkills
    