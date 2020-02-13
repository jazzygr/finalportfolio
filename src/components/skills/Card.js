import React from "react"
import ReactDom from 'react-dom'
import styled from 'styled-components'
import theme from '../styles/Global'




const Card = props => {
  function handleClick() {
  const overview =
                  <p>{props.overview}</p>

  ReactDom.render(overview, document.getElementById('overview'));

  const problems = <div>
                  <p>{props.problems}</p>
                  </div>

  ReactDom.render(problems, document.getElementById('problems'));

const solutions = <div>
                  <p>{props.solutions}</p>
                  </div>

  ReactDom.render(solutions, document.getElementById('solutions'));

const improvements = <div>
                  <p>{props.improvements}</p>
                  </div>

  ReactDom.render(improvements, document.getElementById('improvements'));


  };

  return (
    <>
    <StyledCard>
    <img src={props.imgsrc} alt="Current project" />
    <h5>{props.title}</h5>
    <p>{props.text} </p>
    <div>
      <ul>
        <li>Live</li>
        <li>Code</li>
        <li><button onClick={handleClick} onKeyDown={handleClick}>More</button></li>
      </ul>
    </div>
    </StyledCard>

    
    <MobileArticle>
      <h5>Project Overview</h5>
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
  
  
  @media(min-width:1025px){
    display: none;
  }
  `
  
  const StyledCard = styled.div`
  display: grid;
  min-height: 230px;
  grid-template-rows: 40% 15% auto;
  box-shadow: 0px 3px 6px rgb(20,20,20, 0.16);
  overflow: hidden;
  border: 1px solid ${theme.accent};
  
  align-items: center;

    
    }
    div{
    margin: 1rem;
  }
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
    text-align: center;
    @media(max-width:1024px){
          margin-top: 4rem;
          height: 3rem;
        }
  }
  p{
    display: flex;
    text-align: center;
    padding: .5rem;
    font-size: 2vh;
    color: ${theme.gray};
    
  }
  ul{
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    @media(max-width:1024px){
        grid-template-columns: repeat(2, 1fr);
        }
    

    li{
      align-items: center;
      :hover{
        transition: transform, 0.3s ease-in-out;
        transform: scale(1.2);
      }
      font-family: "montserrat";
      font-size: 2.2vh;
      list-style: none;
      cursor: pointer;
      :last-child{
        button{
        cursor: pointer;
      }
        @media(max-width:1024px){
        display: none;
        }
    }
  }
  `
  
  
  export default Card
  