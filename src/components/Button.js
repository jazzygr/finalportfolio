import React from 'react';
import styled from "styled-components"
import theme from "./styles/Global"

const Button = props => {
    return (
    <StyledButton>{props.text}</StyledButton>
        )
    }
    
    const StyledButton = styled.button`

    `

    export default Button