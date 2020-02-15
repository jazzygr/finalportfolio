import React from 'react';
import styled from "styled-components"
import theme from '../styles/Global'

const DesktopContact = () => {
  return (
    <div>
    <LineContainer>
    <div></div>
    <h3>Get in touch</h3>
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
      border: 1px solid ${theme.secondary};
    }
    .submitButton{
      border: 2px solid ${theme.secondary};
      height: 2.5rem;
      border-radius: 5px;
      text-transform: uppercase;
      padding: 0;
      background: ${theme.secondary};
      :hover, :focus{
        background: #92bde7;
        color:#fff;
        outline: 0;
        transition: background-color 0.8s ease-out;
        cursor: pointer;
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
    height: 2px;
  }
  h3{
    font-weight: 400;
    font-size: 2rem;
  }
  
  `
  
  export default DesktopContact
  