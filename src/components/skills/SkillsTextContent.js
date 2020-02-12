import React from 'react';
import styled from "styled-components"
import theme from '../styles/Global'

const SkillsTextContent = () => {
    return(
        <Container>
          <Title>
              <LineContainer>
              <div></div>
              <h2>Portfolio</h2>
              </LineContainer>
             <h3>and <span>Skills</span></h3>
          </Title>
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

  
  const Title = styled.div`
  display: grid;
  grid-template-rows: 5vh 4vh;
  
  
  h3{
    color: ${theme.gray};
    font-weight: 400;
    padding-left: 40%;
  }
  span{
    font-size: 5vh;
    color: ${theme.primary};
  }
    `
    
    const Container = styled.div`
      display: grid;
      grid-template-rows: auto 85%;
    `
    
    const TextContainer= styled.div`
      display: grid;
      grid-template-rows: repeat(3, (1fr, auto));
      h5{
        margin-left: 5%;
        font-size: 2.5vh;
        font-weight: 400;
      }
      p{
        margin-left: 5%;
        font-size: 2.2vh;
        font-weight: 400;
        color: ${theme.gray};
      }
    `
    
    const LineContainer = styled.div`
    display: grid;
    grid-template-columns: 15% 1fr;
    align-items: center;
    h2{
        font-size: 6vh;
        font-weight: 400;
    }
    div {
      background-color: ${theme.black};
      height: 2px;
      margin-left: -1px;
    }
    
    `



export default SkillsTextContent