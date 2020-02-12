import React from 'react';
import styled from "styled-components"
import SkillsCardContent from './SkillsCardContent';
import MobileTitle from './MobileTitle';

const MobileSkills = () => {
    return (
        <StyledMobileSkills>
            <MobileTitle />
            <SkillsCardContent />
        </StyledMobileSkills>
        )
    }
    
    const StyledMobileSkills = styled.div`




    .cardContainer{
        width: 90%;
        margin: 0 auto;
        
    }
    
    @media(min-width: 751px){
        display: none;
    }
    `
    export default MobileSkills
    