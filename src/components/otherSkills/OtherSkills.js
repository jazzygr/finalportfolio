import React from 'react'
import styled from "styled-components"
import {IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io'
import {FaReact, FaGitSquare, FaNpm, FaSass, FaAdobe } from 'react-icons/fa'
import OtherSkillsTitle from '../otherSkills/OtherSkillsTitle'


const OtherSkills = () => {
    return (
        <>
            <OtherSkillsTitle />
            <StyledOtherSkills>
                <div className="iconContainer" >
                    <div className="card"><IoLogoHtml5 size="15vh" color="#EF6026"/></div>
                    <div className="card"><IoLogoCss3 size="15vh" color="#0170BA"/></div>
                    <div className="card"><IoLogoJavascript size="15vh" color="#F5DE18"/></div>
                    <div className="card"><FaReact size="15vh" color="#61DBFB"/></div>
                    <div className="card"><FaGitSquare size="15vh" color="#CA3839"/></div>
                    <div className="card"><FaNpm size="15vh" color="#CA3839"/></div>
                    <div className="card"><FaSass size="15vh" color="#E55EA8"/></div>
                    <div className="card"><FaAdobe size="15vh" color="#FF0100"/></div>
                </div>
            </StyledOtherSkills>
        </>
    )
}

const StyledOtherSkills= styled.div`
    padding-top: 1rem;
    .iconContainer{
        max-width: 80%;
        margin: 0 auto;
        text-align: center;
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        @media(max-width:768px){
            width: 90%;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(4, 1fr);
        }
        div:hover{
            transition: transform 5s, 0.3s ease-in-out;
            transform: scale(1.1);
        }

    }
`

export default OtherSkills