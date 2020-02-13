import React from 'react'
import DesktopSkills from "./DesktopSkills"
import MobileSkills from "./MobileSkills"
import styled from "styled-components"

const Skills = () => {

    return (
            <StyledSkills id="portfolio">
                <DesktopSkills />
                <MobileSkills />
            </StyledSkills>
    )
}

const StyledSkills= styled.div`
    padding-top: 12vh;
`

export default Skills