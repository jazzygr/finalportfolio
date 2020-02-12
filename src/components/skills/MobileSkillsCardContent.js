import React from 'react';
import styled from "styled-components"
import SkillsCardContent from './SkillsCardContent';

const MobileSkillsCardContent = () => {
    return (
        <StyledMobileSkills>
            <SkillsCardContent />
        </StyledMobileSkills>
        )
    }
    
    const StyledMobileSkills = styled.div`
    div:first-child{
        margin-bottom: 2rem;
    }
    @media(min-width: 751px){
        display: none;
    }
    `
    export default MobileSkillsCardContent
    