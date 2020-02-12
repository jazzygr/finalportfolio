import React from 'react'
import DesktopNavbar from "./DesktopNav"
import MobileNavbar from "./MobileNav"
import styled from "styled-components"


const Navbar = () => {
    return(
        <MyNavbar>
            <DesktopNavbar />
            <MobileNavbar />
      </MyNavbar>
      )}

      const MyNavbar = styled.nav`
`


export default Navbar