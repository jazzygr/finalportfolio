import React from "react"
import styled from 'styled-components'
import theme from '../styles/Global'




const Card = props => {
  return (
    <StyledCard>
    <img src={props.imgsrc} alt="Current project" />
    <h5>{props.title}</h5>
    <p>{props.text} </p>
    <ul>
    <li>Live</li>
    <li>Code</li>
    </ul>
    </StyledCard>
    )
  }
  
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
  