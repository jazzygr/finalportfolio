import React from 'react'
import DesktopContact from "./DesktopContact"
import styled from "styled-components"


const Contact = () => {
    return(
        <ContactContainer id="contact">
            <DesktopContact />
      </ContactContainer>
      )}

      const ContactContainer = styled.div`
      padding-top: 1rem;
     
`


export default Contact