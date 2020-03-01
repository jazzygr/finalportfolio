import React, {useEffect} from 'react';
import styled from 'styled-components';
import theme from '../styles/Global'
import AOS from 'aos'
import 'aos/dist/aos.css';

const OtherSkillsTitle = () => {
    useEffect(AOS.init);
    return (
            <StyledOtherSkills>
                <div className="lineContainer">
                    <div
                    data-aos='slide-right'
                    data-aos-offset="100"
                    data-aos-duration="700"
                    ></div>
                    <h2
                    data-aos='fade-in'
                    data-aos-offset="100"
                    data-aos-duration="800"
                    >Other <span>Skills</span></h2>
                    <div
                    data-aos='slide-left'
                    data-aos-offset="100"
                    data-aos-duration="700"
                    ></div>
                    
                </div>
            </StyledOtherSkills>
        )
    }
    const StyledOtherSkills= styled.div`
    margin-top: 10vh;
    width: 100%;
    .lineContainer{
        @media(max-width:550px){
            font-size: 1.3rem;
        }
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        font-size: 2rem;
        h2{
            margin: 2rem;
        }

        div{
            height: 4px;
            width: 100%;
            background-color: ${theme.black};
        }
        span{
                color: ${theme.primary};
                display: block;
                text-align: center;
            }
    }
    `


export default OtherSkillsTitle