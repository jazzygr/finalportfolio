import React from 'react';
import styled from "styled-components"
import theme from '../styles/Global'

const DesktopContact = () => {
  return (
    <div>
    <LineContainer>
    <div></div>
    <h3>Get In Touch</h3>
    <div></div>
    </LineContainer>
    <Container>
    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="portfolio">
    <input type="hidden" name="bot-field" />
    <p>
    <label htmlFor="name">Name:
    <input type="text" name="name"></input>
    </label>
    </p>
    <p>
    <label htmlFor="company">Company:
    <input type="text" name="company"></input>
    </label>
    </p>
    <p>
    <label htmlFor="email">Email Address:
    <input type="email" name="email"></input>
    </label>
    </p>
    <p>
    <label htmlFor="phone">Phone Number:
    <input type="text" name="phone" id="phone"></input>
    </label>
    </p>
    <p className="full">
    <label htmlFor="message">Message:
    <textarea className="full" name="message" rows="5" id="message"></textarea>
    </label>
    </p>
    <p className="full">
    <input type="submit" className="submitButton"/>
    </p>
    </form>
    </Container>
    
    </div>
    )
  }
  
  
  const Container = styled.div`
  padding: 1rem;
  max-width: 90%;
  margin: 0 auto;
  form{
    @media(min-width: 960px) {
      display: grid;
      gap: 20px;
    }
    label{
      padding-bottom: .5rem;
    }
    input, textarea{
      margin-top: 0.5rem;
    }
    .full{
      grid-column: 1 / 3;
    }
    textarea, input{
      width: 100%;
      padding: 1rem;
      border: 1px solid ${theme.black};
    }
    .submitButton{
      text-transform: uppercase;
      background: none;
      :hover{
        cursor: pointer;
        outline: none;
        background-color: ${theme.secondary};
        transition: background-color 0.5s ease-out, color 0.2s ease-out;
      }
      :focus{
        outline: none;
        transition: background-color 2s ease-out;
      }
    }
  }
  `
  const LineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 30% 1fr;
  align-items: center;
  text-align: center;
  margin-top: 3rem;
  
  div {
    background-color: black;
    height: 4px;
  }
  h3{
    font-weight: 600;
    font-size: 3rem;
    @media(max-width:769px){
      font-size: 2rem;
    }
    @media(max-width:500px){
      font-size: 1.3rem;
    }
  }
  
  `
  
  export default DesktopContact
  