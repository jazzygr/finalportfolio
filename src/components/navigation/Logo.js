import React from 'react';
import styled from 'styled-components'
import theme from '../styles/Global'

const Logo = () => {
    return (
        <MyLogo id="logo">
            <h4>
                Jeff Graham
            </h4>
        </MyLogo>
    )
}

const MyLogo= styled.div`
display: grid;
align-items:center;
height: 10vh;
    h4 {
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: 400;
        text-align: center;
        color: ${theme.primary};
    }
`

export default Logo;