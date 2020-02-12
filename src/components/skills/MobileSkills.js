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
    .cardContainer{
        width: 80%;
        margin: 0 auto;
    }
    
    @media(min-width: 751px){
        display: none;
    }
    `
    export default MobileSkills
    