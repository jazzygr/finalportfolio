import React from 'react';
import styled from "styled-components"
import theme from '../styles/Global'

const SkillsTextContent = props => {
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
            <div>
            <h5>Project overview</h5>
              <div id="overview"></div>
              </div>
              <div>
            <h5>Problems Encountered</h5>
            <div id="problems"></div>
            </div>
            <div>
            <h5>Solutions</h5>
            <div id="solutions"></div>
            </div>
            <div>
            <h5>Improvements</h5>
            <div id="improvements"></div>
            </div>
          </TextContainer>
        </Container>
        )
  }

  
  const Title = styled.div`
  display: grid;
  grid-template-rows: 4rem 3rem;
  margin-bottom: 1rem;
  
  
  h3{
    color: ${theme.gray};
    font-weight: 400;
    padding-left: 20%;
  }
  span{
    font-size: 1.8rem;
    color: ${theme.primary};
  }
    `
    
    const Container = styled.div`
      display: grid;
      grid-template-rows: 15% 85%;
      @media(max-width:1240px) {
          grid-template-rows: 8% 85%;
        }
    `
    
    const TextContainer= styled.div`
    max-height: 100%;
    display: grid;
    grid-template-rows: repeat(4, 25%);

    @media(max-width:1240px) {
        display: block;
        }

      div{
        display: grid;
      }
    margin-right: 10%;

      h5{
        margin-left: 5%;
        font-size: 1.2rem;
      }
      p{
        margin-left: 5%;
        font-size: 0.9rem;
        font-weight: 400;
        color: ${theme.gray};
        line-height: 1.3rem;
      }
    `
    
    const LineContainer = styled.div`
    display: grid;
    grid-template-columns: 15% 1fr;
    align-items: center;
    h2{
        font-size: 4rem;
    }
    div {
      background-color: ${theme.black};
      height: 2px;
      margin-left: -1px;
    }
    
    `



export default SkillsTextContent