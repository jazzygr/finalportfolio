import React from 'react'
import styled from 'styled-components'
import DesktopAbout from './DesktopAbout'
import MobileAbout from './MobileAbout'


const About = () => {
    return(
        <LandingContainer id="aboutMe">
            <DesktopAbout />
            <MobileAbout />
        </LandingContainer>
)}

const LandingContainer = styled.div`
    /* navbar position fix */
    padding-top: 10vh;
`


export default About