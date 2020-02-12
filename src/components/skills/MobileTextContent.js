import React from 'react';
import styled from "styled-components"
import theme from '../styles/Global'

const SkillsTextContent = () => {
    return(
        <Container>
            <TextContainer>
                <h5>Project overview</h5>
                <p>An open</p>
                <h5>Problems Encountered</h5>
                <p></p>
                <h5>Solutions</h5>
                <p></p>
                <h5>Improvements</h5>
                <p></p>
            </TextContainer>
        </Container>
        )
    }
    
    
    
    const Container = styled.div`
    margin-top: 2rem;

    @media(min-width: 751px){
        display: none;
    }
    `
    
    const TextContainer= styled.div`
    h5{
        font-size: 2.5vh;
        font-weight: 400;
        text-align: center;
    }
    p{
        margin-left: 5%;
        font-size: 2.2vh;
        font-weight: 400;
        color: ${theme.gray};
    }
    `
    
    
     
    export default SkillsTextContent
    