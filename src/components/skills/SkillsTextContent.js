import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import styled from "styled-components"
import theme from '../styles/Global'

const SkillsTextContent = props => {
  useEffect(AOS.init);  
    return(
        <Container>
          <Title>
              <LineContainer>
              <div
              data-aos='slide-right'
              data-aos-offset="100"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              ></div>
              <h2
              data-aos='fade-in'
              data-aos-offset="130"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              >Portfolio</h2>
              </LineContainer>
              <h3
              data-aos='fade-left'
              data-aos-offset="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              >and <span>Skills</span></h3>
          </Title>
          <TextContainer>
            <div>
            <h5>Project Overview</h5>
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

      div{
        display: block;
      }
    margin-right: 10%;

      h5{
        margin-left: 5%;
        font-size: 1.2rem;
      }
      p{
        padding-top: 0.5rem;
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
      height: 4px;
      margin-left: -1px;
    }
    
    `



export default SkillsTextContent