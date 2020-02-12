import React from 'react'
import DesktopLanding from "./DesktopLanding"
import MobileLanding from "./MobileLanding"
import styled from 'styled-components'


const LandingPage = () => {
    return(
        <LandingContainer>
            <DesktopLanding />
            <MobileLanding />
        </LandingContainer>
)}

const LandingContainer = styled.div`
`


export default LandingPage