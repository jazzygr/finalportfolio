import React from 'react';
import styled from "styled-components"
import MobileSkillsCardContent from "./MobileSkillsCardContent"
import MobileTitle from './MobileTitle';

const MobileSkills = () => {
    return (
        <StyledMobileSkills>
            <MobileTitle />
            <MobileSkillsCardContent />
        </StyledMobileSkills>
        )
    }
    
    const StyledMobileSkills = styled.div`
     @media(min-width: 1025px){
        display: none;
    }
    .cardContainer{
        width: 80%;
        margin: 0 auto;
    }
    
   
    `
    export default MobileSkills
    