import React from 'react'
import DesktopNavbar from "./DesktopNav"
import styled from "styled-components"
import AOS from 'aos'
import 'aos/dist/aos.css';


const Navbar = () => {
    AOS.init();
    //Navbar retract feature needed to be wrapped in a typeof fix as window is a global variable, netlify calling it broke the initial build. Or something like that.
    if (typeof window !== `undefined`){
    let prevScrollPos = window.pageYOffset;
    window.onscroll= function(){
        let currentScrollPos = window.pageYOffset;
        if(prevScrollPos > currentScrollPos) {
            this.document.getElementById('navbar').style.top="0";
        } else {
            this.document.getElementById('navbar').style.top="-10vh";
        }
        prevScrollPos = currentScrollPos;
    }
}
    return(
        <MyNavbar >
            <DesktopNavbar />
      </MyNavbar>
      )}

      const MyNavbar = styled.nav`
      top: 0;
      transition: top 0.3s;
`


export default Navbar