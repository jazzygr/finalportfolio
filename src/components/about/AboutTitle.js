import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion' 

const AboutTitle = () => {
    
    return (
                <div className="lineContainer">
                    <MobileAboutLine></MobileAboutLine>
                    <h2>Who Am I?</h2>
                    <motion.div
                    initial={{x: '40vw'}}
                    animate={{
                      x: 0
                    }}
                    transition={{duration: 0.7}}
                    ></motion.div>
                </div>
        )
    }
    const MobileAboutLine= styled.div`
    @media(min-width:1025px){
            display: none;        
    }
    `
    export default AboutTitle