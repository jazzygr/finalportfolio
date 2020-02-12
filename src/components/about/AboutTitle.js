import React from 'react';
import styled from 'styled-components';

const AboutTitle = () => {
    
    return (
                <div className="lineContainer">
                    <MobileAboutLine></MobileAboutLine>
                    <h2>Who Am I?</h2>
                    <div></div>
                </div>
        )
    }
    const MobileAboutLine= styled.div`
    @media(min-width:960px){
            display: none;        
    }
    `
    export default AboutTitle