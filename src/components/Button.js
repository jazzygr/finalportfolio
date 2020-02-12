import React from 'react';
import styled from "styled-components"
import theme from "./styles/Global"

const Button = props => {
    return (
    <StyledButton>{props.text}</StyledButton>
        )
    }
    
    const StyledButton = styled.button`
    min-width: 10rem;
    height: 8vh;
    border: 2px solid ${theme.secondary};
    border-radius: 5px;
    text-transform: uppercase;
    background: ${theme.secondary};
    :hover, :focus{
        background:#92bde7;
        color:#fff;
        outline: 0;
        transition: background-color 0.8s ease-out;
        cursor: pointer;
    }
    `

    export default Button