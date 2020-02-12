import React from 'react';
import styled from "styled-components"
import Button from  '../Button'
import theme from '../styles/Global'

 const DesktopContact = () => {
    return (
        <StyledDesktopContact>
        <LineContainer>
                <div></div>
                <h3>Get in touch</h3>
                <div></div>
        </LineContainer>
        <Container>
        <form>
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
            <Button text="Submit"/>
          </p>
        </form>
    </Container>

        </StyledDesktopContact>
    )
}

const StyledDesktopContact = styled.div`
`


const Container = styled.div`
    line-height: 1.6;
    padding: 1rem;
    max-width: 90%;
    margin: 0 auto;
        form{
            padding: 1rem;
            width: 90%;
            margin: 0 auto;

            
            @media(min-width: 960px) {
                display: grid;
                gap: 20px;
            }
            label{
                padding-bottom: .5rem;
            }
            input{
            }
            .full{
                grid-column: 1 / 3;
            }
            textarea, input{
                width: 100%;
                padding: 1rem;
                border: 1px solid ${theme.secondary};
            }
            button{
              width: 100%;
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
        font-size: 5vh;
    }
  
`

export default DesktopContact
