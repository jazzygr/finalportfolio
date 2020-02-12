import React from 'react'
import DesktopSkills from "./DesktopSkills"
import MobileSkills from "./MobileSkills"
import styled from "styled-components"

const Skills = () => {

    return (
            <StyledSkills>
                <DesktopSkills />
                <MobileSkills />
            </StyledSkills>
    )
}

const StyledSkills= styled.div`
    margin-top: 10%;
`

export default Skills