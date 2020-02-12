import React from "react"
import styled from 'styled-components'
import theme from '../styles/Global'




const Card = props => {
  return (
    <>
    <StyledCard>
    <img src={props.imgsrc} alt="Current project" />
    <h5>{props.title}</h5>
    <p>{props.text} </p>
    <ul>
    <li>Live</li>
    <li>Code</li>
    </ul>
    </StyledCard>
    <MobileArticle>
      <h5>Project overview</h5>
      <p>{props.overview}</p>
      <h5>Problems Encountered</h5>
      <p>{props.problems}</p>
      <h5>Solutions</h5>
      <p>{props.solutions}</p>
      <h5>Improvements</h5>
      <p>{props.improvements}</p>
      
    </MobileArticle>
    </>
    )
  }
  
  const MobileArticle = styled.div`
  margin: 3rem 0;
    h5{
      margin-top: 3vh;
      text-align: center;
      font-weight: 400;
      font-size: 2.5vh;
    }
    p{
      font-size: 2vh;
      font-weight: 400;
      font-family: 'montserrat';
      color: gray;
    }
  
  
  @media(min-width:750px){
    display: none;
  }
  `
  
  const StyledCard = styled.div`
  display: grid;
  padding-bottom: 1rem;
  min-height: 230px;
  grid-template-rows: 50% 15% 30% 10%;
  box-shadow: 0px 3px 6px rgb(20,20,20, 0.16);
  overflow: hidden;
  border: 1px solid ${theme.accent};
  cursor: pointer;
  
  align-items: center;
  
  :hover{
    transition: transform 5s, 0.3s ease-in-out;
    transform: scale(1.1);
    img{
      transition: transform 5s, 0.3s ease-in-out;
      transform: scale(1.1);
    }
  }
  
  img:nth-child(1){
    max-width: 100%;
    height: auto;
    margin-bottom: 2rem;
  }
  
  h5{
    padding: 0.5rem;
    font-size: 2.3vh;
    font-weight: 400;
    border-bottom: 1px solid ${theme.accent};
  }
  p{
    display: flex;
    align-self: flex-start;
    padding: .5rem;
    font-size: 2vh;
    color: ${theme.gray};
    
  }
  ul{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    li{
      margin: 1rem 0;
      padding: 0.5rem;
      font-size: 2.2vh;
      display: grid;
      list-style: none;
      :hover{
        transition: transform 5s, 0.3s ease-in-out;
        transform: scale(1.1);
      }
    }
  }
  `
  
  
  export default Card
  