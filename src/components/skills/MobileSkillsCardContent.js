import React from 'react';
import styled from "styled-components"
import SkillsCardContent from './SkillsCardContent';
import MobileTitle from "./MobileTitle"

const MobileSkillsCardContent = () => {
    return (
        <StyledMobileSkills>
            <MobileTitle />
            <SkillsCardContent />
        </StyledMobileSkills>
        )
    }
    
    const StyledMobileSkills = styled.div`
    @media(min-width: 751px){
        display: none;
    }
    `
    export default MobileSkillsCardContent
    