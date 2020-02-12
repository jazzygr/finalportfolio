import React from 'react';
import styled from "styled-components"

 const MobileContact = () => {
    return (
        <StyledMobileContact>
            MContact
        </StyledMobileContact>
    )
}

const StyledMobileContact = styled.div`
    @media(min-width: 751px){
        display: none;
    }
`

export default MobileContact
