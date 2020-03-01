import React, {useEffect} from 'react';
import styled from 'styled-components';
import AOS from 'aos'
import 'aos/dist/aos.css';

const AboutTitle = () => {
  useEffect(AOS.init);  

    return (
                <div className="lineContainer">
                    <MobileAboutLine
                    data-aos='slide-right'
                    data-aos-offset="100"
                    data-aos-duration="700"
                    ></MobileAboutLine>
                    <h2
                    data-aos='fade-in'
                    data-aos-offset="120"
                    data-aos-duration="1200"
                    >Who Am I?</h2>
                    <div 
                      data-aos='slide-left'
                      data-aos-offset="100"
                      data-aos-duration="1000"
                      ></div>
                </div>
        )
    }
    const MobileAboutLine= styled.div`
    @media(min-width:1025px){
            display: none;        
    }
    `
    export default AboutTitle