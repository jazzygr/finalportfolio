import React from 'react'
import styled from 'styled-components'
import DesktopAbout from './DesktopAbout'
import MobileAbout from './MobileAbout'


const About = () => {
    return(
        <LandingContainer>
            <DesktopAbout />
            <MobileAbout />
        </LandingContainer>
)}

const LandingContainer = styled.div`

`


export default About